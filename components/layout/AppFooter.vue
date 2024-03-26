<template>
  <footer class="bg-wize-gray-2 mt-[86px]" data-aos="fade-in">
    <div class="container mx-auto pt-9 flex flex-col lg:flex-row">
      <!-- Col 1 -->
      <div class="text-white lg:w-[402px]" data-aos="zoom-in">
        <h3 class="text-[22px] text-white font-bold mb-[18px]">Wize.pe</h3>

        <p class="text-wize-gray-3">
          <span class="font-bold">Wize</span> es una empresa innovadora en
          soluciones de marketing digital, diseño web, SEO, y desarrollo de
          software, incluyendo servicios en la nube. Con un enfoque en impulsar
          la transformación digital y el crecimiento de negocios en
          Latinoamérica, nos dedicamos a superar desafíos del mercado actual con
          tecnología avanzada.
        </p>

        <p class="text-wize-gray-3 mt-4">
          Nuestra misión es ofrecer servicios excepcionales que abarcan desde la
          optimización en motores de búsqueda hasta el desarrollo personalizado
          de software y aplicaciones móviles, adaptándonos a las necesidades
          específicas de nuestros clientes para asegurar su éxito en el
          competitivo entorno digital.
        </p>

        <p class="text-wize-gray-3 mt-4">
          En Wize, nos esforzamos por ser más que proveedores de tecnología; nos
          vemos como socios estratégicos de nuestros clientes, comprometidos con
          la innovación y la excelencia. Cada proyecto es una oportunidad para
          demostrar nuestra capacidad y experiencia en diversas plataformas y
          tecnologías, trabajando codo a codo para alcanzar sus objetivos de
          negocio.
        </p>

        <div class="mt-[18px]">
          <ul>
            <li class="flex items-center">
              <img src="@/assets/images/footer/terms.svg" alt="Términos y condiciones" class="mr-2">
              <a href="" target="_blank" class="text-wize-primary">Términos y condiciones</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/complaints-book.svg" alt="Libro de reclamaciones" class="mr-2">
              <a href="" target="_blank" class="text-wize-primary">Libro de reclamaciones</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/site-map.svg" alt="Términos y condiciones" class="mr-2">
              <a href="" target="_blank" class="text-wize-primary">Mapa del sitio</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Col 2 -->
      <div class="mt-8 lg:ml-16 lg:mt-0">
        <h3 class="text-[22px] text-white font-bold mb-[18px]" data-aos="zoom-in">Nuestros servicios</h3>

        <ul class="text-wize-gray-3 list-disc pl-4 lg:pl-0">
          <li data-aos="zoom-in" data-aos-delay="500">Branding & Identidad</li>
          <li class="mt-2" data-aos="zoom-in">Diseño web y de producto</li>
          <li class="mt-2" data-aos="zoom-in">SEO & SEM</li>
          <li class="mt-2" data-aos="zoom-in">Desarrollo de software a medida</li>
          <li class="mt-2" data-aos="zoom-in">Servicios en la nube</li>
          <li class="mt-2" data-aos="zoom-in">Marketing digital</li>
        </ul>
      </div>

      <!-- Col 3 -->
      <div class="mt-8 lg:ml-[119px] lg:mt-0">
        <h3 class="text-[22px] text-white font-bold mb-[18px]">Contáctanos</h3>

        <ul>
            <li class="flex items-center">
              <img src="@/assets/images/footer/phone.svg" alt="Términos y condiciones" class="mr-2">
              <a href="" target="_blank" class="text-white">+51 988 320 464</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/whatsapp.svg" alt="Libro de reclamaciones" class="mr-2">
              <a href="" target="_blank" class="text-white">Libro de reclamaciones</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/mail.svg" alt="Términos y condiciones" class="mr-2">
              <a href="" target="_blank" class="text-white">Mapa del sitio</a>
            </li>
          </ul>

          <div class="flex mt-7">
            <a href="https://web.facebook.com/wize.pe" target="_blank" data-aos="zoom-in">
              <img src="@/assets/images/footer/facebook.svg" alt="Wize - Facebook">
            </a>

            <a href="" class="ml-8" data-aos="zoom-in">
              <img src="@/assets/images/footer/instagram.svg" alt="Wize - Facebook">
            </a>

            <a href="" class="ml-8" data-aos="zoom-in">
              <img src="@/assets/images/footer/tik-tok.svg" alt="Wize - Facebook">
            </a>
          </div>

          <h3 class="text-[22px] text-white font-bold mt-16" data-aos="zoom-in">Contáctanos</h3>

          <div class="mt-[6px]">
            <div class="flex flex-col" data-aos="zoom-in">
              <span class="text-white">R.U.C.</span>
              <span class="text-wize-gray-3">20601681651</span>
            </div>

            <div class="flex flex-col mt-4" data-aos="zoom-in">
              <span class="text-white">Razón Social</span>
              <span class="text-wize-gray-3">WIZE PERU S.A.C.</span>
            </div>
          </div>
      </div>
    </div>

    <div class="container mx-auto">
      <div class="w-full h-[1px] bg-wize-gray-3 mt-[51px]">
      </div>

      <div class="flex flex-col py-[30px] lg:flex-row lg:justify-between items-center">
          <img src="@/assets/images/logo-wize.svg" alt="Logo Wize" />

          <p class="text-wize-gray-3 text-center mt-6 lg:mt-0 lg:text-left">
            Forjado por <span class="text-white">Wize</span> © {{ year }}. Todos los derechos reservados
          </p>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
};
</script>
