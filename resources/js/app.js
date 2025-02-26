import { createApp } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import routes from "./router"; // Ensure this points to router.js

const app = createApp(App);
const router = createRouter({
    history: createWebHistory(),
    routes,
});

app.use(router);
app.mount("#app");
