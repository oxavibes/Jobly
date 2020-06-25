<template>
  <div>
    <app-alternative-header></app-alternative-header>

    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import appAlternativeHeader from "../components/layout/AlternativeHeader";
import appFooter from "../components/layout/TheFooter";

export default {
  name: "DefaultLayout",
  components: {
    appAlternativeHeader,
    appFooter
  }
};
</script>
