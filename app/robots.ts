import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin', '/admin/', '/api/', '/newsletter/confirme', '/newsletter/desabonne'],
      },
      // ─── Crawlers AI explicitement autorisés (GEO — citabilité dans LLM) ───
      // OpenAI
      { userAgent: 'GPTBot', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'ChatGPT-User', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'OAI-SearchBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Anthropic
      { userAgent: 'ClaudeBot', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'Claude-Web', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'Claude-SearchBot', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'anthropic-ai', allow: '/', disallow: ['/admin', '/api/'] },
      // Perplexity
      { userAgent: 'PerplexityBot', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'Perplexity-User', allow: '/', disallow: ['/admin', '/api/'] },
      // Google AI (Gemini, AI Overviews)
      { userAgent: 'Google-Extended', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'GoogleOther', allow: '/', disallow: ['/admin', '/api/'] },
      // Microsoft / Bing / Copilot
      { userAgent: 'Bingbot', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'BingPreview', allow: '/', disallow: ['/admin', '/api/'] },
      // Apple Intelligence / Siri
      { userAgent: 'Applebot', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'Applebot-Extended', allow: '/', disallow: ['/admin', '/api/'] },
      // Common Crawl (jeux d'entraînement LLM)
      { userAgent: 'CCBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Meta / Llama
      { userAgent: 'meta-externalagent', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'meta-externalfetcher', allow: '/', disallow: ['/admin', '/api/'] },
      // Cohere
      { userAgent: 'cohere-ai', allow: '/', disallow: ['/admin', '/api/'] },
      { userAgent: 'cohere-training-data-crawler', allow: '/', disallow: ['/admin', '/api/'] },
      // You.com
      { userAgent: 'YouBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Mistral
      { userAgent: 'MistralAI-User', allow: '/', disallow: ['/admin', '/api/'] },
      // ByteDance (TikTok / Doubao)
      { userAgent: 'Bytespider', allow: '/', disallow: ['/admin', '/api/'] },
      // Diffbot (utilisé par plusieurs LLM)
      { userAgent: 'Diffbot', allow: '/', disallow: ['/admin', '/api/'] },
      // DuckDuckGo Assist
      { userAgent: 'DuckAssistBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Amazon Nova / Rufus
      { userAgent: 'Amazonbot', allow: '/', disallow: ['/admin', '/api/'] },
      // Kagi (search alt + LLM)
      { userAgent: 'KagiBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Phind
      { userAgent: 'PhindBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Brave Search
      { userAgent: 'BraveBot', allow: '/', disallow: ['/admin', '/api/'] },
      // Naver (LLM coréens)
      { userAgent: 'Yeti', allow: '/', disallow: ['/admin', '/api/'] },
      // Yandex (LLM YandexGPT)
      { userAgent: 'YandexBot', allow: '/', disallow: ['/admin', '/api/'] },
    ],
    sitemap: 'https://lecommerceagentique.fr/sitemap.xml',
    host: 'https://lecommerceagentique.fr',
  }
}
