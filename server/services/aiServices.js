/*importing of dotenv file to access the environment variables*/

require("dotenv").config();
const { GoogleGenAI } = require("@google/genai");
const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
    console.error("CRITICAL ERROR: GEMINI_API_KEY is not defined in enviornment variables.");
}
const genAI = new GoogleGenAI({ apiKey: geminiApiKey });

/*content writer i.e., automatic generating of text for product description, blog, etc. */

async function generateProductDescriptionWithAI(productName, category) {
    const prompt = "you are an expert e-commerce copywriter.\n"+
    "write a catchy ,SEO-friendly product descrption (max " + " 100 words) for: " + productName + "\n" +
    "under the category: " + category + "\n" +
    "Tone: Professional yet exciting.";
    try{
        const result = await genAI.models.generateContent({
            model: "gemini-2.5-flash",
            contents:prompt
    });
    return result.text;
    }catch (error) {
        console.error("Error generating product description:", error);
        return "Description unavailable";
    }
}
module.exports = {
    generateProductDescriptionWithAI,
};