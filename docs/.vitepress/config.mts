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
          { text: '全球IP/资料服务商', link: '/apple-examples' },
          { text: '全球TK号商', link: '/apple-shareid2' }
        ]
      }
    ],

    socialLinks: [
      { icon: '/telegram-svgrepo-com.svg', link: 'https://t.me/K1LiG' }
    ]
  },
  srcDir: './src'
})
