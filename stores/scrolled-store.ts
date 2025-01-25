import { defineStore } from "pinia";

export const useSrolledStore = defineStore("scrolled", {
  state: () => ({}),

  actions: {
    scrollToElement(val: string): void {
      const element = document.getElementById(val);
      if (element) {
        const targetPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const scrollTo = Math.max(targetPosition - 100, 0);

        window.scrollTo({
          top: scrollTo,
          behavior: "smooth",
        });
      }
    },
  },
});
