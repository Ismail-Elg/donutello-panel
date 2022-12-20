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
            path: "/admin",
            name: "Admin",
            component: () => import("../views/Admin.vue"),
        },
        {
            path: '/wijzigen',
            name: 'Wijzigen',
            component: () => import("../views/Wijzigen.vue"),
        },
        {
            path: '/donuts/:id',
            component: () => import("../views/Details.vue"),
        },
    ],
});

export default router;