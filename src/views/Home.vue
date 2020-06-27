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
    <app-recent-job-list></app-recent-job-list>
    <!-- Jobs end -->

    <!-- Top Companies -->
    <app-top-companies></app-top-companies>
    <!-- Top Companies end -->

    <!-- Registration Box -->

    <div class="section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <app-registration-box :employer="true"></app-registration-box>
          </div>
          <div class="col-lg-6">
            <app-registration-box :employer="false"></app-registration-box>
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
import appRecentJobList from "../components/RecentJobList";
import appTopCompanies from "../components/TopCompanies";
import appNewsletter from "../components/Newsletter";
import appRegistrationBox from "../components/RegistrationBox";

export default {
  name: "Home",
  components: {
    appBanner,
    appSearch,
    appRecentJobList,
    appTopCompanies,
    appNewsletter,
    appRegistrationBox
  }
};
</script>
