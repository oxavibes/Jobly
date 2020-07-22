<template>
  <select class="selectpicker" v-model="selectModel">
    <option
      :value="value"
      v-for="({ value, text }, index) in options"
      :key="index"
    >
      {{ text }}
    </option>
  </select>
</template>

<script>
export default {
  name: "SelectPicker",
  props: {
    options: {
      type: Array
    },
    selected: {
      type: String
    }
  },
  data() {
    return {
      selectModel: this.selected
    };
  },
  mounted() {
    $(this.$el).selectpicker();
  },
  watch: {
    selected(value) {
      this.selectModel = value;
    },
    selectModel(value) {
      this.$emit("update:selected", value);
    }
  }
};
</script>

<style></style>
