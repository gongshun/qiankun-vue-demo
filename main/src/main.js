import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start, loadMicroApp } from 'qiankun';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

const commonComponents = {};
registerMicroApps([
  { 
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router, loadMicroApp, commonComponents } }
  },
  // { 
  //   name: 'app-vue-history',
  //   entry: 'http://localhost:2222', 
  //   container: '#appContainer', 
  //   activeRule: '/app-vue-history',
  //   props: { data : store }
  // },
]);

// 共享组件必须开启多实例
start({ singular: false });