import { createRouter, createWebHistory } from "vue-router";

// Lazy loading for better performance
const routes = [
    { path: "/", component: () => import("./Pages/Profile/Home.vue") },
    { path: "/dashboard", component: () => import("./Pages/Profile/Dashboard.vue") },
    { path: "/items", component: () => import("./Pages/Profile/Items.vue") },
    { path: "/welcome", component: () => import("./Pages/Profile/Welcome.vue") },

    // Auth Routes
    { path: "/login", component: () => import("./Pages/Auth/Login.vue") },
    { path: "/register", component: () => import("./Pages/Auth/Register.vue") },
    { path: "/forgot-password", component: () => import("./Pages/Auth/ForgotPassword.vue") },
    { path: "/reset-password", component: () => import("./Pages/Auth/Reset.vue") },
    { path: "/verify-email", component: () => import("./Pages/Auth/VerifyEmail.vue") },
    { path: "/confirm-password", component: () => import("./Pages/Auth/ConfirmPassword.vue") },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
