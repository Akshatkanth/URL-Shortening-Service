Awesome 🎉
Here’s a clean, professional, portfolio-ready README for your project uShorter.
You can copy-paste this directly into README.md.


---

🔗 uShorter — URL Shortening Service

uShorter is a full-stack URL shortening service that allows users to create short links, track usage statistics, and redirect seamlessly to original URLs.
It is built with a RESTful API, a React frontend, and deployed to the cloud.


---

✨ Features

🔗 Create short URLs

🚀 Instant redirect to original URLs

📊 View statistics

Access count

Created & updated timestamps


✏️ Update existing URLs

🗑️ Delete short URLs

🧠 Robust backend validation

🎨 Neo-brutalist UI design

☁️ Fully deployed (Frontend + Backend)



---

🧱 Tech Stack

Frontend

React (Vite)

React Router

CSS (Neo-brutalism style)

Netlify (deployment)


Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

NanoID (short code generation)

Render (deployment)



---

📐 Architecture Overview

Client (React)
   |
   |  REST API calls
   v
Backend (Express + MongoDB)
   |
   |  Redirects
   v
Original URL

Frontend handles UI & user interaction

Backend handles API logic, redirects, and persistence

Redirects are served directly from the backend domain



---

🔌 API Endpoints

Create Short URL

POST /shorten

Request

{
  "url": "https://example.com"
}

Response

{
  "id": "...",
  "url": "https://example.com",
  "shortCode": "AbC123",
  "createdAt": "...",
  "updatedAt": "..."
}


---

Redirect

GET /:shortCode

Redirects to the original URL and increments access count.


---

Get URL Stats

GET /shorten/:shortCode/stats


---

Update URL

PUT /shorten/:shortCode


---

Delete URL

DELETE /shorten/:shortCode

Returns 204 No Content on success.


---

🖥️ Frontend Pages

🏠 Home

Enter long URL

Generate short URL

Copy to clipboard

Navigate to stats


📊 Stats

Enter short code or short URL

View usage statistics



---

🔒 Validation & Error Handling

Frontend validation for URL format

Backend validation using native URL class

Graceful error messages

Shake animation on invalid input

Robust short code normalization on backend



---

🌍 Deployment

Backend

Deployed on Render

Connected to MongoDB Atlas

Uses environment variables for secrets


Frontend

Deployed on Netlify

Environment-based API configuration

SPA routing handled with _redirects


---

🚀 Getting Started Locally

Backend

npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev


---

🧠 Key Learnings

REST API design

Express route ordering pitfalls

Input normalization for production systems

Frontend ↔ backend separation

Real-world deployment debugging

SPA routing on Netlify

Environment-based configuration



---

👤 Author

Akshat Kanth

Built as a learning-focused full-stack project inspired by roadmap.sh.


---
