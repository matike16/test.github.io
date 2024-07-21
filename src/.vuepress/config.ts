import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

// 从环境变量中获取 BASE_URL，默认为 "/"
const base = (process.env.BASE_URL || "/") as "/" | `/${string}/`;

export default defineUserConfig({
  base,
  dest: "src/.vuepress/dist",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
