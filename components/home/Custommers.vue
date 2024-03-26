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
    <div class="hidden mt-8 text-center lg:grid md:grid-cols-5">
      <div
        class="flex justify-center items-center mb-6 md:mb-0"
        v-for="(item, i) in list"
        :key="i"
        data-aos="zoom-in"
        :data-aos-delay="i * 100"
      >
        <img
          :src="require(`@/assets/images/custommers/${item}`)"
          alt="Black versions"
        />
      </div>
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
      }
    };
  },
};
</script>

<style lang="postcss">
@import "~/assets/styles/components/home/custommers.css";
</style>
