import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import EventLayout from '../views/event/Layout.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) => ({ page: parseInt(route.query.page) || 1 }),
  },
  {
    path: '/event/:id',
    props: true,
    name: 'EventLayout',
    component: EventLayout,
    children: [
      {
        path: '',
        name: 'EventDetails',
        component: () => import('../views/event/Details.vue'),
      },
      {
        path: 'register',
        name: 'EventRegister',
        component: () => import('../views/event/Register.vue'),
      },
      {
        path: 'edit',
        name: 'EventEdit',
        component: () => import('../views/event/Edit.vue'),
      },
    ],
  },
  {
    path: '/about-us',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/about',
    redirect: { name: 'About' },
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
