<script setup lang="ts">
import Header from "../components/Header.vue"
import Sidebar from "../components/Sidebar.vue"
import MainContent from "../components/MainContent.vue"
</script>
<template>
    <div class="coach-dashboard">
        <Header />
        <Sidebar />
        <MainContent />
    </div>
    <!-- <h1>Dashboard Treinador</h1> -->
</template>
<style scoped lang="scss">
.coach-dashboard {
    display: grid;
    grid-template-areas:
        "header header"
        "sidebar main";
    grid-template-rows: 80px 1fr;
    grid-template-columns: 250px 1fr;
    height: 100vh;
    background-color: #121212;

    > header {
        grid-area: header;
    }

    > .sidebar {
        grid-area: sidebar;
    }

    > .main-content {
        grid-area: main;
        padding: 1rem;
        color: #fff;
    }
}
</style>