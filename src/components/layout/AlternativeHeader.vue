<template>
  <header class="header-2">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="header-top">
            <div class="logo-area">
              <router-link to="/">
                <img src="../../../public/assets/images/logo-2.png" alt="Logo"/>
              </router-link>
            </div>
            <div class="header-top-toggler">
              <div class="header-top-toggler-button"></div>
            </div>
            <div class="top-nav">
              <div class="dropdown header-top-account">
                <a href="#" class="account-button">My Account</a>
                <div class="account-card">
                  <div class="header-top-account-info">
                    <a href="#" class="account-thumb">
                      <img
                        src="../../../public/assets/images/account/thumb-1.jpg"
                        class="img-fluid"
                        alt=""
                      />
                    </a>
                    <div class="account-body">
                      <h5><a href="#">Robert Chavez</a></h5>
                      <span class="mail">chavez@domain.com</span>
                    </div>
                  </div>
                  <ul class="account-item-list">
                    <li>
                      <a href="#"><span class="ti-user"></span>Account</a>
                    </li>
                    <li>
                      <a href="#"><span class="ti-settings"></span>Settings</a>
                    </li>
                    <li>
                      <a href="#"><span class="ti-power-off"></span>Log Out</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "alternativeHeader"
};
</script>

<style>
</style>