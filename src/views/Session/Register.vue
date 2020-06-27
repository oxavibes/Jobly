<template>
  <div>
    <session>
      <template v-slot:route>
        <router-link to="/login" class="primary-button">
          Inicia sesión
        </router-link>
      </template>

      <template v-slot:content>
        <div class="form-header">
          <h5><i data-feather="edit"></i>Regístrate</h5>
        </div>
        <div class="account-type">
          <label for="idRegisterCan">
            <input id="idRegisterCan" type="radio" name="register" />
            <span>Candidato</span>
          </label>
          <label for="idRegisterEmp">
            <input id="idRegisterEmp" type="radio" name="register" />
            <span>Empleador</span>
          </label>
        </div>
        <form action="#">
          <div class="form-group">
            <input type="text" placeholder="Usuario" class="form-control" />
          </div>
          <div class="form-group">
            <input type="email" placeholder="Email" class="form-control" />
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              class="form-control"
            />
          </div>
          <!-- <div class="more-option terms">
            <div class="mt-0 terms">
              <input
                class="custom-radio"
                type="checkbox"
                id="radio-4"
                name="termsandcondition"
                checked
              />
              <label for="radio-4">
                <span class="dot"></span> I accept the
                <a href="#">terms & conditions</a>
              </label>
            </div>
          </div> -->
          <button class="button primary-bg btn-block">Registrarse</button>
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
            ¿Ya tienes cuenta?
            <router-link to="/login">Inicia sesión</router-link>
          </p>
        </div>
      </template>
    </session>
  </div>
</template>

<script>
import session from "./Session";

export default {
  name: "Register",
  components: {
    session
  }
};
</script>

<style></style>
