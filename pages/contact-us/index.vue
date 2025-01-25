<template>
  <div class="w-full h-full">
    <div class="mb-4 md:mb-5">
      <div
        id="map"
        data-lng="-6.263784"
        data-lat="106.831564"
        data-zom="12"
        class="w-full h-[420px]"
      >
        <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.162684793099!2d106.8627564!3d-6.372987599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0d94a9b895%3A0x62458b0a1c79d5ed!2sR2%20Aluminium!5e0!3m2!1sen!2sid!4v1737801798923!5m2!1sen!2sid" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> -->
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.162684793099!2d106.8627564!3d-6.372987599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0d94a9b895%3A0x62458b0a1c79d5ed!2sR2%20Aluminium!5e0!3m2!1sen!2sid!4v1737801798923!5m2!1sen!2sid"
          width="100%"
          height="420"
          class="border-0"
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>

    <div class="mt-20">
      <div class="flex flex-wrap justify-around">
        <div
          class="text-center px-4 w-40 my-4 h-40 fadeInDown"
          data-wow-delay=".8s"
        >
          <div
            class="border-2 border-color-white w-80 h-40 rounded-lg px-2 flex flex-col items-center"
          >
            <div
              class="bg-bg-color -mt-14 w-24 h-24 flex flex-row justify-center items-center"
            >
              <Icon
                name="tdesign:location-filled"
                class="w-20 h-20 text-color-white"
              />
            </div>
            <h2 class="text-lg font-semibold text-color-white my-3">
              Address information
            </h2>
            <p class="text-sm text-color-white truncate text-wrap">
              l. Raya Bogor KM 31 No. 10, RT.04/RW 5, Cisalak Ps, Kec.
              Cimanggis, Kota, Kota Depok, Jawa Barat 16452
            </p>
          </div>
        </div>

        <div
          class="text-center px-4 w-40 my-4 h-40 fadeInDown"
          data-wow-delay=".8s"
        >
          <div
            class="border-2 border-color-white w-80 h-40 rounded-lg px-2 flex flex-col items-center"
          >
            <div
              class="bg-bg-color -mt-14 w-24 h-24 flex flex-row justify-center items-center"
            >
              <Icon name="dashicons:email" class="w-20 h-20 text-color-white" />
            </div>
            <h2 class="text-lg font-semibold text-color-white my-3">Mail</h2>
            <p class="text-sm text-color-white truncate">
              procurement@gwiu.co.id
            </p>
          </div>
        </div>
      </div>

      <div class="flex flex-col items-center mt-0 mb-4 md:my-5">
        <h3 class="text-2xl font-bold text-color-white mb-4 text-center">
          Contact Us
        </h3>
        <p class="text-color-white text-center">
          Use our contact form for all information requests or contact us
          directly using the contact information below. All information is
          treated with complete confidentiaty and in accordance with our data
          protection statement.
        </p>
      </div>

      <div class="fadeInLeft">
        <form ref="form" @submit.prevent="sendEmail" class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              class="w-full p-3 border rounded-lg input_form text-color-white"
              placeholder="Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              class="w-full p-3 border rounded-lg input_form text-color-white"
              placeholder="Phone"
              name="user_phone"
              required
            />
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="email"
              class="w-full p-3 border rounded-lg input_form text-color-white"
              placeholder="Email"
              name="user_email"
              required
            />
            <input
              type="text"
              class="w-full p-3 border rounded-lg input_form text-color-white"
              placeholder="Subject"
              required
            />
          </div>

          <textarea
            class="w-full p-3 border rounded-lg input_form text-color-white"
            placeholder="Message"
            rows="4"
            name="message"
            required
          ></textarea>

          <div class="flex justify-center">
            <button
              type="submit"
              class="px-7 py-2 bg-btn-color text-white rounded-lg text-lg"
            >
              <svg
                v-if="loading"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                  class="animate-spin"
                />
              </svg>
              <span v-else class="text-color-black">Send</span>
            </button>
          </div>
        </form>
      </div>

      <Teleport to="body">
        <modal :show="showModal" @close="showModal = false">
          <template #body>
            <SuccessAnimation />
            <h3>Successfully</h3>
          </template>
        </modal>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import SuccessAnimation from "~/animations/SuccessAnimation.vue";
import Modal from "~/components/global/Modal.vue";

const showModal = ref(false);
const form = ref(null);

const sendEmail = () => {
  loading.value = true;

  emailjs
    .sendForm(
      "service_8ikcb4f",
      "template_6cm5gj3",
      form.value,
      "user_YMUJPOLeeQAnXfQuKg7U9"
    )
    .then(
      (result) => {
        console.log("SUCCESS!", result.text);
        loading.value = false;
        showModal.value = true;

        setTimeout(() => {
          showModal.value = false;
        }, 2000);
      },
      (error) => {
        loading.value = false;
        console.error("FAILED...", error.text);
      }
    );
};
</script>

<style scoped>
.input_form {
  background: linear-gradient(to bottom, #232839 0%, #12141d 100%);
}
.fadeInDown {
  animation: fadeInDown 1s;
}

.fadeInLeft {
  animation: fadeInLeft 1s;
}
</style>
