/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'WIZnet Cloud Documentation System',
  tagline: 'Welcome to new WIZnet Cloud Documentation System!',
//   url: 'https://your-docusaurus-test-site.com',
//   url:'https://wiznetcloudtest.github.io',
    url:'https://wiznet.github.io/WIZnet_Cloud_Docs_System',
//   baseUrl: '/',
//     baseUrl: '/WIZnet_Cloud_Docs_System/',
      baseUrl: '/WIZnet_Cloud_Docs_System/',
//   onBrokenLinks: 'throw',
    onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/wizfavicon.ico',
  organizationName: 'Wiznet', // Usually your GitHub org/user name.
  projectName: 'WIZnet_Cloud_Docs_System', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '\u{26c8}',
        lightIcon: '\u{1f324}',
      },
    },    
    navbar: {
      //title: 'Wiznet Cloud Documentation System !!!',
      logo: {
        alt: 'Wiznet Logo',
        src: 'img/wiznet_logo.svg',
        srcDark: 'img/wiznet_logo-white.svg',
//         position: 'right'
      },
 items: [
        {
          label: 'DOCUMENTS!',
          position: 'left', // or 'left'
          items: [
            // {
            //   label: 'HOME',
            //   to: '/',
            // },
            {
              label: 'Introduction ➤',
//               to: '/docs/intro',
//               to: 'intro',              
              to: '/',
            },
//             {
//               label: 'Products',
//               to: '/',
//             },
            {
              label: 'Design',
              to: '/',
            },
            {
              label: 'Products',
              to: '/',
            },
            // ... more items
          ],
        },
         // {to: 'docs/introduction', label: 'INTRODUCTION TO WIZNET DOCUMENTS ➤', position: 'right'},
         // {to: 'docs/download', label: 'Download', position: 'right'},
         {href: 'https://forum.wiznet.io/', label: 'Forum', position: 'left'},
         {href: 'https://www.wiznet.io/', label: 'WIZnet', position: 'left'},

        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Wiznet/WIZnet_Cloud_Docs_System',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Documents',
//               to: '/docs/intro',
//               to: 'intro',
              to: '/',              
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  plugins: ['./PreventTrailingSlash/PreventTrailingSlashPlugin'],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
//         sitemap:{
//         trailingSlash: false
//         },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
