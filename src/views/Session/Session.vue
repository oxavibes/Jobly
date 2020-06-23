<template>
  <div>
    <header class="header-2 access-page-nav">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header-top">
              <div class="logo-area">
                <router-link to="/">
                  <img src="../../../public/assets/images/logo-2.png" alt="Logo" />
                </router-link>
              </div>
              <div class="top-nav">
                <slot name="route"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="padding-top-90 padding-bottom-90 access-page-bg">
      <div class="container">
        <div class="row">
          <div class="col-xl-4 col-md-6">
            <div class="access-form">
              <slot name="content"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Session",
  components: {}
};
</script>

<style>
</style>