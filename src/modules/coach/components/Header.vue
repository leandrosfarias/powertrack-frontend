<script setup lang="ts">
import PowerIconLogo from "@/assets/powerlifting_15180074.png"
</script>
<template>
    <header class="main-header">
        <div class="main-header__logo-container">
          <img :src="PowerIconLogo" alt="icone-powerlifting" class="login-page__logo-icon"></img>
          <h3>Powertrack</h3>
        </div>
    </header>
</template>
<style scoped lang="scss">
.main-header {
    display: flex;
    align-items: center;
    padding: 0 2rem;
    background-color: #3c3f40;
    height: 80px;

    img {
        width: 70px;
        height: 70px;
        object-fit: cover;
        border-radius: 50%;
    }

    &__logo-container {
        display: flex;
        align-items: center;
        gap: 1rem;
        color: #fff;
        font-weight: bolder;
        cursor: pointer;
    }
}
</style>