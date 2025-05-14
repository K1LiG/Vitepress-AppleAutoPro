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
          { text: 'TikTok避坑指南', link: '/TK-tutorial1' },
          { text: 'TikTok网络浅谈', link: '/TK-tutorial2' }
        ]
       }，
       {
        text: '跨境电商群友互助',
        items: [
          { text: 'TikTok群友交流', link: '/TK-comminicate1' },
          { text: '站主联系', link: '/mysite' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/K1LiG' }
    ]
  },
  srcDir: './src'
})
