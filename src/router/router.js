import { createWebHistory, createRouter } from "vue-router";

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: "/",
            name: "Login",
            component: () => import("../views/Login.vue"),
        },
        {
            path: "/about",
            name: "About",
            component: () => import("../views/Admin.vue"),
        },
    ],
});

export default router;