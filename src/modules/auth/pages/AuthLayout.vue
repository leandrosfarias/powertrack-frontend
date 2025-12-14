<script setup lang="ts">
import PowerIconLogo from "@/assets/powerlifting_15180074.png"
</script>
<template>
  <div class="page">
    <div class="page__container">
      <div class="page__container__header">
        <div class="page__container__header__img-container">
          <img :src="PowerIconLogo" alt="icone-powerlifting" class="login-page__logo-icon"></img>
        </div>
        <h1>PowerTrack</h1>
        <router-view/>
      </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.page {
  background:
    linear-gradient(rgba(0, 0, 0, 0.65),
      rgba(0, 0, 0, 0.65)),
    url('@/assets/victor-freitas-nA0UDNDbxys-unsplash.jpg') center / cover no-repeat;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  &__container {
    background: #1c1c1c;
    padding: 2rem 3rem;
    border-radius: 8px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;

    &__header {
      h1 {
        text-align: center;
        margin-bottom: 1.5rem;
        color: #fff;
        font-size: 1.8rem;
      }

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: 1rem;
      }

      &__img-container {
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>