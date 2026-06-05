# 岩土工程风险与韧性课题组网站

这是一个适合 GitHub Pages 部署的静态课题组网站，包含课题组首页和姬建教授个人页面。

## 页面结构

```text
research-group-site/
  index.html          # 课题组首页
  ji-jian.html        # 姬建教授个人页面
  README.md
  assets/
    css/style.css
    js/main.js
    img/
      home-bg.png
      jijian-forum-2026.jpg
      college-logo-blue.png
      college-emblem.png
      people/
        Jianji.jpg
        MapelChow.png
        PengYijie.jpg
        person-placeholder.svg
      research/
        risk-reliability.svg
        slope-warning.svg
        underground-space.svg
        resilience-prevention.svg
```

## 已完成内容

1. 首页保留课题组简介、科研团队、研究方向、动态成果和联系方式。
2. 科研团队中的“姬建”卡片已改为可点击链接，点击后跳转到 `ji-jian.html`。
3. 姬建个人页面已整理个人简介、研究方向、成果概览、学术任职、代表成果与奖励、会议报告信息。
4. 上传的会议图片已保存为 `assets/img/jijian-forum-2026.jpg`，并展示在姬建个人页面的会议报告板块。
5. 页面信息优先依据上传图片整理，并参考河海大学教师主页：`https://jszy.hhu.edu.cn/jj100/`。

## 如何预览

直接用浏览器打开 `index.html` 即可。由于这是纯静态网站，不需要启动服务器。

## 如何修改成员信息

在 `index.html` 中搜索成员姓名，例如：

```html
<h3>姬建</h3>
```

修改对应卡片中的姓名、照片路径和研究方向即可。成员照片建议放在：

```text
assets/img/people/
```

## 如何修改姬建个人页面

打开 `ji-jian.html`，按页面板块修改以下内容：

- 个人简介：搜索 `profile-summary`
- 研究方向：搜索 `info-grid`
- 学术任职与成果奖励：搜索 `clean-list`
- 会议报告：搜索 `talk-details`

## 如何部署到 GitHub Pages

1. 将 `index.html`、`ji-jian.html`、`README.md` 和 `assets` 文件夹上传到仓库根目录。
2. 进入仓库 `Settings -> Pages`。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，Folder 选择 `/root` 或 `/`。
5. 保存后等待 GitHub Pages 自动部署。

访问地址通常为：

```text
https://你的GitHub用户名.github.io/仓库名/
```
