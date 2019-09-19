import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/index.vue')
    },
  ],
})
// Router.beforeEach(async (to, from, next) => {
//   console.log(to,from,next)
//   // 认证
//   // if (!store.getters.isAuthenticated) {
//   //   if (to.name === "login") {
//   //     return next();
//   //   } else {
//   //     return next({ name: "login" });
//   //   }
//   // }

//   // 授权
//   // if (to.name && !store.getters.hasPermission(to.name)) {
//   //   return next({ name: "403" });
//   // }

//   // next();
// });