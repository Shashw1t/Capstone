# GeeksforGeeks Clone - Deployment Guide

## 🚀 Complete Deployment Instructions

---

## **BACKEND DEPLOYMENT (Render.com)**

### **Step 1: Sign up for Render**
1. Go to https://render.com/
2. Click "Get Started for Free"
3. Sign up with your GitHub account (recommended)

### **Step 2: Create New Web Service**
1. From Render Dashboard, click **"New +"** → **"Web Service"**
2. Connect your GitHub repository (Capstone)
3. Or use "Public Git repository" if you prefer

### **Step 3: Configure Backend Service**
Fill in these settings:

- **Name**: `gfgclone-backend` (or any name you prefer)
- **Region**: Choose closest to you (e.g., Oregon, Frankfurt)
- **Branch**: `main`
- **Root Directory**: `backend`
- **Runtime**: `Node`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Instance Type**: `Free`

### **Step 4: Environment Variables**
Click "Advanced" and add:
- **Key**: `NODE_ENV`
- **Value**: `production`

### **Step 5: Deploy**
1. Click **"Create Web Service"**
2. Wait 5-10 minutes for deployment
3. Once deployed, you'll get a URL like: `https://gfgclone-backend.onrender.com`
4. **SAVE THIS URL** - you'll need it for frontend!

### **Important Notes for Backend:**
- ⚠️ **Code Execution Limitation**: Render's free tier doesn't support compiling/running user code (C++, Java, Python) due to security restrictions
- **Alternative for Code Execution**: 
  - Use Judge0 API (https://judge0.com/) - Free tier available
  - Use Piston API (https://github.com/engineer-man/piston) - Self-hosted option
  - Deploy backend on a VPS like DigitalOcean ($5/month) for full control

---

## **FRONTEND DEPLOYMENT (Vercel)**

### **Step 1: Sign up for Vercel**
1. Go to https://vercel.com/
2. Click "Sign Up"
3. Sign up with your GitHub account

### **Step 2: Import Project**
1. From Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Import your GitHub repository (Capstone)
3. Vercel will auto-detect it's a Vite project

### **Step 3: Configure Frontend**
Settings will be auto-filled, but verify:

- **Project Name**: `gfgclone` (or any name)
- **Framework Preset**: `Vite`
- **Root Directory**: `./` (root)
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### **Step 4: Environment Variables**
Add this environment variable:

- **Key**: `VITE_API_URL`
- **Value**: `https://gfgclone-backend.onrender.com` (your Render backend URL)

### **Step 5: Deploy**
1. Click **"Deploy"**
2. Wait 2-3 minutes
3. You'll get a URL like: `https://gfgclone.vercel.app`

---

## **FRONTEND CODE UPDATE**

After deploying backend, update your frontend to use the environment variable:

### **Create .env file** (for local development)
```env
VITE_API_URL=http://localhost:3001
```

### **Create .env.production file** (for production)
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

### **Update API calls in your code**
Replace hardcoded `http://localhost:3001` with `import.meta.env.VITE_API_URL`

Example in ProblemSolver.jsx:
```javascript
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

// Then use:
const response = await fetch(`${API_URL}/compile`, { ... });
```

---

## **Alternative Deployment Options**

### **Option 2: Both on Vercel**
- Deploy backend as Vercel Serverless Function
- Deploy frontend normally
- ⚠️ Same code execution limitations

### **Option 3: Both on Railway.app**
- Railway supports both frontend and backend
- Better for code execution
- Free tier: $5 credit/month
- Steps:
  1. Sign up at https://railway.app/
  2. New Project → Deploy from GitHub
  3. Add both frontend and backend services
  4. Railway auto-configures everything

### **Option 4: Netlify (Frontend) + Railway (Backend)**
- Netlify for frontend (similar to Vercel)
- Railway for backend (better for code execution)

### **Option 5: Full Control - VPS Deployment**
**For production-ready code execution:**
- DigitalOcean Droplet ($5-10/month)
- AWS EC2 (Free tier available)
- Linode ($5/month)
- Vultr ($2.50-6/month)

---

## **Recommended Approach for Code Execution**

Since your app requires running user code (C++, Java, Python), here's the best solution:

### **Use Judge0 API (Easiest)**

1. Sign up at https://judge0.com/
2. Get free API key (up to 50 requests/day)
3. Update your backend to use Judge0 instead of local execution

**Modify backend/server.js:**
```javascript
const axios = require('axios');

app.post('/compile', async (req, res) => {
  const { code, language, input } = req.body;
  
  try {
    const response = await axios.post('https://judge0-ce.p.rapidapi.com/submissions', {
      source_code: code,
      language_id: getLanguageId(language),
      stdin: input
    }, {
      headers: {
        'X-RapidAPI-Key': process.env.JUDGE0_API_KEY,
        'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
```

---

## **Pre-Deployment Checklist**

- [ ] Backend uses `process.env.PORT`
- [ ] Frontend uses environment variables for API URL
- [ ] Add `.gitignore` files
- [ ] Test locally before deploying
- [ ] Update CORS in backend to allow frontend URL
- [ ] Remove console.logs and debug code
- [ ] Test all features after deployment

---

## **Post-Deployment**

### **Update Backend CORS**
After getting your Vercel URL, update backend/server.js:

```javascript
app.use(cors({
  origin: [
    'http://localhost:5174',
    'https://your-app.vercel.app',  // Add your Vercel URL
    'https://gfgclone.vercel.app'
  ]
}));
```

### **Test Your Deployed App**
1. Visit your Vercel URL
2. Test navigation
3. Test login/authentication
4. Test problem solving (if code execution works)
5. Test dark mode toggle
6. Test all pages

---

## **Common Issues & Solutions**

### **Issue 1: CORS Errors**
- Update backend CORS to include frontend URL
- Redeploy backend after changes

### **Issue 2: 404 on Refresh**
- Vercel: Create `vercel.json` with rewrites
- Already handled by Vite's router

### **Issue 3: Code Execution Not Working**
- Expected on Render free tier
- Use Judge0 API or upgrade to paid hosting

### **Issue 4: Slow Cold Starts**
- Render free tier sleeps after 15 min inactivity
- First request takes 30-60 seconds
- Upgrade to paid plan ($7/month) to prevent sleeping

---

## **Cost Summary**

### **Free Option:**
- Frontend (Vercel): **FREE**
- Backend (Render): **FREE** (with limitations)
- Judge0 API: **FREE** (50 requests/day)
- **Total: $0/month**

### **Recommended Paid Option:**
- Frontend (Vercel): **FREE**
- Backend (Railway): **$5/month** (with $5 free credit)
- **Total: $5/month** (first month free)

### **Professional Option:**
- Frontend (Vercel): **FREE**
- Backend VPS (DigitalOcean): **$6/month**
- **Total: $6/month**

---

## **Next Steps**

1. Deploy backend to Render first
2. Get backend URL
3. Update frontend with backend URL
4. Deploy frontend to Vercel
5. Test everything
6. Optional: Set up custom domain

---

## **Need Help?**

- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs
- Judge0 Docs: https://ce.judge0.com/

Good luck with your deployment! 🚀
