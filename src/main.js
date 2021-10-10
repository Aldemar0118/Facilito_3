import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from './plugins/vuetify'

import "bootstrap/dist/css/bootstrap.min.css";


Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: (x) => x(App)
}).$mount("#app");
