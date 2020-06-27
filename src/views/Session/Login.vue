<template>
  <session>
    <template v-slot:route>
      <router-link to="/sign-up" class="primary-button">Regístrate</router-link>
    </template>

    <template v-slot:content>
      <div class="form-header">
        <h5><i data-feather="user"></i>Inicia sesión</h5>
      </div>
      <form action="#">
        <div class="form-group">
          <input type="email" placeholder="Email" class="form-control" />
        </div>
        <div class="form-group">
          <input type="password" placeholder="Password" class="form-control" />
        </div>
        <div class="more-option">
          <div class="mt-0 terms">
            <input
              class="custom-radio"
              type="checkbox"
              id="radio-4"
              name="termsandcondition"
            />
            <label for="radio-4"> <span class="dot"></span> Recordar </label>
          </div>
          <a href="#">Resetear password</a>
        </div>
        <button class="button primary-bg btn-block">Iniciar sesíon</button>
      </form>
      <div class="shortcut-login">
        <!-- <span>Or connect with</span>
        <div class="buttons">
          <a href="#" class="facebook">
            <i class="fab fa-facebook-f"></i>Facebook
          </a>
          <a href="#" class="google"> <i class="fab fa-google"></i>Google </a>
        </div> -->
        <p>
          ¿No tienes cuenta?
          <router-link to="/sign-up">Regístrate</router-link>
        </p>
      </div>
    </template>
  </session>
</template>

<script>
import session from "./Session";

export default {
  name: "Login",
  components: {
    session
  }
};
</script>

<style></style>
