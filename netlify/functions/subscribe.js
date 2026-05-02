const JSON_HEADERS = { "Content-Type": "application/json" };

const respond = (statusCode, payload) => ({
  statusCode,
  headers: JSON_HEADERS,
  body: JSON.stringify(payload),
});

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return respond(405, { error: "Method not allowed" });
  }

  let payload;
  try {
    payload = JSON.parse(event.body || "{}");
  } catch {
    return respond(400, { error: "Invalid request body" });
  }

  const email = (payload.email || "").trim().toLowerCase();

  if (!email) {
    return respond(400, { error: "Please enter an email address." });
  }
  if (!EMAIL_RE.test(email)) {
    return respond(400, { error: "That doesn't look like a valid email address." });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error("BREVO_API_KEY is not set on the server.");
    return respond(500, {
      error: "Subscriptions are temporarily unavailable. Please try again later.",
    });
  }

  try {
    const response = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [3],
        updateEnabled: true,
      }),
    });

    if (response.ok) {
      return respond(200, { message: "Subscribed" });
    }

    let errBody = {};
    try {
      errBody = await response.json();
    } catch {
      /* ignore */
    }
    console.error("Brevo subscribe failed", response.status, errBody);

    if (response.status === 400 && errBody.code === "duplicate_parameter") {
      return respond(200, { message: "Already subscribed" });
    }

    return respond(response.status >= 500 ? 502 : 400, {
      error:
        errBody.message ||
        "We couldn't complete the subscription. Please try again in a moment.",
    });
  } catch (error) {
    console.error("Subscribe function error", error);
    return respond(500, {
      error: "Network error. Please check your connection and try again.",
    });
  }
};
