<template>
  <div>
    <!-- <header class="header-2">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="header-top">
              <div class="logo-area">
                <a href="index.html"><img src="images/logo-2.png" alt=""/></a>
              </div>
              <div class="header-top-toggler">
                <div class="header-top-toggler-button"></div>
              </div>
              <div class="top-nav">
                <div class="dropdown header-top-notification">
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
                  <a href="#" class="account-button">My Account</a>
                  <div class="account-card">
                    <div class="header-top-account-info">
                      <a href="#" class="account-thumb">
                        <img
                          src="images/account/thumb-1.jpg"
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
                        <a href="#"
                          ><span class="ti-settings"></span>Settings</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><span class="ti-power-off"></span>Log Out</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
                <select class="selectpicker select-language" data-width="fit">
                  <option
                    data-content='<span class="flag-icon flag-icon-us"></span> English'
                    >English</option
                  >
                  <option
                    data-content='<span class="flag-icon flag-icon-mx"></span> Español'
                    >Español</option
                  >
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header> -->

    <div class="padding-top-80 section-padding-bottom alice-bg">
      <div class="container">
        <div class="row">
          <div class="col">
            <div
              class="section-padding-150 error-page-wrap text-center white-bg"
            >
              <div class="icon">
                <img
                  src="../../public/assets/images/error.png"
                  class="img-fluid"
                  alt
                />
              </div>
              <h1>Pagina no encontrada</h1>
              <p>Lo sentimos, parece que la pagina que estas buscando no existe.</p>
              <a @click="$router.go(-1)" class="button">Regresar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "errorPage",
};
</script>

<style>
</style>
