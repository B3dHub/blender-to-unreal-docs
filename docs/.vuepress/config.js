const { description, repository } = require('../../package')

module.exports = {
  base: '/blender-to-unreal-docs/',
  title: 'Blender to Unreal',
  description: description,
  head: [
    ['link', { rel: 'icon', href: '/img/UE_32.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  themeConfig: {
    repo: '',
    docsDir: 'docs',
    editLinks: false,
    editLinkText: 'Edit on Github',
    lastUpdated: true,
    nav: [
      // {
      //   text: 'Home',
      //   link: '',
      // },
    ],
    sidebar: {
      '/': [
        {
          title: '',
          collapsable: false,
          children: [
            'quickstart',
            'preference',
            'tool',
            'vehicle_rigging',
            'collision',
            'socket',
            'lod',
            'export',
          ]
        },
      ],
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
