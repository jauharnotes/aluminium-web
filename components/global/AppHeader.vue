<template>
  <nav
    class="h-16 flex flex-row justify-between items-center px-4 md:px-0 z-50"
  >
    <NuxtLink to="/">
      <img src="~/assets/images/aluminium-logo.svg" alt="logo" />
    </NuxtLink>

    <!-- Hamburger menu button -->
    <button
      @click="isMenuOpen = !isMenuOpen"
      class="md:hidden text-color-white"
    >
      <Icon name="ri:menu-4-line" class="w-7 h-7" />
    </button>

    <!-- menus -->
    <transition name="slide-fade">
      <ul
        :class="{ hidden: !isMenuOpen, flex: isMenuOpen }"
        class="flex-col md:flex md:flex-row items-center justify-center border-b border-b-[#0c1120] pb-6 md:pb-0 md:border-none space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-bg-color md:bg-transparent"
      >
        <li
          class="text-color-white font-semibold cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
        >
          <NuxtLink to="/"> HOME </NuxtLink>
        </li>
        <li
          class="text-color-white font-semibold cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
          @click="scrollToSection('service')"
        >
          SERVICE
        </li>
        <li
          class="text-color-white font-semibold cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
          @click="scrollToSection('product')"
        >
          PRODUCT
        </li>
        <li
          class="text-color-white font-semibold cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
          @click="scrollToSection('our-client')"
        >
          OUR CLIENT
        </li>
        <li
          @click="scrollToSection('contact-us')"
          class="text-color-white font-semibold cursor-pointer hover:border-b-2 hover:border-yellow-500 transition"
        >
          CONTACT
        </li>
      </ul>
    </transition>

    <!-- social media links -->
    <div class="hidden md:flex flex-row items-center justify-center space-x-4">
      <a href="">
        <Icon name="mage:facebook-circle" class="w-7 h-7 text-color-white" />
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
        <Icon name="mage:instagram-circle" class="w-7 h-7 text-color-white" />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useSrolledStore } from "~/stores/scrolled-store";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();

const scrollToSection = (val: string) => {
  if (val === "contact-us") {
    isMenuOpen.value = false;
    router.push("/contact-us");
    return;
  }

  const store = useSrolledStore();
  if (route.path === "/") {
    isMenuOpen.value = false;
    store.scrollToElement(val);
  } else {
    isMenuOpen.value = false;
    router.push("/");
    setTimeout(() => store.scrollToElement(val), 300);
  }
};

const isMenuOpen = ref(false);
</script>

<style scoped>
nav {
  position: relative;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateY(-10px);
  opacity: 0;
}
</style>
