<template>
  <dashboard :menu="menu">
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </dashboard>
</template>

<script>
import Dashboard from "../../components/VDashboard";

export default {
  name: "CandidateHome",
  components: {
    Dashboard
  },
  data() {
    return {
      menu: [
        {
          title: "Tablero",
          icon: "fas fa-home",
          route: "candidate-dashboard"
        },
        {
          title: "Perfil",
          icon: "fas fa-user",
          route: "candidate-profile"
        },
        {
          title: "Postulaciones",
          icon: "fas fa-check-square",
          route: "candidate-applied-jobs"
        },
        {
          title: "Empleos guardados",
          icon: "fas fa-heart",
          route: "candidate-bookmarked-jobs"
        }
      ]
    };
  }
};
</script>

<style></style>