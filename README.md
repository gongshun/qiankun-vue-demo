# 项目说明 qiankun-vue-demo

用`qiankun`来实现`vue`技术栈的前端微服务

`main`是主项目，`app-vue-history`是`history`模式路由的子项目，`app-vue-vite` 是 `vite` 构建的 `vue3` 子项目

## 运行和打包

在根目录下：

先安装依赖： `npm install`，再执行`npm run install-all`为所有项目安装依赖，最后执行`npm run start-all`即可启动所有的项目。

`npm run build-all`可以打包所有`vue`项目，`jQuery`项目不需要打包。

## 分支介绍

- `master` 分支： `qiankun` 的常规基础用法
- `feature/keep-alive` 分支 ：使用 `loadMicroApp` 来实现 `keep-alive` 的tab效果
- `feature/share-component` 分支 ：项目间共享组件的例子
- `feature/routing-page` 分支 ：在主项目的某个路由页面加载子应用
- `develop` 分支 ：修改源码来实现 `keep-alive`，以及公共依赖的复用的例子