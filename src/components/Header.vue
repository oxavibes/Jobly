<template>
  <header class="header-2">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="header-top">
            <div class="logo-area">
              <router-link to="/">
                <img src="../../public/assets/images/logo-2.png" alt />
              </router-link>  
            </div>
            <div class="header-top-toggler">
              <div class="header-top-toggler-button"></div>
            </div>
            <div class="top-nav">
              <div class="dropdown header-top-account login-modals">
                <button
                  class="account-page-link"
                  title="Title"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong"
                >Login</button>
                <button
                  class="account-page-link"
                  title="Title"
                  type="button"
                  data-toggle="modal"
                  data-target="#exampleModalLong2"
                >Registration</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>