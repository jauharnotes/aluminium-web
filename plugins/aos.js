import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin(() => {
  if (process.client) {
    AOS.init({
      duration: 800, // Durasi animasi dalam milidetik
      easing: "ease-in-out", // Gaya animasi
      once: true, // Hanya animasi satu kali
    });
  }
});
