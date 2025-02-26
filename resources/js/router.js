import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("./Pages/Home.vue") },
    { path: "/items", component: () => import("./Pages/Items.vue") },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});
