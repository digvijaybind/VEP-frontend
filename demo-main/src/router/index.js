import Vue from "vue";
import VueRouter from "vue-router";
import dashboard from "../views/dashboard.vue";
import category from "../views/category.vue";
import manager from "../views/manager.vue";
import admin from "../views/admin.vue";
import participant from "../views/participant.vue";
import about from "../views/about.vue";
import loginAndRegister from "../views/loginAndRegister.vue";
import ForgotPassword from "@/views/ForgotPassword/ForgotPassword";
import ResetPassword from "@/views/ForgotPassword/Resetpassword";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "loginAndRegister",
    component: loginAndRegister,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: dashboard,
  },
  {
    name: "category",
    path: "/category/:id",
    component: category,
  },
  {
    path: "/manager",
    name: "manager",
    component: manager,
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
  },
  {
    path: "/participant",
    name: "participant",
    component: participant,
  },
  {
    path: "/about",
    name: "about",
    component: about,
  },
  {
    path: "/forgot",
    name: "forgot",
    component: ForgotPassword,
  },

  {
    path: "/reset",
    name: "reset",
    component: ResetPassword,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
