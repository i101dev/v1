import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Syndicate Protocol',
  description: 'A strategically sophisticated multiplayer game where information is more valuable than ammunition',

  // Set base to your repo name for GitHub Pages (e.g., '/v1/' or '/syndicate-protocol/')
  // Leave as '/' if deploying to a custom domain or username.github.io root
  base: '/v1/',

  head: [
    ['meta', { name: 'theme-color', content: '#1a1a2e' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'Syndicate Protocol Wiki' }],
    ['meta', { name: 'og:description', content: 'Build your paramilitary intelligence syndicate. Control territory. Wage economic warfare. Information is power.' }],
  ],

  themeConfig: {
    logo: '/logo.svg',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started/' },
      { text: 'Game Systems', link: '/systems/' },
      { text: 'Progression', link: '/progression/' },
      { text: 'Reference', link: '/reference/' }
    ],

    sidebar: {
      '/getting-started/': [
        {
          text: 'Getting Started',
          items: [
            { text: 'What is Syndicate Protocol?', link: '/getting-started/' },
            { text: 'Core Concepts', link: '/getting-started/core-concepts' },
            { text: 'Your First Syndicate', link: '/getting-started/first-syndicate' },
            { text: 'The Four Houses', link: '/getting-started/four-houses' }
          ]
        }
      ],

      '/systems/': [
        {
          text: 'Game Systems',
          link: '/systems/',
          items: [
            {
              text: 'Economy',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/systems/economy/' },
                { text: 'Resources', link: '/systems/economy/resources' },
                { text: 'Commodities & QOL', link: '/systems/economy/commodities' },
                { text: 'Contracts', link: '/systems/economy/contracts' },
                { text: 'FOREX Trading', link: '/systems/economy/forex' }
              ]
            },
            {
              text: 'Military',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/systems/military/' },
                { text: 'Mercenary Training', link: '/systems/military/mercenaries' },
                { text: 'Combat & ROE', link: '/systems/military/combat' },
                { text: 'Operation Cards', link: '/systems/military/cards' },
                { text: 'Convoys', link: '/systems/military/convoys' }
              ]
            },
            {
              text: 'Intelligence',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/systems/intelligence/' },
                { text: 'Detection System', link: '/systems/intelligence/detection' },
                { text: 'Investigations', link: '/systems/intelligence/investigations' },
                { text: 'Infiltration', link: '/systems/intelligence/infiltration' }
              ]
            },
            {
              text: 'Infrastructure',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/systems/infrastructure/' },
                { text: 'Fortresses & Sectors', link: '/systems/infrastructure/fortresses' },
                { text: 'Ports & Logistics', link: '/systems/infrastructure/ports' }
              ]
            },
            {
              text: 'Organization',
              collapsed: false,
              items: [
                { text: 'Overview', link: '/systems/organization/' },
                { text: 'Syndicate Management', link: '/systems/organization/syndicate' },
                { text: 'Officers', link: '/systems/organization/officers' },
                { text: 'Playbooks', link: '/systems/organization/playbooks' }
              ]
            }
          ]
        }
      ],

      '/progression/': [
        {
          text: 'Progression',
          items: [
            { text: 'Tier System', link: '/progression/' },
            { text: 'Finance Tier', link: '/progression/finance' },
            { text: 'Military Tier', link: '/progression/military' },
            { text: 'Intelligence Tier', link: '/progression/intelligence' },
            { text: 'Summits', link: '/progression/summits' }
          ]
        }
      ],

      '/events/': [
        {
          text: 'Events & Consequences',
          items: [
            { text: 'Swan Events', link: '/events/' },
            { text: 'Rogue Agents', link: '/events/rogues' },
            { text: 'War Crimes & TFA', link: '/events/war-crimes' },
            { text: 'Investigations', link: '/events/investigations' }
          ]
        }
      ],

      '/reference/': [
        {
          text: 'Reference',
          items: [
            { text: 'All Formulas', link: '/reference/' },
            { text: 'Card Reference', link: '/reference/cards' },
            { text: 'Status Lifecycles', link: '/reference/lifecycles' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/your-repo/syndicate-protocol' }
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Build your empire on secrets and betrayal.',
      copyright: 'Syndicate Protocol'
    },

    outline: {
      level: [2, 3]
    }
  },

  appearance: 'dark',

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  }
})
