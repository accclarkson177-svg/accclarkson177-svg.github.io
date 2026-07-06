import type { NexusPage } from './types';

export const tempc: NexusPage = {
  id: 'tempc',
  label: '其他',
  columns: [
    {
      width: 'narrow',
      cards: [
        {
          title: 'Browse',
          accent: '#a78bfa',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 2,
              items: [
                { label: '科普辟谣', href: 'https://piyao.kepuchina.cn/' },
                { label: '神秘游戏', href: 'https://neal.fun/' },
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
          title: 'Brainer',
          accent: '#e879f9',
          size: 'wide',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 3,
              items: [
                { label: 'Realme', href: 'https://www.arealme.com/cn#google_vignette' },
                { label: 'Schurt 1', href: 'https://www.tooljson.com/shuerte' },
                { label: 'Schurt 2', href: 'https://schulte.top/zh-CN/' },
                { label: 'Reaction', href: 'https://www.arealme.com/reaction-test/cn/' },
                { label: 'Mobile sight', href: 'https://dt1.shindans.com/' },
                { label: 'Calculator', href: 'https://dt3.shindans.com/' },
              ],
            },
          ],
        },
      ],
    },
    {
      width: 'narrow',
      cards: [],
    },
  ],
};
