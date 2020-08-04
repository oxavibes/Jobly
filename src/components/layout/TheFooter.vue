<template>
  <footer class="footer-bg">
    <div class="footer-top border-bottom section-padding-top padding-bottom-40">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="footer-logo">
              <a href="#">
                <img
                  src="../../../public/assets/images/footer-logo.png"
                  class="img-fluid"
                  alt
                />
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="footer-social">
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <facebook-icon></facebook-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <twitter-icon></twitter-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <linkedin-icon></linkedin-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <instagram-icon></instagram-icon>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <youtube-icon></youtube-icon>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom-area">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="footer-bottom">
              <div class="row">
                <div class="col-xl-4 col-lg-5 order-lg-2"></div>
                <div class="col-xl-4 col-lg-4 order-lg-1">
                  <p class="copyright-text">
                    &copy;
                    <a href="#">Jobly</a>
                    {{ currentYear }}, Todos los derechos reservados.
                  </p>
                </div>
                <div class="col-xl-4 col-lg-3 order-lg-3">
                  <div class="back-to-top">
                    <router-link to="" @click.native="scrollToTop">
                      Regresar
                      <i class="fas fa-angle-up"></i>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon
} from "vue-feather-icons";

export default {
  name: "TheFooter",
  components: {
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    InstagramIcon,
    YoutubeIcon
  },
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  }
};
</script>

<style></style>
