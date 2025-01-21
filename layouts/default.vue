<template>
  <main class="flex-1 bg-bg-color">
    <div
      class="container px-4 mx-auto min-h-screen relative overflow-hidden mb-16"
    >
      <AppHeader />
      <slot />
    </div>
    <AppFooter />
  </main>
</template>
