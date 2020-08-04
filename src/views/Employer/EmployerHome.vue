<template>
  <dashboard :user="user" :menu="menu">
    <template v-slot:content>
      <router-view></router-view>
    </template>
  </dashboard>
</template>

<script>
import Dashboard from "../../components/VDashboard";

export default {
  name: "EmployerHome",
  components: {
    Dashboard
  },
  data() {
    return {
      user: {
        name: "ProIt",
        photo: require("../../../public/assets/dashboard/images/company-logo.png"),
        username: "@proit"
      },
      menu: [
        {
          title: "Tablero",
          icon: "fas fa-home",
          route: "employer-dashboard"
        },
        {
          title: "Perfil",
          icon: "fas fa-user",
          route: "employer-profile"
        },
        {
          title: "Publicar un empleo",
          icon: "fas fa-heart",
          route: "employer-post-job"
        },
        {
          title: "Administrar empleos",
          icon: "fas fa-check-square",
          route: "employer-manage-jobs"
        },
        {
          title: "Administrar candidatos",
          icon: "fas fa-heart",
          route: "employer-manage-candidates"
        }
      ]
    };
  }
};
</script>

<style></style>
