require('dotenv').config();

const { GoogleGenerativeAI } = require('@google/generative-ai');

async function main() {
  const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-flash'
  });

  const result = await model.generateContent('Hello');

  console.log(result.response.text());
}

main().catch(console.error);