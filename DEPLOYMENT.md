# Deployment Guide - BFHL API

## 🚀 Multiple Deployment Options

### Option 1: Vercel पर Deploy

#### Method 1: Vercel CLI के साथ

1. **Vercel CLI Install करें:**
```bash
npm install -g vercel
```

2. **Login करें:**
```bash
vercel login
```

3. **Project को Deploy करें:**
```bash
vercel
```

4. **Production पर Deploy करें:**
```bash
vercel --prod
```

#### Method 2: GitHub से Direct Deploy

1. **GitHub Repository बनाएं:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/bfhl-api.git
git push -u origin main
```

2. **Vercel Dashboard पर जाएं:**
   - https://vercel.com पर जाएं
   - GitHub account से login करें
   - "New Project" पर click करें
   - GitHub repository को select करें
   - Deploy करें

### Option 2: Railway पर Deploy

1. **Railway CLI Install करें:**
```bash
npm install -g @railway/cli
```

2. **Login करें:**
```bash
railway login
```

3. **Project को Deploy करें:**
```bash
railway init
railway up
```

### Option 3: Render पर Deploy

1. **Render Dashboard पर जाएं:**
   - https://render.com पर जाएं
   - Account बनाएं या login करें
   - "New Web Service" पर click करें
   - GitHub repository को connect करें
   - Deploy करें

2. **Configuration:**
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Environment: Node

### Method 2: GitHub से Direct Deploy

1. **GitHub Repository बनाएं:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/yourusername/bfhl-api.git
git push -u origin main
```

2. **Vercel Dashboard पर जाएं:**
   - https://vercel.com पर जाएं
   - GitHub account से login करें
   - "New Project" पर click करें
   - GitHub repository को select करें
   - Deploy करें

### Method 3: Railway पर Deploy

1. **Railway CLI Install करें:**
```bash
npm install -g @railway/cli
```

2. **Login करें:**
```bash
railway login
```

3. **Project को Deploy करें:**
```bash
railway init
railway up
```

## API Testing

### Local Testing
```bash
npm install
vercel dev
```

### Postman/Thunder Client से Test करें:

**POST Request:**
```
URL: https://your-vercel-app.vercel.app/bfhl
Method: POST
Headers: Content-Type: application/json
Body: 
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

**GET Request:**
```
URL: https://your-vercel-app.vercel.app/bfhl
Method: GET
```

### cURL से Test करें:

```bash
# POST Request
curl -X POST https://your-vercel-app.vercel.app/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'

# GET Request
curl https://your-vercel-app.vercel.app/bfhl
```

## Environment Variables

अगर आपको environment variables की जरूरत हो तो:

1. **Vercel Dashboard पर:**
   - Project settings में जाएं
   - Environment Variables section में जाएं
   - Variables add करें

2. **Local Development के लिए:**
   - `.env.local` file बनाएं
   - Variables define करें

## Custom Domain Setup

1. **Vercel Dashboard पर:**
   - Project settings में जाएं
   - Domains section में जाएं
   - Custom domain add करें

2. **DNS Configuration:**
   - अपने domain provider के DNS settings में जाएं
   - Vercel के दिए गए DNS records add करें

## Monitoring और Analytics

1. **Vercel Analytics:**
   - Vercel dashboard पर analytics देखें
   - Performance metrics track करें

2. **Error Monitoring:**
   - Function logs देखें
   - Error tracking setup करें

## Troubleshooting

### Common Issues:

1. **404 Error:**
   - Route configuration check करें
   - `vercel.json` file verify करें

2. **CORS Error:**
   - Headers properly set करें
   - Origin configuration check करें

3. **Function Timeout:**
   - Code optimization करें
   - Timeout limits check करें

### Support:
- Vercel Documentation: https://vercel.com/docs
- Railway Documentation: https://docs.railway.app
- GitHub Issues: अपने repository में issue create करें
