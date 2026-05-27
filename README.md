# 河海大学课题组网站模板

这是一个参考课题组门户网站信息架构后制作的全新静态网站模板，适合部署到 GitHub Pages、Vercel、Netlify 或学校服务器。

## 文件结构

```text
hhu_smart_geotech_site/
  index.html
  assets/
    css/
      style.css
    js/
      main.js
  README.md
```

## 本地预览

1. 解压压缩包。
2. 双击 `index.html`，用浏览器打开。
3. 推荐用 Visual Studio Code 打开整个文件夹。
4. 安装 VS Code 插件 `Live Server` 后，右键 `index.html`，选择 `Open with Live Server`。

## 如何修改内容

主要修改 `index.html`。

建议优先搜索并替换：

```text
智能岩土可靠度与裂隙结构分析课题组
课题组负责人
example@hhu.edu.cn
请替换为论文题目
请替换为项目名称
```

样式主要在：

```text
assets/css/style.css
```

手机端菜单脚本在：

```text
assets/js/main.js
```

## 上传到 GitHub Pages

1. 新建 GitHub 仓库，例如 `hhu-smart-geotech`。
2. 上传 `index.html` 和 `assets` 文件夹，注意它们必须在仓库根目录。
3. 进入 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，Folder 选择 `/root` 或 `/`。
6. 保存后访问：

```text
https://你的GitHub用户名.github.io/hhu-smart-geotech/
```

## 后续升级建议

第一版可以保持单页网站。后续内容变多时，建议拆分成：

```text
index.html
people.html
publications.html
projects.html
platform.html
contact.html
```

也可以把论文、成员、新闻改成 JSON 文件维护，再由 JavaScript 自动渲染。
