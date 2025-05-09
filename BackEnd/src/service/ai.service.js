const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize with your API key
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
  systemInstruction: `You are a code reviewer , analyse and try not to give unnessary opinion...` // Keep your full instruction here
});

// ✅ Replace your old function with this version:
async function generateContent(prompt) {
  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (err) {
    console.error("Gemini API error:", err);
    throw new Error("Failed to generate content. Please try again later.");
  }
}

module.exports = generateContent;
