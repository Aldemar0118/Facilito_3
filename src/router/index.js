import Vue from "vue";
import VueRouter from "vue-router";
import RegistroProducto from '../views/RegistroProducto.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "RegistroProducto",
    component: RegistroProducto,
  },
  {
    path: "/listadoproductos",
    name: "listadoproductos",
    component: () => import("../views/ListadoProductos"),
  },
  {
    path: "/edit/:id",
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
    name: "login",
    component: () => import("../views/Login"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
