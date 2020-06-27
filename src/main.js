// import $ from "jquery";
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import bootstrap from "bootstrap-vue"
import globalComponents from "./globalComponents";

Vue.use(bootstrap)
Vue.use(globalComponents)

Vue.config.productionTip = false;

Vue.mixin({
  created() {
    console.log('[created] ' + this.$options.name)
  },
});

// window.$ = $;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");