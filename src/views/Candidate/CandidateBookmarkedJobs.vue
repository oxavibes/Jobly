<template>
  <div class="dashboard-bookmarked">
    <h4 class="bookmark-title">06 Job Bookmarked</h4>
    <div class="bookmark-area">
      <job-item
        :isClosable="true"
        :job="job"
        v-for="(job, key) in jobList"
        :key="key + job.title"
      ></job-item>
    </div>
  </div>
</template>

<script>
import JobItem from "@/components/JobItem";

export default {
  name: "CandidateBookmarkedJobs",
  components: {
    JobItem
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
          companyLogo: require("../../../public/assets/images/job/company-logo-1.png")
        },
        {
          title: "Project Manager",
          company: "Degoin",
          location: "San Francisco",
          type: "Part time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: require("../../../public/assets/images/job/company-logo-2.png")
        },
        {
          title: "Land Developtment Marketer",
          company: "Realouse",
          location: "Washington, D.C.",
          type: "Freelance",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: require("../../../public/assets/images/job/company-logo-3.png")
        },
        {
          title: "Restaurant Team Member - Crew",
          company: "Geologitic",
          location: "New Orleans",
          type: "Temporary",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: require("../../../public/assets/images/job/company-logo-8.png")
        },
        {
          title: "Nutrition Advisor",
          company: "Theoreo",
          location: "New York City",
          type: "Full Time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: require("../../../public/assets/images/job/company-logo-9.png")
        },
        {
          title: "UI Designer",
          company: "Degoin",
          location: "San Francisco",
          type: "Part time",
          deadline: "Deadline: Oct 31, 2020",
          companyLogo: require("../../../public/assets/images/job/company-logo-10.png")
        }
      ]
    };
  }
};
</script>

<style></style>
