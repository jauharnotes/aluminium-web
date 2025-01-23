<template>
  <main class="flex-1 bg-bg-color overflow-hidden">
    <div class="container px-4 mx-auto min-h-screen relative mb-16">
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
  </main>
</template>
