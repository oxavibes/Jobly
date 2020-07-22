<template>
  <div>
    <!-- Breadcrumb -->
    <breadcrumb></breadcrumb>
    <!-- Breadcrumb End -->

    <!-- Job Listing -->
    <div class="alice-bg section-padding-bottom">
      <div class="container">
        <div class="row no-gutters">
          <div class="col">
            <div class="job-listing-container">
              <div class="filtered-job-listing-wrapper">
                <div class="job-view-controller-wrapper">
                  <div class="job-view-controller">
                    <div class="controller list active">
                      <menu-icon></menu-icon>
                    </div>
                    <div class="controller grid">
                      <grid-icon></grid-icon>
                    </div>
                    <div class="job-view-filter">
                      <select-picker
                        :selected.sync="selectedOption"
                        :options.sync="options"
                        class="selectpicker"
                      ></select-picker>
                      <v-select
                        v-model="selectedOption"
                        :options="options"
                        class="selectpicker"
                      ></v-select>
                    </div>
                  </div>
                  <div class="showing-number">
                    <span>Mostrando 1 – 12 de 28 trabajos</span>
                  </div>
                </div>
                <div class="job-filter-result">
                  <job-item
                    :job="job"
                    v-for="(job, key) in jobList"
                    :key="key + job.title"
                  ></job-item>

                  <apply-job-modal></apply-job-modal>
                </div>
                <div class="pagination-list text-center">
                  <nav class="navigation pagination">
                    <div class="nav-links">
                      <a class="prev page-numbers" href="#">
                        <i class="fas fa-angle-left"></i>
                      </a>
                      <span aria-current="page" class="page-numbers current">
                        1
                      </span>
                      <a class="page-numbers" href="#">2 </a>
                      <a class="page-numbers" href="#">3</a>
                      <a class="page-numbers" href="#">4</a>
                      <a class="next page-numbers" href="#">
                        <i class="fas fa-angle-right"></i>
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
              <div class="job-filter-wrapper">
                <div class="selected-options same-pad">
                  <div class="selection-title">
                    <h4>You Selected</h4>
                    <a href="#">Clear All</a>
                  </div>
                  <ul class="filtered-options"></ul>
                </div>
                <div class="job-filter-dropdown same-pad category">
                  <select class="selectpicker">
                    <option value selected>Category</option>
                    <option value="california">Accounting / Finance</option>
                    <option value="california">Education</option>
                    <option value="california">Design &amp; Creative</option>
                    <option value="california">Health Care</option>
                    <option value="california"
                      >Engineer &amp; Architects</option
                    >
                    <option value="california">Marketing &amp; Sales</option>
                    <option value="california">Garments / Textile</option>
                    <option value="california">Customer Support</option>
                    <option value="california">Digital Media</option>
                    <option value="california">Telecommunication</option>
                  </select>
                </div>
                <div class="job-filter-dropdown same-pad location">
                  <select class="selectpicker">
                    <option value selected>Location</option>
                    <option value="california">Chicago</option>
                    <option value="california">New York City</option>
                    <option value="california">San Francisco</option>
                    <option value="california">Washington</option>
                    <option value="california">Boston</option>
                    <option value="california">Los Angeles</option>
                    <option value="california">Seattle</option>
                    <option value="california">Las Vegas</option>
                    <option value="california">San Diego</option>
                  </select>
                </div>
                <div data-id="job-type" class="job-filter job-type same-pad">
                  <h4 class="option-title">Job Type</h4>
                  <ul>
                    <li class="full-time">
                      <i data-feather="clock"></i>
                      <a href="#" data-attr="Full Time">Full Time</a>
                    </li>
                    <li class="part-time">
                      <i data-feather="clock"></i>
                      <a href="#" data-attr="Part Time">Part Time</a>
                    </li>
                    <li class="freelance">
                      <i data-feather="clock"></i>
                      <a href="#" data-attr="Freelance">Freelance</a>
                    </li>
                    <li class="temporary">
                      <i data-feather="clock"></i>
                      <a href="#" data-attr="Temporary">Temporary</a>
                    </li>
                  </ul>
                </div>
                <div
                  data-id="experience"
                  class="job-filter experience same-pad"
                >
                  <h4 class="option-title">Experience</h4>
                  <ul>
                    <li>
                      <a href="#" data-attr="Fresh">Fresh</a>
                    </li>
                    <li>
                      <a href="#" data-attr="Less than 1 year">
                        Less than 1 year
                      </a>
                    </li>
                    <li>
                      <a href="#" data-attr="2 Year">2 Year</a>
                    </li>
                    <li>
                      <a href="#" data-attr="3 Year">3 Year</a>
                    </li>
                    <li>
                      <a href="#" data-attr="4 Year">4 Year</a>
                    </li>
                    <li>
                      <a href="#" data-attr="5 Year">5 Year</a>
                    </li>
                    <li>
                      <a href="#" data-attr="Avobe 5 Years">Avobe 5 Years</a>
                    </li>
                  </ul>
                </div>
                <div data-id="post" class="job-filter post same-pad">
                  <h4 class="option-title">Date Posted</h4>
                  <ul>
                    <li>
                      <a href="#" data-attr="Last hour">Last hour</a>
                    </li>
                    <li>
                      <a href="#" data-attr="Last 24 hour">Last 24 hour</a>
                    </li>
                    <li>
                      <a href="#" data-attr="Last 7 days">Last 7 days</a>
                    </li>
                    <li>
                      <a href="#" data-attr="Last 14 days">Last 14 days</a>
                    </li>
                    <li>
                      <a href="#" data-attr="Last 30 days">Last 30 days</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Job Listing End -->

    <call-to-action></call-to-action>
  </div>
</template>

<script>
import { MenuIcon, GridIcon } from "vue-feather-icons";
import Breadcrumb from "../../components/Breadcrum";
import SelectPicker from "../../components/SelectPicker";
import JobItem from "../../components/JobItem";
import ApplyJobModal from "../../components/modals/ApplyJobModal";
import CallToAction from "../../components/CallToAction";

export default {
  name: "JobListing",
  components: {
    Breadcrumb,
    SelectPicker,
    JobItem,
    ApplyJobModal,
    CallToAction,
    MenuIcon,
    GridIcon
  },
  data() {
    return {
      selectedOption: "popular",
      options: [
        { text: "Mas recientes", value: "recent" },
        { text: "Mas populares", value: "popular" }
      ],
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
