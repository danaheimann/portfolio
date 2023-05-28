import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import('../views/AboutView.vue')
    },
    {
        path: '/pizzaapp',
        name: 'pizzaapp',
        component: () => import('../views/PizzaappView.vue')
    }
]

const router = createRouter({
    mode: 'history',
    history: createWebHashHistory(),
    routes
})

export default router
