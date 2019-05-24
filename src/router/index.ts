import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cwjc',
      name: 'cwjc',
      component: () => import('@/views/Cwjc.vue')
    },
    {
      path: '/linkJueseka',
      name: 'linkJueseka',
      component: () => import('@/views/LinkJueseka.vue')
    },
    {
      path: '/xrxqm',
      name: 'xrxqm',
      component: () => import('@/views/Xrxqm.vue')
    },
    {
      path: '/dbxl',
      name: 'dbxl',
      component: () => import('@/views/Dbxl.vue')
    },
    {
      path: '/wssx',
      name: 'wssx',
      component: () => import('@/views/Wssx.vue')
    },
    {
      path: '/xqn1',
      name: 'xqn1',
      component: () => import('@/views/Xqn1.vue')
    },
    {
      path: '/xqn2',
      name: 'xqn2',
      component: () => import('@/views/Xqn2.vue')
    },
    {
      path: '/phgl',
      name: 'phgl',
      component: () => import('@/views/Phgl.vue')
    },
    {
      path: '/jhgl',
      name: 'jhgl',
      component: () => import('@/views/Jhgl.vue')
    },
    {
      path: '/fjzj',
      name: 'fjzj',
      component: () => import('@/views/Fjzj.vue')
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    // }
  ]
})
