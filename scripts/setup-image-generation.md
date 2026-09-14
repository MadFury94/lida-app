# LIDA Digital - Image Generation Setup

This script automatically generates missing images for your website using AI and stock photo APIs.

## 🚀 Quick Setup

### 1. Get Free API Keys

**Hugging Face (AI Images) - FREE**
1. Go to https://huggingface.co/settings/tokens
2. Create account if needed
3. Generate a new token (read access is enough)
4. Copy the token

**Unsplash (Stock Photos) - FREE**
1. Go to https://unsplash.com/developers
2. Create account if needed
3. Create a new application
4. Copy the "Access Key"

### 2. Set Environment Variables

**Windows (PowerShell):**
```powershell
$env:HF_TOKEN="your_huggingface_token_here"
$env:UNSPLASH_ACCESS_KEY="your_unsplash_key_here"
```

**Windows (Command Prompt):**
```cmd
set HF_TOKEN=your_huggingface_token_here
set UNSPLASH_ACCESS_KEY=your_unsplash_key_here
```

### 3. Run the Generator

```bash
cd scripts
node generate-missing-images.js
```

Or from the project root:
```bash
npm run generate-images
```

## 📸 What Gets Generated

The script will generate:
- **Team member photos** (professional portraits from Unsplash)
- **Project images** (AI-generated branded images)
- **Service images** (AI-generated business scenarios)
- **Brand identity mockups** (AI-generated design showcases)
- **Generic business images** (stock photos from Unsplash)

## 🎨 Image Types

### AI Generated (Hugging Face)
- Brand identity designs
- Marketing campaigns 
- Business scenarios
- Custom branded content

### Stock Photos (Unsplash)
- Team portraits
- Office environments
- Generic business scenes
- Professional photography

## ⚡ Features

- **Smart Detection**: Only generates missing images
- **Rate Limiting**: Respects API limits
- **Error Handling**: Retries failed generations
- **Progress Tracking**: Shows generation progress
- **Free Usage**: Both services have generous free tiers

## 🔧 Customization

Edit `generate-missing-images.js` to:
- Add more missing images
- Modify AI prompts
- Change stock photo search terms
- Adjust retry logic
- Update output paths

## 📊 Free Limits

- **Hugging Face**: 1,000 requests/month
- **Unsplash**: Unlimited for non-commercial use
- **Total Cost**: FREE for your project size

## 🎯 Example Output

```
🚀 Starting LIDA Digital Image Generation...

📋 Found 15 images to generate

[1/15] Processing: duxbank-hero.jpeg
🎨 Generating AI image: duxbank-hero.jpeg
✅ Generated: /assets/img/inner-page/duxbank-hero.jpeg

[2/15] Processing: team-leroy.jpeg
📸 Downloading stock image: team-leroy.jpeg
✅ Downloaded: /assets/img/team/team-leroy.jpeg

📊 Generation Summary:
✅ Successfully generated: 15
❌ Failed to generate: 0

🎉 Image generation complete!
```