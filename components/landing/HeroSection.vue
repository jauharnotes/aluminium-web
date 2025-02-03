<template>
  <div
    class="mt-14 flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-6 md:space-y-0 px-4 md:px-0"
  >
    <div class="md:w-full">
      <div class="space-y-6 md:w-1/2">
        <h2 class="text-lg md:text-3xl lg:text-4xl font-bold text-color-white">
          PT RESTU KREASI INDO JAYA
        </h2>
        <p class="text-color-white">
          adalah perusahaan yang telah berpengalaman lebih dari 5 tahun dalam
          bidang pengolahan alumunium, kaca, dan bersi. Kami berkomitmen untuk
          menyediakan solusi terbaik bagi kebutuhan konstruksi dan interior
          Anda. Dengan keahlian dan pengalaman yang luas. Berlokasi di Jl. Raya
          Bogor KM 31 No. 10, RT.04/RW 5, Cisalak Ps. Kec. Cimanggis, KOta
          Depok, Jawa Barat 16452, kami siap melayanai kebutuhan Anda dengan
          produk-produk berkualitas dan layanan yang memuaskan.
        </p>

        <div>
          <a
            class="bg-btn-color px-4 py-1 rounded-full font-semibold text-color-black"
            target="_blank"
            href="https://wa.me/+62881011126637?text=Hello,%20R2%20Aluminium"
          >
            PESAN SEKARANG
          </a>
        </div>
      </div>

      <div class="space-y-4 mt-9">
        <div
          class="flex flex-row items-center space-x-4 cursor-pointer"
          @click="scrollToSection('service')"
        >
          <span
            class="w-7 h-7 rounded-full bg-btn-color flex flex-row items-center justify-center"
          >
            <Icon
              name="mdi:customer-service"
              class="h-4 w-4 text-color-black"
            />
          </span>
          <span class="text-color-white font-semibold">SERVICE</span>
        </div>
        <div
          class="flex flex-row items-center space-x-4 cursor-pointer"
          @click="scrollToSection('product')"
        >
          <span
            class="w-7 h-7 rounded-full bg-btn-color flex flex-row items-center justify-center"
          >
            <Icon
              name="mdi:package-variant-closed"
              class="h-4 w-4 text-color-black"
            />
          </span>
          <span class="text-color-white font-semibold">PRODUCTS</span>
        </div>
        <div
          class="flex flex-row items-center space-x-4 cursor-pointer"
          @click="scrollToSection('our-client')"
        >
          <span
            class="w-7 h-7 rounded-full bg-btn-color flex flex-row items-center justify-center"
          >
            <Icon name="zondicons:portfolio" class="h-4 w-4 text-color-black" />
          </span>
          <span class="text-color-white font-semibold">OUR CLIENT</span>
        </div>
        <div
          class="flex flex-row items-center space-x-4 cursor-pointer"
          @click="scrollToSection('contact-us')"
        >
          <span
            class="w-7 h-7 rounded-full bg-btn-color flex flex-row items-center justify-center"
          >
            <Icon name="mdi:phone" class="h-4 w-4 text-color-black" />
          </span>
          <span class="text-color-white font-semibold">CONTACT</span>
        </div>
      </div>
    </div>
    <div
      class="md:absolute md:-right-96 md:-top-60 flex flex-row md:items-end max-w-7xl"
    >
      <img src="~/assets/images/home-2.png" alt="home" class="hidden md:flex" />
      <div
        class="w-[400px] h-[350px] relative overflow-hidden flex flex-row justify-center items-center md:hidden"
      >
        <img
          src="~/assets/images/home-2.png"
          alt="home"
          class="absolute w-[680px] h-[680px] object-contain"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSrolledStore } from "~/stores/scrolled-store";

const router = useRouter();
const route = useRoute();

const scrollToSection = (val: string) => {
  if (val === "contact-us") {
    router.push("/contact-us");
    return;
  }

  const store = useSrolledStore();
  if (route.path === "/") {
    store.scrollToElement(val);
  } else {
    router.push("/");
    setTimeout(() => store.scrollToElement(val), 300);
  }
};
</script>

<style lang="scss" scoped></style>
