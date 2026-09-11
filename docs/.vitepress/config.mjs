import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TLDR Engine Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/basics/getting-started' }
    ],

    sidebar: [
      {
        text: 'Basics',
        items: [
          { text: 'Getting Started', link: '/basics/getting-started' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tweenko/tldr-engine' },
      { icon: 'discord', link: 'https://discord.gg/x3t8JTyC2p' }
    ]
  }
})
