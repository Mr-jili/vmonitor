import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const layout = (resolve) => require(['@/views/layout/layout'], resolve)

export const asyncRouter = [
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/views/login/index'], resolve)
  },
  {
    path: '/',
    redirect: '/home',
    component: layout,
    children: [{
      path: '/home',
      name: 'home',
      component: (resolve) => require(['@/views/mr-car/index'], resolve)
    }]
  }
]

export default new Router({
  // mode: 'history', // 后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: asyncRouter
})
