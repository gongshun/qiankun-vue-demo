import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

registerMicroApps([
  {
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer1', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router, VueRouter } }
  },
  { 
    name: 'app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer2', 
    activeRule: '/app-vue-history',
    props: { data : store }
  },
],
{
  beforeLoad(app){
    if(app.name === 'app-vue-hash'){
      if(window.Vue2){
        window.Vue = window.Vue2; window.Vue2 = undefined
      }
    }else if(app.name === 'app-vue-history'){
      window.Vue2 = window.Vue; window.Vue = undefined
    }
  },
});

start();
