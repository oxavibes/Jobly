<template>
  <!-- Category -->
  <div class="padding-bottom-60">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="categories">
            <div class="category">
              <div class="icon">
                <bar-chart-2-icon></bar-chart-2-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Accounting / Finance
                  <span>(233)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <edit-icon></edit-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Education
                  <span>(45)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <feather-icon></feather-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Design & Creative
                  <span>(147)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <briefcase-icon></briefcase-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Health Care
                  <span>(87)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <package-icon></package-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Engineer & Architects
                  <span>(367)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <pie-chart-icon></pie-chart-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Marketing & Sales
                  <span>(41)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <command-icon></command-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Garments / Textile
                  <span>(126)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <life-buoy-icon></life-buoy-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Customer Support
                  <span>(161)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <headphones-icon></headphones-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Digital Media
                  <span>(69)</span>
                </a>
              </h5>
            </div>
            <div class="category">
              <div class="icon">
                <radio-icon></radio-icon>
              </div>
              <h5>
                <a href="job-listing.html">
                  Telecommunication
                  <span>(92)</span>
                </a>
              </h5>
            </div>
            <span class="vr vr-1"></span>
            <span class="vr vr-2"></span>
            <span class="vr vr-3"></span>
            <span class="vr vr-4"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Category End -->
</template>

<script>
import {
  BarChart2Icon,
  BriefcaseIcon,
  HeadphonesIcon,
  LifeBuoyIcon,
  CommandIcon,
  PieChartIcon,
  RadioIcon,
  PackageIcon,
  FeatherIcon,
  EditIcon
} from "vue-feather-icons";

export default {
  name: "Category",
  components: {
    BarChart2Icon,
    BriefcaseIcon,
    HeadphonesIcon,
    LifeBuoyIcon,
    CommandIcon,
    PieChartIcon,
    RadioIcon,
    PackageIcon,
    FeatherIcon,
    EditIcon
  }
};
</script>

<style>
</style>