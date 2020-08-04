<template>
  <div class="job-list">
    <div class="thumb">
      <a href="#">
        <img :src="src" class="img-fluid" alt="Company Logo" />
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
        <a v-if="isClosable" href="#" class="bookmark-remove"
          ><i class="fas fa-times"></i
        ></a>
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
  name: "JobItem",
  props: {
    job: {
      type: Object,
      required: true
    },
    isClosable: {
      type: Boolean,
      default: false
    }
  },
  components: {
    BriefcaseIcon,
    MapPinIcon,
    ClockIcon,
    HeartIcon
  },
  computed: {
    src() {
      return this.job.companyLogo;
    }
  }
};
</script>

<style></style>
