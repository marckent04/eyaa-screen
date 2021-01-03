import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./plugins/bootstrap-vue";
import "./plugins/vue-animejs";
import "vue2-animate/dist/vue2-animate.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
