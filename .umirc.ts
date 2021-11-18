import { defineConfig } from 'dumi';

const repo = 'react-auto-sizer';

export default defineConfig({
  title: repo,
  favicon: 'https://raw.githubusercontent.com/niexq/picbed/main/picgo/react-auto-size-logo-new.png',
  logo: 'https://raw.githubusercontent.com/niexq/picbed/main/picgo/react-auto-size-logo-new.png',
  outputPath: 'docs-dist',
  mode: 'site',
  hash: true,
  // Because of using GitHub Pages
  base: `/${repo}/`,
  publicPath: `/${repo}/`,
  navs: [
    null,
    {
      title: 'GitHub',
      path: 'https://github.com/niexq/react-auto-sizer',
    },
  ],
  // more config: https://d.umijs.org/config
});
