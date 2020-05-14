<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/">app-vue-hash</router-link>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/about">about</router-link>
      <span @click="changeParentState">主项目的数据：{{ commonData.parent }}，点击变回1</span>
    </header>
    <div v-if="loading" class="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    content: {
      type: String,
      default: ''
    },
  },
  computed: {
    commonData(){
      return this.$store.state.commonData;
    }
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
  position: relative;
}
.loading{
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  text-align: center;
  line-height: 100vh;
  
  background: rgba(0, 0, 0, 0.2);
}
header>a{
  margin: 0 20px;
}
.appContainer{
  background: #ccc;
  padding: 20px;
}
#childContainer{
  background: #f1f1f1;
}
</style>
