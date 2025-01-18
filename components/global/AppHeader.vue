<template>
  <nav class="h-16 flex flex-row justify-between items-center">
    <div>
      <img src="~/assets/images/aluminium-logo.svg" alt="logo" />
    </div>

    <!-- menus -->
    <ul class="flex flex-row items-center justify-center space-x-8">
      <li class="text-white">HOME</li>
      <li class="text-white">ABOUT</li>
      <li class="text-white">PORTOFOLIO</li>
      <li class="text-white">SERVICE</li>
      <li class="text-white">PRODUCT</li>
    </ul>

    <!-- socoal media link -->
    <div class="flex flex-row items-center justify-center space-x-4">
      <a href="">
        <Icon name="mage:facebook-circle" class="w-7 h-7 text-white" />
      </a>
      <a href="">
        <Icon name="mage:tiktok-circle" class="w-7 h-7 text-white" />
      </a>
      <a href="">
        <Icon name="mage:instagram-circle" class="w-7 h-7 text-white" />
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
