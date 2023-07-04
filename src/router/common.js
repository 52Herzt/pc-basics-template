import NProgress from 'nprogress'
import { createRouter, createWebHashHistory } from 'vue-router'

NProgress.configure({
  easing: 'ease',
  speed: 500,
  showSpinner: false,
  trickleSpeed: 200,
  minimum: 0.3,
})

const beforeEach = async (to, from, next) => {
  NProgress.start()
  if (to.meta.requireLogin) {
    // 是否登录，暂未对接直接放行
    next()
  } else {
    next()
  }
}

const afterEach = () => {
  NProgress.done()
}

export default function createRoutes(routes) {
  const finalRoutes = [
    ...routes,
    {
      path: '/:pathMatch(.*)*',
      name: 'errorPage',
      component: () => import(/* webpackChunkName: "error-page" */ '@/views/errorPage/ErrorPage.vue'),
    },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes: finalRoutes,
  })

  router.beforeEach(beforeEach)
  router.afterEach(afterEach)

  return router
}
