<template>
  <div class="md:grid md:grid-cols-2 animate__animated animate__fadeIn">
    <div>
      <h3 class="text-4xl font-semibold">Diseño Web y de Producto</h3>

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

    <div class="mt-4 md:mt-0">
      <img src="@/assets/images/services/Web-design-description.svg" :alt="service.text" class="md:absolute md:bottom-0 md:right-0">
    </div>
  </div>
</template>

<script>
export default {
  name: "WebDesign",
  data() {
    return {
      list: [
        "Diseño Web",
        "Diseño de Producto",
        "Diseño de Aplicaciones Móviles",
        "Optimización de Experiencia de Usuario (UX)",
        "Desarrollo Front-End Responsivo",
      ],
    };
  },
  props: {
    service: Object
  }
};
</script>
