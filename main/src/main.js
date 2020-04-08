import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun';

Vue.config.productionTip = false

let app = null;
function render({ appContent, loading }) {
  if (!app) {
    app = new Vue({
      el: '#container',
      router,
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h){
        return h(App, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        })
      } 
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function initApp() {
  render({ appContent: '', loading: false });
}

initApp();

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

registerMicroApps([
  { name: 'app-vue-hash', entry: 'http://localhost:7101', render, activeRule: genActiveRule('/app-vue-hash') },
  { name: 'app-vue-history', entry: 'http://localhost:1314', render, activeRule: genActiveRule('/app-vue-history') },
]);

start();
