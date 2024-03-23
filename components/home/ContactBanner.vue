<template>
  <section class="container mt-14 mx-auto">
    <div
      class="flex flex-col justify-center bg-wize-primary pt-8 pl-8 pr-8 lg:flex-row lg:pt-[86px] lg:pl-[86px] lg:pr-[62px] rounded-2xl"
    >
      <div class="text-center lg:text-left">
        <h3
          class="text-[40px] leading-[114%] tracking-[-1.6px] text-white font-semibold lg:w-[556px]"
        >
          ¿Listo para llevar a tu <br> empresa al siguiente nivel?
        </h3>

        <button type="button" class="h-11 bg-wize-gray-2 text-white mt-11 px-6 rounded-md">
          Contáctanos
        </button>
      </div>

      <div class="relative mt-11">
        <img src="@/assets/images/contact/background.svg" alt="Wize - Contacto" class="hidden lg:block lg:absolute lg:-top-14 lg:-left-[115px]">

        <div class="flex flex-col justify-center items-center">
          <span
            class="inline-block bg-white text-base text-wize-gray-2 font-normal py-2 px-3 rounded-tl-[50px] rounded-tr-[50px] rounded-br-none rounded-bl-[50px]"
            >👋 Hola, mi nombre es Gean de Wize</span
          >
          <span
            class="inline-block bg-white text-base text-wize-gray-2 font-normal mt-5 py-2 px-3 rounded-tl-[50px] rounded-tr-[50px] rounded-br-none rounded-bl-[50px]"
            >¿En qué puedo ayudarte hoy?</span
          >
        </div>

        <div class="flex justify-end">
          <img src="@/assets/images/contact/user.svg" alt="Wize - Contacto" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactBanner",
};
</script>
