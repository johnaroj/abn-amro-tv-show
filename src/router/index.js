import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Show from '@/views/Show.vue'
import Action from '@/views/Action.vue'
import Comedy from '@/views/Comedy.vue'
import Thriller from '@/views/Thriller.vue'
import Drama from '@/views/Drama.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/show/:id',
    name: 'Show',
    component: Show
  },
  {
    path: '/action',
    name: 'Action',
    component: Action
  },
  {
    path: '/comedy',
    name: 'Comedy',
    component: Comedy
  },
  {
    path: '/thriller',
    name: 'Thriller',
    component: Thriller
  },
  {
    path: '/drama',
    name: 'Drama',
    component: Drama
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
