<template>
<section class="relative xl:flex mt-[60px] lg:mt-[162px]">
  <div>
    <img src="@/assets/images/about/foundation-year.svg" alt="Wize Perú" class="max-w-none ml-16 w-[250px] h-[250px] xl:absolute xl:top-10 xl:w-[550px] xl:h-[550px] 2xl:w-[689px] 2xl:h-[689px] xl:ml-[-100px]" />
  </div>

  <article class="mt-10 px-6 md:px-9 xl:px-0 xl:max-w-[720px] xl:ml-auto xl:mr-[170px]">
    <h3 class="text-base text-wize-primary font-medium">Nuestros valores</h3>

    <h2 class="text-3xl tracking-[-1.92px] font-semibold mt-4 md:text-5xl">En Wize, nuestros valores fundamentales definen quienes somos y guían nuestro trabajo.</h2>

    <p class="text-wize-dark mt-6">
      En Wize, la pasión por la innovación y el compromiso con la excelencia son la piedra angular de todo lo que hacemos, impulsándonos a construir un futuro mejor juntos
    </p>

    <div class="mt-[50px] md:grid md:grid-cols-2">
      <div class="mb-12" v-for="(item, i) in list" :key="i">
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
          icon: 'creativity.svg'
        },
        {
          title: 'Excelencia',
          description: 'Superando estándares, entregando lo excepcional.',
          icon: 'creativity.svg'
        },
        {
          title: 'Innovación',
          description: 'Transformando ideas en soluciones revolucionarias.',
          icon: 'creativity.svg'
        },
        {
          title: 'Integridad',
          description: 'Actuando con honestidad y transparencia en todo momento.',
          icon: 'creativity.svg'
        },
        {
          title: 'Sostenibilidad',
          description: 'Impulsando el cambio hacia un futuro más verde y responsable.',
          icon: 'creativity.svg'
        }
      ]
    }
  }
}
</script>
