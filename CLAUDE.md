# Sound Journeys — Agent Instructions

## What this is

A simple, static website for a curated immersive listening experience project in Zurich, called Sound Journeys.
The idea, as well as the core design identity is described in `docs/identity.md`. 

It is your job to help create a beautiful website. Generally, you will work in an iterative fashion, 
that means editing the current files based on the instructions, while keeping the implementation in line with the design identity 
and past decisions.

## Technical constraints

The website should use a simple HTML and JavaScript code for now. 
The website is deployed using Netlify and can call netlify functions.


## File map

- `netlify/` — netlify functions that can be called from source code

- `config/constants.yml` — some basic constants used in the site
- `public/` — where the actual code lives - this is the main folder you should be editing. 
- this folder is also publicly accessible, so no sensitive information should be exposed there. 

The files used below should generally help understand what we're building. 
- `docs/identity.md` — what the project is and how it should feel
- `docs/structure.md` — pages, sections, and component rules - how the website should be structured. The implementation should be in line with the structure file.
- `docs/decisions.md` — log of past choices

## Coding rules

- Never add inline styles. All spacing, typography, and color values
  must reference tokens from a  `public/src/styles/tokens.css` file. If a necessary token doesn't exist, add it with a semantic name rather than  hardcoding.