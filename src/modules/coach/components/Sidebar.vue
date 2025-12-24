<script setup lang="ts">

</script>

<template>
    <div class="sidebar">
        <ul class="sidebar__menu">
            <li>Dashboard</li>
            <li>
                <router-link to="/coach/dashboard/athletes" class="vtnc">
                    Atletas
                </router-link>
            </li>
            <li>Treinos</li>
            <li>Configurações</li>
        </ul>
    </div>
</template>

<style scoped lang="scss">
.sidebar {
    width: 250px;
    height: calc(100vh - 80px);
    background-color: #2c2f30;
    color: #fff;
    padding: 1rem;

    &__menu {
        list-style: none;
        padding: 0;

        a {
            text-decoration: none !important;
        }

        .vtnc {
            color: #fff !important;
            text-decoration: none !important;
        }

        li {
            padding: 0.75rem 1rem;
            cursor: pointer;
            border-radius: 4px;
            transition: background-color 0.3s;

            &:hover {
                background-color: #3c3f40;
            }

            &__link {
                color: #fff;
                text-decoration: none !important;

                &:visited,
                &:active,
                &:focus {
                    color: #fff !important;
                    text-decoration: none !important;
                }

                &:hover {
                    color: var(--primary-color, #ccff00); // Sugestão: use sua cor de destaque no hover
                    text-decoration: none; // Mantém sem sublinhado se preferir
                }
            }
        }
    }
}
</style>