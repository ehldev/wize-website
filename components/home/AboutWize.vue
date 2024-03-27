<template>
<section id="about" class="about-wize relative mt-[60px] lg:mt-[162px] xl:flex">
  <div class="flex justify-center">
    <img src="@/assets/images/about/foundation-year-mobile.svg" alt="Wize Perú" class="max-w-none w-[250px] h-[250px] xl:hidden xl:absolute xl:top-10 xl:w-[550px] xl:h-[550px] 2xl:w-[689px] 2xl:h-[689px] xl:ml-[-100px]" data-aos="zoom-in" data-aos-delay="500" />
    <img src="@/assets/images/about/foundation-year.svg" alt="Wize Perú" class="hidden max-w-none xl:block xl:mr-16" data-aos="zoom-in" data-aos-delay="500" />

    <!-- ml-16 w-[250px] h-[250px] lg:block xl:absolute xl:top-10 xl:w-[550px] xl:h-[550px] 2xl:w-[689px] 2xl:h-[689px] xl:ml-[-100px] -->
  </div>

  <article class="mt-10 px-6 md:px-9 xl:px-0 xl:max-w-[720px] xl:ml-auto xl:mr-[170px]">
    <h3 class="text-base text-wize-primary font-medium" data-aos="zoom-in">Nuestros valores</h3>

    <h2 class="text-3xl tracking-[-1.92px] font-semibold mt-4 md:text-5xl" data-aos="zoom-in"
        data-aos-delay="200">En Wize, nuestros valores fundamentales definen quienes somos y guían nuestro trabajo.</h2>

    <p class="text-wize-dark mt-6" data-aos="zoom-in" data-aos-delay="300">
      En Wize, la pasión por la innovación y el compromiso con la excelencia son la piedra angular de todo lo que hacemos, impulsándonos a construir un futuro mejor juntos
    </p>

    <div class="mt-[50px] md:grid md:grid-cols-2">
      <div class="mb-12" v-for="(item, i) in list" :key="i" data-aos="zoom-in">
        <div class="flex">
          <img :src="require(`@/assets/images/about/${item.icon}`)" :alt="item.title" class="mr-3" />
          <h4 class="text-xl font-semibold">{{ item.title }}</h4>
        </div>
        <p class="text-wize-gray-2 text-opacity-60 mt-[17px] md:max-w-[312px]">
          {{ item.description }}
        </p>
      </div>
    </div>
  </article>
</section>
</template>

<script>
export default {
  name: 'AboutWize',
  data() {
    return {
      list: [
        {
          title: 'Creatividad',
          description: 'Desencadenando la imaginación para redefinir lo posible.',
          icon: 'creativity.svg'
        },
        {
          title: 'Colaboración',
          description: 'Uniendo talentos para alcanzar logros extraordinarios.',
          icon: 'team.svg'
        },
        {
          title: 'Excelencia',
          description: 'Superando estándares, entregando lo excepcional.',
          icon: 'bard-line.svg'
        },
        {
          title: 'Innovación',
          description: 'Transformando ideas en soluciones revolucionarias.',
          icon: 'lightbulb-flash-line.svg'
        },
        {
          title: 'Integridad',
          description: 'Actuando con honestidad y transparencia en todo momento.',
          icon: 'service-line.svg'
        },
        {
          title: 'Sostenibilidad',
          description: 'Impulsando el cambio hacia un futuro más verde y responsable.',
          icon: 'leaf-line.svg'
        }
      ]
    }
  }
}
</script>

<style lang="postcss">
@import "~/assets/styles/components/home/about-wize";
</style>
