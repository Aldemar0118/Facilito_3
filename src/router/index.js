import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/registroproducto",
    name: "RegistroProducto",
    component: () => import("../views/RegistroProducto"),
  },
  {
    path: "/listadoproductos",
    name: "listadoproductos",
    component: () => import("../views/ListadoProductos"),
  },
  {
    path: "/listadousuarios",
    name: "ListadoUsuarios",
    component: () => import("../views/ListadoUsuarios"),
  },
  {
    path: "/prod/edit/:id",
    name: "edit",
    component: () => import("../views/EditarProducto"),
  },
  {
    path: "/stockproductos",
    name: "stockproductos",
    component: () => import("../views/StockProductos"),
  },
  {
    path: "/edit/:id",
    name: "add",
    component: () => import("../views/AgregarStock"),
  },
  {
    path: "/edit/:id",
    name: "att",
    component: () => import("../views/RetirarStock"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login"),
  },
  {
    path: "/registro",
    name: "RegistroUser",
    component: () => import("../views/RegistroUser"),
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
