import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Django TK分享",
  description: "Django TK分享",
     head:[['link',{rel:'icon',href:'/os_django.png'}]], 
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
       },
       {
        text: 'TK教程分享',
        items: [
          { text: 'TK教程1', link: '/TK-jiaocheng1' },
          { text: 'TK教程2', link: '/TK-jiaocheng2' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/K1LiG' }
    ]
  },
  srcDir: './src'
})
