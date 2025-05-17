const fs = require('fs');
const fetch = require('node-fetch');

const API_KEY = 'HnohMhXj1baxO6W2a6s7DhFPbjr1wCnRmHoQVlAn'; // Replace with your actual key if available
const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

async function updateReadme() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();

    const markdownContent = `
<!-- START_APOD -->
### 🚀 NASA Astronomy Picture of the Day (APOD)
**${data.title}**  
📅 ${data.date}  

${data.explanation}

![APOD Image](${data.url})
<!-- END_APOD -->
`;

    let readme = fs.readFileSync('NASA_api_documentation.md', 'utf-8');

    // Replace content between markers
    const updatedReadme = readme.replace(
      /<!-- START_APOD -->([\s\S]*?)<!-- END_APOD -->/,
      markdownContent
    );

    fs.writeFileSync('NASA_api_documentation.md', updatedReadme);
    console.log("NASA_api_documentation.md updated successfully!");

  } catch (error) {
    console.error("Failed to fetch or update NASA_api_documentation.md:", error);
  }
}

updateReadme();