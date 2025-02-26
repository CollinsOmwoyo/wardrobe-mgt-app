<template>
    <div id="app">
        <h2>Welcome to a Gen Z Wardrobe Management App 👕👖</h2>
        
        <!-- Dynamic Routing: Loads the page based on Vue Router -->
        <router-view v-slot="{ Component, route }">
            <component :is="Component" :key="route.path" />
        </router-view>
    </div>
</template>

<script setup>
    // Vue 3 "setup" syntax: No need for export default
</script>

<style scoped>
#app {
    text-align: center;
    font-family: 'Poppins', sans-serif;
    padding: 20px;
}

h2 {
    color: #333;
    margin-bottom: 20px;
}
</style>
