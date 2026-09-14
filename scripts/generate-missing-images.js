#!/usr/bin/env node

/**
 * LIDA DIGITAL - MISSING IMAGE GENERATOR
 * 
 * This script scans the codebase for missing images and generates them using:
 * 1. Hugging Face Inference API (AI-generated images)
 * 2. Unsplash API (stock photos)
 * 
 * Setup:
 * 1. Get free Hugging Face API token: https://huggingface.co/settings/tokens
 * 2. Get free Unsplash API key: https://unsplash.com/developers
 * 3. Set environment variables: HF_TOKEN and UNSPLASH_ACCESS_KEY
 * 4. Run: node scripts/generate-missing-images.js
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

// Configuration
const CONFIG = {
  HF_TOKEN: process.env.HF_TOKEN || 'your_huggingface_token_here',
  UNSPLASH_KEY: process.env.UNSPLASH_ACCESS_KEY || 'your_unsplash_key_here',
  ASSETS_DIR: path.join(__dirname, '../client/public/assets/img'),
  MAX_RETRIES: 3,
  DELAY_MS: 2000, // Delay between API calls to avoid rate limits
};

// Missing images with their generation prompts
const MISSING_IMAGES = {
  // WorkDetail.jsx missing images
  '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service.jpeg': {
    type: 'ai',
    prompt: 'Modern bank brand identity design showcase, professional logo system, Nigerian financial services branding, clean corporate design, blue and white color scheme'
  },
  '/assets/img/inner-page/Duxbank - Lida Nigeria Brand Identity design and AD campaign Service-15.jpeg': {
    type: 'ai', 
    prompt: 'Banking advertisement creative design, outdoor billboard mockup, professional financial services campaign, modern Nigerian bank branding'
  },
  '/assets/img/inner-page/duxbank.jpeg': {
    type: 'ai',
    prompt: 'Professional bank logo design, clean corporate identity, financial services branding, modern typography, trust and reliability'
  },
  '/assets/img/inner-page/duxbank2.jpeg': {
    type: 'ai',
    prompt: 'Bank marketing materials, business cards and letterhead design, corporate stationery, professional branding package'
  },

  // Team images that might be missing or need updates
  '/assets/img/team/Lida Team-Leroy.jpg.jpeg': {
    type: 'stock',
    query: 'professional african businessman portrait'
  },
  '/assets/img/team/Lida Team-Omua.jpg.jpeg': {
    type: 'stock', 
    query: 'professional african businesswoman portrait'
  },
  '/assets/img/team/Lida Team-Fortune.jpg.jpeg': {
    type: 'stock',
    query: 'professional african business executive'
  },
  '/assets/img/team/Lida Team- Brian.jpeg': {
    type: 'stock',
    query: 'professional african project manager'
  },
  '/assets/img/team/Lida Team- Joshua.jpg.jpeg': {
    type: 'stock',
    query: 'professional african creative designer'
  },
  '/assets/img/team/Lida Team- Faith.jpg.jpeg': {
    type: 'stock',
    query: 'professional african digital marketing specialist'
  },

  // Service detail images
  '/assets/img/inner-page/Lida - Brand Strategy and Identity Service.jpeg': {
    type: 'ai',
    prompt: 'Brand strategy consultation meeting, creative team brainstorming, logo design process, modern office environment in Nigeria'
  },
  '/assets/img/inner-page/Lida - Brand Strategy and Identity Service-07.jpeg': {
    type: 'ai',
    prompt: 'Brand identity design elements, logo variations, color palette, typography system, professional branding guidelines'
  },

  // Project thumbnails
  '/assets/img/home-1/project-duxbank.jpg': {
    type: 'ai',
    prompt: 'Modern bank building facade, professional financial institution, Nigerian architecture, corporate headquarters'
  },
  '/assets/img/home-1/project-calpak.jpg': {
    type: 'ai',
    prompt: 'Energy solutions equipment, industrial machinery, power generation facility, professional engineering'
  },
  '/assets/img/home-1/project-nuts-bolts.jpg': {
    type: 'ai',
    prompt: 'Premium automotive service center, modern car workshop, professional mechanics, automotive tools'
  },

  // Generic business images
  '/assets/img/inner-page/business-meeting-nigeria.jpg': {
    type: 'stock',
    query: 'business meeting nigeria africa'
  },
  '/assets/img/inner-page/digital-marketing-team.jpg': {
    type: 'stock', 
    query: 'digital marketing team african professionals'
  },
  '/assets/img/inner-page/corporate-presentation.jpg': {
    type: 'stock',
    query: 'corporate presentation african business'
  }
};

class ImageGenerator {
  constructor() {
    this.generated = [];
    this.errors = [];
  }

  async delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  async generateAIImage(prompt, outputPath) {
    console.log(`🎨 Generating AI image: ${path.basename(outputPath)}`);
    
    return new Promise((resolve, reject) => {
      const data = JSON.stringify({ inputs: prompt });
      
      const options = {
        hostname: 'api-inference.huggingface.co',
        port: 443,
        path: '/models/black-forest-labs/FLUX.1-schnell',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${CONFIG.HF_TOKEN}`,
          'Content-Type': 'application/json',
          'Content-Length': data.length
        }
      };

      const req = https.request(options, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HuggingFace API error: ${res.statusCode}`));
          return;
        }

        const chunks = [];
        res.on('data', (chunk) => chunks.push(chunk));
        res.on('end', () => {
          try {
            const imageBuffer = Buffer.concat(chunks);
            
            // Ensure directory exists
            const dir = path.dirname(outputPath);
            if (!fs.existsSync(dir)) {
              fs.mkdirSync(dir, { recursive: true });
            }
            
            // Save image
            fs.writeFileSync(outputPath, imageBuffer);
            console.log(`✅ Generated: ${outputPath}`);
            resolve(outputPath);
          } catch (error) {
            reject(error);
          }
        });
      });

      req.on('error', reject);
      req.write(data);
      req.end();
    });
  }

  async downloadStockImage(query, outputPath) {
    console.log(`📸 Downloading stock image: ${path.basename(outputPath)}`);
    
    return new Promise((resolve, reject) => {
      // First, search for images
      const searchOptions = {
        hostname: 'api.unsplash.com',
        port: 443,
        path: `/search/photos?query=${encodeURIComponent(query)}&per_page=1&orientation=landscape&client_id=${CONFIG.UNSPLASH_KEY}`,
        method: 'GET'
      };

      const searchReq = https.request(searchOptions, (searchRes) => {
        let searchData = '';
        searchRes.on('data', (chunk) => searchData += chunk);
        searchRes.on('end', () => {
          try {
            const searchResult = JSON.parse(searchData);
            
            if (!searchResult.results || searchResult.results.length === 0) {
              reject(new Error(`No stock images found for: ${query}`));
              return;
            }

            const imageUrl = searchResult.results[0].urls.regular;
            const downloadUrl = new URL(imageUrl);
            
            // Download the image
            const downloadOptions = {
              hostname: downloadUrl.hostname,
              port: 443,
              path: downloadUrl.pathname + downloadUrl.search,
              method: 'GET'
            };

            const downloadReq = https.request(downloadOptions, (downloadRes) => {
              if (downloadRes.statusCode !== 200) {
                reject(new Error(`Image download error: ${downloadRes.statusCode}`));
                return;
              }

              const chunks = [];
              downloadRes.on('data', (chunk) => chunks.push(chunk));
              downloadRes.on('end', () => {
                try {
                  const imageBuffer = Buffer.concat(chunks);
                  
                  // Ensure directory exists
                  const dir = path.dirname(outputPath);
                  if (!fs.existsSync(dir)) {
                    fs.mkdirSync(dir, { recursive: true });
                  }
                  
                  // Save image
                  fs.writeFileSync(outputPath, imageBuffer);
                  console.log(`✅ Downloaded: ${outputPath}`);
                  resolve(outputPath);
                } catch (error) {
                  reject(error);
                }
              });
            });

            downloadReq.on('error', reject);
            downloadReq.end();

          } catch (error) {
            reject(error);
          }
        });
      });

      searchReq.on('error', reject);
      searchReq.end();
    });
  }

  async generateImage(imagePath, config) {
    const outputPath = path.join(CONFIG.ASSETS_DIR, '..', '..', '..', imagePath.substring(1)); // Remove leading /
    
    // Check if image already exists
    if (fs.existsSync(outputPath)) {
      console.log(`⏭️  Skipping existing: ${path.basename(outputPath)}`);
      return outputPath;
    }

    let retries = CONFIG.MAX_RETRIES;
    
    while (retries > 0) {
      try {
        if (config.type === 'ai') {
          return await this.generateAIImage(config.prompt, outputPath);
        } else if (config.type === 'stock') {
          return await this.downloadStockImage(config.query, outputPath);
        }
      } catch (error) {
        retries--;
        console.log(`❌ Error generating ${path.basename(outputPath)}: ${error.message}`);
        
        if (retries > 0) {
          console.log(`🔄 Retrying... (${retries} attempts left)`);
          await this.delay(CONFIG.DELAY_MS);
        } else {
          this.errors.push({ path: imagePath, error: error.message });
        }
      }
    }
    
    return null;
  }

  async generateAll() {
    console.log('🚀 Starting LIDA Digital Image Generation...\n');
    
    // Validate API keys
    if (CONFIG.HF_TOKEN === 'your_huggingface_token_here') {
      console.log('⚠️  Warning: Please set your HuggingFace token in environment variable HF_TOKEN');
    }
    if (CONFIG.UNSPLASH_KEY === 'your_unsplash_key_here') {
      console.log('⚠️  Warning: Please set your Unsplash key in environment variable UNSPLASH_ACCESS_KEY');
    }
    
    const imageList = Object.entries(MISSING_IMAGES);
    console.log(`📋 Found ${imageList.length} images to generate\n`);
    
    for (let i = 0; i < imageList.length; i++) {
      const [imagePath, config] = imageList[i];
      
      console.log(`[${i + 1}/${imageList.length}] Processing: ${path.basename(imagePath)}`);
      
      const result = await this.generateImage(imagePath, config);
      if (result) {
        this.generated.push(result);
      }
      
      // Rate limiting delay
      if (i < imageList.length - 1) {
        await this.delay(CONFIG.DELAY_MS);
      }
    }
    
    // Summary
    console.log('\n📊 Generation Summary:');
    console.log(`✅ Successfully generated: ${this.generated.length}`);
    console.log(`❌ Failed to generate: ${this.errors.length}`);
    
    if (this.errors.length > 0) {
      console.log('\n❌ Failed images:');
      this.errors.forEach(({ path, error }) => {
        console.log(`  - ${path}: ${error}`);
      });
    }
    
    if (this.generated.length > 0) {
      console.log('\n✅ Generated images:');
      this.generated.forEach(path => {
        console.log(`  - ${path}`);
      });
    }
    
    console.log('\n🎉 Image generation complete!');
  }
}

// Run the generator
if (require.main === module) {
  const generator = new ImageGenerator();
  generator.generateAll().catch(error => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
}

module.exports = ImageGenerator;