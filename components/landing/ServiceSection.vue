<template>
  <div class="mt-10 md:mt-60 flex flex-col items-center space-y-10">
    <div
      class="md:max-w-4xl flex flex-col items-center space-y-4"
      data-aos="fade-up"
    >
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
        v-for="(item, index) in layanan"
        :key="index"
        class="card flex flex-col items-center justify-start space-y-3 rounded-2xl px-4 py-10"
        :data-aos="'fade-up'"
        :data-aos-delay="index * 200"
      >
        <Icon :name="item.icon" class="w-20 h-20 text-color-white" />
        <h3 class="text-color-white text-lg font-semibold">{{ item.title }}</h3>
        <p class="text-color-white text-center">{{ item.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // Animasi berlangsung selama 1 detik
    once: true, // Animasi hanya berjalan sekali
  });
});

const layanan = [
  {
    icon: "solar:diploma-verified-bold",
    title: "Kualitas Produk",
    description:
      "Kami menggunakan bahan baku berkualitas tinggi dan proses produksi yang modern untuk menghasilkan produk yang berkualitas dan tahan lama",
  },
  {
    icon: "fluent:design-ideas-48-filled",
    title: "Desain yg Fleksibel",
    description:
      "Kami dapat menyesuaikan desain produk sesuai dengan kebutuhan dan preferensi Anda",
  },
  {
    icon: "mdi:professional-hexagon",
    title: "Pekerjaan yg Profesional",
    description:
      "Tim kami yang berpengalaman akan memberikan pelayanan terbaik mulai dari konsultasi, pembuatan, hingga pemasangan",
  },
  {
    icon: "solar:tag-price-bold",
    title: "Harga Kompetitif",
    description:
      "Kami menawarkan harga yang kompetitif tanpa mengorbankan kualitas produk",
  },
];
</script>

<style scoped>
.card {
  background: linear-gradient(to bottom, #232839 0%, #12141d 100%);
}
</style>
