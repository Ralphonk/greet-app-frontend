# YoungLabs - Simple API & Frontend Page  

A simple **Node.js Express** API and a **React Frontend** that displays a greeting message.  

---

## 🚀 Features  
- **Backend** (Node.js + Express)  
  - `GET /api/greet?name=YourName` → Returns a greeting message  
  - Error handling for missing name  

- **Frontend** (React + Vite)  
  - Input field to enter a name  
  - "Get Greeting" button to fetch & display the response  

---

## 🛠️ Installation & Setup  

```sh
1. Clone the Repository  
git clone https://github.com/your-username/younglabs.git
cd younglabs

2️⃣ Backend Setup (Node.js)
cd backend
npm install
npm start   # Runs the Express server on port 5000

3️⃣ Frontend Setup (React + Vite)
cd frontend
npm install
npm run dev   # Starts React frontend
```

### 1️⃣ Get Greeting  
**Endpoint:**  
```http
GET /api/greet?name=YourName
Response (Success - 200):

{
  "message": "Hello, YourName! Welcome to Younglabs."
}

Response (Error - 400, if name is missing):

{
  "error": "Name is required."
}

Example Usage:

curl "http://your-backend-url.com/api/greet?name=Umesh"
```
## 🚀 Deployment Guide  

### 📌 Backend Deployment (Render/Vercel)  
1. **Push your backend code to GitHub**  
2. **Deploy using [Render](https://render.com/) or [Vercel](https://vercel.com/)**  
3. **Set environment variable:**  
   ```env
   PORT=5000
   ```
### 📌 Frontend (Vercel/Netlify)
1. Push your frontend code to GitHub
2. Deploy using Vercel or Netlify
3. Update the API URL in App.jsx

## 🌍 Live Demo  
🔗 **[Live site](https://younglabs-screening-task.netlify.app/)**
