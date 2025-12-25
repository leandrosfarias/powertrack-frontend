<script setup lang="ts">
import { ref } from 'vue';
import { createAthlete } from '../../composables/createAthlete';
import router from '../../../../app/router';

const complete_name = ref('');
const email = ref('');
const birthdate = ref('');

function submitForm() {
    createAthlete({
        complete_name: complete_name.value,
        email: email.value,
        birthdate: birthdate.value,
    }).then((newAthlete) => {
        console.log('Athlete created:', newAthlete);
        router.push('/coach/dashboard/athletes');
    }).catch((error) => {
        console.error('Error creating athlete:', error);
    });
}


</script>

<template>
    <form action="" class="form-athlete-create" @submit.prevent="submitForm">
        <h2>Cadastrar Novo Atleta</h2>
        <div>
            <label for="complete_name">Nome Completo:</label>
            <input type="text" id="complete_name" name="complete_name" v-model="complete_name"/>
        </div>
        <div>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" v-model="email"/>
        </div>
        <div>
            <label for="birthdate">Data de Nascimento:</label>
            <input type="date" id="birthdate" name="birthdate" v-model="birthdate"/>
        </div>
        <button type="submit">Cadastrar Atleta</button>
    </form>
</template>

<style scoped lang="scss">
.form-athlete-create {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    background-color: #2c2f30;
    border-radius: 8px;
    color: #fff;

    h2 {
        margin-bottom: 1rem;
    }

    label {
        display: block;
        margin-bottom: 0.5rem;
    }

    input {
        width: 100%;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #555;
        background-color: #3c3f40;
        color: #fff;
    }

    button {
        align-self: flex-start;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        cursor: pointer;

        &:hover {
            background-color: #0056b3;
        }
    }
}
</style>