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
    name: "StockProsuctos",
    component: () => import("../views/StockProductos"),
  },
  {
    path: "/add/:id",
    name: "agregarstockproducto",
    component: () => import("../views/AgregarStock"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
