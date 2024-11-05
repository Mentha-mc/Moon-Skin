import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Moon Skin', // 替换为 Moon Skin
  description: 'Rspack-based Static Site Generator',
  icon: '/moon-icon.png',
  logo: {
    light: '/kindpng_1399972.png',
    dark: '/rspress-dark-logo.png',
  },
  base: "/Moon-Skin",
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
    sidebar: {
      '/start/': [
        {
          text: '开始',
          items: [
            {
              text: '入门知识',
              link: '/start/',
            },
            {
              text: 'JSON文件结构',
              link: '/start/new/',
            },
            {
              text: '皮肤包注意事项',
              link: '/start/not1024/',
            },
          {
              text: '配置文件',
              items: [
                {
                  text: '第一个3D皮肤模板',
                  link: '/start/tutorial/',
                },
                {
                  text: 'JSON文件结构',
                  link: '/start/tutorial/new/',
                },
              ],
            },
          ],
        },
      ],
      // 您可以根据需要添加更多的侧边栏分组和链接
    },
  },
});