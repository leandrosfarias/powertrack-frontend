import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const token = ref<string | null>(localStorage.getItem('token'))
    const user = ref<{ name: string; id: number } | null>(null)

    const isAuthenticated = computed(() => !!token.value)

    function setToken(newToken: string) {
        token.value = newToken
        localStorage.setItem('token', newToken)
    }

    function logout() {
        token.value = null
        user.value = null
        localStorage.removeItem('token')
    }

    return { token, user, isAuthenticated, setToken, logout }
})