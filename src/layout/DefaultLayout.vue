<template>
  <div>
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../components/layout/Header";
import appFooter from "../components/layout/Footer";

export default {
  name: "DefaultLayout",
  components: {
    appHeader,
    appFooter
  }
};
</script>
