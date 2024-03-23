<template>
  <div>
    <AppHeader />

    <AppBanner />

    <Custommers />

    <ServicesList />

    <AboutWize />

    <Testimonials />

    <Platforms />

    <ContactBanner />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/layout/AppHeader.vue';
import AppBanner from '@/components/home/AppBanner.vue';
import Custommers from '@/components/home/Custommers.vue';
import ServicesList from '@/components/home/ServicesList.vue';
import AboutWize from '@/components/home/AboutWize.vue';
import Testimonials from '@/components/home/Testimonials.vue';
import Platforms from '@/components/home/Platforms.vue';
import ContactBanner from '@/components/home/ContactBanner.vue';
import AppFooter from '@/components/layout/AppFooter.vue';

export default {
  name: 'IndexPage',
  components: {
    AppHeader,
    AppBanner,
    Custommers,
    ServicesList,
    AboutWize,
    Testimonials,
    Platforms,
    ContactBanner,
    AppFooter
  }
}
</script>
