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
import { registerMicroApps, start } from 'qiankun';
import VueI18n from 'vue-i18n'

console.log(ELEMENT.lang.en,'ELEMENT.lang.en');
const i18n = new VueI18n({
  locale: 'zh-cn',
  messages:{
    en: {
      message: 'hello',
    },
    'zh-cn': {
      message: '你好',
    }
  }
})

Vue.config.productionTip = false

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");

registerMicroApps([
  { 
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router } }
  },
  { 
    name: 'app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer', 
    activeRule: '/app-vue-history',
    props: { data : store }
  },
]);

start();
