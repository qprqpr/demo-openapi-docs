// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    'intro',
    {
      type: 'category',
      label: 'Basics',
      items: [
        'tutorial-basics/create-a-page',
        'tutorial-basics/create-a-document',
        'tutorial-basics/create-a-blog-post',
        'tutorial-basics/markdown-features',
        'tutorial-basics/deploy-your-site',
        'tutorial-basics/congratulations',
      ],
    },
    {
      type: 'link',
      label: 'YupMaster API',
      href: '/api/yupmaster',
    },
    {
      type: 'link',
      label: 'Petstore API',
      href: '/api/petstore',
    },
    {
      type: 'link',
      label: 'Toolset Download',
      href: 'https://github.com/GaijinEntertainment/GaijinApplicationPlatform/releases',
    }
  ],
};

module.exports = sidebars;
