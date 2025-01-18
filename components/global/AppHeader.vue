<template>
  <nav class="h-16 flex flex-row justify-between items-center px-4 md:px-0">
    <div>
      <img src="~/assets/images/aluminium-logo.svg" alt="logo" />
    </div>

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
        class="flex-col md:flex md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 absolute md:static top-16 left-0 w-full md:w-auto bg-bg-color md:bg-transparent"
      >
        <li class="text-color-white font-semibold cursor-pointer">HOME</li>
        <li class="text-color-white font-semibold cursor-pointer">ABOUT</li>
        <li class="text-color-white font-semibold cursor-pointer">
          PORTOFOLIO
        </li>
        <li class="text-color-white font-semibold cursor-pointer">SERVICE</li>
        <li class="text-color-white font-semibold cursor-pointer">PRODUCT</li>
        <li class="text-color-white font-semibold cursor-pointer">CONTACT</li>
      </ul>
    </transition>

    <!-- social media links -->
    <div class="hidden md:flex flex-row items-center justify-center space-x-4">
      <a href="">
        <Icon name="mage:facebook-circle" class="w-7 h-7 text-color-white" />
      </a>
      <a href="">
        <Icon name="mage:tiktok-circle" class="w-7 h-7 text-color-white" />
      </a>
      <a href="">
        <Icon name="mage:instagram-circle" class="w-7 h-7 text-color-white" />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";

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
