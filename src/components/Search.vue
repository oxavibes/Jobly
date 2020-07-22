<template>
  <div class="searchAndFilter-wrapper">
    <div class="container">
      <div class="row">
        <div class="col">
          <div class="searchAndFilter-block">
            <div class="searchAndFilter">
              <form action="#" class="search-form">
                <input type="text" placeholder="Palabras claves" />
                <select-picker
                  :selected.sync="selectedLocation"
                  :options.sync="locationOptions"
                ></select-picker>

                <select-picker
                  :selected.sync="selectedCategory"
                  :options.sync="categoryOptions"
                >
                </select-picker>

                <button class="button primary-bg">
                  <i class="fas fa-search"></i>Buscar empleo
                </button>
              </form>
              <div class="filter-categories">
                <h4>Categorías</h4>
                <ul>
                  <li
                    v-for="({ icon, text, quantity }, index) in categoryOptions"
                    :key="index"
                  >
                    <a href="job-listing.html">
                      <component :is="icon" /> {{ text }}
                      <span>{{ quantity }}</span>
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
/* eslint-disable vue/no-unused-components */
import SelectPicker from "../components/SelectPicker";
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
    SelectPicker,
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
      selectedCategory: "category",
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
      ],
      categoryOptions: [
        {
          value: "category",
          text: "Categoría",
          quantity: 233,
          icon: "BarChart2Icon"
        },
        {
          value: "design",
          text: "Diseño / UX",
          quantity: 46,
          icon: "Edit3Icon"
        },
        {
          value: "programming",
          text: "Programación",
          quantity: 156,
          icon: "FeatherIcon"
        },
        {
          value: "data-science",
          text: "Data Science",
          quantity: 98,
          icon: "BriefcaseIcon"
        },
        {
          value: "mobile-dev",
          text: "Desarrollo Mobile",
          quantity: 188,
          icon: "PackageIcon"
        },
        {
          value: "engineering",
          text: "Engineer & Architects",
          quantity: 124,
          icon: "PieChartIcon"
        },
        {
          value: "marketing",
          text: "Marketing Digital",
          quantity: 584,
          icon: "CommandIcon"
        },
        {
          value: "sysadmin",
          text: "SysAdmin / Devops / Qa ",
          quantity: 233,
          icon: "GlobeIcon"
        },
        {
          value: "soporte",
          text: "Soporte",
          quantity: 15,
          icon: "HeadphonesIcon"
        },
        {
          value: "innovation",
          text: "Innovacion y Agilidad ",
          quantity: 5,
          icon: "RadioIcon"
        },
        {
          value: "telecommunications",
          text: "Telecomunicaciónes",
          quantity: 15,
          icon: "BriefcaseIcon"
        }
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
