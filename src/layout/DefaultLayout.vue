<template>
  <div>
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../components/Header";
import appFooter from "../components/Footer";

export default {
  name: "DefaultLayout",
  components: {
    appHeader,
    appFooter
  }
};
</script>
