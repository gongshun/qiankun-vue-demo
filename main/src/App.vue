<template>
  <div id="app">
    <header>
      <router-link to="/app-vue-hash/">app-vue-hash</router-link>
      <router-link to="/app-vue-history/">app-vue-history</router-link>
    </header>
    <div v-if="loading" class="loading">loading</div>
    <div class="appContainer" v-html="content">content</div>
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
</style>
