# Apple ID 分享
> 本文档分享ID谨慎使用，注意锁机等情况，凭以下广告消费认证可以来找站主提供解锁。

::: info Apple ID
<GetAppleID />
:::

::: info Apple ID
<GetAppleID />
:::

## 广告推荐


![image](/3da58991b100fd9ec715f3068b403cf.jpg)

全球TK一流号商源头/各国橱窗号，机刷号，自然流，各国店铺等

![image](/a598b120c44bfba5c166c1729036d3c.jpg)

全球TK运营、直播源头/各国实名资料

## 移植到已有的项目

::: tip
需要用到Cloudflare Functions，所以你必须将项目部署在Cloudflare Pages，如果你需要部署在其他地方可以自行修改组件代码。
:::

1.在你的项目根目录创建`functions`目录，拷贝`api-getappleid.js`到`functions`目录下

> Pages Functions 允许您通过使用Cloudflare Workers在 Cloudflare 网络上执行代码来构建全栈应用程序。借助 Functions，您可以引入应用程序方面，例如身份验证、处理表单提交或使用中间件。


2.创建Vue组件 `docs/.vitepress/theme/components/GetAppleID.vue` 或 `.vitepress/theme/components/GetAppleID.vue`

3.在 `theme\index.js` 中注册全局组件

```js{2,6-9}
import DefaultTheme from 'vitepress/theme';
import GetAppleID from "./components/GetAppleID.vue";

export default {
    ...DefaultTheme,
    enhanceApp({app}) { 
      // 注册全局组件
      app.component('GetAppleID' , GetAppleID)
    }
};
```

4.在Markdown文件中引用组件

```
<GetAppleID />
```
