<template>
  <!-- Jobs -->
  <div class="section-padding alice-bg">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="section-header section-header-2 section-header-with-right-content"
          >
            <h2>Empleos recientes</h2>
            <router-link to="/job-listing" class="header-right">
              + Ver todos los empleos
            </router-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <recent-job-item
            :job="job"
            v-for="(job, index) in jobList"
            :key="index"
          ></recent-job-item>

          <apply-job-modal></apply-job-modal>
        </div>
      </div>
    </div>
  </div>
  <!-- Jobs End -->
</template>

<script>
import ApplyJobModal from "./modals/ApplyJobModal";
import RecentJobItem from "./RecentJobItem";

export default {
  name: "RecentJobList",
  components: {
    RecentJobItem,
    ApplyJobModal
  },
  data() {
    return {
      jobList: [
        {
          title: "Designer Required",
          company: "Theoreo",
          location: "New York City",
          type: "Full Time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: "../../public/assets/images/job/company-logo-1.png"
        },
        {
          title: "Project Manager",
          company: "Degoin",
          location: "San Francisco",
          type: "Part time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: "../../public/assets/images/job/company-logo-1.png"
        },
        {
          title: "Land Developtment Marketer",
          company: "Realouse",
          location: "Washington, D.C.",
          type: "Freelance",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: "../../public/assets/images/job/company-logo-1.png"
        },
        {
          title: "Restaurant Team Member - Crew",
          company: "Geologitic",
          location: "New Orleans",
          type: "Temporary",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: "../../public/assets/images/job/company-logo-1.png"
        },
        {
          title: "Nutrition Advisor",
          company: "Theoreo",
          location: "New York City",
          type: "Full Time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: "../../public/assets/images/job/company-logo-1.png"
        },
        {
          title: "UI Designer",
          company: "Degoin",
          location: "San Francisco",
          type: "Part time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: "../../public/assets/images/job/company-logo-1.png"
        }
      ]
    };
  }
};
</script>

<style>
</style>