<template>
<article class="platform-card h-auto lg:h-auto pt-[21px] px-[21px] flex flex-col lg:flex-row lg:max-w-[725px]">
  <div class="flex justify-center lg:block">
    <img :src="require(`@/assets/images/platforms/${data.image}`)" :alt="data.title" class="max-w-[260px] rounded-tl-[14px] rounded-tr-[14px]">
  </div>

  <div class="p-12">
    <h4 class="text-[31px] font-medium">{{ data.title }}</h4>
    <p class="text-sm font-normal text-wize-gray-2 text-opacity-60">{{ data.description }}</p>

    <a :href="data.url" target="_blank" class="inline-block mt-6 text-wize-primary font-medium">Conocer más...</a>
  </div>
</article>
</template>

<script>
export default {
  name: 'PlatformCard',
  props: {
    data: Object
  }
}
</script>

<style lang="postcss">
.platform-card {
  box-shadow: 0px 1.769px 7.076px 0px rgba(0, 0, 0, 0.08);
}
</style>
