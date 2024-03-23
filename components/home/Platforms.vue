<template>
  <section class="mt-4">
    <div class="text-center">
      <h3 class="text-base text-wize-primary font-medium">
        Nuestras plataformas
      </h3>

      <h2
        class="text-3xl tracking-[-1.92px] font-semibold mt-4 md:mt-2 md:text-[40px] lg:max-w-[954px] lg:mx-auto"
      >
        Explora nuestras plataformas para descubrir cómo potencian los negocios
        de nuestros clientes
      </h2>
    </div>

    <swiper class="swiper swiper-platforms mt-10" :options="swiperOptions">
      <swiper-slide
        class="flex justify-center items-center"
        v-for="(item, i) in platformsList"
        :key="i"
      >
        <PlatformCard :data="item" />
      </swiper-slide>

      <div class="swiper-button-prev swiper-custom-prev" slot="button-prev">
        <img
          src="@/assets/images/general-icons/carousel-arrow-left.svg"
          alt="Slide anterior"
        />
      </div>
      <div class="swiper-button-next swiper-custom-next" slot="button-next">
        <img
          src="@/assets/images/general-icons/carousel-arrow-right.svg"
          alt="Slide siguiente"
        />
      </div>
    </swiper>
  </section>
</template>

<script>
import PlatformCard from "@/components/home/platforms/PlatformCard.vue";

export default {
  name: "Platforms",
  data() {
    return {
      swiperOptions: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".swiper-custom-next",
          prevEl: ".swiper-custom-prev",
        },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        }
      },
      platformsList: [
        {
          id: 1,
          title: "RAZZIL",
          description:
            "Monta tu tienda online de manera sencilla y empieza a vender en internet, aprovechando una plataforma de comercio electrónico completa y fácil de usar.",
          image: "razzil.svg",
          url: "https://dev.razzil.wize.pe",
        },
        {
          id: 2,
          title: "Naga",
          description:
            "Monta tu tienda online de manera sencilla y empieza a vender en internet, aprovechando una plataforma de comercio electrónico completa y fácil de usar.",
          image: "naga.png",
          url: "https://dev.razzil.wize.pe",
        },
      ],
    };
  },
  components: {
    PlatformCard,
  },
};
</script>

<style lang="postcss">
@import "~/assets/styles/components/home/platforms.css";
</style>
