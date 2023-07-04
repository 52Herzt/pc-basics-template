import createRoutes from './common'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '@/views/login/Login.vue'),
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "entry" */ '@/layout/Layout.vue'),
    children: [
      { path: '', name: 'home', component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home.vue') },
      {
        path: '/aboutUs',
        name: 'aboutUs',
        component: () => import(/* webpackChunkName: "about-us" */ '@/views/aboutUs/AboutUs.vue'),
      },
      {
        path: '/personalCenter',
        name: 'personalCenter',
        component: () => import(/* webpackChunkName: "personal-center" */ '@/views/personalCenter/PersonalCenter.vue'),
        meta: { requireLogin: true },
      },
    ],
  },
]

export default createRoutes(routes)
