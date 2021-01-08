<template>
  <div>
    <p>layout页面</p>
    <keep-alive :include="loadedRouteNames">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loadedRouteNames: []
    }
  },
  mounted() {
    if (window.__POWERED_BY_QIANKUN__) {
      this.parentProps.onGlobalStateChange(state => {
        const { childRoute } = state['app-vue-hash'];
        // hash 模式需要去掉路由前面的 #/
        console.log('childRoute', childRoute);
        const loadedRoutes = childRoute.map(item => this.$router.resolve(item.slice(2)));
        console.log('loadedRoutes', loadedRoutes);
        const loadedRouteNames = loadedRoutes.map(item => item.route.name);
        console.log('loadedRouteNames', loadedRouteNames);
        this.loadedRouteNames = loadedRouteNames;
      }, true);
    }
  },
}
</script>