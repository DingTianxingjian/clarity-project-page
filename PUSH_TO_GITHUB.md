# 推送到 GitHub 的命令

创建完 GitHub 仓库后，运行以下命令（把 `你的GitHub用户名` 替换成实际的用户名）：

## 方式 1：使用 HTTPS（推荐，简单）

```bash
# 1. 添加远程仓库
git remote add origin https://github.com/你的GitHub用户名/clarity-project-page.git

# 2. 重命名分支为 main（GitHub 默认使用 main）
git branch -M main

# 3. 推送代码
git push -u origin main
```

第一次推送时会要求输入 GitHub 用户名和密码（或 Personal Access Token）。

## 方式 2：使用 SSH（需要先配置 SSH key）

```bash
# 1. 添加远程仓库
git remote add origin git@github.com:你的GitHub用户名/clarity-project-page.git

# 2. 重命名分支为 main
git branch -M main

# 3. 推送代码
git push -u origin main
```

---

## 推送成功后的步骤

### 启用 GitHub Pages

1. 进入你的仓库页面
2. 点击 **Settings**（设置）标签
3. 在左侧菜单找到 **Pages**
4. 在 **Source** 下选择 **GitHub Actions**
5. 等待 1-2 分钟，Actions 会自动运行

### 查看部署状态

1. 点击仓库顶部的 **Actions** 标签
2. 你会看到 "Deploy to GitHub Pages" 工作流正在运行
3. 等待绿色的 ✓ 出现（大约 1-2 分钟）

### 访问你的网站

部署成功后，你的网站地址是：
```
https://你的GitHub用户名.github.io/clarity-project-page/
```

---

## 如果遇到问题

### 问题 1：推送时要求输入密码，但密码不对
**解决方案**：GitHub 不再支持密码登录，需要使用 Personal Access Token (PAT)

1. 访问 https://github.com/settings/tokens
2. 点击 "Generate new token" → "Generate new token (classic)"
3. 选择 `repo` 权限
4. 生成后复制 token（只显示一次！）
5. 推送时用这个 token 代替密码

### 问题 2：网站部署后图片不显示
**检查**：确保所有图片文件都已提交到仓库：
```bash
git status
```

如果有未提交的图片：
```bash
git add .
git commit -m "Add missing images"
git push
```

### 问题 3：想要修改仓库名
如果你的仓库名不是 `clarity-project-page`，需要修改 `vite.config.ts`：

```typescript
base: mode === 'production' ? '/你的实际仓库名/' : '/',
```

然后重新提交：
```bash
git add vite.config.ts
git commit -m "Update base URL"
git push
```

---

## 更新网站

以后每次修改代码后，只需要：

```bash
git add .
git commit -m "描述你的修改"
git push
```

GitHub Actions 会自动重新部署！
