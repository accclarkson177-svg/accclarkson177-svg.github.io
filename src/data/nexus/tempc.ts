import type { NexusPage } from './types';

export const tempc: NexusPage = {
  id: 'tempc',
  label: '广泛资源',
  columns: [
    {
      width: 'narrow',
      cards: [
        {
          title: '英语学习',
          accent: '#38bdf8',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 2,
              items: [
                { label: '剑桥词典', href: 'https://dictionary.cambridge.org/zhs/' },
                { label: '中国日报', href: 'https://www.chinadaily.com.cn/' },
                { label: '英协英语学习', href: 'https://learnenglish.britishcouncil.org/' },
                { label: '美国文学库', href: 'https://americanliterature.com/' },
                { label: 'Dictionary.com', href: 'https://www.dictionary.com/browse/dictionary' },
                { label: 'Lingohut', href: 'https://www.lingohut.com/zh' },
              ],
            },
          ],
        },
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
                { label: 'MOOC', href: 'https://www.icourse163.org/home.htm' },
                { label: 'MOOCans', href: 'https://ginnnnnn.top/mooc/test/1247055632' },
                { label: 'Coursera', href: 'https://www.coursera.org/' },
                { label: 'ClassCentral', href: 'https://www.classcentral.com/' },
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
              columns: 4,
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
      cards: [
        {
          title: 'encyclopedia',
          accent: '#fb923c',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 2,
              items: [
                { label: '默沙东诊疗手册', href: 'https://www.msdmanuals.cn/' },
                { label: '互联网档案馆', href: 'https://web.archive.org/' },
                { label: '肌肉百科', href: 'https://musclewiki.com/' },
                { label: '维基百科', href: 'https://en.wikipedia.org/wiki/Main_Page' },
                { label: 'Anna\'s Archive', href: 'https://annas-archive.li/' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
