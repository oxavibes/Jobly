<template>
  <div class="searchAndFilter-wrapper">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="searchAndFilter-block">
            <div class="searchAndFilter">
              <form action="#" class="search-form">
                <input type="text" placeholder="Palabras claves" />
                <!-- <v-select
                  v-model="selectedLocation"
                  :options="locationOptions"
                  class="select"
                  id="search-location"
                ></v-select> -->
                <select class="selectpicker" id="search-location">
                  <option value selected>Ubicación</option>
                  <option value="california">California</option>
                  <option value="las-vegas">Las Vegas</option>
                  <option value="new-work">New Work</option>
                  <option value="carolina">Carolina</option>
                  <option value="chicago">Chicago</option>
                  <option value="silicon-vally">Silicon Vally</option>
                  <option value="washington">Washington DC</option>
                  <option value="neveda">Neveda</option>
                </select>
                <select class="selectpicker" id="search-category">
                  <option value selected>Categoría</option>
                  <option value="real-state">Real State</option>
                  <option value="vehicales">Vehicales</option>
                  <option value="electronics">Electronics</option>
                  <option value="beauty">Beauty</option>
                  <option value="furnitures">Furnitures</option>
                </select>
                <button class="button primary-bg">
                  <i class="fas fa-search"></i>Buscar empleo
                </button>
              </form>
              <div class="filter-categories">
                <h4>Categorías</h4>
                <ul>
                  <li>
                    <a href="job-listing.html">
                      <bar-chart-2-icon></bar-chart-2-icon> Diseño / UX
                      <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <edit-3-icon></edit-3-icon> Programación
                      <span>(46)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <feather-icon></feather-icon> Data Science & Analytics
                      <span>(156)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <briefcase-icon></briefcase-icon> Desarrollo Mobile
                      <span>(98)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <package-icon></package-icon> Engineer & Architects
                      <span>(188)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <pie-chart-icon></pie-chart-icon> Marketing Dgital
                      <span>(124)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <command-icon></command-icon> SysAdmin / Devops / Qa
                      <span>(584)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <globe-icon></globe-icon> Soporte
                      <span>(233)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <headphones-icon></headphones-icon> Innovacion y Agilidad
                      <span>(15)</span>
                    </a>
                  </li>
                  <li>
                    <a href="job-listing.html">
                      <radio-icon></radio-icon> Telecomunicaciónes
                      <span>(03)</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VSelect from "@alfsnd/vue-bootstrap-select";
import {
  BarChart2Icon,
  Edit3Icon,
  FeatherIcon,
  BriefcaseIcon,
  PackageIcon,
  PieChartIcon,
  CommandIcon,
  GlobeIcon,
  HeadphonesIcon,
  RadioIcon
} from "vue-feather-icons";

export default {
  name: "search",
  components: {
    BarChart2Icon,
    Edit3Icon,
    FeatherIcon,
    BriefcaseIcon,
    PackageIcon,
    PieChartIcon,
    CommandIcon,
    GlobeIcon,
    HeadphonesIcon,
    RadioIcon
  },
  data() {
    return {
      selectedLocation: "ubicacion",
      locationOptions: [
        { value: "ubicacion", text: "Ubicación" },
        { value: "california", text: "California" },
        { value: "las-vegas", text: "Las Vegas" },
        { value: "new-york", text: "New York" },
        { value: "carolina", text: "Carolina" },
        { value: "chicago", text: "Chicago" },
        { value: "silicon-valley", text: "Silicon Valley" },
        { value: "washington", text: "Washington DC" },
        { value: "neveda", text: "Neveda" }
      ]
    };
  }
};
</script>

<style scoped>
.select {
  width: 50%;
}
</style>
