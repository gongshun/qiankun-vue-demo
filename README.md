# 项目说明 qiankun-vue-demo

用`qiankun`来实现`vue`技术栈的前端微服务

`main`是主项目，`app-vue-hash`是`hash`模式路由的子项目，`app-vue-history`是`history`模式路由的子项目

`qiankun`的开发和打包和正常模式一模一样，它使用一个全局变量`__POWERED_BY_QIANKUN__`来区分微前端模式和正常模式，不需要额外的配置和代码。

具体的原理分析和介绍可以看：[qiankun 微前端方案实践及总结](https://juejin.im/post/6844904185910018062) 和 [qiankun 微前端实践总结（二）](https://juejin.im/post/6856569463950639117)

## 运行和打包

在根目录下：

先安装依赖： `npm install`，再执行`npm run install-all`为所有项目安装依赖，最后执行`npm run start-all`即可启动所有的项目。

`npm run build-all`可以打包所有`vue`项目，`jQuery`项目不需要打包。


## 分支介绍

- `master` 分支： `qiankun` 的常规基础用法
- `feature/keep-alive` 分支 ：使用 `loadMicroApp` 来实现 `keep-alive`
- `feature/share-component` 分支 ：项目间共享组件的例子
- `develop` 分支 ：修改源码来实现 `keep-alive`，以及公共依赖的复用的例子