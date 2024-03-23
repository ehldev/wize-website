<template>
  <section class="container mt-[60px] mx-auto">
    <h3 class="text-base text-wize-primary font-medium">Nuestros Servicios</h3>
    <div class="bg-wize-gray-2 mt-4 py-8 px-8 relative md:py-20 md:px-20 rounded-xl">
      <h2 class="text-3xl text-white font-semibold text-center md:text-5xl">
        Explora nuestra gama de servicios personalizados para impulsar el
        crecimiento y el éxito de tu empresa
      </h2>

      <div
        class="flex flex-col mt-8 rounded-[25px] bg-white bg-opacity-[0.13] p-1 md:flex-row md:justify-between"
      >
        <button
          type="button"
          class="h-[43px] flex justify-center items-center text-white text-base rounded-[100px] px-5"
          :class="currentSelection && (item.key == currentSelection.key) ? 'bg-wize-primary text-opacity-100' : 'text-opacity-[0.32]'"
          @click="setCurrentSelection(item)"
          v-for="item in list"
          :key="item.key"
        >
          <img
            :src="require(`@/assets/images/services/${item.key}.svg`)"
            :alt="`Wize - ${item.text}`"
            class="mr-2"
          />
          {{ item.text }}
        </button>
      </div>

      <!-- Content -->
      <article class="text-white mt-6 md:mt-[60px]" v-if="currentSelection">
        <Branding :service="currentSelection" v-if="currentSelection.key == 'branding'" />
        <WebDesign :service="currentSelection" v-if="currentSelection.key == 'web-design'" />
        <Seo :service="currentSelection" v-if="currentSelection.key == 'seo'" />
        <Development :service="currentSelection" v-if="currentSelection.key == 'development'" />
        <Marketing :service="currentSelection" v-if="currentSelection.key == 'marketing'" />
      </article>
    </div>
  </section>
</template>

<script>
import Branding from '@/components/home/services/Branding'
import WebDesign from '@/components/home/services/WebDesign'
import Seo from '@/components/home/services/Seo'
import Development from '@/components/home/services/Development'
import Marketing from '@/components/home/services/Marketing'

export default {
  name: "ServicesList",
  mounted() {
    this.currentSelection = this.list[0];
  },
  data() {
    return {
      list: [
        {
          key: "branding",
          text: "Branding & Identidad"
        },
        {
          key: "web-design",
          text: "Diseño Web"
        },
        {
          key: "seo",
          text: "SEO & SEM"
        },
        {
          key: "development",
          text: "Desarrollo"
        },
        {
          key: "marketing",
          text: "Marketing Digital"
        },
      ],
      currentSelection: null,
    };
  },
  components: {
    Branding,
    WebDesign,
    Seo,
    Development,
    Marketing
  },
  methods: {
    setCurrentSelection(item) {
      this.currentSelection = item;
    },
  },
};
</script>

<style lang="postcss"></style>
