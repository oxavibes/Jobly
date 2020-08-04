<template>
  <div class="alice-bg padding-top-70 padding-bottom-70">
    <div class="container no-gliters">
      <div class="row no-gliters">
        <div class="col">
          <div class="dashboard-container">
            <div class="dashboard-content-wrapper">
              <slot name="content"></slot>
            </div>
            <div class="dashboard-sidebar">
              <div class="user-info">
                <div class="thumb">
                  <img
                    src="../../public/assets/dashboard/images/user-1.jpg"
                    class="img-fluid"
                    alt="User image"
                  />
                </div>
                <div class="user-body">
                  <h5>Lula Wallace</h5>
                  <span>@username</span>
                </div>
              </div>
              <div class="profile-progress">
                <div class="progress-item">
                  <div class="progress-head">
                    <p class="progress-on">Perfil</p>
                  </div>
                  <div class="progress-body">
                    <div class="progress">
                      <div
                        class="progress-bar"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style="width: 0;"
                      ></div>
                    </div>
                    <p class="progress-to">70%</p>
                  </div>
                </div>
              </div>
              <div class="dashboard-menu">
                <ul>
                  <router-link
                    v-for="{ title, icon, route } in menu"
                    tag="li"
                    active-class="active"
                    :to="{ name: route }"
                    :key="title"
                    exact
                  >
                    <i :class="icon"></i>
                    <a>
                      {{ title }}
                    </a>
                  </router-link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VDashboard",
  props: {
    menu: {
      type: Array,
      required: true
    }
  }
};
</script>

<style></style>
