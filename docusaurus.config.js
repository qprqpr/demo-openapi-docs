// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'qprqpr';
const projectName = 'demo-openapi-docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Gaijin Application Platform',
  favicon: 'img/favicon.ico',

  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  organizationName,
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    path: 'i18n',
  },

  presets: [
    [
      'docusaurus-preset-openapi',
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        api: {
          path: 'openapi/yupmaster.yaml',
          routeBasePath: 'api/yupmaster',
        },
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: true,
          sidebarCollapsed: true,
          editLocalizedFiles: true,
          editUrl: `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: [require.resolve('./src/styles/custom.css')],
        },
      }),
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi',
      {
        id: 'petstore',
        path: 'openapi/petstore.yaml',
        routeBasePath: 'api/petstore',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Gaijin Application Platform',
        logo: {
          alt: 'Gaijin Application Platform',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Docs',
          },
          {
            label: 'API',
            position: 'left',
            items: [
              { to: 'api/yupmaster', label: 'Yupmaster' },
              { to: 'api/petstore', label: 'Petstore' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      api: {
        authPersistance: 'localStorage',
        serverVariablesPersistance: 'localStorage',
      },
    }),
};

module.exports = config;
