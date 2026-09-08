# Qingwei Zhang Academic Homepage / 张清玮个人学术主页

这是一个可直接部署到 **GitHub Pages** 的单页学术主页，默认英文，并支持中英文切换。

## 1. 最快部署方法

1. 注册/登录 GitHub。
2. 新建公开仓库，建议仓库名：
   - `你的GitHub用户名.github.io`
3. 把本压缩包里的以下文件上传到仓库根目录：
   - `index.html`
   - `styles.css`
   - `script.js`
4. 打开仓库 **Settings → Pages**。
5. 在 **Build and deployment** 中选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
6. 保存后等待约 1–5 分钟。
7. 访问：
   `https://你的GitHub用户名.github.io`

这个网址就可以填写到 HKUST(GZ) 申请系统的 **Personal Home Page URL**。

## 2. 建议你部署前修改的地方

### Email
当前页面使用：
`2023213653@bupt.cn`

如你更希望长期使用个人邮箱，请在 `index.html` 中全局替换。

### CV
把你的英文 CV 放到仓库根目录，例如：
`cv.pdf`

然后把 `index.html` 中：
`href="#" id="cvLink"`
改成：
`href="cv.pdf"`

并可以删除 `script.js` 中有关 `cvLink` 的 alert 代码。

### GitHub / Google Scholar
如有需要，可在 Contact 区域增加 GitHub、Google Scholar、LinkedIn 等链接。

### 头像
当前用字母 `QZ` 作为极简头像占位。
如果之后想放正式照片，可以把照片命名为 `profile.jpg`，再把 `.avatar-placeholder` 替换为 `<img>`。

## 3. 当前已经写入的内容

- Beijing University of Posts and Telecommunications (BUPT)
- Major: Intelligent Science and Technology
- Weighted Average: 90.91/100
- GPA: 3.75/4.0
- Research interests:
  - LLM Systems
  - AI Agents
  - Multimodal Learning
  - Efficient AI
  - Computer Vision
- Research:
  - KV Cache Remaining Lifetime Prediction
  - Preference-Aware Proactive In-Vehicle Agent
  - Unsupervised Wind Turbine Blade Defect Detection
  - Hand Pose Estimation from Sparse Sensing
- Publication:
  - *DINOv2-Based Unsupervised Defect Detection for Wind Turbine Blade Inspection*
  - Accepted by WRC SARA 2026
  - Qingwei Zhang listed as second author
- Awards:
  - 2026 China Collegiate Computing Competition, National Finals, Third Prize
  - 2026 China Robotics and Artificial Intelligence Competition, National Finals, Third Prize

## 4. 申请用途建议

这个版本采用“研究型申请主页”风格，而不是求职作品集风格。适合填写在：
- HKUST(GZ) Red Bird MPhil
- HKUST MPhil / PhD
- CUHK MPhil / PhD
- CUHK-Shenzhen MPhil / PhD
- HKU / NUS / NTU 等研究型申请
- 套磁邮件签名与 CV 个人主页链接

建议网站保持简洁，重点突出 **Research / Publications / Awards / CV**，不要加入太多与科研申请无关的装饰。
