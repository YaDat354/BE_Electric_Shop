require('dotenv').config();

const { GoogleGenerativeAIEmbeddings } = require('@langchain/google-genai');

async function main() {
  const embeddings = new GoogleGenerativeAIEmbeddings({
    apiKey: process.env.GOOGLE_API_KEY,
    model: 'embedding-001'
  });

  const vector = await embeddings.embedQuery('shopease');

  console.log('Length:', vector.length);
}

main().catch(console.error);
