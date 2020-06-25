<template>
  <footer class="footer-bg">
    <div class="footer-top border-bottom section-padding-top padding-bottom-40">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="footer-logo">
              <a href="#">
                <img src="../../../public/assets/images/footer-logo.png" class="img-fluid" alt />
              </a>
            </div>
          </div>
          <div class="col-md-6">
            <div class="footer-social">
              <ul class="social-icons">
                <li>
                  <a href="#">
                    <i data-feather="facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i data-feather="youtube"></i>
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
                    <a href="#">
                      Regresar
                      <i class="fas fa-angle-up"></i>
                    </a>
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
export default {
  name: "TheFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style>
</style>