# Qi Gao 个人学术网站

## 文件说明

| 文件 | 内容 |
| --- | --- |
| `index.html` | 首页：照片、简介、JMP、教育、荣誉、推荐人、中文简介 |
| `research.html` | 研究：工作论文、发表 |
| `teaching.html` | 教学经历 |
| `style.css` | 所有页面共用的样式和配色 |
| `assets/photo.jpg` | 占位照片，换成你自己的照片（同名覆盖） |
| `papers/` | 放论文 PDF，JMP 命名为 `jmp.pdf` |

## 上传前要补的内容

1. 用你的照片替换 `assets/photo.jpg`（建议竖版，宽高比约 5:6）。
2. 把 CV 导出成 PDF，命名为 `cv.pdf`，放在和 `index.html` 同一层。
3. 把 JMP 的 PDF 命名为 `jmp.pdf`，放进 `papers` 文件夹。
4. 在 `index.html` 和 `research.html` 里，把 `[Paste the abstract here.]` 换成论文摘要。
5. 在 `index.html` 里，把 `[中文名]` 换成你的中文名。
6. 检查首页的英文简介，按你自己的说法修改。
7. 有 Google Scholar 或 LinkedIn 的话，在 `index.html` 里取消对应几行的注释，填上链接。

## 上线步骤

1. 在 GitHub 新建仓库，名字必须是 `你的用户名.github.io`，选 Public。
2. Add file → Upload files，把整个文件夹里的内容拖进去（保留 `assets` 和 `papers` 两个文件夹），点 Commit changes。
3. Settings → Pages → Source 选 Deploy from a branch，分支 main，文件夹 /(root)，Save。
4. 几分钟后打开 `https://你的用户名.github.io`。

## 以后怎么改

- 改文字：在 GitHub 上点开对应的 `.html` 文件，点铅笔图标编辑，提交即可。
- 更新 CV：上传新的 `cv.pdf` 覆盖旧文件，链接不用改。
- R&R 被接收后：把 `index.html` 和 `research.html` 里的 "Revise and resubmit" 改成 "Forthcoming"，并更新页脚的 Last updated。
- 改配色：只需要改 `style.css` 最上面 `:root` 里的颜色值。
