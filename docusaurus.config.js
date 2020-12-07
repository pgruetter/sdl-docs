module.exports = {
  title: 'Smart Data Lake Builder',
  tagline: 'Framework to quickly build and maintain Smart Data Lakes',
  url: 'https://github.com/pgruetter',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'pgruetter', // Usually your GitHub org/user name.
  projectName: 'sdl-docs', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    navbar: {
      title: 'Smart Data Lake',
      logo: {
        alt: 'Smart Data Lake Logo',
        src: 'img/sdl_logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/smart-data-lake/smart-data-lake',
          label: 'GitHub',
          position: 'right',
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
              label: 'Getting started',
              to: 'docs/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/smart-data-lake/smart-data-lake',
            },
            {
              label: 'GitHub Issues',
              href: 'https://github.com/smart-data-lake/smart-data-lake/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'ELCA',
              href: 'https://www.elca.ch'
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Smart Data Lake, Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
