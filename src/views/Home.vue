<template>
  <div>
    <!-- Login Modal -->
    <app-login-modal></app-login-modal>
    <!-- Login Modal end -->

    <!-- Register Modal -->
    <app-register-modal></app-register-modal>
    <!-- Register Modal end -->

    <!-- Banner -->
    <app-banner></app-banner>
    <!-- Banner end -->

    <!-- Search -->
    <app-search></app-search>
    <!-- Search end -->

    <!-- Category -->
    <app-category></app-category>
    <!-- Category end -->

    <!-- Jobs -->
    <app-jobs></app-jobs>
    <!-- Jobs end -->

    <!-- Top Companies -->
    <app-top-companies></app-top-companies>
    <!-- Top Companies end -->

    <!-- Testimonial -->
    <app-testimonial></app-testimonial>
    <!-- Testimonial end-->

    <!-- Career advice -->
    <app-career-advice></app-career-advice>
    <!-- Career advice end -->
  </div>
</template>

<script>
import appLoginModal from "../components/LoginModal";
import appRegisterModal from "../components/RegisterModal";
import appBanner from "../components/Banner";
import appSearch from "../components/Search";
import appCategory from "../components/Category";
import appJobs from "../components/Jobs";
import appTopCompanies from "../components/TopCompanies";
import appTestimonial from "../components/Testimonial";
import appCareerAdvice from "../components/CareerAdvice";

export default {
  name: "appHome",
  components: {
    appLoginModal,
    appRegisterModal,
    appBanner,
    appSearch,
    appCategory,
    appJobs,
    appTopCompanies,
    appTestimonial,
    appCareerAdvice
  }
};
</script>
