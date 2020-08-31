<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <span v-if="isQiankun" @click="changeParentState">主项目的数据：{{ commonData.parent }},点击变为2</span>
    <HelloWorld msg="Welcome to Your Vue.js App1"/>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld: async () => {
      if(window.commonComponents.HelloWorld) return window.commonComponents.HelloWorld
      const app = window.loadMicroApp({
        name: 'app-vue-history',
        entry: 'http://localhost:2222', 
        container: '#hideContainer',
        props: { data: { commonComponents: window.commonComponents } }
      })
      await app.mountPromise;
      console.log(window.commonComponents);
      console.log(app);
      // app.unmount(); 不能卸载，卸载时会去掉样式的
      return window.commonComponents.HelloWorld
    }
  },
  data() {
    return {
      isQiankun: window.__POWERED_BY_QIANKUN__,
    }
  },
  computed: {
    commonData(){
      return this.isQiankun ? this.$root.parentVuex.state.commonData : '';
    }
  },
  methods: {
    changeParentState(){
      if(this.isQiankun){
        this.$root.parentVuex.commit('setCommonData', { parent: 2 });
      }
    }
  },
}
</script>
