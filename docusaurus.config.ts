import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'QR EsnaF',
  tagline: 'Teknolojiye yabancı olmak zorunda değilsiniz.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://docs.qresnaf.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'chatillon7', // Usually your GitHub org/user name.
  projectName: 'docs.qresnaf.com', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'tr',
    locales: ['tr'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    image: 'img/only_qr_logo.png',
    navbar: {
      title: 'QR EsnaF',
      logo: {
        alt: 'QR EsnaF Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: 'https://qresnaf.com',
          // Only one of "to" or "href" should be used
          // href: 'https://www.facebook.com',
          html: 'qresnaf.com',
          // Only one of "label" or "html" should be used
          // html: '<b>Introduction</b>'
          position: 'right',
          activeBaseRegex: '/',
          target: '_blank',
        },
        {
          href: 'mailto:hizmet@qresnaf.com',
          // Only one of "to" or "href" should be used
          // href: 'https://www.facebook.com',
          html: 'hizmet@qresnaf.com',
          // Only one of "label" or "html" should be used
          // html: '<b>Introduction</b>'
          position: 'right',
          activeBaseRegex: '/',
          target: '_blank',
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
