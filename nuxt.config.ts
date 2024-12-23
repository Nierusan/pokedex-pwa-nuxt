// nuxt.config.ts
export default defineNuxtConfig({
  modules: ['@vite-pwa/nuxt'],

  pwa: {
    registerType: 'autoUpdate', // Mises à jour automatiques du SW
    manifest: {
      name: 'Pokedex TCG',
      short_name: 'Pokedex',
      description: 'Une application Pokédex utilisant tcgdex.net',
      lang: 'fr',
      theme_color: '#ffcc00',
      background_color: '#ffffff',
      icons: [
        {
          src: '/web-app-manifest-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/web-app-manifest-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
  },

  compatibilityDate: '2024-12-23',
});