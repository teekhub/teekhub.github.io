import { defineTeekConfig } from "vitepress-theme-teek/config";

export const teekConfig = defineTeekConfig({
  pageStyle: "segment-nav",
  author: { name: "Teeker", link: "https://github.com/teekhub" },
  wallpaper: {
    enabled: true,
  },
  banner: {
    name: "🎉 Teeker Blog",
    bgStyle: "fullImg",
    imgSrc: ["/banner/banner-bg1.webp", "/banner/banner-bg2.webp"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听 —— 来自 Young Kbt",
      "积跬步以至千里，致敬每个爱学习的你 —— 来自 Evan Xu",
      "这一生波澜壮阔或是不惊都没问题 —— 来自 Weibw",
    ],
    descStyle: "types",
  },
  blogger: {
    avatar: "https://testingcf.jsdelivr.net/gh/teekhub/static/user/avatar2.png",
    shape: "square",
    name: "天客 - Teeker",
    slogan: "朝圣的使徒，正在走向编程的至高殿堂！",
  },
  docAnalysis: {
    createTime: "2021-10-19",
    statistics: {
      provider: "busuanzi",
    },
  },
  friendLink: {
    list: [
      {
        name: "George Chan",
        desc: "让我给你讲讲他的传奇故事吧",
        avatar: "https://z3.ax1x.com/2021/09/30/4oKMVI.jpg",
        link: "https://cyc0819.top/",
      },
      {
        name: "butcher2000",
        desc: "即使再小的帆，也能远航",
        avatar: "https://cdn.jsdelivr.net/gh/teekhub/static/user/20211029181901.png",
        link: "https://blog.csdn.net/weixin_46827107",
      },
      {
        name: "vitepress-theme-teek",
        desc: "✨一个轻量、简洁高效、灵活配置的 VitePress 主题",
        avatar: "https://vp.teek.top/teek-logo-large.png",
        link: "http://vp.teek.top/",
      },
      {
        name: "Evan's blog",
        desc: "前端的小学生",
        avatar: "https://cdn.jsdelivr.net/gh/xugaoyi/image_store@master/blog/20200103123203.jpg",
        link: "https://xugaoyi.com/",
      },
      {
        name: "二丫讲梵",
        desc: "💻学习📝记录🔗分享",
        avatar: "https://wiki.eryajf.net/img/logo.png",
        link: "https://wiki.eryajf.net/",
      },
      {
        name: "Weibw",
        desc: "一个没有梦想的咸鱼",
        avatar: "https://cdn.jsdelivr.net/gh/Weibw162/image-hosting@dev/杂录/image.735febsv1zo0.webp",
        link: "http://weibw162.com/",
      },
      {
        name: "风祈的时光录",
        desc: "主要是Java技术栈的博客，比较偏原理，源码类型的博主",
        avatar: "https://npm.elemecdn.com/lql_static@latest/avatar/1.jpg",
        link: "https://imlql.cn/",
      },
      {
        name: "One",
        desc: "明心静性，爱自己",
        avatar: "https://onedayxyy.cn/img/xyy-touxiang.png",
        link: "https://onedayxyy.cn/",
      },
      {
        name: "Hyde Blog",
        desc: "人心中的成见是一座大山",
        avatar: "https://teek.seasir.top/avatar/avatar.webp",
        link: "https://teek.seasir.top/",
      },
    ],
    autoPage: true,
    titleClick: router => router.go("/friends"), // 查看更多友链
  },
  footerInfo: {
    copyright: {
      createYear: 2021,
      suffix: "Teeker Blog",
    },
    customHtml: `<span id="runtime"></span>`, // 搭配 .vitepress/theme/helper/useRuntime.ts 使用
  },
  social: [
    {
      icon: "mdi:github",
      name: "GitHub",
      link: "https://github.com/teekhub",
    },
    {
      icon: "simple-icons:gitee",
      name: "Gitee",
      link: "https://gitee.com/teekhub",
    },
  ],
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  articleShare: { enabled: true },
  comment: {
    provider: "twikoo",
    options: {
      envId: "https://twikoo.youngkbt.cn/",
    },
  },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
      collapsed: true,
    },
  },
  siteAnalytics: [
    {
      provider: "baidu",
      options: {
        id: "83ffffafdd0510006f0ecd327cde6750",
      },
    },
  ],
});
