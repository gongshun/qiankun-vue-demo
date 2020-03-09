# qiankun-vue-demo

用`qiankun`来实现`vue`技术栈的前端微服务

`main`是主项目，`app-vue-hash`是`hash`模式路由的子项目，`app-vue-history`是`history`模式路由的子项目

`qiankun`的开发和打包和正常模式一模一样，它使用一个全局变量`__POWERED_BY_QIANKUN__`来区分微前端模式和正常模式，不需要额外的配置和代码。
