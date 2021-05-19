<template>
  <div class="about">
    <h1>This is parent home page</h1>
    <div class="container-wrap">
      <div id="appContainer1"></div>
      <div id="appContainer2"></div>
    </div>
  </div>
</template>

<script>
import { loadMicroApp } from 'qiankun';

export default {
  mounted() {
    loadMicroApp({
      name: 'app-vue-hash', 
      entry: 'http://localhost:1111', 
      container: '#appContainer1', 
      props: { data : { defaultPath: '/about' } }
    });
    loadMicroApp({
      name: 'app-vue-hash', 
      entry: 'http://localhost:2222', 
      container: '#appContainer2', 
    })
  },
}
</script>

<style scoped>
h1 {
  color: green;
}
.container-wrap {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  height: 710px;
}
#appContainer1 {
  width: 600px;
  background: #f8b4b4;
}
#appContainer2 {
  width: 600px;
  background: #d3f8b4;
}
</style>