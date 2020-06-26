<template>
  <header>
    <nav
      class="navbar navbar-expand-xl absolute-nav transparent-nav cp-nav navbar-light bg-light fluid-nav"
    >
      <router-link to="/" class="navbar-brand">
        <img
          src="../../../public/assets/images/logo.png"
          class="img-fluid"
          alt="Logo"
        />
      </router-link>
      <button
        class="navbar-toggler collapsed"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="account-nav navbar-nav ml-auto">
          <router-link tag="li" to="/login" class="menu-item login-popup">
            <button>Iniciar sesión</button>
          </router-link>
          <router-link tag="li" to="/sign-up" class="menu-item login-popup">
            <button>Regístrate</button>
          </router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "TheHeader"
};
</script>

<style>
</style>