<script setup lang="ts">
import { onMounted, ref, watch } from 'vue';
import Loading from '../../../../components/Loading.vue';
import { useAthletes } from '../../composables/useAthletes';
import ListAthletes from './ListAthletes.vue';
import router from '../../../../app/router';

// const isLoading = ref(true);
const { athletes, fetchAthletes, error, isLoading } = useAthletes();

onMounted(() => {
    fetchAthletes()
});

watch(isLoading, (newVal) => {
    if (!newVal) {
        console.log('Athletes loaded:', athletes.value);
    }
});

function navigateToFormAthlete() {
    router.push('/coach/dashboard/athletes/create');
}
</script>

<template>
    <div class="athletes-page">
        <h2>Atletas</h2>

        <div class="athletes-page__controls">
            
            <div class="athletes-page__controls__search-input">
                <input type="text" placeholder="Nome do atleta" />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
            <button class="athletes-page__controls__search-button">Buscar</button>
            <div class="athletes-page__controls__container-create-athlete-button">
                <button class="athletes-page__button-create-athlete" @click="navigateToFormAthlete()">
                    <span class="athletes-page__button-create-athlete__plus">+</span>
                    Cadastrar Novo Atleta
                </button>
            </div>
            <!-- <div class="athletes-page__loading-container">
                <Loading :loading="true" />
            </div> -->
        </div>

        <div v-if="isLoading" class="athletes-page__loading-container">
            <Loading :loading="isLoading" />
        </div>

        <ListAthletes v-else :athletes="athletes" />
    </div>
</template>

<style scoped lang="scss">
.athletes-page {
    padding: 2rem;
    color: #fff;

    h2 {
        margin-bottom: 1.5rem;
    }

    &__button-create-athlete {
        background-color: #4caf50;
        color: white;
        border: none;
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
            background-color: #45a049;
        }

        &__plus {
            font-weight: bold;
        }
    }

    &__controls {
        display: flex;
        align-items: center;
        gap: 1rem;
        margin-bottom: 2rem;

        &__search-input {
            position: relative;

            input {
                padding: 0.5rem 2.5rem 0.5rem 0.5rem;
                border-radius: 8px;
                border: 1px solid #ccc;
                background-color: #fff;
            }

            i {
                position: absolute;
                right: 0.75rem;
                top: 50%;
                transform: translateY(-50%);
                color: #888;
            }
        }

        &__search-button {
            padding: 0.5rem 1rem;
            border: none;
            border-radius: 4px;
            background-color: #008cba;
            color: white;
            cursor: pointer;

            &:hover {
                background-color: #007bb5;
            }
        }
    }

    &__loading-container {
        height: 200px; // Ajuste conforme necessário
        // width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>