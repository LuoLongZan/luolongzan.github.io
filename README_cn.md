# 罗珑赞个人主页

本仓库用于托管 **Longzan Luo | 罗珑赞** 的个人主页：[luolongzan.github.io](https://luolongzan.github.io/)。

网站基于 [PRISM](https://github.com/xyjoey/PRISM) 模板构建，主要内容位于 `content/` 与 `content_zh/` 目录。

## 本地开发

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
rsync -a out/ ./
```

静态导出结果会同步到仓库根目录，便于 GitHub Pages 直接从 `main` 分支提供访问。
