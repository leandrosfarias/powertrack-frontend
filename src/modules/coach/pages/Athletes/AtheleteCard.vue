<script setup lang="ts">
import { type Athlete } from '../../types/types';

const props = defineProps<{
    athlete?: Athlete;
}>()
</script>

<template>
    <div class="athelete-card">
        <h3>{{ athlete?.complete_name }}</h3>
        <p>Email: {{ athlete?.email }}</p>
        <p>Data de Nascimento: {{ athlete?.birthdate }}</p>
    </div>
</template>

<style scoped lang="scss">
.athelete-card {
    background-color: #3c3f40;
    padding: 1rem;
    border-radius: 8px;
    margin-bottom: 1rem;

    h3 {
        margin: 0 0 0.5rem 0;
    }

    p {
        margin: 0.25rem 0;
    }
}
</style>