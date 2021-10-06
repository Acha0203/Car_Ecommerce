<template>
  <div>
    <b-form-select
      v-model="sortBy"
      :options="sortCondition"
      class="mt-5 col-12 category-font"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sortCondition: [
        { text: "Sort by:", value: "" },
        { text: "Price: Low to High", value: "lowToHigh" },
        { text: "Price: Hight to Low", value: "highToLow" },
        { text: "Newest Arrivals", value: "newest" },
      ],
    };
  },
  computed: {
    sortBy: {
      get() {
        return this.$store.getters.sortBy;
      },
      set(value) {
        this.$store.dispatch("getSortCondition", value);
      },
    },
  },
};
</script>

