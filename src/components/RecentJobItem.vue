<template>
  <div class="job-list">
    <div class="thumb">
      <a href="#">
        <img :src="require(`../../public/assets/images/job/${job.companyLogo}`)" class="img-fluid" alt />
      </a>
    </div>
    <div class="body">
      <div class="content">
        <h4>
          <a href="job-details.html">{{ job.title }}</a>
        </h4>
        <div class="info">
          <span class="company">
            <a href="#">
              <briefcase-icon></briefcase-icon> {{ job.company }}
            </a>
          </span>
          <span class="office-location">
            <a href="#"> <map-pin-icon></map-pin-icon> {{ job.location }} </a>
          </span>
          <span class="job-type full-time">
            <a href="#"> <clock-icon></clock-icon> {{ job.type }} </a>
          </span>
        </div>
      </div>
      <div class="more">
        <div class="buttons">
          <a
            href="#"
            class="button"
            data-toggle="modal"
            data-target="#apply-popup-id"
            >Aplicar</a
          >
          <a href="#" class="favourite">
            <heart-icon></heart-icon>
          </a>
        </div>
        <p class="deadline">{{ job.deadline }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import {
  BriefcaseIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon
} from "vue-feather-icons";

export default {
  name: "RecentJobItem",
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  components: {
    BriefcaseIcon,
    MapPinIcon,
    ClockIcon,
    HeartIcon
  }
};
</script>

<style>
</style>