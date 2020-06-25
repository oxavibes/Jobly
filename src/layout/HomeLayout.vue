<template>
  <div>
    <app-header></app-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appHeader from "../components/layout/TheHeader";
import appFooter from "../components/layout/TheFooter";

export default {
  name: "HomeLayout",
  components: {
    appHeader,
    appFooter
  }
};
</script>
