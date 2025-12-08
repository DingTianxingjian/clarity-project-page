# 部署指南 📦

这个文档说明如何让别人也能访问你的 CLARITY 项目网页。

## 方案 1️⃣：局域网访问（临时分享）

适用于：在同一 WiFi/网络下的同事、朋友访问

### 步骤：

1. 运行命令：
```bash
npm run dev:host
```

2. 你会看到类似这样的输出：
```
  VITE v6.2.0  ready in 500 ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: http://192.168.1.100:3000/
```

3. 把 **Network** 那一行的地址分享给同网络的人即可

⚠️ **注意**：
- 你的电脑需要保持开启状态
- 只有同一网络的人能访问
- 关闭命令后网站就无法访问了

---

## 方案 2️⃣：GitHub Pages（永久在线，推荐）🌟

适用于：让全世界任何人都能访问，完全免费

### 步骤：

#### 1. 将代码推送到 GitHub

如果还没有 Git 仓库，先初始化：

```bash
git init
git add .
git commit -m "Initial commit: CLARITY project page"
```

创建 GitHub 仓库（在 GitHub 网站上操作）：
- 仓库名建议：`clarity-project-page`
- 设置为 Public

然后推送代码：
```bash
git remote add origin https://github.com/你的用户名/clarity-project-page.git
git branch -M main
git push -u origin main
```

#### 2. 配置 GitHub Pages

1. 进入仓库的 **Settings** 标签
2. 点击左侧的 **Pages**
3. 在 **Source** 下拉菜单选择 **GitHub Actions**

#### 3. 修改配置（如果仓库名不是 clarity-project-page）

如果你的仓库名不是 `clarity-project-page`，需要修改 `vite.config.ts` 文件：

```typescript
base: mode === 'production' ? '/你的仓库名/' : '/',
```

#### 4. 推送代码触发部署

```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push
```

#### 5. 等待部署完成

1. 进入仓库的 **Actions** 标签
2. 查看部署进度
3. 部署成功后，你的网站地址是：
   ```
   https://你的用户名.github.io/clarity-project-page/
   ```

⏱️ 首次部署可能需要 2-5 分钟

---

## 方案 3️⃣：Netlify / Vercel（最简单）⚡

这两个平台提供一键部署，非常适合快速分享。

### Netlify 步骤：

1. 访问 [netlify.com](https://netlify.com)
2. 点击 **Add new site** → **Import an existing project**
3. 连接你的 GitHub 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击 **Deploy**

### Vercel 步骤：

1. 访问 [vercel.com](https://vercel.com)
2. 点击 **Add New** → **Project**
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 Vite 配置
5. 点击 **Deploy**

🎉 部署完成后会得到一个 `.netlify.app` 或 `.vercel.app` 的网址

---

## 方案对比

| 方案 | 访问范围 | 持久性 | 难度 | 费用 |
|------|----------|--------|------|------|
| 局域网访问 | 同一网络 | 临时 | ⭐ 简单 | 免费 |
| GitHub Pages | 全球 | 永久 | ⭐⭐ 中等 | 免费 |
| Netlify/Vercel | 全球 | 永久 | ⭐ 简单 | 免费 |

---

## 常见问题 ❓

**Q: 部署后图片不显示怎么办？**
A: 确保图片文件都在项目根目录，并且 `vite.config.ts` 中的 `base` 路径设置正确。

**Q: 可以使用自定义域名吗？**
A: 可以！在 GitHub Pages/Netlify/Vercel 的设置中都支持自定义域名。如果使用自定义域名，需要把 `vite.config.ts` 中的 `base` 改为 `'/'`。

**Q: 部署后需要更新内容怎么办？**
A: 修改代码后，重新 `git push`，GitHub Actions 会自动重新部署。Netlify/Vercel 也是一样。

---

## 推荐流程 🎯

1. **开发阶段**：使用 `npm run dev` 本地开发
2. **给同事演示**：使用 `npm run dev:host` 局域网访问
3. **正式发布**：使用 GitHub Pages 或 Netlify/Vercel 永久托管

需要帮助？欢迎随时询问！
