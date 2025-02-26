<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.fullPath">
            <component :is="Component" />
        </div>
    </router-view>
</template>

