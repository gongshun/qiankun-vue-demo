import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  // umd 打包不支持懒加载的路由
  // { path: '/about', name: 'about', component: () => import('../views/About.vue') },
];
  
export default routes;