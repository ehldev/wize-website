<template>
  <header class="h-[70px] flex items-center">
    <div class="container mx-auto">
      <div class="flex justify-between items-center">
        <img src="@/assets/images/logo-wize.svg" alt="Logo Wize" />

        <nav
          class="w-full header-nav fixed top-[70px] z-50 bg-white py-8 md:w-auto md:h-auto md:relative transition-all md:top-0 md:right-0"
          :class="isActive ? 'right-0 z-50' : '-right-full'"
        >
          <div class="container h-full flex flex-col justify-between md:flex-row md:px-0">
            <section class="flex flex-col md:flex-row">
              <a href="/" class="header-link mr-6">Portada</a>
              <a href="/" class="header-link mr-6">Nosotros</a>
              <a href="/" class="header-link mr-6">Servicios</a>
              <a href="/" class="header-link mr-6">Portafolio</a>
              <a href="/" class="header-link mr-6">Testimonios</a>
            </section>

            <!-- Mobile -->
            <button
              type="button"
              class="h-[44px] md:hidden text-white bg-wize-primary px-6 rounded-md"
            >
              Contáctanos
            </button>
          </div>
        </nav>

        <!-- Desktop -->
        <button
          type="button"
          class="h-[44px] hidden md:block text-white bg-wize-primary px-6 rounded-md"
        >
          Contáctanos
        </button>

        <button
          type="button"
          class="hamburger hamburger--spin md:hidden"
          :class="{ 'is-active': isActive }"
          @click="isActive = !isActive"
        >
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {
      isActive: false,
    };
  },
};
</script>
