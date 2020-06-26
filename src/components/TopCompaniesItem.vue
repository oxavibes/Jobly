<template>
  <div class="company-wrap">
    <div class="thumb">
      <a href="#">
        <img
          :src="require(`../../public/assets/images/company/${company.logo}`)"
          class="img-fluid"
          alt="Company logo"
        />
      </a>
    </div>
    <div class="body">
      <h4>
        <a href="employer-details.html">{{ company.name }}</a>
      </h4>
      <span>{{ company.location }}</span>
      <a href="company-listing.html" class="button">
        {{ company.vacancies }}
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopCompaniesItem",
  props: {
    company: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
</style>