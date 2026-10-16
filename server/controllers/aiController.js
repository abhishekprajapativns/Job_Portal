/* Generate a job description using Gemini AI */
// The frontend sends a job title (and optionally company/location).
// We build a prompt, send it to Gemini, and return the text it writes.
// The API key stays here on the backend, so nobody can steal it from the browser.

const generateJobDescription = async (req, res) => {
  const { title, company, location } = req.body;

  // The title is the minimum we need to write a description
  if (!title) {
    return res.status(400).json({ message: "Job title is required" });
  }

  // Build the instruction we send to the AI
  let prompt = `Write a job description for the role of ${title}`;
  if (company) prompt += ` at ${company}`;
  if (location) prompt += ` in ${location}`;
  prompt +=
    ". Keep it under 150 words. Include a short overview, 4 to 5 responsibilities, and 3 to 4 required skills. Use plain text only. Do not use markdown symbols like ** or #.";

  // Model name comes from .env so we can change it without touching the code
  const model = process.env.GEMINI_MODEL || "gemini-3.7-flash";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-goog-api-key": process.env.GEMINI_API_KEY,
      },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
      }),
    });

    const data = await response.json();

    // If Google returned an error, print it in the terminal so we can read it
    if (!response.ok) {
      console.log("Gemini error:", data);
      return res.status(500).json({
        message: "AI request failed. Check the server terminal for details.",
      });
    }

    // The generated text is inside this nested structure
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!text) {
      return res.status(500).json({ message: "AI returned an empty response" });
    }

    res.status(200).json({ description: text.trim() });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Could not reach the AI service" });
  }
};

module.exports = { generateJobDescription };
