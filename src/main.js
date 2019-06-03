import Vue from "vue";
import App from "./App.vue";

// Official plugins
import router from "@/router/";
import { store } from "@/store/";

// Third-party plugins
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(Vuelidate);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
