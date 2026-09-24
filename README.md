# 岩土工程风险与韧性课题组网站

这是一个适合 GitHub Pages 部署的静态课题组网站，包含课题组首页、科研团队页面和姬建教授个人页面。

## 页面结构

```text
research-group-site/
  index.html          # 课题组首页
  team.html           # 科研团队完整名单
  ji-jian.html        # 姬建教授个人页面
  README.md
  assets/
    css/style.css
    css/team-updates.css
    css/news.css
    js/main.js
    js/news.js
    img/
      home-bg.png
      jijian-forum-2026.jpg
      college-logo-blue.png
      college-emblem.png
      people/
        Jianji.png
        MapelChow.png
        pengyijie.jpg
        person-placeholder.svg
      research/
        可靠度.png
        边坡.png
        隧道.png
        韧性.png
      news/
        center-founded-2026-09-23.jpg
```

## 已完成内容

1. 首页保留课题组简介、科研团队、研究方向、团队动态和联系方式；首页的代表成果栏目已移除。
2. 科研团队中的“姬建”卡片已改为可点击链接，点击后跳转到 `ji-jian.html`。
3. 姬建个人页面已整理个人简介、研究方向、成果概览、学术任职、代表成果与奖励、会议报告信息。
4. 上传的会议图片已保存为 `assets/img/jijian-forum-2026.jpg`，并展示在姬建个人页面的会议报告板块。
5. 页面信息优先依据上传图片整理，并参考河海大学教师主页：`https://jszy.hhu.edu.cn/jj100/`。

## 如何预览

直接用浏览器打开 `index.html` 即可。由于这是纯静态网站，不需要启动服务器。

## 如何修改成员信息

分别在 `index.html` 和 `team.html` 中搜索成员姓名，例如：

```html
<h3>姬建</h3>
```

同步修改两页对应卡片中的姓名、照片路径、身份和研究方向；增减成员后还要更新分组标题及导航中的人数。文件名大小写须准确匹配。成员照片建议放在：

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

1. 将 `index.html`、`team.html`、`ji-jian.html`、`README.md` 和完整的 `assets` 文件夹上传到仓库根目录。
2. 进入仓库 `Settings -> Pages`。
3. Source 选择 `Deploy from a branch`。
4. Branch 选择 `main`，Folder 选择 `/root` 或 `/`。
5. 保存后等待 GitHub Pages 自动部署。

访问地址通常为：

```text
https://你的GitHub用户名.github.io/仓库名/
```

## 本次更新与动态维护

- 首页第 03 板块改为“团队动态”，采用左侧图片展示、右侧四条日期列表的布局。点击条目、上一条/下一条按钮可切换配图，键盘支持上下方向键、Home 和 End。
- 首条动态为 2026 年 9 月 23 日“岩土风险与韧性研究中心成立”，使用提供的牌匾照片。名称中的“与”按牌匾文字整理。
- 另外三条动态及其日期为示例，页面带“示例”标记；使用网站已有的岩土楼、研究示意图和会议照片。正式内容替换示例后可删除对应标记。
- 首页的科研团队板块统一横向展示姬建、两名博士后和 19 名在读研究生，不按身份分组，也不显示历届毕业生；科研团队页保留分类导航。
- 科研团队页分组为老师 1 人、博士后 2 人、在读研究生 19 人和历届毕业生 2 人；四组成员卡片统一使用在读研究生样式。已补齐游耀星、邬明佳、姚奕、王恩至、杨嘉祎，同步已有照片、研究方向及徐璐的年级信息；没有提供的照片继续用占位图。
- 成员照片保持原比例并铺满照片画布，统一首页成员卡片、科研团队卡片、教师卡片和姬建个人页的肖像显示；首页“查看更多成员”与科研团队标题同行并靠右。
- 谢善尧和姚奕照片已做高清增强；姚奕照片也已关联到首页和科研团队页的成员卡片。原始照片保留在 `assets/img/people/` 中，增强版本使用 `*-enhanced.png` 文件名。
- 修改动态时，在 `index.html` 搜索 `id="news"`。每条动态的 `newsSlide1` 图片与 `newsTab1` 按钮按编号对应；同步修改图片路径、图片说明、标题、摘要、显示日期和 `datetime` 日期。
- 本次仅修改本地文件，未执行线上发布。
