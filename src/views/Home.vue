<template>
  <div>
    <!-- Banner -->
    <app-banner>
      <h1>Empleos tecnológicos de calidad.</h1>
      <p>
        Jobly te permite postular a trabajos seleccionados en startups y en
        empresas tecnológicas globales.
      </p>
      <div class="short-infos">
        <div class="info">
          <h4>5,862</h4>
          <span>Empleos publicados</span>
        </div>
        <div class="info">
          <h4>240</h4>
          <span>Compañias</span>
        </div>
      </div>
    </app-banner>
    <!-- Banner end -->

    <!-- Search -->
    <app-search></app-search>
    <!-- Search end -->

    <!-- Jobs -->
    <app-recent-jobs></app-recent-jobs>
    <!-- Jobs end -->

    <!-- Top Companies -->
    <app-top-companies></app-top-companies>
    <!-- Top Companies end -->

    <!-- Registration Box -->
    <div class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="call-to-action-box candidate-box">
              <div class="icon">
                <img src="../../public/assets/images/register-box/1.png" alt />
              </div>
              <span>¿Eres un</span>
              <h3>Candidato?</h3>
              <router-link to="/sign-up">
                Regístrate aquí
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="call-to-action-box employer-register">
              <div class="icon">
                <img src="../../public/assets/images/register-box/2.png" alt />
              </div>
              <span>¿Eres Un</span>
              <h3>Empleador?</h3>
              <router-link to="/sign-up">
                Regístrate aquí
                <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Registration Box End -->

    <app-newsletter></app-newsletter>
  </div>
</template>

<script>
import appBanner from "../components/Banner";
import appSearch from "../components/Search";
// import appCategory from "../components/Category";
import appRecentJobs from "../components/RecentJobs";
import appTopCompanies from "../components/TopCompanies";
import appNewsletter from "../components/Newsletter";
// import appTestimonial from "../components/Testimonial";
// import appCareerAdvice from "../components/CareerAdvice";

export default {
  name: "appHome",
  components: {
    appBanner,
    appSearch,
    // appCategory,
    appRecentJobs,
    appTopCompanies,
    appNewsletter
    // appTestimonial,
    // appCareerAdvice
  }
};
</script>
