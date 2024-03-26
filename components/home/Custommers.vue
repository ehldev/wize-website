<template>
  <section
    class="custommers container mx-auto mt-12 text-center rounded-xl lg:mt-[118px] md:py-16 bg-wize-light"
    data-aos="fade-up"
  >
    <h2
      class="text-3xl text-wize-gray font-semibold md:text-5xl md:max-w-[694px] md:mx-auto"
    >
      Colaboramos con más de 20 clientes en diversos sectores
    </h2>

    <!-- Mobile -->
    <div class="mt-4 md:hidden">
      <swiper class="swiper swiper-custommers h-36" :options="swiperOption">
        <swiper-slide
          class="flex justify-center items-center"
          v-for="(item, i) in list"
          :key="i"
        >
          <img
            :src="require(`@/assets/images/custommers/${item}`)"
            alt="Black versions"
          />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- Tablet -->
    <div class="mt-4 hidden md:block lg:hidden">
      <swiper class="swiper swiper-custommers h-36" :options="swiperOptionTablet">
        <swiper-slide
          class="flex justify-center items-center"
          v-for="(item, i) in list"
          :key="i"
        >
          <img
            :src="require(`@/assets/images/custommers/${item}`)"
            alt="Black versions"
          />
        </swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <!-- Desktop -->
    <div class="hidden mt-8 text-center lg:block">
      <swiper class="swiper swiper-custommers h-36" :options="swiperOptionDesktop">
        <swiper-slide
          class="flex justify-center items-center"
          v-for="(item, i) in list"
          :key="i"
        >
          <img
            :src="require(`@/assets/images/custommers/${item}`)"
            alt="Black versions"
          />
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
export default {
  name: "Custommers",
  data() {
    return {
      list: [
        "black-versions.svg",
        "Rack-Peru.svg",
        "el-mercadon.svg",
        "Auren.svg",
        "red-digital.svg",
        'go-pay.svg',
        'orbital-elevadores.svg',
        'ea-t.svg',
        'belma.svg',
        'sin-editor.svg',
        'segurloc.svg',
        'south-america-antarctica.svg'
      ],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 25,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptionTablet: {
        slidesPerView: 4,
        spaceBetween: 25,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      swiperOptionDesktop: {
        slidesPerView: 5,
        spaceBetween: 25,
        loop: true
      }
    };
  },
};
</script>

<style lang="postcss">
@import "~/assets/styles/components/home/custommers.css";
</style>
