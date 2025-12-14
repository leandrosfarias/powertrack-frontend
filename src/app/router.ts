import { createRouter, createWebHistory } from 'vue-router'
import AuthLayout from '../modules/auth/pages/AuthLayout.vue'
import Login from '../modules/auth/pages/Login.vue'
import Register from '../modules/auth/pages/Register.vue'

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
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;