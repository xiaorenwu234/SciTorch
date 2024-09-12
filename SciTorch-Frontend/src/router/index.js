import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/search',
            name: 'search',
            component: () => import('../views/SearchView.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/LoginView.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('../views/RegisterView.vue')
        },
        {
            path: '/forget-password',
            name: 'forget-password',
            component: () => import('../views/ForgetPasswordView.vue')
        },
        {
            path: '/pdf-detail',
            name: 'pdf-detail',
            component: () => import('../views/PdfDetailView.vue')
        }
    ]
})

export default router
