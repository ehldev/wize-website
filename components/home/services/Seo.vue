<template>
  <div class="md:grid md:grid-cols-2 animate__animated animate__fadeIn">
    <div>
      <h3 class="text-4xl font-semibold">SEO & SEM</h3>

      <p class="md:max-w-[475px]">
        Potencia la esencia de tu empresa con nuestro servicio de Branding e
        Identidad. Diseñamos estrategias de marca únicas que te diferencian en
        el mercado, conectan emocionalmente con tu audiencia y fortalecen tu
        posicionamiento online. Transforma tu identidad y haz que tu marca sea
        inolvidable.
      </p>

      <ul class="mt-[20px]">
        <li class="flex mb-1" v-for="(item, i) in list" ::key="i">
          <img
            src="@/assets/images/general-icons/tick-circle.svg"
            :alt="item"
            class="mr-[6px]"
          />
          {{ item }}
        </li>
      </ul>
    </div>

    <div>
      <img src="@/assets/images/services/Seo-description.svg" :alt="service.text" class="md:absolute md:bottom-0 md:right-0">
    </div>
  </div>
</template>

<script>
export default {
  name: "Branding",
  data() {
    return {
      list: [
        "Optimización de Motores de Búsqueda (SEO)",
        "Marketing en Motores de Búsqueda (SEM)",
        "Análisis y Reporte de SEO",
        "Gestión de PPC (Pago Por Clic)",
        "Optimización de la Tasa de Conversión (CRO)"
      ],
    };
  },
  props: {
    service: Object
  }
};
</script>
