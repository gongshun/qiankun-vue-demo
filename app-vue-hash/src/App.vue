<template>
  <div id="app">
    <div id="nav">
      <router-link to="/app-vue-hash/">Home</router-link> |
      <router-link to="/app-vue-hash/about">About</router-link>
      <p v-if="isQiankun">
        主项目把router传给子项目，子项目用这个router来跳转
        <span @click="goToPage('/about')">parent About</span>
      </p>
      <p v-if="isQiankun">
        子项目用自己的 router-link 来跳转也可以，效果一样
        <router-link to="/about">parent About</router-link>
      </p>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  methods: {
    goToPage(path){
      console.log(this.$root.parentRouter);
      this.$root.parentRouter.push(path);
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
span{
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  margin: 0 15px;
  text-decoration: underline;
}
</style>
