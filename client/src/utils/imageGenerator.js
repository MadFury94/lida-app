/**
 * AI Image Generation Utility
 * 
 * This utility allows you to generate relevant images for your website content
 * using AI directly from your codebase.
 */

const API_BASE = 'http://127.0.0.1:8787';

export class ImageGenerator {
  constructor(apiKey = null) {
    this.apiKey = apiKey; // For future authentication if needed
  }

  /**
   * Generate a custom image from a text prompt
   * @param {string} prompt - The text description of the image you want
   * @param {object} options - Additional options
   * @returns {Promise<object>} Generated image data
   */
  async generateImage(prompt, options = {}) {
    const { style = 'professional', saveToLibrary = true } = options;

    try {
      const response = await fetch(`${API_BASE}/api/generate-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          style,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate image: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (saveToLibrary && result.success) {
        console.log(`✅ Generated image saved: ${result.filename}`);
      }

      return result;
    } catch (error) {
      console.error('Image generation failed:', error);
      throw error;
    }
  }

  /**
   * Generate business-relevant images for common use cases
   * @param {string} type - Type of business image (hero, service, team, etc.)
   * @param {object} options - Additional options
   * @returns {Promise<object>} Generated image data
   */
  async generateBusinessImage(type, options = {}) {
    const { 
      industry = 'digital marketing', 
      location = 'Nigeria', 
      mood = 'professional' 
    } = options;

    try {
      const response = await fetch(`${API_BASE}/api/generate-business-image`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type,
          industry,
          location,
          mood,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to generate business image: ${response.statusText}`);
      }

      const result = await response.json();
      
      if (result.success) {
        console.log(`✅ Generated ${type} image for ${industry}: ${result.filename}`);
        console.log(`📝 Used prompt: ${result.prompt}`);
      }

      return result;
    } catch (error) {
      console.error('Business image generation failed:', error);
      throw error;
    }
  }

  /**
   * Quick methods for common business images
   */
  async generateHeroImage(industry = 'digital marketing', options = {}) {
    return this.generateBusinessImage('hero', { industry, ...options });
  }

  async generateTeamImage(industry = 'digital marketing', options = {}) {
    return this.generateBusinessImage('team', { industry, ...options });
  }

  async generateServiceImage(industry = 'digital marketing', options = {}) {
    return this.generateBusinessImage('service', { industry, ...options });
  }

  async generateOfficeImage(industry = 'digital marketing', options = {}) {
    return this.generateBusinessImage('office', { industry, ...options });
  }

  /**
   * Generate images for specific Lida use cases
   */
  async generateCaseStudyImage(clientName, industry) {
    const prompt = `Professional case study visualization for ${clientName}, ${industry} company, success metrics, growth charts, professional presentation, clean modern design`;
    return this.generateImage(prompt, { style: 'professional' });
  }

  async generateServiceDetailImage(serviceName) {
    const prompt = `Professional illustration representing ${serviceName}, modern minimalist design, business-focused, clean and professional`;
    return this.generateImage(prompt, { style: 'professional' });
  }

  async generateBlogImage(title, topic) {
    const prompt = `Blog header image for "${title}", ${topic} related, professional design, engaging and informative, modern layout`;
    return this.generateImage(prompt, { style: 'marketing' });
  }
}

// Create default instance
export const imageGenerator = new ImageGenerator();

// Export convenience functions
export const generateImage = (prompt, options) => imageGenerator.generateImage(prompt, options);
export const generateHeroImage = (industry, options) => imageGenerator.generateHeroImage(industry, options);
export const generateTeamImage = (industry, options) => imageGenerator.generateTeamImage(industry, options);
export const generateServiceImage = (industry, options) => imageGenerator.generateServiceImage(industry, options);

/**
 * USAGE EXAMPLES:
 * 
 * // Basic usage
 * import { generateImage } from './utils/imageGenerator';
 * 
 * // Generate a custom image
 * const result = await generateImage("Modern office space with Nigerian professionals working on computers");
 * 
 * // Generate business images
 * import { imageGenerator } from './utils/imageGenerator';
 * 
 * const heroImg = await imageGenerator.generateHeroImage('fintech', { location: 'Lagos' });
 * const teamImg = await imageGenerator.generateTeamImage('real estate');
 * const serviceImg = await imageGenerator.generateServiceImage('digital marketing');
 * 
 * // For case studies
 * const caseImg = await imageGenerator.generateCaseStudyImage('Duxbank', 'financial services');
 * 
 * // For blog posts
 * const blogImg = await imageGenerator.generateBlogImage('Why Brand Positioning Matters', 'branding');
 */