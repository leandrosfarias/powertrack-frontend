import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../modules/auth/pages/AuthLayout.vue'
import Login from '../modules/auth/pages/Login.vue'
import Register from '../modules/auth/pages/Register.vue'
import CoachDashboard from '../modules/coach/pages/CoachDashboard.vue'
import { useAuthStore } from '../modules/auth/store/authStore'
import Dashboard from '../modules/coach/pages/Dashboard.vue'
import Athletes from '../modules/coach/pages/Athletes/Athletes.vue'
import CreateFormAthlete from '../modules/coach/pages/Athletes/CreateFormAthlete.vue'

const routes = [
    {
        path: '/',
        component: AuthLayout,
        children: [
            {
                path: '',
                name: 'Login',
                component: Login
            },
            {
                path: 'register',
                name: 'Register',
                component: Register
            }
        ],
        meta: { requiresAuth: false },
        name: 'login'
    },
    {
        path: '/coach/dashboard',
        name: 'CoachDashboard',
        component: CoachDashboard,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'dashboard',
                component: Dashboard
            },
            {
                path: 'athletes',
                name: 'athletes',
                component: Athletes
            },
            {
                path: 'athletes/create',
                name: 'create-athlete',
                component: CreateFormAthlete
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach((to, from, next) => {
    const authStore = useAuthStore()

    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next({ path: '/' })
    } else if (to.name === 'login' && authStore.isAuthenticated) {
        next({ name: 'coach-dashboard' })
    } else {
        next()
    }
})

export default router;