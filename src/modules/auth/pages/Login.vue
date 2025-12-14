<script setup lang="ts">
import { ref, type Ref, computed } from "vue"
import PowerIconLogo from "@/assets/powerlifting_15180074.png"

type RoleType = "Coach" | "Athlete"

const email: Ref<string> = ref("")
const password: Ref<string> = ref("")
const role: Ref<RoleType | null> = ref(null)

const formIsFilled = computed(() => {
    return email.value !== "" && password.value !== "" && role.value !== null
})

</script>
<template>
    <div class="login-page">
        <div class="login-page__container">
            <div class="login-page__img-logo-container">
                <img :src="PowerIconLogo" alt="icone-powerlifting" class="login-page__logo-icon"></img>
            </div>
            <h1 class="login-page__title">PowerTrack</h1>

            <form class="login-page__form" @submit.prevent="handleLogin">
                <div class="login-page__form-label-container">
                    <i class="fas fa-envelope icon"></i>
                    <label class="login-page__label">Email</label>
                </div>
                <input class="login-page__input" type="email" v-model="email" />

                <div class="login-page__form-label-container">
                    <i class="fas fa-lock icon"></i>
                    <label class="login-page__label">Senha</label>
                </div>
                <input class="login-page__input" type="password" v-model="password" />

                <button class="login-page__button" type="submit" :disabled="!formIsFilled">Entrar</button>
                <div class="login-page__actions-footer">
                    <span>Novo por aqui? </span>
                    <a href="#" class="login-page__link--secondary">Cadastre-se</a>
                </div>


                <div class="login-page__select-role">
                    <span>Sou:</span>
                    <div class="login-page__select-role__options">
                        <span @click="role = 'Coach'" :class="{ 'active': role === 'Coach' }">Treinador</span>
                        <span @click="role = 'Athlete'" :class="{ 'active': role === 'Athlete' }">Atleta</span>
                    </div>
                </div>
                <div class="login-page__form-forgot-password-container">
                    <a href="#">Esqueceu a senha?</a>
                </div>
            </form>
        </div>
    </div>
</template>
<style scoped lang="scss">
.login-page {
    background:
    linear-gradient(
      rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)
    ),
    url('@/assets/victor-freitas-nA0UDNDbxys-unsplash.jpg')
      center / cover no-repeat;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #111;

    &__container {
        background: #1c1c1c;
        padding: 2rem 3rem;
        border-radius: 8px;
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
    }

    &__title {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #fff;
        font-size: 1.8rem;
    }

    &__logo-icon {
        width: 80px;
        /* Define um tamanho fixo */
        height: 80px;
        /* Garante que seja quadrado para o círculo */
        object-fit: cover;
        /* Garante que a imagem preencha sem distorcer (se necessário) */
        border-radius: 50%;
        /* Torna o elemento circular */
        margin-bottom: 1rem;
        /* Espaçamento entre o ícone e o título */
        /* Opcional: Adicionar uma borda sutil se a imagem não for circular por si só */
        // border: 2px solid #FFF; 
    }

    &__img-logo-container {
        display: flex;
        justify-content: center;
    }

    &__form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &__form-label-container {
        color: #FFF;
        display: flex;
        gap: 8px;
    }

    &__form-forgot-password-container {
        display: flex;
        justify-content: center;
        margin-top: 0.5rem;


        a {
            text-decoration: none;
            color: #ccc;
            font-size: 0.9rem;
            transition: color 0.2s;

            &:link,
            &:visited,
            &:active {
                color: #ccc;
            }

            &:hover {
                color: #5a7cff;
                text-decoration: underline;
            }
        }
    }

    &__actions-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.25rem;
        /* Reduzindo o espaçamento entre as palavras */
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: #ccc;
        /* Cor neutra para o texto "Novo por aqui?" */
    }

    /* 💡 Estilo do Link Secundário (Cadastre-se) */
    &__link--secondary {
        /* Reset de Link */
        text-decoration: none;

        /* Cor de destaque */
        color: #5a7cff;
        font-weight: bold;
        /* Deixa o link mais proeminente que o span */
        transition: color 0.2s;

        &:link,
        &:visited {
            color: #5a7cff;
        }

        &:hover {
            color: #7997ff;
            text-decoration: underline;
        }
    }

    &__label {
        color: #ccc;
        font-size: 0.9rem;
    }

    &__input {
        padding: 0.75rem;
        border-radius: 6px;
        border: 1px solid #333;
        background: #222;
        color: #fff;

        &:focus {
            outline: 1px solid #666;
        }
    }

    &__button {
        padding: 0.75rem;
        margin-top: 1rem;
        border: none;
        background: #5a7cff;
        color: #fff;
        border-radius: 6px;
        cursor: pointer;
        font-size: 1rem;

        &:hover {
            background: #6c89ff;
        }
    }

    &__button:disabled {
        background: #333;
        opacity: 0.6;
        cursor: not-allowed;

        &:hover {
            background: #333;
            opacity: 0.6;
        }
    }

    &__select-role {
        background-color: #1c1c1c;
        color: #FFF;
        line-height: 20px;

        &__options {
            display: flex;
            align-items: center;
            justify-content: center;
            // background-color: #5a7cff;
            border-radius: 6px;

            span {
                padding: 0.5rem 1.5rem;
                cursor: pointer;
                // border-top-radius: 8px;
                // border-top-left-radius: 8px;
                background-color: #333;
            }

            span:hover {
                background-color: #FFF;
                color: #111;
            }

            span:active {
                background-color: #5a7cff;
            }

            span:nth-child(1) {
                border-top-left-radius: 8px;
                border-bottom-left-radius: 8px;
                border-right: 2px solid #FFF;
            }

            span:nth-child(2) {
                border-top-right-radius: 8px;
                border-bottom-right-radius: 8px;
            }

            &__active {
                background-color: #5a7cff;
                /* Cor Primária de Destaque */
                color: #FFF;
                font-weight: bold;

                &:hover {
                    background-color: #5a7cff;
                    /* Mantém a cor primária no hover */
                }
            }

            .active {
                background-color: #5a7cff;
            }
        }
    }
}
</style>