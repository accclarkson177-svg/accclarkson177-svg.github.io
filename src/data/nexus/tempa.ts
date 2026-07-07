import type { NexusPage } from './types';

export const tempa: NexusPage = {
  id: 'tempa',
  label: '首页',
  columns: [
    {
      width: 'narrow',
      cards: [
        {
          title: 'ZJU',
          accent: '#22d3ee',
          sections: [
            {
              type: 'links',
              layout: 'list',
              items: [
                { label: '学在浙大 (ZJU)', href: 'https://course.zju.edu.cn/' },
                { label: '查老师', href: 'https://chalaoshi.netlify.app/' },
              ],
            },
          ],
        },
        {
          title: 'Navigation',
          accent: '#a3e635',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 2,
              items: [
                { label: 'ZJU导航', href: 'https://zjuers.com/' },
                { label: '百万立方', href: 'https://zjuers.com/mc.html' },
                { label: '导航1', href: 'https://tools.rosetears.cn/' },
                { label: '导航2', href: 'https://tool.liumingye.cn/' },
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
          title: "Ac's Workflow & Life Log",
          accent: '#67e8f9',
          size: 'wide',
          sections: [
            {
              type: 'links',
              layout: 'wrap',
              items: [
                { label: 'Github', href: 'https://github.com/' },
                { label: '个人图书馆', href: 'https://acxikaly.top/note/' },
                { label: 'timing', href: 'https://water0523.github.io/RestoreTimingTimer/' },
                { label: '日历与日程', href: 'https://www.icloud.com.cn/calendar/' },
                { label: '洛谷', href: 'https://www.luogu.com.cn/' },
                { label: 'B站', href: 'https://www.bilibili.com/' },
                { label: 'Youtube', href: 'https://www.youtube.com/' },
                { label: 'Gmail', href: 'https://mail.google.com/mail/u/0/#inbox' },
                { label: 'QQ mail', href: 'https://wx.mail.qq.com/' },
                { label: 'IMSLP', href: 'https://cn.imslp.org/wiki/Main_Page' },
                { label: 'Zlib', href: 'https://zh.z-library.sk/' },
                { label: 'Magazine lib', href: 'https://magazinelib.com/' },
                { label: '提问的智慧', href: 'https://www.luogu.com.cn/article/fraraxmh' },
                { label: 'Cokecloud', href: 'https://47.238.225.31:1000/#/stage/dashboard' }
              ],
            },
            {
              type: 'callout',
              title: 'LaTeX 实时同步中',
              subtitle: 'Archive: Ac_Log.pdf',
              href: '/Ac_Log.pdf',
              action: '调取完整版档案',
            },
          ],
        },
        {
          title: 'Role Model',
          accent: '#fb7185',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 4,
              items: [
                { label: '仙人如麻', href: 'https://isshikihugh.github.io/zju-cs-asio/' },
                { label: 'Rolemodel1', href: 'https://note.tonycrane.cc/' },
                { label: 'Rolemodel2', href: 'https://note.isshikih.top/cour_note/' },
                {
                  label: 'Rolemodel3',
                  href: 'https://webvpn.zju.edu.cn/https/77726476706e69737468656265737421f3e540863e23785f6a1c8ca89c5a3530c09012b53c383aa60352/projects/',
                },
                { label: 'Rolemodel4', href: 'https://mistatle.github.io/' },
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
          title: '异星交涉室 SOP',
          accent: '#f87171',
          tone: 'danger',
          sections: [
            {
              type: 'note',
              title: '收藏夹清理协议',
              body: '每周日 21:00 执行，不得违约。',
            },
          ],
        },
      ],
    },
  ],
};
