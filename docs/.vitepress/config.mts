import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Django TK分享",
  description: "Django TK分享",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Apple ID 分享', link: '/apple-examples' }
    ],

    sidebar: [
      {
        text: 'Apple ID 分享',
        items: [
          { text: 'Apple ID 分享', link: '/apple-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/aipeach/Vitepress-AppleAutoPro' }
    ]
  },
  srcDir: './src'
})
