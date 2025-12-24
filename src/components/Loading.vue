<script setup lang="ts">
import { ref, watch } from 'vue'
import ProgressSpinner from 'primevue/progressspinner'

const isLoading = ref(true)

const props = defineProps<{
    loading?: boolean
}>()
</script>

<template>
    <div v-if="isLoading" class="loader">
        <ProgressSpinner />
    </div>
</template>

<style scoped lang="scss">
.loader {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}
</style>