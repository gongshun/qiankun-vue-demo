
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';
import HelloWorld from '@/components/HelloWorld.vue'

Vue.config.productionTip = false;

let router = null;
let instance = null;

function render() {
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue-history' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('#appVueHistory');
}

if (!window.__POWERED_BY_QIANKUN__) {
  render();
}
//测试全局变量污染
window.a = 1;
export async function bootstrap() {
  console.log('vue app bootstraped');
}

export async function mount(props) {
  console.log('props from main framework', props);
  if(props.data.commonComponents){
    props.data.commonComponents.HelloWorld = HelloWorld
  }else{
    render();
  }
  // 测试一下 body 的事件，不会被沙箱移除
  // document.body.addEventListener('click', e => console.log('document.body.addEventListener'))
  // document.body.onclick = e => console.log('document.body.addEventListener')
}

export async function unmount() {
  if(instance){
    instance.$destroy();
    instance.$el.innerHTML = "";
    instance = null;
    router = null;
  }
}
