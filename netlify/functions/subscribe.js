exports.handler = async (event) => {
    if (event.httpMethod !== "POST") {
      return { statusCode: 405, body: "Method Not Allowed" };
    }
  
    const { email } = JSON.parse(event.body);
  
    if (!email) {
      return { statusCode: 400, body: JSON.stringify({ error: "Email is required" }) };
    }
  
    try {
      const response = await fetch("https://api.brevo.com/v3/contacts", {
        method: "POST",
        headers: {
          "api-key": process.env.BREVO_API_KEY,
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({
          email,
          listIds: [3],           // Newsletter list ID
          updateEnabled: true,     // avoids errors if contact already exists
        }),
      });
  
      if (!response.ok) {
        const err = await response.json();
        return { statusCode: response.status, body: JSON.stringify(err) };
      }
  
      return { statusCode: 200, body: JSON.stringify({ message: "Subscribed!" }) };
    } catch (error) {
      return { statusCode: 500, body: JSON.stringify({ error: "Server error" }) };
    }
  };