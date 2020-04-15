<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" >
    <span @click="changeParentState">主项目的数据：{{ commonData.parent }},点击变为2</span>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed: {
    commonData(){
      return this.$root.store.state.commonData;
    }
  },
  mounted() {
    console.log('app-vue-hash Home.vue root',this.$root.store.state.commonData)
  },
  methods: {
    changeParentState(){
      this.$root.store.commit('setCommonData', { parent: 2 });
    }
  },
}
</script>
