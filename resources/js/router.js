import { createRouter, createWebHistory } from "vue-router";

const routes = [
    { path: "/", component: () => import("./Pages/Profile/Welcome.vue") },
    { path: "/dashboard", component: () => import("./Pages/Profile/Dashboard.vue") },
    { path: "/login", component: () => import("./Pages/Auth/Login.vue") },
    { path: "/register", component: () => import("./Pages/Auth/Register.vue") },
];

export default createRouter({
    history: createWebHistory(),
    routes,
});

