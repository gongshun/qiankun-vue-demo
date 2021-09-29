import Vue from 'vue'
import VueRouter from 'vue-router'
import RouterView from '../components/RouterView.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/app-vue-hash',
    name: 'RouterView',
    component: RouterView,
    children: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: 'about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

export default routes
