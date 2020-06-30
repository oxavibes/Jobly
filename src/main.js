import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "./globalComponents";

Vue.use(globalComponents);

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    console.log("[created] " + this.$options.name);
  }
});


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
