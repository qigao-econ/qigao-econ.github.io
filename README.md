# Qi Gao 个人学术网站

这是一个可直接预览和上传的静态学术网站，无需安装依赖或构建。

## 文件说明

| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页：个人介绍、学历、研究方向、联系方式、中英文 CV |
| `research.html` | 完整工作论文题目、R&R 状态、进行中的研究、已发表论文 |
| `teaching.html` | 教学经历，与英文 CV 对齐 |
| `cv.html` | 中英文 CV 下载及切换预览 |
| `style.css` | 全站浅绿色配色、布局、照片尺寸和响应式样式 |
| `site.js` | 手机导航菜单及 CV 预览语言切换 |
| `assets/photo.png` | 现有个人照片 |
| `assets/cv-preview/` | 两份简历各两页的图片预览，无需浏览器 PDF 插件 |
| `GaoQi.pdf` / `GaoQi_zh.pdf` | 英文及中文 CV，可直接下载 |
| `GaoQi.tex` / `GaoQi_zh.tex` | 用户提供的两份 CV 源文件，内容原样保留 |
| `papers/` | 以后存放可公开的论文 PDF |

## 本次更新

- 根据用户提供的 2026 年 11 月中英文 CV 更新网站内容。
- 全站背景改为更淡的浅绿色 `#f7faf6`，标题和链接采用深绿色。
- 首页照片宽度：桌面 210px，平板 180px，手机 160px。
- 补全 “Bricks or Cash?” 论文题目、两篇工作论文的 R&R 状态，以及与 Jing Li、Yumi Koh 合作的在研论文。
- 补上中英文 CV PDF，移除无内容的摘要占位和缺失的论文下载链接。
- 首页采用简洁的个人介绍和研究方向结构，教育背景单独放在简介下方，已移除求职状态及面试声明；Research 页仅在论文标题后注明 “(job market paper)”，不单独装饰。
- 网页教学信息以英文 CV 为准；两份提供的 TeX 源文件未改动。

## 预览和维护

直接用浏览器打开 `index.html` 即可预览，也可以在此目录运行 `python3 -m http.server 8000`，访问 `http://localhost:8000`。

更新简历时，用新 PDF 覆盖 `GaoQi.pdf` 和 `GaoQi_zh.pdf`，并同步保存相应 TeX 源文件。还需重新渲染预览图片：`pdftoppm -scale-to 1800 -png GaoQi.pdf assets/cv-preview/en` 和 `pdftoppm -scale-to 1800 -png GaoQi_zh.pdf assets/cv-preview/zh`。若简历页数改变，需同步调整 `cv.html` 的预览图片及 `site.js` 的页数文案。Home 页面下方的 Education 教育背景需手动同步。

替换照片时覆盖 `assets/photo.png`；若使用其他文件名或格式，需同步修改 `index.html` 的图片路径。显示采用 3:4 裁切，照片框宽度可在 `style.css` 的 `.portrait` 及两个媒体查询中调整。

新增论文时，在 `research.html` 中复制一个 `<article class="paper">…</article>`，修改题目、作者、状态；有正式摘要或可公开 PDF 后再添加对应链接。

四页共用导航、样式和脚本。新增页面时需同步各页导航。按需修改底部的更新时间。

## 上传

将本目录的网站文件和 `assets/` 一并上传至现有网站托管目录；保持相对路径。使用 GitHub Pages 时，在仓库的 Settings → Pages 配置对应分支和文件夹。网址取决于账号、仓库和自定义域名配置。

本次仅更新本地文件，未发布到线上。
