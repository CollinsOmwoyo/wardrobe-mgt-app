import { createRouter, createWebHistory } from "vue-router";
import Login from "./Pages/Auth/Login.vue";
import Register from "./Pages/Auth/Register.vue";
import Dashboard from "./Pages/Dashboard.vue";
import Home from "./Pages/Home.vue";

const routes = [
    { path: "/", component: Home },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/dashboard", component: Dashboard, meta: { requiresAuth: true } }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Redirect if user is not logged in
router.beforeEach((to, from, next) => {
    const isAuthenticated = localStorage.getItem("auth_token");
    if (to.meta.requiresAuth && !isAuthenticated) {
        next("/login");
    } else {
        next();
    }
});

export default router;
/*
    In the above code, we have created a Vue router instance and defined some routes. We have also added a global navigation guard to check if the user is authenticated before navigating to the protected route.
    Now, we need to import this router instance in the main.js file and use it in the Vue app.
*/