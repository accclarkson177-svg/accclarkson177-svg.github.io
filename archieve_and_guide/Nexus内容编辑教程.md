# Ac Nexus 子页面与毛玻璃块编辑教程

这次页面被拆成了三层：`index.astro` 管页面结构和切换动画，`NexusCard.astro` 管每个毛玻璃块的外观和折叠按钮，`src/data/nexus/*.ts` 管你真正要编辑的导航内容。

## 1. 最常改的文件在哪里

项目目录：

```text
D:\ac-nexus
```

主要内容文件：

```text
D:\ac-nexus\src\data\nexus\tempa.ts
D:\ac-nexus\src\data\nexus\tempb.ts
D:\ac-nexus\src\data\nexus\tempc.ts
```

子导航的汇总文件：

```text
D:\ac-nexus\src\data\nexus\index.ts
```

页面壳文件：

```text
D:\ac-nexus\src\pages\index.astro
```

卡片样式和折叠功能文件：

```text
D:\ac-nexus\src\components\NexusCard.astro
```

一般情况下，你只需要改 `tempa.ts`、`tempb.ts`、`tempc.ts`。

## 2. 修改 tempa、tempb、tempc 这个名字

打开对应文件，比如：

```text
D:\ac-nexus\src\data\nexus\tempa.ts
```

找到这里：

```ts
export const tempa: NexusPage = {
  id: 'tempa',
  label: 'tempa',
```

页面上显示的子导航文字由 `label` 决定。比如把 `tempa` 改成 `AI 使用`：

```ts
export const tempa: NexusPage = {
  id: 'tempa',
  label: 'AI 使用',
```

注意：只改显示名时，建议只改 `label`，不要改 `id` 和 `export const tempa`。这样最稳。

## 3. 修改某个毛玻璃块标题

在 `tempa.ts` 里找到类似结构：

```ts
{
  title: 'AI Copilot',
  accent: '#c084fc',
  sections: [
```

把 `title` 改掉即可：

```ts
{
  title: '常用 AI 工具',
  accent: '#c084fc',
  sections: [
```

`accent` 是这个毛玻璃块的主题色，可以填十六进制颜色，比如 `#22d3ee`。

## 4. 修改毛玻璃块里的按钮链接

按钮链接都在 `items` 数组里：

```ts
items: [
  { label: 'Gemini', href: 'https://gemini.google.com/' },
  { label: '豆包', href: 'https://www.doubao.com/chat/' },
]
```

新增一个按钮，就加一行：

```ts
items: [
  { label: 'Gemini', href: 'https://gemini.google.com/' },
  { label: '豆包', href: 'https://www.doubao.com/chat/' },
  { label: 'Kimi', href: 'https://kimi.moonshot.cn/' },
]
```

`label` 是按钮文字，`href` 是点击后打开的网址。

## 5. 修改按钮排列方式

每个链接区大概长这样：

```ts
{
  type: 'links',
  layout: 'grid',
  columns: 2,
  items: [
```

`layout` 有三种：

```ts
layout: 'grid'
layout: 'wrap'
layout: 'list'
```

含义：

```text
grid：固定列数网格，适合普通按钮组
wrap：横向自动换行，适合中央大卡片里的很多快捷入口
list：列表样式，适合 ZJU 这种少量链接
```

`columns` 控制网格列数，比如：

```ts
columns: 2
columns: 3
columns: 4
```

## 6. 新增一个毛玻璃块

每个子页面有三列：

```ts
columns: [
  { width: 'narrow', cards: [...] },
  { width: 'center', cards: [...] },
  { width: 'narrow', cards: [...] },
]
```

你可以在任意 `cards: [` 里面新增一个卡片。例如新增“文件编辑工具”：

```ts
{
  title: '文件编辑工具',
  accent: '#60a5fa',
  sections: [
    {
      type: 'links',
      layout: 'grid',
      columns: 2,
      items: [
        { label: 'Canva', href: 'https://www.canva.com/' },
        { label: 'Photopea', href: 'https://www.photopea.com/' },
        { label: 'TinyPNG', href: 'https://tinypng.com/' },
      ],
    },
  ],
},
```

注意逗号：如果这个卡片不是数组里的最后一个，结尾要有 `},`。

## 7. 新增一个完整子页面，比如 tempd

第一步：复制一份文件：

```text
D:\ac-nexus\src\data\nexus\tempc.ts
```

改名为：

```text
D:\ac-nexus\src\data\nexus\tempd.ts
```

第二步：打开 `tempd.ts`，把开头这句：

```ts
export const tempc: NexusPage = {
```

改成：

```ts
export const tempd: NexusPage = {
```

再把里面的：

```ts
id: 'tempc',
label: 'tempc',
```

改成：

```ts
id: 'tempd',
label: '文件编辑工具',
```

第三步：打开汇总文件：

```text
D:\ac-nexus\src\data\nexus\index.ts
```

原来大概是：

```ts
import { tempa } from './tempa';
import { tempb } from './tempb';
import { tempc } from './tempc';

export const nexusPages = [tempa, tempb, tempc];
```

加上 `tempd`：

```ts
import { tempa } from './tempa';
import { tempb } from './tempb';
import { tempc } from './tempc';
import { tempd } from './tempd';

export const nexusPages = [tempa, tempb, tempc, tempd];
```

子导航会自动多出一个按钮。

## 8. 三种内容块模板

普通链接按钮：

```ts
{
  type: 'links',
  layout: 'grid',
  columns: 2,
  items: [
    { label: '按钮名', href: 'https://example.com/' },
  ],
}
```

说明文字块：

```ts
{
  type: 'note',
  title: '收藏夹清理协议',
  body: '每周日 21:00 执行，不得违约。',
}
```

红色调取条：

```ts
{
  type: 'callout',
  title: 'LaTeX 实时同步中',
  subtitle: 'Archive: Ac_Log.pdf',
  href: '/Ac_Log.pdf',
  action: '调取完整版档案',
}
```

## 9. 修改后怎么检查

在 `D:\ac-nexus` 里运行：

```powershell
npm run build
```

如果构建通过，说明语法和导入基本没问题。

本地预览：

```powershell
npm run dev
```

然后打开：

```text
http://127.0.0.1:4321/
```

## 10. 最容易出错的地方

不要漏逗号：

```ts
{ label: 'A', href: 'https://a.com/' },
{ label: 'B', href: 'https://b.com/' },
```

字符串要用英文引号：

```ts
label: 'AI 使用'
```

网址也要放进引号：

```ts
href: 'https://example.com/'
```

只想改子导航显示文字时，优先改 `label`，不要改 `id`、文件名和 `export const`。
