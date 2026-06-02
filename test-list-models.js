require('dotenv').config();

async function main() {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${process.env.GOOGLE_API_KEY}`
  );

  console.log('Status:', res.status);

  if (!res.ok) {
    console.log(await res.text());
    return;
  }

  const data = await res.json();

  console.log('\n=== AVAILABLE MODELS ===\n');

  for (const model of data.models) {
    console.log(model.name);

    if (model.supportedGenerationMethods) {
      console.log(
        'Methods:',
        model.supportedGenerationMethods.join(', ')
      );
    }

    console.log('--------------------------------');
  }
}

main().catch(console.error);