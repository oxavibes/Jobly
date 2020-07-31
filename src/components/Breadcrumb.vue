<template>
  <div class="alice-bg padding-top-70 padding-bottom-70">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <div class="breadcrumb-area">
            <h1>
              <slot name="title"></slot>
            </h1>
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb">
                <li
                  class="breadcrumb-item"
                  v-for="(breadcrumb, index) in breadcrumbList"
                  :key="index"
                  :class="{ active: breadcrumb.active }"
                >
                  <router-link :to="breadcrumb.link" active-class="active">
                    {{ breadcrumb.name }}
                  </router-link>
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div class="col-md-6" v-if="showSearch">
          <div class="breadcrumb-form">
            <form action="#">
              <input type="text" placeholder="Palabras claves" />
              <button>
                <search-icon></search-icon>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "vue-feather-icons";

export default {
  name: "Breadcrumb",
  props: {
    showSearch: {
      type: Boolean,
      default: false
    }
  },
  components: {
    SearchIcon
  },
  mounted() {
    this.updateList();
  },
  data() {
    return {
      breadcrumbList: []
    };
  },
  methods: {
    updateList() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  },
  watch: {
    $route() {
      this.updateList();
    }
  }
};
</script>

<style></style>
