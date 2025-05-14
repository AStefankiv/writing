# Get Started with NASA’s API

## Overview
NASA's [Astronomy Picture of the Day](https://en.wikipedia.org/wiki/Astronomy_Picture_of_the_Day) (APOD) shares a new space-related image every day, each accompanied by a short explanation from a NASA astronomer. This documentation guides developers through the process of obtaining an API key, making requests to the APOD API, and handling the JSON response to get the media content.

## Prerequisites
To get started with the APOD API, make sure you have:
- Basic knowledge of JavaScript and HTML
- A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/))
- [Postman](https://www.postman.com/) API testing tool

## Obtaining an API Key
To access NASA's APIs:
1. Navigate to [NASA APIs](https://api.nasa.gov/)
2. Fill out the registration form with your first name, last name, and email address.
3. Submit the form to receive an email with your unique API key.
> NOTE: NASA's demo API key is limited to 30 requests per IP address per hour or 50 requests per IP address per day. For increased limits, register for a free API key.

## Making API Requests
The basic APOD API endpoint:
```bash
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```
Replace YOUR_API_KEY with your actual key (or use DEMO_KEY for limited testing).

### JavaScript Fetch Example:
```bash
const apiKey = 'YOUR_API_KEY';
const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
  console.log(data);
  })
  .catch(error => {
    console.error('Error fetching APOD:', error);
  });
```
This snippet uses the **Fetch API** to send a GET request and log the JSON response to the console.

### Test with Postman
To manually test the API using [Postman](https://www.postman.com/):
1. Open Postman and start a new tab
2. Select the `GET` type request.
3. Paste your request URL:
```bash
https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY
```
4. Click **Send**
5. Receive the JSON response

## Handling API Responses
When **successful**, the APOD API returns a JSON object that includes the image or video of the day, its metadata, and a written description.
<!-- - `copyright`: name of the legal right author
- `date`: The date of the APOD
- `explanation`: Description of the media
- `hdurl`: URL to the high-definition version (if available)
- `media_type`: Type of media (image or video)
- `service version`:
- `title`: Title of the APOD
- `URL`: URL to the media -->

Sample JSON response
```json
{
    "copyright": "\nTaavi Niittee  \n(Tõrva Astronomy Club) \n",
    "date": "2025-04-16",
    "explanation": "What created the unusual halo around the Cat's Eye Nebula? No one is sure...",
    "hdurl": "https://apod.nasa.gov/apod/image/2504/CatsEyeWide_Niittee_960.jpg",
    "media_type": "image",
    "service_version": "v1",
    "title": "Halo of the Cat's Eye",
    "url": "https://apod.nasa.gov/apod/image/2504/CatsEyeWide_Niittee_960.jpg"
}
```

### Response fields
| Field            | Description                                                              |
|------------------|--------------------------------------------------------------------------|
| `title`          | Title of the image or video.                                             |
| `date`           | Date of the APOD in `YYYY-MM-DD` format.                                 |
| `explanation`    | Description written by a NASA astronomer.                                |
| `media_type`     | Either `image` or `video`.                                               |
| `url`            | Link to the image or video.                                              |
| `hdurl`          | High-definition image URL (if available).                                |
| `thumbnail_url`  | URL of the video thumbnail (if `thumbs=true` and media is a video).      |
| `copyright`      | Name of the media's copyright holder.                                    |
| `service_version`| Version of the API.                                                      |
| `concept_tags`   | Indicates if concept tags were requested.                                |
| `concepts`       | Array of relevant concept tags (if `concept_tags=true`).                 |


## Optional URL Parameters
Customize your request with the following URL query parameters:
| Param         | Type    | Description                                                                 |
|---------------|---------|-----------------------------------------------------------------------------|
| `date`        | string  | Specific date in `YYYY-MM-DD` format. Cannot be used with `count`.          |
| `start_date`  | string  | Start of a date range. Returns multiple results.                            |
| `end_date`    | string  | End of a date range (optional). Defaults to today if omitted.               |
| `count`       | int     | Returns a random list of images. Max: 100. Cannot be used with `date`.      |
| `hd`          | bool    | Ignored by API. High-res images are returned if available.                  |
| `thumbs`      | bool    | If true, returns a video thumbnail (only applies to video media).           |
| `concept_tags`| bool    | If true, includes relevant search tags based on image explanation.          |


Examples:
```bash
https://api.nasa.gov/planetary/apod?api_key=YOUR_API_KEY&date=2024-10-01&concept_tags=true
```

## Code Examples
Here are basic examples using both JavaScript and Python to help you fetch and display data from the APOD API.

### JavaScript (Fetch API)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>NASA APOD Viewer</title>
</head>
<body>
  <h1>NASA Astronomy Picture of the Day</h1>
  <div id="apod"></div>

  <script>
    const apiKey = 'YOUR_API_KEY';  // Replace with your real API key
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

    fetch(url)
      .then(response => response.json()) // Parse response as JSON
      .then(data => {
        const container = document.getElementById('apod');
        container.innerHTML = `
          <h2>${data.title}</h2>
          <p><strong>Date:</strong> ${data.date}</p>
          <img src="${data.url}" alt="${data.title}" width="600">
          <p>${data.explanation}</p>
        `;
      })
      .catch(error => {
        console.error('Error fetching APOD:', error);
      });
  </script>
</body>
</html>
```
### Python (using requests)
```python
import requests

API_KEY = "YOUR_API_KEY"  # Replace with your own key
url = f"https://api.nasa.gov/planetary/apod?api_key={API_KEY}"

response = requests.get(url)  # Send the GET request to NASA's APOD API

if response.status_code == 200:
    data = response.json()
    print("Title:", data["title"])
    print("Date:", data["date"])
    print("URL:", data["url"])
    print("Explanation:", data["explanation"])
else:
    print("Failed to retrieve data. Status code:", response.status_code)
```

## Use Cases
NASA's APOD API can be ued in a variety of projects. Here are some ideas:
1. Daily Image Website
Build a personal or public site that displays the Astronomy Picture of the Day. Use HTML/CSS/JavaScript to fetch and update the content daily via the API.

2. Desktop Widget or Wallpaper Rotator
Use the API to fetch a new image each day and set it as your desktop wallpaper (using Python with pywallpaper or platform-specific tools).

3. Mobile App
Integrate APOD into a mobile app using frameworks like React Native or Flutter, displaying daily space content in a beautiful layout.

4. Classroom/Education Tool
Use it to introduce astronomy in educational settings. Create an interactive gallery or timeline with daily images, explanations, and media types.

5. AI/ML Projects
Use the image metadata and explanations to build a dataset for natural language processing, concept extraction, or image classification.

## Troubleshooting
If you're experiencing issues with the APOD API, here are some common problems and their solutions:

1. API Key Errors
Problem: “API_KEY_INVALID” or similar message

Solution: Double-check you copied your API key correctly and didn’t accidentally include spaces or quotes.

2. Rate Limit Exceeded
Problem: You hit the demo key’s rate limit.

Solution: Register for a free API key to unlock more requests (30/hr for demo vs. higher limits for registered keys).

3. Invalid Date Format
Problem: `date` parameter returns an error.

Solution: Make sure the format is `YYYY-MM-DD`. Avoid dates before June 1995, when APOD started.

4. Empty or Incomplete Response
Problem: The JSON response is missing fields like `hdurl`.

Solution: Not all images have HD versions. Check `media_type` and use fallbacks where needed.

5. Video Handling
Problem: Trying to display a video as an image.

Solution: If `media_type` is `"video"`, use an `<iframe>` instead of `<img>`, or request the `thumbnail_url` with `thumbs=true`.

**Example:** Handling Media Types in JS
```javascript
if (data.media_type === "image") {
  document.body.innerHTML += `<img src="${data.url}" width="600">`;
} else if (data.media_type === "video") {
  document.body.innerHTML += `<iframe width="600" src="${data.url}" frameborder="0" allowfullscreen></iframe>`;
}

```

## Reference
Github APOD API Documentation - https://github.com/nasa/apod-api