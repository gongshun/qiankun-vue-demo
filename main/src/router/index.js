import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const childRoute = ['/app-vue-hash','/app-vue-history'];
const isChildRoute = path => childRoute.some(item => path.startsWith(item))
const rawAppendChild = HTMLHeadElement.prototype.appendChild;
const rawAddEventListener = window.addEventListener;
router.beforeEach((to, from, next) => {
  // 从子项目跳转到主项目
  if(isChildRoute(from.path) && !isChildRoute(to.path)){
    HTMLHeadElement.prototype.appendChild = rawAppendChild;
    window.addEventListener = rawAddEventListener;
  }
  next();
});

export default router
