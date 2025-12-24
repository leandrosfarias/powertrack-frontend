<script setup lang="ts">
import { type Athlete } from '../../types/types';
import AtheleteCard from './AtheleteCard.vue';

const props = defineProps<{
    athletes?: Array<Athlete>;
}>()
</script>

<template>
    <div class="list-athletes">
        <AtheleteCard
            v-for="athlete in athletes"
            :key="athlete.id"
            :athlete="athlete"
        />
    </div>
</template>

<style scoped lang="scss">

</style>