<template>
  <div class="container mx-auto grid md:grid-cols-2 pt-16">
    <div class="text-center md:text-left">
      <span class="text-sm text-wize-primary font-medium"
        >👋 ¡Hola! Somos Wize.</span
      >
      <h1
        class="text-4xl font-semibold mt-3 md:mt-2 md:text-[56px] md:leading-[60px]"
      >
        Dedicados a hacer crecer tu negocio
      </h1>
      <p class="text-base text-wize-gray-2 text-opacity-60 mt-6 md:text-lg">
        Creamos soluciones a medida que potencian tu presencia online y agilizan
        tus operaciones
      </p>

      <p
        class="mt-10 text-xs text-wize-gray-2 text-opacity-60 font-medium md:text-lg"
      >
        CONSÍGUE UNA CONSULTA, ¡ES GRATIS!
      </p>

      <button
        type="button"
        class="h-[44px] text-white bg-wize-primary mt-4 px-6 rounded-md"
      >
        Contáctanos
      </button>
    </div>

    <div class="flex justify-center mt-4 md:mt-0">
      <img :src="require(`@/assets/images/banner/Banner-${currentImage}.svg`)" alt="Wize Perú">
    </div>
  </div>
</template>

<script>
export default {
  name: "AppBanner",
  data() {
    return {
      currentImage: 1
    }
  },
  mounted() {
    this.setMainImage()
  },
  methods: {
    setMainImage() {
      this.currentImage = Math.floor(Math.random() * 4) + 1;
    }
  }
};
</script>
