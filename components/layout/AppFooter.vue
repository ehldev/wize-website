<template>
  <footer class="bg-wize-gray-2 mt-[86px]">
    <div class="container mx-auto pt-9 flex flex-col lg:flex-row">
      <!-- Col 1 -->
      <div class="text-white lg:w-[402px]">
        <h3 class="text-[22px] text-white font-bold mb-[18px]">Wize.pe</h3>

        <div class="text-[13px]">
          <p class="text-wize-gray-3">
          <span class="font-bold">Wize</span> es una empresa innovadora en
          soluciones de <span class="font-bold">marketing digital, diseño web, SEO, y desarrollo de
          software</span>, incluyendo <span class="font-bold">servicios en la nube</span>. Con un enfoque en impulsar
          la transformación digital y el crecimiento de negocios en
          Latinoamérica, nos dedicamos a superar desafíos del mercado actual con
          tecnología avanzada.
        </p>

        <p class="text-wize-gray-3 mt-4">
          Nuestra misión es ofrecer servicios excepcionales que abarcan desde la
          <span class="font-bold">optimización en motores de búsqueda</span> hasta el desarrollo personalizado
          de software y aplicaciones móviles, adaptándonos a las necesidades
          específicas de nuestros clientes para asegurar su éxito en el
          competitivo entorno digital.
        </p>

        <p class="text-wize-gray-3 mt-4">
          En <span class="font-bold">Wize</span>, nos esforzamos por ser más que proveedores de tecnología; nos
          vemos como socios estratégicos de nuestros clientes, comprometidos con
          la innovación y la excelencia. Cada proyecto es una oportunidad para
          demostrar nuestra capacidad y experiencia en diversas plataformas y
          tecnologías, trabajando codo a codo para alcanzar sus objetivos de
          negocio.
        </p>
        </div>

        <div class="mt-[18px]">
          <ul>
            <li class="flex items-center">
              <img src="@/assets/images/footer/terms.svg" alt="Términos y condiciones" class="mr-2">
              <a href="" target="_blank" class="text-wize-primary font-semibold">Términos y condiciones</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/complaints-book.svg" alt="Libro de reclamaciones" class="mr-2">
              <a href="" target="_blank" class="text-wize-primary font-semibold">Libro de reclamaciones</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/site-map.svg" alt="Términos y condiciones" class="mr-2">
              <a href="" target="_blank" class="text-wize-primary font-semibold">Mapa del sitio</a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Col 2 -->
      <div class="mt-8 lg:ml-16 lg:mt-0">
        <h3 class="text-[22px] text-white font-bold mb-[18px]">Nuestros servicios</h3>

        <ul class="text-[15px] text-wize-gray-3 list-disc pl-4 lg:pl-0">
          <li>Branding & Identidad</li>
          <li class="mt-2">Diseño web y de producto</li>
          <li class="mt-2">SEO & SEM</li>
          <li class="mt-2">Desarrollo de software a medida</li>
          <li class="mt-2">Servicios en la nube</li>
          <li class="mt-2">Marketing digital</li>
        </ul>
      </div>

      <!-- Col 3 -->
      <div class="mt-8 lg:ml-[119px] lg:mt-0">
        <h3 class="text-[22px] text-white font-bold mb-[18px]">Contáctanos</h3>

        <ul class="font-normal">
            <li class="flex items-center">
              <img src="@/assets/images/footer/phone.svg" alt="Términos y condiciones" class="mr-2">
              <a href="tel:+51988320464" target="_blank" class="text-wize-gray-3">+51 988 320 464</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/whatsapp.svg" alt="Libro de reclamaciones" class="mr-2">
              <a href="https://wa.me/51994386240?text=Hola%20quiero%20información%20sobre..." target="_blank" class="text-wize-gray-3">+51 994 386 240</a>
            </li>
            <li class="flex items-center mt-4">
              <img src="@/assets/images/footer/mail.svg" alt="Términos y condiciones" class="mr-2">
              <a href="mailto:publicidad@wize.pe" target="_blank" class="text-wize-gray-3">publicidad@wize.pe</a>
            </li>
          </ul>

          <div class="flex mt-7">
            <a href="https://web.facebook.com/wize.pe" target="_blank">
              <img src="@/assets/images/footer/facebook.svg" alt="Wize - Facebook">
            </a>

            <a href="" class="ml-8">
              <img src="@/assets/images/footer/instagram.svg" alt="Wize - Facebook">
            </a>

            <a href="" class="ml-8">
              <img src="@/assets/images/footer/tik-tok.svg" alt="Wize - Facebook">
            </a>
          </div>

          <h3 class="text-[22px] text-white font-bold mt-16">Datos de la empresa</h3>

          <div class="mt-[6px]">
            <div class="flex flex-col">
              <span class="text-white text-sm">R.U.C.</span>
              <span class="text-wize-gray-3 text-base">20601681651</span>
            </div>

            <div class="flex flex-col mt-4">
              <span class="text-white text-sm">Razón Social</span>
              <span class="text-wize-gray-3 text-base">WIZE PERU S.A.C.</span>
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
