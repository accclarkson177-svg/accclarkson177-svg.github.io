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
        {
          title: '视频工具',
          accent: '#ef4444',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 1,
              items: [
                { label: '视频下载1', href: 'https://snapany.com/zh/bilibili' },
                { label: '视频下载2', href: 'https://www.datatool.vip/' },
                { label: '简单编辑', href: 'https://vgo.pub/' },
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
                { label: 'MidJourney ', href: 'https://www.midjourney.com/explore?tab=video_top' },
              ],
            },
          ],
        },
        {
          title: '文字相关',
          accent: '#22d3ee',
          size: 'wide',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 3,
              items: [
                { label: '纸由我', href: 'https://paperme.toolooz.com/' },
                { label: 'Math2TeX', href: 'https://www.math2tex.com/' },
                { label: '极简简历', href: 'https://www.polebrief.com/' },
                { label: 'excel操作', href: 'https://www.lanrenexcel.com/' },
                { label: '翻译插件', href: 'https://immersivetranslate.com/zh-Hans/' },
                { label: 'LaTeX工作室', href: 'https://www.latexstudio.net/' },
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
                { label: '生图工具', href: 'http://lowentro.cn/paint/' },
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
