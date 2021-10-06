<template>
  <div id="app" class="container">
    <div class="d-flex flex-column justify-content-center align-items-center">
      <div class="d-flex justify-content-start align-items-center col-12">
        <Category class="mx-4" />
        <Sort />
      </div>
      <ItemCard />
    </div>
  </div>
</template>

<script>
import ItemCard from "@/components/ItemCard.vue";
import Category from "@/components/Category.vue";
import Sort from "@/components/Sort.vue";
import { mapState } from "vuex";

export default {
  name: "App",
  components: {
    ItemCard,
    Category,
    Sort,
  },
  created: function () {
    this.$store.dispatch("showAllItems");
  },
  computed: {
    ...mapState(["itemList", "selectedItems"]),
  },
};
</script>
