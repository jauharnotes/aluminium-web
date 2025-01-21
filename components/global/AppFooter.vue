<template>
  <div class="flex flex-row justify-center card">
    <div class="container w-full py-6 flex flex-col justify-center">
      <div class="flex flex-col md:flex-row md:justify-between">
        <h3 class="text-color-white font-semibold">Aluminium</h3>
        <ul class="flex flex-row justify-center space-x-6">
          <li class="text-color-white cursor-pointer">Service</li>
          <li class="text-color-white cursor-pointer">Portofolio</li>
          <li class="text-color-white cursor-pointer">Product</li>
          <li class="text-color-white cursor-pointer">Contact</li>
        </ul>

        <div
          class="hidden md:flex flex-row items-center justify-center space-x-4"
        >
          <a href="">
            <Icon
              name="mage:facebook-circle"
              class="w-7 h-7 text-color-white"
            />
          </a>
          <a href="">
            <Icon name="mage:tiktok-circle" class="w-7 h-7 text-color-white" />
          </a>
          <a href="">
            <Icon
              name="mage:instagram-circle"
              class="w-7 h-7 text-color-white"
            />
          </a>
        </div>
      </div>
      <div class="w-full h-[1px] bg-slate-400 mt-1 mb-1"></div>
      <span class="text-color-white text-sm">Copyright @2024</span>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  background: linear-gradient(to bottom, #232839 0%, #12141d 100%);
}
</style>
