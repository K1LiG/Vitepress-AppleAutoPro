import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Django TK分享",
  description: "Django TK分享",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/os_django.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apple ID 分享', link: '/apple-examples' }
    ],

    sidebar: [
      {
        text: 'Apple ID 分享',
        items: [
          { text: 'Apple ID 分享', link: '/apple-examples' },
          { text: 'Apple ID 分享2', link: '/apple-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: '/telegram-svgrepo-com.svg', link: 'https://t.me/K1LiG' }
    ]
  },
  srcDir: './src'
})
