<template>
  <div class="flex flex-col md:flex-row justify-center card">
    <div
      class="container w-full py-6 flex flex-col justify-center px-4 md:px-0"
    >
      <div
        class="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"
      >
        <h3 class="text-color-white font-semibold text-center md:text-left">
          Aluminium
        </h3>
        <ul
          class="flex flex-col md:flex-row md:justify-center space-y-2 md:space-y-0 md:space-x-6 text-center"
        >
          <li
            class="text-color-white cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
            @click="scrollToSection('service')"
          >
            Service
          </li>
          <li
            class="text-color-white cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
            @click="scrollToSection('portofolio')"
          >
            Portofolio
          </li>
          <li
            class="text-color-white cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
            @click="scrollToSection('product')"
          >
            Products
          </li>
          <li
            class="text-color-white cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
          >
            <NuxtLink to="/contact-us"> Contact </NuxtLink>
          </li>
        </ul>

        <div
          class="flex flex-row items-center justify-center space-x-4 mt-4 md:mt-0"
        >
          <a
            href="https://web.facebook.com/profile.php?id=61568342722574"
            target="_blank"
          >
            <Icon
              name="mage:facebook-circle"
              class="w-7 h-7 text-color-white"
              target="_blank"
            />
          </a>
          <a
            href="https://www.tiktok.com/@r2aluminium88?_t=ZS-8tFlgWb4875&_r=1"
            target="_blank"
          >
            <Icon name="mage:tiktok-circle" class="w-7 h-7 text-color-white" />
          </a>
          <a
            href="https://www.instagram.com/r2_aluminium88?igsh=N250ZndydW41d3Vw"
            target="_blank"
          >
            <Icon
              name="mage:instagram-circle"
              class="w-7 h-7 text-color-white"
            />
          </a>
        </div>
      </div>
      <div class="w-full h-[1px] bg-slate-400 mt-4"></div>
      <span class="text-color-white text-sm text-center">
        Copyright @{{ currentYear }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSrolledStore } from "~/stores/scrolled-store";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const currentYear = new Date().getFullYear();

const scrollToSection = (val: string) => {
  const store = useSrolledStore();
  if (route.path === "/") {
    store.scrollToElement(val);
  } else {
    router.push("/");
    setTimeout(() => store.scrollToElement(val), 300);
  }
};
</script>

<style scoped>
.card {
  background: linear-gradient(to bottom, #232839 0%, #12141d 100%);
}
</style>
