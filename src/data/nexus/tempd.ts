import type { NexusPage } from './types';

export const tempd: NexusPage = {
  id: 'tempd',
  label: '视图文工具',
  columns: [
    {
      width: 'narrow',
      cards: [
        {
          title: 'PDF工具',
          accent: '#f87171',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 1,
              items: [
                { label: 'PDF工具合集', href: 'https://www.ilovepdf.com/zh-cn' },
              ],
            },
          ],
        },
      ],
    },
    {
      width: 'center',
      cards: [
        {
          title: 'P图工具',
          accent: '#fb923c',
          size: 'wide',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 2,
              items: [
                { label: 'P图工具合集', href: 'https://www.iloveimg.com/zh-cn' },
                { label: '抠图工具', href: 'https://www.koukoutu.com/' },
                { label: '生成 ico 图标', href: 'https://www.xbgjw.com/ico' },
              ],
            },
          ],
        },
      ],
    },
    {
      width: 'narrow',
      cards: [
        {
          title: '找图',
          accent: '#f472b6',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 1,
              items: [
                { label: '图像资源库', href: 'https://pngimg.com/' },
                { label: '壁纸库', href: 'https://haowallpaper.com/' },
                { label: '找校徽', href: 'https://www.urongda.com/' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
