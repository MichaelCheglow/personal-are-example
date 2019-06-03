import Vue from "vue";
import Router from "vue-router";
import { store } from "@/store/";

import PagePersonalArea from "@/pages/PagePersonalArea.vue";
import PagePayments from "@/pages/PagePayments.vue";
import PagePaymentSuccess from "@/pages/PagePaymentSuccess.vue";
import PagePaymentsHistory from "@/pages/PagePaymentsHistory.vue";
import PageSettings from "@/pages/PageSettings.vue";

Vue.use(Router);

function paymentSuccessGuard(to, from, next) {
  window.console.log(store.state.isPaymentSucceed);
  if (store.state.isPaymentSucceed) {
    next();
  } else {
    next("/personal-area");
  }
}

const routes = [
  {
    path: "/personal-area",
    component: PagePersonalArea
  },
  {
    path: "/payments-history",
    component: PagePaymentsHistory
  },
  {
    path: "/payments",
    component: PagePayments
  },
  {
    path: "/payment-success",
    component: PagePaymentSuccess,
    beforeEnter: paymentSuccessGuard
  },
  {
    path: "/settings",
    component: PageSettings
  }
];

const router = new Router({
  routes,
  mode: "history"
});

export default router;
