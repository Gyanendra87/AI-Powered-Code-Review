const { GoogleGenAI } = require("@google/genai");

const genAI = new GoogleGenAI({
  apiKey: process.env.GOOGLE_GEMINI_API_KEY,
});

async function generateAI(prompt) {
  const response = await genAI.models.generateContent({
    model: "gemini-2.5-flash",   // ✅ CURRENT SUPPORTED MODEL
    contents: prompt,
  });

  return response.text;
}

module.exports = { generateAI };
