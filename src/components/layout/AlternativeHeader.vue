<template>
  <header class="header-2">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="header-top">
            <div class="logo-area">
              <router-link to="/">
                <img
                  src="../../../public/assets/images/logo-2.png"
                  alt="Logo"
                />
              </router-link>
            </div>
            <div class="header-top-toggler">
              <div class="header-top-toggler-button"></div>
            </div>
            <div class="top-nav">
              <router-link to="/login" class="primary-button">
                Inicia sesíon
              </router-link>
              <router-link to="/sign-up" class="primary-button">
                Regístrate
              </router-link>
              <!-- <div class="dropdown header-top-notification">
                <a href="#" class="notification-button">Notification</a>
                <div class="notification-card">
                  <div class="notification-head">
                    <span>Notifications</span>
                    <a href="#">Mark all as read</a>
                  </div>
                  <div class="notification-body">
                    <a href="home-2.html" class="notification-list">
                      <i class="fas fa-bolt"></i>
                      <p>Your Resume Updated!</p>
                      <span class="time">5 hours ago</span>
                    </a>
                    <a href="#" class="notification-list">
                      <i class="fas fa-arrow-circle-down"></i>
                      <p>Someone downloaded resume</p>
                      <span class="time">11 hours ago</span>
                    </a>
                    <a href="#" class="notification-list">
                      <i class="fas fa-check-square"></i>
                      <p>
                        You applied for Project Manager <span>@homeland</span>
                      </p>
                      <span class="time">11 hours ago</span>
                    </a>
                    <a href="#" class="notification-list">
                      <i class="fas fa-user"></i>
                      <p>You changed password</p>
                      <span class="time">5 hours ago</span>
                    </a>
                    <a href="#" class="notification-list">
                      <i class="fas fa-arrow-circle-down"></i>
                      <p>Someone downloaded resume</p>
                      <span class="time">11 hours ago</span>
                    </a>
                  </div>
                  <div class="notification-footer">
                    <a href="#">See all notification</a>
                  </div>
                </div>
              </div>
              <div class="dropdown header-top-account">
                <a href="#" class="account-button">Mi Cuenta</a>
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
                      <a href="#"><span class="ti-user"></span>Cuenta</a>
                    </li>
                    <li>
                      <a href="#"><span class="ti-settings"></span>Configuracíon</a>
                    </li>
                    <li>
                      <a href="#"><span class="ti-power-off"></span>Cerrar sesíon</a>
                    </li>
                  </ul>
                </div>
              </div> -->
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
@media (max-width: 991px) {
  .header-top .top-nav {
    width: auto;
  }
}
</style>
