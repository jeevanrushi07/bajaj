# 🚀 Quick Start Guide - BFHL API

## 📋 Project Overview
- **API Endpoint**: `/bfhl`
- **Method**: POST (main), GET (operation code)
- **Response**: JSON with processed array data

## ⚡ Quick Deployment

### Option 1: Vercel (Recommended)
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Option 2: Railway
```bash
npm install -g @railway/cli
railway login
railway up
```

### Option 3: Render
- Go to https://render.com
- Connect GitHub repository
- Deploy automatically

## 🧪 Test Your API

### Local Testing
```bash
npm install
npm start
```

### API Testing
```bash
# POST Request
curl -X POST https://your-app-url/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a", "1", "334", "4", "R", "$"]}'

# GET Request
curl https://your-app-url/bfhl
```

## 📝 Example Response
```json
{
  "is_success": true,
  "user_id": "jeevan_rushi_01062004",
  "email": "jeevanrushicreations584@gmail.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## 🔧 Configuration Files
- `package.json` - Dependencies and scripts
- `server.js` - Express server (Railway/Render)
- `api/bfhl.js` - Main API logic
- `vercel.json` - Vercel configuration
- `railway.json` - Railway configuration
- `render.yaml` - Render configuration

## 📞 Support
- Check logs in deployment platform dashboard
- Verify all files are committed to GitHub
- Ensure environment variables are set correctly
