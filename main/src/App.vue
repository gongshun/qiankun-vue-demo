<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/">app-vue-hash</router-link>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/about">about</router-link>
      <span @click="changeParentState">主项目的数据：{{ commonData.parent }}，点击变回1</span>
    </header>
    <div id="appContainer1" v-show="$route.path.startsWith('/app-vue-hash/')"></div>
    <div id="appContainer2" v-show="$route.path.startsWith('/app-vue-history/')"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun';
import router from './router'
import store from './store'

const apps = [
  { 
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer1',
    props: { data : { store, router } }
  },
  { 
    name: 'app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer2',
    props: { data : store }
  }
]

export default {
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
  },
  mounted() {
    // 优先加载当前的子项目
    const path = this.$route.path;
    console.log(path);
    const currentAppIndex = apps.findIndex(item => path.includes(item.name));
    console.log(currentAppIndex);
    if(currentAppIndex !== -1){
      const currApp = apps.splice(currentAppIndex, 1)[0];
      apps.unshift(currApp);
    }
    console.log(apps);
    // loadMicroApp 返回值是 app 的生命周期函数数组
    const loadApps = apps.map(item => loadMicroApp(item))
    console.log(loadApps);
    // 当 tab 页关闭时，调用 loadApps 中 app 的 unmount 函数即可
  },
  methods: {
    changeParentState(){
      this.$store.commit('setCommonData',{ parent: 1 });
    }
  },
}
</script>

<style scoped>
#app{
  height: 100vh;
  text-align: center;
  position: relative;
}
header>a{
  margin: 0 20px;
}
.appContainer{
  background: #ccc;
  padding: 20px;
}
</style>
