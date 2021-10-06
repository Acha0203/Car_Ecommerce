<template>
  <div class="d-flex flex-wrap justify-content-start align-items-center">
    <div
      class="d-flex"
      v-for="(item, index) in selectedItems"
      v-bind:key="index"
    >
      <div class="d-flex pt-4">
        <div
          class="card m-4"
          :style="{
            backgroundImage: 'url(' + item.imgUrl + ')',
          }"
        >
          <div
            class="
              card-body
              d-flex
              flex-column
              justify-content-end
              align-items-start
            "
          >
            <p class="card-title pt-2">{{ item.name }}</p>
            <p class="card-text">Category: {{ item.category }}</p>
            <p class="card-text">Price: ${{ getPriceString(item.price) }}</p>
            <p class="card-text">Date: {{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ItemCard",
  computed: {
    ...mapState(["selectedItems"]),
  },
  methods: {
    getPriceString: function (price) {
      // 価格を文字列に変換しカンマを入れて返す
      let priceString = price.toString(10);

      if (priceString.length <= 6) {
        return (
          priceString.slice(0, priceString.length - 3) +
          "," +
          priceString.slice(priceString.length - 3)
        );
      } else {
        return (
          priceString.slice(0, priceString.length - 6) +
          "," +
          priceString.slice(priceString.length - 6, priceString.length - 3) +
          "," +
          priceString.slice(priceString.length - 3)
        );
      }
    },
  },
};
</script>

<style scoped>
.card {
  width: 18rem;
  height: 27rem;
  border-radius: 5%;
  filter: drop-shadow(0 0 0.4rem #a7a7a7);
  background-size: 100%;
  background-repeat: no-repeat;
}

.card-title {
  font-size: 2rem;
}

.card-text {
  font-size: 1.3rem;
}

.card-img-top {
  width: 100%;
  object-fit: cover;
}

.container-item-img {
  max-width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
</style>