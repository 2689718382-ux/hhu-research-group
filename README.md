# 智能岩土可靠度与裂隙结构分析课题组网站

这是一个适合 GitHub Pages 部署的静态课题组网站，已参考课题组门户网站的信息架构重新整理为：

- 首页
- 团队概况
- 研究方向
- 研究队伍
- 科学研究
- 人才培养
- 科研平台
- 招生招聘
- 联系我们

首页背景图已使用你上传的校园楼宇照片，文件路径为：

```text
assets/img/home-bg.png
```

## 文件结构

```text
hhu_smart_geotech_site/
  index.html
  README.md
  assets/
    css/
      style.css
    js/
      main.js
    img/
      home-bg.png
```

## 本地预览

1. 解压压缩包。
2. 双击 `index.html`，用浏览器打开。
3. 推荐使用 VS Code 打开整个文件夹。
4. 安装 VS Code 插件 `Live Server` 后，右键 `index.html`，选择 `Open with Live Server`。

## 修改文字内容

主要修改 `index.html`。建议优先搜索并替换：

```text
智能岩土可靠度与裂隙结构分析课题组
课题组负责人
example@hhu.edu.cn
作者、期刊、DOI
项目来源、负责人、起止时间
```

## 修改首页背景图

替换以下图片即可：

```text
assets/img/home-bg.png
```

保持文件名不变，网站会自动使用新的首页背景图。

## 上传到 GitHub Pages

1. 打开你的 GitHub 仓库。
2. 删除旧文件或直接覆盖旧文件。
3. 上传压缩包内的 `index.html`、`README.md` 和 `assets` 文件夹到仓库根目录。
4. 进入 `Settings -> Pages`。
5. Source 选择 `Deploy from a branch`。
6. Branch 选择 `main`，Folder 选择 `/root` 或 `/`。
7. 保存后等待 GitHub Pages 自动部署。

访问地址通常是：

```text
https://你的GitHub用户名.github.io/仓库名/
```

## 后续扩展建议

当前版本是单页网站，适合 GitHub Pages 快速上线。后续内容增多后，可以拆分为：

```text
index.html
people.html
publications.html
projects.html
platform.html
contact.html
```

也可以把论文、成员、新闻改为 JSON 文件维护，再由 JavaScript 自动渲染。
