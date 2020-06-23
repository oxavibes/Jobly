<template>
  <header>
    <nav
      class="navbar navbar-expand-xl absolute-nav transparent-nav cp-nav navbar-light bg-light fluid-nav"
    >
      <a class="navbar-brand" href="index.html">
        <img src="../../../public/assets/images/logo.png" class="img-fluid" alt />
      </a>
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
        <ul class="navbar-nav ml-auto">
          <router-link tag="li" to="/login" class="router-button--transparent">Iniciar sesión</router-link>
          <router-link tag="li" to="/sign-up" class="router-button--transparent">Regístrate</router-link>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style>
.router-button--transparent {
  padding: 9px 30px;
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  color: #ffffff;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  cursor: pointer;
}

.router-button--transparent:hover {
  color: #246df8;
  background: #fff;
  border-color: #fff;
}

.router-button {
  padding: 9px 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  margin-left: 20px;
  background: #f9f9f9;
  border-radius: 3px;
  border: 1px solid rgba(0, 0, 0, 0.08);
}

.router-button:hover {
  /* color: #ffffff; */
  /* background: #246df8; */
  /* border-color: #246df8; */
}

.primary-button {
  padding: 9px 30px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 1.4rem;
  margin-left: 20px;
  background: #f9f9f9;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 3px;
}

.primary-button:hover {
  color: #ffffff;
  background: #246df8;
  border-color: #246df8;
}
</style>