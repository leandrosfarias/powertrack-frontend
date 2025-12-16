<script></script>
<template>
    <form class="register-form">
        <h2>Cadastro</h2>
        <label for="">
            <i class="fas fa-user-circle icon"></i>
            Nome completo
        </label>
        <input type="text">
        <label for="">
            <i class="fas fa-envelope icon"></i>
            email
        </label>
        <input type="email">
        <label for="">
            <i class="fas fa-lock icon"></i>
            senha
        </label>
        <input type="password">

        <div class="register-form__buttons-container">
            <button type="submit" class="btn-primary">Cadastrar</button>
            <!-- <button>Login</button> -->
        </div>

        <div class="register-form__login-link-wrapper">
            <span>Já tem uma conta?</span>
            
            <router-link to="/" class="register-form__login-link">
                Fazer Login
            </router-link>
        </div>
    </form>
</template>
<style scoped lang="scss">
.register-form {
    color: #FFF;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        color: #FFF;
        display: flex;
        gap: 8px;
    }

    input {
        padding: 0.75rem;
        border-radius: 6px;
        border: 1px solid #333;
        background: #222;
        color: #fff;

        &:focus {
            outline: 1px solid #666;
        }
    }

    &__buttons-container {
        display: flex;
        flex-direction: column;
        gap: 16px;

        button {
            padding: 0.8rem;
            border-radius: 6px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s, border-color 0.2s;
            border: none;
            font-size: 1.2em;
        }
    }

    button:nth-child(1) { /* O 'Cadastrar' é o quarto elemento, mas queremos o primeiro botão */
        background-color: #5a7cff; /* Cor Primária de Destaque (Azul) */
        color: #000; /* Texto preto para alto contraste no fundo azul */
        margin-top: 1rem; /* Espaço extra para separar dos inputs */
        
        &:hover {
            background-color: #7997ff;
        }
    }

    &__login-link-wrapper {
        display: flex;
        justify-content: center; /* Centraliza a mensagem e o link */
        align-items: center;
        gap: 0.5rem;
        margin-top: 0.5rem; /* Espaço após o botão Cadastrar */
        font-size: 0.95em;
        color: #ccc; /* Cor neutra para o span */
    }

    &__login-link {
        color: #5a7cff; /* Cor de destaque para o link */
        font-weight: bold;
        text-decoration: none;
        transition: color 0.2s;
        
        &:hover {
            color: #7997ff;
            text-decoration: underline;
        }
    }

    .btn--primary {
        background-color: #5a7cff; 
        color: #FFF;
        margin-top: 1rem;
        
        &:hover {
            background-color: #7997ff;
        }
    }
}
</style>