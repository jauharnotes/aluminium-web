<template>
  <div class="mt-10 md:mt-60 flex flex-col items-center space-y-10">
    <div class="md:max-w-4xl flex flex-col items-center space-y-4">
      <h2 class="text-color-white text-2xl font-semibold">
        Layanan Terbaik Kami
      </h2>
      <p class="text-color-white text-center">
        Percayakan kebutuhan aluminium, kaca, dan besi Anda pada kami! Dengan
        pengalaman lebih dari 5 tahun, kami siap memberikan solusi terbaik,
        produk berkualitas, dan layanan memuaskan dari lokasi kami
      </p>
    </div>

    <div class="w-full grid grid-cols-1 md:grid-cols-4 gap-4">
      <div
        class="card flex flex-col items-center justify-start space-y-3 rounded-2xl px-4 py-10"
      >
        <Icon
          name="solar:diploma-verified-bold"
          class="w-20 h-20 text-color-white"
        />
        <h3 class="text-color-white text-lg font-semibold">Kualitas Produk</h3>
        <p class="text-color-white text-center">
          Kami menggunakan bahan baku berkualitas tinggi dan proses produksi
          yang modern untuk menghasilkan produk yang berkualitas dan tahan lama
        </p>
      </div>
      <div
        class="card flex flex-col items-center justify-start space-y-3 rounded-2xl px-4 py-10"
      >
        <Icon
          name="fluent:design-ideas-48-filled"
          class="w-20 h-20 text-color-white"
        />
        <h3 class="text-color-white text-lg font-semibold">
          Desain yg Fleksibel
        </h3>
        <p class="text-color-white text-center">
          Kami dapat menyesuaikan desain produk sesuai dengan kebutuhan dan
          preferesnsi Anda
        </p>
      </div>
      <div
        class="card flex flex-col items-center justify-start space-y-3 rounded-2xl px-4 py-10"
      >
        <Icon
          name="mdi:professional-hexagon"
          class="w-20 h-20 text-color-white"
        />
        <h3 class="text-color-white text-lg font-semibold">
          Pekerjaan yg Profesional
        </h3>
        <p class="text-color-white text-center">
          Tim kami yang berpengalaman akan memberikan pelayanan tang terbaik
          mulai dari konsultasi, pembuatan, hingga pemasangan
        </p>
      </div>
      <div
        class="card flex flex-col items-center justify-start space-y-3 rounded-2xl px-4 py-10"
      >
        <Icon name="solar:tag-price-bold" class="w-20 h-20 text-color-white" />
        <h3 class="text-color-white text-lg font-semibold">Harga Kompetitif</h3>
        <p class="text-color-white text-center">
          Kami menawarkan harga yang kompetitif tanpa mengorbankan kialitas
          produk
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.card {
  background: linear-gradient(to bottom, #232839 0%, #12141d 100%);
}
</style>
