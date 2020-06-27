/* Owl Carousel */
import OwlCarousel from "vue-owl-carousel";
import VueCarousel from "vue-carousel";

const globalComponents = {
  install(Vue) {
    Vue.component("owlCarousel", OwlCarousel);
    Vue.component("vueCarousel", VueCarousel)
  }
}

export default globalComponents;