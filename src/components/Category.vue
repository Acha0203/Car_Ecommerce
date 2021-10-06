<template>
  <div>
    <b-form-select
      v-model="category"
      :options="brandList"
      class="mt-5 col-12 category-font"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brandList: [
        { text: "Category", value: "" },
        { text: "Tesla", value: "Tesla" },
        { text: "Porsche", value: "Porsche" },
        { text: "Toyota", value: "Toyota" },
        { text: "Honda", value: "Honda" },
        { text: "Mazda", value: "Mazda" },
        { text: "Mercedes-Benz", value: "Mercedes-Benz" },
        { text: "Lexus", value: "Lexus" },
        { text: "Lamborghini", value: "Lamborghini" },
        { text: "Audi", value: "Audi" },
        { text: "BMW", value: "BMW" },
        { text: "Abarth", value: "Abarth" },
        { text: "Alfa Romeo", value: "Alfa-Romeo" },
        { text: "Aston Martin", value: "Aston-Martin" },
        { text: "Ferrari", value: "Ferrari" },
        { text: "Jaguar", value: "Jaguar" },
        { text: "Lotus", value: "Lotus" },
        { text: "MG", value: "MG" },
        { text: "Austin", value: "Austin" },
      ],
    };
  },
  computed: {
    category: {
      get() {
        return this.$store.getters.category;
      },
      set(value) {
        this.$store.dispatch("getCategory", value);
      },
    },
  },
};
</script>

