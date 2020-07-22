<template>
  <div>
    <div class="call-to-action-box" :class="classes">
      <div class="icon">
        <img :src="src" alt="Illustration" />
      </div>
      <span>¿Eres un</span>
      <h3>{{ role }}</h3>
      <router-link to="/sign-up">
        Regístrate aquí
        <i class="fas fa-arrow-right"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "RegistrationBox",
  props: {
    employer: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    src() {
      if (this.employer)
        return require("../../public/assets/images/register-box/1.png");

      return require("../../public/assets/images/register-box/2.png");
    },
    role() {
      return this.employer ? "Candidato?" : "Empleador?";
    },
    classes() {
      return [{ "candidate-box": this.employer }, "employer-register"];
    }
  }
};
</script>

<style></style>
