<template>
  <div
    id="product"
    class="mt-20 md:mt-32 flex flex-col items-center space-y-10"
  >
    <div
      class="md:max-w-4xl flex flex-col items-center space-y-4 mb-10"
      data-aos="fade-down"
    >
      <h2 class="text-color-white text-2xl font-semibold">
        Layanan Terbaik Kami
      </h2>
      <p class="text-color-white text-center">
        Percayakan kebutuhan aluminium, kaca, dan besi Anda pada kami! Dengan
        pengalaman lebih dari 5 tahun, kami siap memberikan solusi terbaik,
        produk berkualitas, dan layanan memuaskan dari lokasi kami.
      </p>
    </div>

    <!-- List of Products -->
    <div
      class="w-full space-y-10"
      v-for="(item, index) in products"
      :key="item.id"
      :data-aos="index % 2 === 0 ? 'fade-left' : 'fade-right'"
    >
      <div
        v-if="item.id % 2 === 1"
        class="flex flex-col-reverse md:flex-row md:justify-between mb-14 md:mb-0 space-x-0 md:space-x-6 space-y-8 md:space-y-0"
      >
        <div class="flex-1">
          <h2 class="font-bold text-color-white">{{ item.heading }}</h2>
          <div class="space-y-1 mb-4 mt-2">
            <h3 class="font-semibold text-color-white">{{ item.title }}</h3>
            <p class="text-color-white">{{ item.description }}</p>
          </div>
          <button class="bg-btn-color px-5 py-1 rounded-md space-x-2">
            <span class="text-color-black">Start from</span>
            <span class="text-color-black font-semibold">{{ item.price }}</span>
          </button>
        </div>
        <div class="flex-1 mb-4 md:mb-0">
          <img :src="item.image" alt="product" class="w-full h-auto" />
        </div>
      </div>

      <div
        v-else
        class="flex flex-col md:flex-row md:justify-between mb-14 md:mb-0 space-x-0 md:space-x-6 space-y-8 md:space-y-0"
      >
        <div class="flex-1 mb-4 md:mb-0">
          <img :src="item.image" alt="product" class="w-full h-auto" />
        </div>
        <div class="flex-1">
          <h2 class="font-bold text-color-white">{{ item.heading }}</h2>
          <div class="space-y-1 mb-4 mt-2">
            <h3 class="font-semibold text-color-white">{{ item.title }}</h3>
            <p class="text-color-white">{{ item.description }}</p>
          </div>
          <button class="bg-btn-color px-5 py-1 rounded-md space-x-2">
            <span class="text-color-black">Start from</span>
            <span class="text-color-black font-semibold">{{ item.price }}</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // Animasi berlangsung selama 1 detik
    once: true, // Animasi hanya berjalan sekali
  });
});

const dataProducts = [
  {
    id: 1,
    heading: "Partisi kaca alumunium",
    title: "Desain modern dan tahan lama",
    description:
      "Kusen aluminium adalah jenis kusen yang memiliki beberapa kelebihan, diantaranya: Tahan terhadap karat, hujan, dan kelembaban kuat menahan sinar matahari, tidak memerlukan perawatan rutin, tahan terhadap rayap. Bisa dibuat dengan desain yang modern dan estetis, namun kusen aluminium juga memiliki beberapa kelemahan seperti: Variasi bentuk yang terbatas, pemasangan yang tepat, maintenance yang rumit, berpontensi mengalami kebocoran",
    price: "Rp 8.000.000",
    image: "https://i.ibb.co.com/yWv3RGd/asset-1.png",
  },
  {
    id: 2,
    heading: "Pintu Frameless",
    title: "Kombinasi Sempurna Antara Estetika dan Keamanan",
    description:
      "Pintu frameless adalah jenis pintu kaca yang sangat minimalis dan modern. Sesuai namanya, pintu ini tidak memiliki bingkai (frame) sama sekali. Seluruh daun pintu terbuat dari kaca tebal dan kuat, biasanya kaca tempered atau laminated. Desain tanpa bingkai memberikan kesan bersih, luas, dan sangat modern. Tanpa adanya bingkai yang menghalangi, pandangan menjadi lebih luas dan tidak terhalang. Cahaya matahari dapat masuk dengan leluasa, membuat ruangan terasa lebih terang dan lapang. Permukaan kaca yang rata dan tanpa sudut-sudut membuat proses pembersihan menjadi lebih mudah.",
    price: "Rp 1.800.000",
    image: "https://i.ibb.co.com/ZXLvCSX/asset-7.png",
  },
  {
    id: 3,
    heading: "Pintu Aluminium Full Panel",
    title: "Pilihan Model Beragam, Kuat, dan Mudah Perawatan",
    description:
      "Pintu aluminium tidak akan berkarat atau berkarat, sehingga cocok untuk dipasang di area yang sering basah seperti kamar mandi dan dapur. Pintu aluminium dapat bertahan dalam berbagai kondisi cuaca dan penggunaan. Pintu aluminium memiliki tampilan minimalis dan modern yang dapat melengkapi berbagai konsep desain interior dan arsitektur rumah. Ramah lingkungan tidak memancarkan toksin atau zat berbaha-ya yang merugikan lingkungan. Mudah dirawat tidak memerlukan perawatan yang sering, berbeda dengan pintu baja atau kayu yang membutuhkan pengecatan atau pemolesan secara teratur.",
    price: "Rp 2.500.000",
    image: "https://i.ibb.co.com/Jqjrm0v/Asset-3.png",
  },
  {
    id: 4,
    heading: "Jendela Aluminium",
    title: "Dilengkapi dengan berbagai fitur untuk kenyamanan dan keamanan.",
    description:
      "endela aluminium adalah jenis jendela yang menggunakan material aluminium sebagai bingkainya. Aluminium adalah logam ringan namun kuat, tahan karat, dan mudah dibentuk menjadi berbagai desain. Karena kelebihan-kelebihan inilah, jendela aluminium menjadi pilihan populer untuk berbagai jenis bangunan, baik rumah tinggal, perkantoran, maupun bangunan komersial lainnya. Aluminium memiliki bobot yang ringan sehingga mudah diangkut dan dipasang. Meskipun ringan, aluminium memiliki kekuatan yang baik sehingga mampu menahan beban angin dan cuaca ekstrem.",
    price: "Rp 7500.000",
    image: "https://i.ibb.co.com/WPT4F8c/Asset-1.png",
  },
  {
    id: 5,
    heading: "Pintu Kaca",
    title: "Elegan dan Memberikan Kesan Luas Pada Ruangan.",
    description:
      "Pintu kaca memberikan kesan modern dan elegan pada rungan. memungkinkan cahaya matahari masuk ke dalam ruangan sehingga ruangan terasa lebih terang dan lapang. Visibilitas Tinggi sehingga anda dapat melihat dengan jelas apa yang ada di balik pintu kaca. Perawatan Mudah sehingga perawatannya tidak merepotkan. Kaca tempered yang digunakan pada pintu kaca memiliki kekuatan yang tinggi sehingga lebih aman.",
    price: "Rp 1.800.000",
    image: "https://i.ibb.co.com/pLKkh6R/asset-6.png",
  },
  {
    id: 6,
    heading: "Lemari Aluminium",
    title: "Tahan terhadap air dan rayap, serta mudah dibersihkan",
    description:
      "jenis lemari yang menggunakan material aluminium sebagai rangka dan panel utamanya. Aluminium adalah logam ringan namun kuat, tahan karat, dan mudah dibentuk menjadi berbagai desain. Karena kelebihan-kelebihan inilah, lemari aluminium menjadi pilihan populer untuk berbagai keperluan, baik di rumah, perkantoran, maupun industri. memiliki bobot yang ringan sehingga mudah dipindah-kan dan dipasang. Meskipun ringan, aluminium memiliki kekuatan yang baik sehingga mampu menahan beban yang cukup berat.",
    price: "Rp 2.500.000",
    image: "https://i.ibb.co.com/d2RHXqx/asset-10.png",
  },
  {
    id: 7,
    heading: "Kitchen Set",
    title: "Desain Custom, Fungsional, dan Tahan Lama",
    description:
      "Kitchen set adalah perabot dapur yang terdiri dari beberapa komponen yang saling terhubung dan dirancang secara khusus untuk memudahkan aktivitas memasak dan menyiapkan makanan. Komponen-komponen ini biasanya meliputi lemari penyimpanan, meja dapur, wastafel, kompor, dan rak-rak. Penyimpanan: Lemari-lemari yang ada pada kitchen set berfungsi untuk menyimpan peralatan masak, bahan makanan, dan perlengkapan makan. Persiapan Makanan: Meja dapur berfungsi sebagai tempat untuk menyiapkan makanan, memotong bahan makanan, dan menaruh peralatan masak. Pemasakan: Kompor digunakan untuk memasak makanan. Pencucian: Wastafel digunakan untuk mencuci peralatan makan dan bahan makanan.",
    price: "Rp 2.500.000",
    image: "https://i.ibb.co.com/87Tbs7Z/asset-12.png",
  },
  {
    id: 8,
    heading: "Partisi Kaca",
    title: "Membagi Ruangan Tanpa Mengurangi Kesan Luas",
    description:
      "sekat ruangan yang terbuat dari kaca. Dulu, sekat ruangan biasanya terbuat dari tembok atau kayu, namun seiring perkembangan zaman, partisi kaca semakin populer karena memberikan kesan yang lebih modern, luas, dan elegan. Tampilan Modern dan Elegan: Partisi kaca memberikan kesan ruangan yang lebih luas, terang, dan modern.Memisahkan Ruangan Secara Visual: Partisi kaca dapat memisahkan ruangan tanpa membuatnya terasa sempit atau gelap. Membiarkan Cahaya Masuk: Cahaya dapat dengan mudah melewati partisi kaca, sehingga ruangan tetap terang dan terasa lebih lapang. Membuat Ruangan Terlihat Lebih Luas: Partisi kaca menciptakan ilusi ruangan yang lebih besar. Fleksibel: Partisi kaca dapat disesuaikan dengan berbagai desain interior dan mudah dipindahkan jika diperlukan. Mudah Dibersihkan: Permukaan kaca yang halus dan non-porus membuat partisi kaca mudah dibersihkan.",
    price: "Rp 15.000.000",
    image: "https://i.ibb.co.com/hWbY9pL/asset-13.png",
  },
  {
    id: 9,
    heading: "Kanopi",
    title: "Melindungi Dari Panas Matahari dan Hujan",
    description:
      "struktur atap tambahan yang menonjol dari bangunan utama. Fungsinya mirip seperti atap, namun lebih spesifik untuk melindungi area tertentu di luar ruangan dari sinar matahari, hujan, dan cuaca ekstrem lainnya. Kanopi seringkali dipasang di bagian depan rumah (teras), carport (garasi), atau area outdoor lainnya. Pelindung dari Cuaca: Melindungi area di bawahnya dari hujan, sinar matahari langsung, dan debu. Estetika: Meningkatkan tampilan eksterior bangunan, membuat rumah terlihat lebih menarik dan modern. Peningkatan Nilai Jual: Keberadaan kanopi dapat meningkatkan nilai jual properti. Memperluas Ruang: Kanopi bisa menciptakan ruang tambahan semi-out-door yang nyaman untuk bersantai atau aktivitas lainnya.",
    price: "Rp 7500.000",
    image: "https://i.ibb.co.com/cLZVQdz/asset-16.png",
  },
  {
    id: 10,
    heading: "Etalase",
    title: "Menampilkan Produk Anda Dengan Menarik dan Profesional",
    description:
      "sebuah display case atau lemari pajangan yang terbuat dari bahan aluminium. Aluminium dipilih sebagai bahan utama karena memiliki beberapa keunggulan, seperti ringan, kuat, tahan karat, dan mudah dibentuk sesuai dengan desain yang diinginkan. Etalase ini umumnya digunakan untuk memajang berbagai macam produk, baik di toko, butik, maupun showroom. Etalase aluminium dapat dibuat dengan berbagai desain, mulai dari model minimalis hingga klasik. Anda dapat memilih warna dan model yang sesuai dengan gaya toko Anda. Penggunaan kaca pada etalase aluminium memungkinkan produk yang dipajang terlihat jelas dari berbagai sudut.",
    price: "Rp 1.500.000",
    image: "https://i.ibb.co.com/xgvX2KB/Asset-2.png",
  },
  {
    id: 11,
    heading: "Pagar",
    title: "Desain variatif, kuat, dan aman",
    description:
      "Kuat dan Tahan Lama: Besi adalah material yang sangat kuat dan tahan terhadap berbagai kondisi cuaca, seperti hujan, panas, maupun angin kencang. Fleksibilitas Desain: Pagar besi dapat dibuat dengan berbagai desain yang menarik dan menyesuaikan dengan gaya bangunan. Keamanan: Pagar besi memberikan tingkat keamanan yang tinggi karena sulit untuk didobrak atau dipotong. Tahan Karat: Besi yang dilapisi dengan lapisan anti karat akan lebih tahan lama dan tidak mudah berkarat. Harga Terjangkau: Harga pagar besi relatif terjangkau dibandingkan dengan bahan pagar lainnya seperti baja stainless steel.",
    price: "Rp 7500.000",
    image: "https://i.ibb.co.com/n3kpDD1/asset-17.png",
  },
  {
    id: 12,
    heading: "Pintu Lipat Besi Model Selding Tikung",
    title: "Memberikan Keamanan, Kenyamanan, dan Estetika Pada Bangunan.",
    description:
      "Rolling door atau pintu gulung adalah jenis pintu yang terbuat dari beberapa panel datar atau bergelombang yang digulung keatas atau ke bawah secara vertikal menggunakan mekanisme khusus. Ketika pintu dibuka, panel-panel ini akan menggulung ke atas dan tersimpan di dalam kotak di atas ambang pintu. Sebaliknya, ketika pintu ditutup, panel-panel akan turun dan menutupi bukaan pintu. Bahan yang kuat seperti baja dapat memberikan keamanan yang tinggi untuk bangunan. bahan berkualitas baik dapat tahan terhadap berbagai kondisi cuaca seperti hujan, angin, dan sinar matahari. Mudah Dioperasikan secara manual atau otomatis menggunakan remote control.",
    price: "Rp 1.800.000",
    image: "https://i.ibb.co.com/PtPVPJN/asset-19.png",
  },
];
const products = ref(dataProducts);
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
