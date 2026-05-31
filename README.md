# 岩土工程风险与韧性课题组网站

这是一个适合 GitHub Pages 部署的静态课题组网站。页面已按你的最新要求重新组织为：

1. 首页：使用上传的楼宇照片作为首页背景图。
2. 科研团队：横向手动滚动成员栏，展示姓名、照片和研究方向。
3. 研究方向：横向手动滚动研究方向栏，每个方向预留图片。
4. 团队动态与代表成果：预留新闻、论文、项目和获奖信息。
5. 联系我们：已设置联系邮箱 `ji0003an@e.ntu.edu.sg`。

已删除“科研平台”部分，并去掉首页中的半透明关键词圆角方框。

## 文件结构

```text
geotech_risk_resilience_site/
  index.html
  README.md
  assets/
    css/
      style.css
    js/
      main.js
    img/
      home-bg.png
      college-logo-blue.png
      college-logo-compact.png
      college-emblem.png
      college-emblem-original.png
      people/
        person-placeholder.svg
      research/
        risk-reliability.svg
        slope-warning.svg
        underground-space.svg
        resilience-prevention.svg
```

## 如何替换成员照片

在 `index.html` 中搜索成员姓名，例如：

```html
<h3>姬建</h3>
```

把对应卡片中的照片路径：

```html
<img src="assets/img/people/person-placeholder.svg" alt="姬建照片占位" />
```

替换为真实照片路径，例如：

```html
<img src="assets/img/people/jijian.jpg" alt="姬建照片" />
```

然后把照片文件放到：

```text
assets/img/people/
```

建议照片使用竖版比例，例如 4:5 或 3:4。

## 如何修改成员研究方向

在每个成员卡片里修改这段文字即可：

```html
<p>岩土工程风险分析与可靠性控制（可替换为具体方向）</p>
```

## 如何替换研究方向图片

研究方向图片位于：

```text
assets/img/research/
```

可以直接替换以下文件，保持文件名不变：

```text
risk-reliability.svg
slope-warning.svg
underground-space.svg
resilience-prevention.svg
```

也可以在 `index.html` 中修改图片路径，使用 `.jpg`、`.png`、`.webp` 等格式。

## 如何修改首页背景图

首页背景图路径为：

```text
assets/img/home-bg.png
```

替换该文件并保持文件名不变即可。

## 如何部署到 GitHub Pages

1. 解压压缩包。
2. 将 `index.html`、`README.md`、`assets` 文件夹上传到 GitHub 仓库根目录。
3. 进入仓库 `Settings -> Pages`。
4. Source 选择 `Deploy from a branch`。
5. Branch 选择 `main`，Folder 选择 `/root` 或 `/`。
6. 保存后等待 GitHub Pages 自动部署。

访问地址通常为：

```text
https://你的GitHub用户名.github.io/仓库名/
```
