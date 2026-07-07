import type { NexusPage } from './types';

export const tempb: NexusPage = {
  id: 'tempb',
  label: 'AI',
  columns: [
    {
      width: 'narrow',
      cards: [
        {
          title: 'AI Copilot',
          accent: '#c084fc',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 2,
              items: [
                { label: 'Gemini', href: 'https://gemini.google.com/' },
                { label: '豆包', href: 'https://www.doubao.com/chat/' },
                { label: 'Deepseek', href: 'https://chat.deepseek.com/' },
                { label: 'ChatGPT', href: 'https://chatgpt.com/' },
                { label: 'Claude', href: 'https://claude.ai/new' },
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
          title: 'AI Next',
          accent: '#fbbf24',
          size: 'wide',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 3,
              items: [
                { label: 'Notebooklm', href: 'https://notebooklm.google/' },
                { label: '腾讯ima', href: 'https://ima.qq.com/' },
                { label: 'Github Copilot', href: 'https://github.com/copilot/' },
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
          title: 'AI Tank',
          accent: '#34d399',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 1,
              items: [
                { label: 'Claude', href: 'https://claude.ai/' },
                { label: 'Deepseek api', href: 'https://platform.deepseek.com/api_keys' },
                { label: '豆包 api', href: 'https://www.volcengine.com/' },
              ],
            },
          ],
        },
        {
          title: 'AI assist',
          accent: '#1d4ed8',
          sections: [
            {
              type: 'links',
              layout: 'grid',
              columns: 1,
              items: [
                { label: 'Gemini网页插件', href: 'https://voyager.nagi.fun/' },
              ],
            },
          ],
        },
      ],
    },
  ],
};
