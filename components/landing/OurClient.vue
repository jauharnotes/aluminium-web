<template>
  <div
    id="our-client"
    class="mt-10 md:mt-60 flex flex-col items-center space-y-10"
  >
    <div
      class="md:max-w-4xl flex flex-col items-center space-y-4"
      data-aos="fade-up"
    >
      <h2 class="text-color-white text-2xl font-semibold">Our Clients</h2>
      <p class="text-color-white text-center">We Work with the best partners</p>
    </div>

    <div data-aos="fade-up">
      <img
        src="~assets/images/client-web.png"
        alt="client"
        class="md:flex hidden"
      />
      <img
        src="~assets/images/client-mobile.png"
        alt="client"
        class="md:hidden flex"
      />
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
</script>

<style lang="scss" scoped></style>
