<template>
  <div class="mt-20 md:mt-32 flex flex-col items-center space-y-10">
    <div class="md:max-w-4xl flex flex-col items-center space-y-4 mb-10">
      <h2 class="text-color-white text-2xl font-semibold">
        Layanan Terbaik Kami
      </h2>
      <p class="text-color-white text-center">
        Percayakan kebutuhan aluminium, kaca, dan besi Anda pada kami! Dengan
        pengalaman lebih dari 5 tahun, kami siap memberikan solusi terbaik,
        produk berkualitas, dan layanan memuaskan dari lokasi kami
      </p>
    </div>

    <!-- list of product -->
    <div class="w-full space-y-10" v-for="item in products" :key="item.id">
      <div
        v-if="item.id % 2 == 1"
        class="flex flex-row justify-between space-x-6"
      >
        <div class="flex-1">
          <div>
            <h2 class="font-bold text-color-white">Partisi kaca alumunium</h2>
          </div>

          <div class="space-y-1 mb-4 mt-2">
            <h3 class="font-semibold text-color-white">
              Desain modern dan tahan lama
            </h3>
            <p class="text-color-white">
              Kusen aluminium adalah jenis kusen yang memiliki beberapa
              kelebihan, diantaranya: Tahan terhadap karat, hujan, dan
              kelembaban kuat menahan sinar matahari, tidak memerlukan perawatan
              rutin, tahan terhadap rayap. Bisa dibuat dengan desain yang modern
              dan estetis, namun kusen aluminium juga memiliki beberapa
              kelemahan seperti: Variasi bentuk yang terbatas, pemasangan yang
              tepat, maintenance yang rumit, berpontensi mengalami kebocoran
            </p>
          </div>

          <button>
            <span>Start from</span>
            <span>Rp 1.000.000</span>
          </button>
        </div>
        <div class="flex-1">
          <img src="~assets/images/asset-1.png" alt="product" />
        </div>
      </div>

      <!-- flip -->
      <div v-else class="flex flex-row justify-between space-x-6">
        <div class="flex-1">
          <img src="~assets/images/asset-1.png" alt="product" />
        </div>
        <div class="flex-1">
          <div>
            <h2 class="font-bold text-color-white">Partisi kaca alumunium</h2>
          </div>

          <div class="space-y-1 mb-4 mt-2">
            <h3 class="font-semibold text-color-white">
              Desain modern dan tahan lama
            </h3>
            <p class="text-color-white">
              Kusen aluminium adalah jenis kusen yang memiliki beberapa
              kelebihan, diantaranya: Tahan terhadap karat, hujan, dan
              kelembaban kuat menahan sinar matahari, tidak memerlukan perawatan
              rutin, tahan terhadap rayap. Bisa dibuat dengan desain yang modern
              dan estetis, namun kusen aluminium juga memiliki beberapa
              kelemahan seperti: Variasi bentuk yang terbatas, pemasangan yang
              tepat, maintenance yang rumit, berpontensi mengalami kebocoran
            </p>
          </div>

          <button>
            <span>Start from</span>
            <span>Rp 1.000.000</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataProducts = [
  {
    id: 1,
    heading: "Partisi kaca alumunium",
    title: "Desain modern dan tahan lama",
    description:
      "Kusen aluminium adalah jenis kusen yang memiliki beberapa kelebihan, diantaranya: Tahan terhadap karat, hujan, dan kelembaban kuat menahan sinar matahari, tidak memerlukan perawatan rutin, tahan terhadap rayap. Bisa dibuat dengan desain yang modern dan estetis, namun kusen aluminium juga memiliki beberapa kelemahan seperti: Variasi bentuk yang terbatas, pemasangan yang tepat, maintenance yang rumit, berpontensi mengalami kebocoran",
    price: "Rp 1.000.000",
    image: "~assets/images/asset-1.png",
  },
  {
    id: 2,
    heading: "Partisi kaca alumunium",
    title: "Desain modern dan tahan lama",
    description:
      "Kusen aluminium adalah jenis kusen yang memiliki beberapa kelebihan, diantaranya: Tahan terhadap karat, hujan, dan kelembaban kuat menahan sinar matahari, tidak memerlukan perawatan rutin, tahan terhadap rayap. Bisa dibuat dengan desain yang modern dan estetis, namun kusen aluminium juga memiliki beberapa kelemahan seperti: Variasi bentuk yang terbatas, pemasangan yang tepat, maintenance yang rumit, berpontensi mengalami kebocoran",
    price: "Rp 1.000.000",
    image: "~assets/images/asset-1.png",
  },
];
const products = ref(dataProducts);
</script>

<style scoped></style>
