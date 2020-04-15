import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render(parentStore) {
  router = new VueRouter({
    routes,
  });
  instance = new Vue({
    router,
    store,
    data(){
      return {
        store: parentStore,
      }
    },
    render: h => h(App),
  }).$mount('#appVueHash');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
//测试全局变量污染
console.log('window.a',window.a)
export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props.data);
  render(props.data);
}

export async function unmount() {
  Vue.prototype.$parentState = undefined;
  instance.$destroy();
  instance = null;
  router = null;
}