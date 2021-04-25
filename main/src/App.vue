<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/">app-vue-hash</router-link>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
      <router-link to="/about">about</router-link>
      <el-select v-model="language" size="small" @change="changeLanguage" placeholder="请选择">
        <el-option label="中文" value="zh-cn"></el-option>
        <el-option label="英文" value="en"></el-option>
      </el-select>
    </header>
    <div id="appContainer"></div>
    <router-view></router-view>
  </div>
</template>

<script>
import { initGlobalState } from 'qiankun';

// 初始化 state
const actions = initGlobalState({});

export default {
  data() {
    return {
      language: 'zh-cn'
    }
  },
  methods: {
    changeLanguage(val){
      this.$i18n.locale = val;
      actions.setGlobalState({ locale: val });
      if(val === 'zh-cn'){
        ELEMENT.locale(ELEMENT.lang.zhCN);
      }else{
        ELEMENT.locale(ELEMENT.lang.en);
      }
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
