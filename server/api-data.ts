import { type Models } from "../types/models";

// const { public: config } = useRuntimeConfig();

const API_DATA_EN = {
  projectsCardData: [
    {
      id: 1,
      title: "Ofertas Extremas",
      job: "Front-End development",
      date: "2023-2024",
      description:
        "Front-End development, REST API integrations and SEO, for HURTADO GLOBAL MEDIA GROUP.",
      technologies: ["Astro", "Vue.js", "TypeScript", "Tailwind CSS"],
      slug: "ofertas-extremas",
      image: {
        src: "/assets/webp/ofertasextremas/ofertas-extremas-logo.webp",
        alt: "Ofertas Extremas project",
        title: "Ofertas Extremas project",
      },
    },
    {
      id: 2,
      title: "Deals community websites",
      job: "Front-End maintenance",
      date: "2023-2024",
      description:
        "Front-End maintenance, REST API integrations and supporting existing REST API integrations. for HURTADO GLOBAL MEDIA GROUP.",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      slug: "megadescuentos",
      image: {
        src: "/assets/webp/communitydeals/megadescuentos-logo.webp",
        alt: "MEGAdescuentos project",
        title: "MEGAdescuentos project",
      },
    },
    {
      id: 3,
      title: "Colección Milenio Arte",
      job: "Front-End maintenance",
      date: "2023-2024",
      description:
        "Front-End maintenance, layout fixes, for the Coleccion Milenio Arte website.",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      slug: "coleccion-milenio-arte",
      image: {
        src: "/assets/webp/artemilenio/arte-milenio-logo.webp",
        alt: "coleccion milenio arte project",
        title: "coleccion milenio arte project",
      },
    },
  ] as Models.ProjectCard[],

  projectData: [
    {
      slug: "ofertas-extremas",
      title: "Ofertas Extremas",
      technologies: ["Astro", "Vue.js", "TypeScript", "Tailwind CSS"],
      content: `
      <article>
        <p>
          HURTADO GLOBAL MEDIA GROUP developed a cutting-edge deals platform catering to the Mexican community. As a key contributor to this project, my primary responsibilities included:
        </p>

        <h3>
        Key Responsibilities:
        </h3>

        <ul>
          <li>
            Developed, and maintained the website to ensure a seamless user experience.
          </li>
          <li>
          Make the REST API integration and support it.
          </li>
          <li>
          Ensured the website's responsiveness across various devices and browsers.
          </li>
        </ul>

        <h3>
        Technical Challenges
        </h3>

        <p>
          Notably, the project presented several complex development challenges, including:
        </p>

         <ul>
          <li>
            The implementation of a dynamic footer and pagination with infinite scroll components, which required careful planning and execution to ensure a smooth user experience.
          </li>
          <li>
          Successfully integrating Astro pages with Vue.js components, a challenging task that required bridging the two technologies to create a cohesive and efficient user interface.
          </li>
        </ul>

        <hr />

        <h2>Project pictures</h2>


        <section>

        <h3>
        <a href="https://www.ofertasextremas.mx/" target="_blank" rel="noopener noreferrer">Ofertas Extremas</a>
        </h3>

        <p>
          Deals platform for Mexican community.
        </p>

        <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-mobile-1.webp"
            alt="Ofertas Extremas mobile view"
            title="Ofertas Extremas mobile view"
          />
          <figcaption>Ofertas Extremas mobile view</figcaption>
        </figure> 

         <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-tablet-1.webp"
            alt="Ofertas Extremas Tablet view"
            title="Ofertas Extremas Tablet view"
          />
          <figcaption>Extremas Tablet view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-desktop-1.webp"
            alt="Ofertas Extremas desktop view"
            title="Ofertas Extremas desktop view"
          />
          <figcaption>Ofertas Extremas desktop view, upper pagination</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-desktop-2.webp"
            alt="Ofertas Extremas desktop view"
            title="Ofertas Extremas desktop view"
          />
          <figcaption>Ofertas Extremas desktop view, sticky footer with pagination</figcaption>
        </figure> 
        </div>
        </section>

        <hr />

        <section>

        <p>
          The project utilizes an infinite scroll and pagination component, and I have prepared video demonstrations to showcase its functionality.
        </p>

         
        <iframe
            width="100%"
            height="100%"
            src="/assets/videos/ofertasextremas/ofertas-extremas-video.mp4"
            title="Ofertas Extremas infinite scroll and pagination"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

        <section>
       
      </article>

      <hr />
      `,
    },
    {
      slug: "megadescuentos",
      title: "MEGAdescuentos",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      content: `
      <article>
       <p>
          HURTADO GLOBAL MEDIA GROUP developed a deals community platform for multiple countries. As a key contributor to this project, my primary responsibilities included:
        </p>

        <h3>
        Key Responsibilities:
        </h3>

        <ul>
          <li>
            Identified and resolved CSS styling issues impacting layout and component rendering, ensuring a consistent and visually appealing user experience.
          </li>
          <li>
          Implemented REST API integrations to facilitate seamless data exchange and functionality.
          </li>
          <li>
          Provided ongoing support and maintenance for existing REST API integrations, ensuring continued stability and performance.
          </li>
          <li>
          Verified that dynamic content was rendered correctly, ensuring a smooth and engaging user experience.
          </li>
          <li>
          Maintained and supported translation files, enabling the platform to reach a broader audience across multiple regions.
          </li>
        </ul>

        <hr />

        <h2>Project pictures</h2>


        <section>

        <h3>
        <a href="https://www.megadescuentos.com/" target="_blank" rel="noopener noreferrer">MEGAdescuentos</a>
        </h3>

        <p>
          deals community platform  for Mexican community.
        </p>

        <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-mobile-1.webp"
            alt="MEGAdescuentos mobile view"
            title="MEGAdescuentos mobile view"
          />
          <figcaption>MEGAdescuentos mobile view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-tablet-1.webp"
            alt="MEGAdescuentos tablet view"
            title="MEGAdescuentos tablet view"
          />
          <figcaption>MEGAdescuentos tablet view</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-desktop-1.webp"
            alt="MEGAdescuentos desktop Homepage view"
            title="MEGAdescuentos desktop Homepage view"
          />
          <figcaption>MEGAdescuentos desktop Homepage view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-desktop-2.webp"
            alt="MEGAdescuentos desktop Brands view"
            title="MEGAdescuentos desktop Brands view"
          />
          <figcaption>MEGAdescuentos desktop Brands view</figcaption>
        </figure> 
        </div>
        </section>

        
        <hr />

        <section>

        <h3>
        <a href="https://www.bchollos.es/" target="_blank" rel="noopener noreferrer">Bchollos</a>
        </h3>


        <p>
          deals community platform for European community.
        </p>

         <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-mobile-1.webp"
            alt="Bchollos mobile view"
            title="Bchollos mobile view"
          />
          <figcaption>Bchollos mobile view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-tablet-1.webp"
            alt="Bchollos tablet view"
            title="Bchollos tablet view"
          />
          <figcaption>Bchollos tablet view</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-desktop-1.webp"
            alt="Bchollos desktop Homepage view"
            title="Bchollos desktop Homepage view"
          />
          <figcaption>Bchollos desktop Homepage view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-desktop-2.webp"
            alt="Bchollos desktop Brands view"
            title="Bchollos desktop Brands view"
          />
          <figcaption>Bchollos desktop Brands view</figcaption>
        </figure> 
        </div>
        </section>

        <hr />

         <section>

        <h3>
        <a href="https://www.jdescuentos.cl/" target="_blank" rel="noopener noreferrer">Jdescuentos</a>
        </h3>


        <p>
          deals community platform for Chilean community.
        </p>

         <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-mobile-1.webp"
            alt="Jdescuentos mobile view"
            title="Jdescuentos mobile view"
          />
          <figcaption>Jdescuentos mobile view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-tablet-1.webp"
            alt="Jdescuentos tablet view"
            title="Jdescuentos tablet view"
          />
          <figcaption>Jdescuentos tablet view</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-desktop-1.webp"
            alt="Jdescuentos desktop Homepage view"
            title="Jdescuentos desktop Homepage view"
          />
          <figcaption>Jdescuentos desktop Homepage view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-desktop-2.webp"
            alt="Jdescuentos desktop Brands view"
            title="Jdescuentos desktop Brands view"
          />
          <figcaption>Jdescuentos desktop Brands view</figcaption>
        </figure> 
        </div>
        </section>

        <hr />

         <section>

        <h3>
        <a href="https://www.okdescontos.com.br/" target="_blank" rel="noopener noreferrer">OKdescontos</a>
        </h3>


        <p>
          deals community platform for Brazilian community.
        </p>

         <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-mobile-1.webp"
            alt="OKdescontos mobile view"
            title="OKdescontos mobile view"
          />
          <figcaption>OKdescontos mobile view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-tablet-1.webp"
            alt="OKdescontos tablet view"
            title="OKdescontos tablet view"
          />
          <figcaption>OKdescontos tablet view</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-desktop-1.webp"
            alt="OKdescontos desktop Homepage view"
            title="OKdescontos desktop Homepage view"
          />
          <figcaption>OKdescontos desktop Homepage view</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-desktop-2.webp"
            alt="OKdescontos desktop Brands view"
            title="OKdescontos desktop Brands view"
          />
          <figcaption>OKdescontos desktop Brands view</figcaption>
        </figure> 
        </div>
        </section>
       
      </article>

      <hr />
      `,
    },
    {
      slug: "coleccion-milenio-arte",
      title: "Colección Milenio Arte",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      content: `
      <article>
        <p>
          As a key contributor to the development of this web page, my primary responsibilities included:
        </p>
        
        <h3>
        Key Responsibilities:
        </h3>

        <ul>
          <li>
            Addressed and resolved CSS styling issues affecting the card component, ensuring a seamless user experience.
          </li>
          <li>
            Corrected positioning issues with the component's elements and ensured dynamic content was rendered correctly.
          </li>
          <li>
              Identified and resolved problems with the functionality of the "save" icon.
          </li>
          <li>
              Verified that dynamic content was rendered correctly, ensuring a smooth and engaging user experience.
          </li>
          <li>
              Implemented a modal component for the contact form, enhancing the overall user experience.
          </li>
        </ul>

        <h3>
        Technical Challenges:
        </h3>

        <p>
          Notably, the project presented several complex development challenges, including:
        </p>

        <ul>
          <li>
          Overcoming CSS styling issues that required careful planning and execution to ensure a smooth user experience.
          </li>
          <li>
          Successfully integrating the modal component with the existing contact form functionality, a challenging task that required bridging disparate technologies to create a cohesive and efficient user interface.
          </li>
        </ul>

        <hr />

        <h2>Project pictures</h2>


        <section>

          <h3>
          <a href="https://www.coleccionmilenioarte.com/" target="_blank" rel="noopener noreferrer">Colección Arte Milenio</a>
          </h3>

          <div class="section-grid-container">
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-1.webp"
                alt="card component imagen"
                title="card component imagen"
              />
              <figcaption>I identified and resolved problems with the
              functionality of the «save» icon and ensured dynamic content was rendered correctly.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-2.webp"
                alt="card component imagen"
                title="card component imagen"
              />
              <figcaption>I identified and resolved problems with the
              functionality of the «save» icon.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-3.webp"
                alt="card component imagen"
                title="card component imagen"
              />
              <figcaption>Corrected positioning issues with the component's elements and ensured dynamic content was rendered correctly.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-4.webp"
                alt="card component imagen"
                title="card component imagen"
              />
              <figcaption>Corrected positioning issues with the component's elements and ensured dynamic content was rendered correctly.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-5.webp"
                alt="dynamic component imagen"
                title="dynamic component imagen"
              />
              <figcaption>I identified and resolved problems with the
              functionality of the «save» icon.</figcaption>
            </figure> 
          </div>
        
        </section>

        <hr />

        <section>

          <p>
          The project utilizes an modal component and a card component, and I have prepared video demonstrations to showcase its functionality.
          </p>

          <iframe
              width="100%"
              height="100%"
              src="/assets/videos/artemilenio/arte-milenio-video-1.mp4"
              title="Colección Arte Milenio card component"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          
          <iframe
              width="100%"
              height="100%"
              src="/assets/videos/artemilenio/arte-milenio-video-2.mp4"
              title="Colección Arte Milenio modal component"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

        </section>
       
      </article>

      <hr />
      `,
    },
  ],
};

const API_DATA_ES = {
  projectsCardData: [
    {
      id: 1,
      title: "Ofertas Extremas",
      job: "Desarrollo Web Front-End",
      date: "2023-2024",
      description:
        "Desarrollo Web Front-End, integraciones REST API y SEO, para HURTADO GLOBAL MEDIA GROUP.",
      technologies: ["Astro", "Vue.js", "TypeScript", "Tailwind CSS"],
      slug: "ofertas-extremas",
      image: {
        src: "/assets/webp/ofertasextremas/ofertas-extremas-logo.webp",
        alt: "Proyecto Ofertas Extremas",
        title: "Proyecto Ofertas Extremas",
      },
    },
    {
      id: 2,
      title: "Sitios Web de comunidad de ofertas",
      job: "Mantenimiento Web Front-End",
      date: "2023-2024",
      description:
        "Mantenimiento Front-End, Integraciones REST API y apoyo a las integraciones REST API existentes. para HURTADO GLOBAL MEDIA GROUP.",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      slug: "megadescuentos",
      image: {
        src: "/assets/webp/communitydeals/megadescuentos-logo.webp",
        alt: "Proyecto MEGAdescuentos",
        title: "Proyecto MEGAdescuentos",
      },
    },
    {
      id: 3,
      title: "Colección Milenio Arte",
      job: "Mantenimiento Front-End",
      date: "2023-2024",
      description:
        "Mantenimiento Web Front-End, correcciones de maquetación, para la web de la Colección Milenio Arte.",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      slug: "coleccion-milenio-arte",
      image: {
        src: "/assets/webp/artemilenio/arte-milenio-logo.webp",
        alt: "Proyecto coleccion milenio arte",
        title: "Proyecto coleccion milenio arte",
      },
    },
  ] as Models.ProjectCard[],

  projectData: [
    {
      slug: "ofertas-extremas",
      title: "Ofertas Extremas",
      technologies: ["Astro", "Vue.js", "TypeScript", "Tailwind CSS"],
      content: `
      <article>
        <p>
          HURTADO GLOBAL MEDIA GROUP desarrolló una plataforma de ofertas de vanguardia dirigida a la comunidad mexicana. Como colaborador clave en este proyecto, mis principales responsabilidades incluyeron:
        </p>

        <h3>
        Principales responsabilidades:
        </h3>

        <ul>
          <li>
            Desarrollé y mantuve el sitio web para asegurar una experiencia de usuario fluida.
          </li>
          <li>
          Realicé la integración y soporte de la API REST.
          </li>
          <li>
          Garanticé la responsividad del sitio web en diferentes dispositivos y navegadores.
          </li>
        </ul>

        <h3>
        Desafíos técnicos:
        </h3>

        <p>
          En particular, el proyecto presentaba varios retos de desarrollo complejos, entre ellos:
        </p>

         <ul>
          <li>
            La implementación de un pie de página dinámico y paginación con componentes de scroll infinito, que requirió una cuidadosa planificación y ejecución para garantizar una experiencia de usuario fluida.
          </li>
          <li>
          Integración exitosa de páginas Astro con componentes Vue.js, una tarea desafiante que requirió unir las dos tecnologías para crear una interfaz de usuario cohesiva y eficiente.
          </li>
        </ul>

        <hr />

        <h2>Imágenes del proyecto</h2>


        <section>

        <h3>
        <a href="https://www.ofertasextremas.mx/" target="_blank" rel="noopener noreferrer">Ofertas Extremas</a>
        </h3>

        <p>
          Plataforma de ofertas para la comunidad de México.
        </p>

        <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-mobile-1.webp"
            alt="Ofertas extremas vista móvil"
            title="Ofertas extremas vista móvil"
          />
          <figcaption>Ofertas extremas vista móvil</figcaption>
        </figure> 

         <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-tablet-1.webp"
            alt="Ofertas Extremas vista en tableta"
            title="Ofertas Extremas vista en tableta"
          />
          <figcaption>Ofertas Extremas vista en tableta</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-desktop-1.webp"
            alt="Ofertas Extremas vista de escritorio"
            title="Ofertas Extremas vista de escritorio"
          />
          <figcaption>Ofertas Extremas vista de escritorio, paginación superior</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/ofertasextremas/ofertas-extremas-desktop-2.webp"
            alt="Ofertas Extremas vista de escritorio"
            title="Ofertas Extremas vista de escritorio"
          />
          <figcaption>Ofertas Extremas vista de escritorio, pie de página pegajoso con paginación</figcaption>
        </figure> 
        </div>
        </section>

        <hr />

        <section>

        <p>
          El proyecto utiliza un componente de scroll infinito y paginación, y he preparado demostraciones en vídeo para mostrar su funcionalidad.
        </p>

         
        <iframe
            width="100%"
            height="100%"
            src="/assets/videos/ofertasextremas/ofertas-extremas-video.mp4"
            title="Ofertas Extremas paginación y scroll infinito"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>

        <section>
       
      </article>

      <hr />
      `,
    },
    {
      slug: "megadescuentos",
      title: "MEGAdescuentos",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      content: `
      <article>
       <p>
          HURTADO GLOBAL MEDIA GROUP desarrolló una plataforma de comunidad de ofertas para múltiples países. Como colaborador clave en este proyecto, mis principales responsabilidades incluían:
        </p>

        <h3>
        Principales responsabilidades:
        </h3>

        <ul>
            <li>
                Identifiqué y resolví problemas de estilización CSS que afectaban el diseño y la representación de los componentes, garantizando una experiencia de usuario consistente y atractiva visualmente.
            </li>
            <li>
                Implementé integraciones de API REST para facilitar el intercambio de datos y funcionalidades de manera fluida.
            </li>
            <li>
                Proporcioné soporte y mantenimiento en las integraciones de API REST existentes, asegurando la estabilidad y el rendimiento continuo.
            </li>
            <li>
                Verifiqué que el contenido dinámico se representara correctamente, garantizando una experiencia de usuario suave y atractiva.
            </li>
            <li>
                Mantuve y proporcioné soporte a los archivos de traducción, permitiendo que la plataforma llegue a una audiencia más amplia en múltiples regiones.
            </li>
        </ul>

        <hr />

        <h2>Imágenes del proyecto</h2>


        <section>

        <h3>
        <a href="https://www.megadescuentos.com/" target="_blank" rel="noopener noreferrer">MEGAdescuentos</a>
        </h3>

        <p>
          Plataforma de ofertas para la comunidad Mexicana.
        </p>

        <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-mobile-1.webp"
            alt="MEGAdescuentos vista móvil"
            title="MEGAdescuentos vista móvil"
          />
          <figcaption>MEGAdescuentos vista móvil</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-tablet-1.webp"
            alt="MEGAdescuentos vista tablet"
            title="MEGAdescuentos vista tablet"
          />
          <figcaption>MEGAdescuentos vista tablet</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-desktop-1.webp"
            alt="MEGAdescuentos vista de escritorio página de inicio"
            title="MEGAdescuentos vista de escritorio página de inicio"
          />
          <figcaption>MEGAdescuentos vista de escritorio página de inicio</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/megadescuentos-desktop-2.webp"
            alt="MEGAdescuentos vista de escritorio página Marcas"
            title="MEGAdescuentos vista de escritorio página Marcas"
          />
          <figcaption>MEGAdescuentos vista de escritorio página Marcas</figcaption>
        </figure> 
        </div>
        </section>

        
        <hr />

        <section>

        <h3>
        <a href="https://www.bchollos.es/" target="_blank" rel="noopener noreferrer">Bchollos</a>
        </h3>


        <p>
          Plataforma de ofertas para la comunidad Europea.
        </p>

         <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-mobile-1.webp"
            alt="Bchollos vista móvil"
            title="Bchollos vista móvil"
          />
          <figcaption>Bchollos vista móvil</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-tablet-1.webp"
            alt="Bchollos vista tablet"
            title="Bchollos vista tablet"
          />
          <figcaption>Bchollos vista tablet</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-desktop-1.webp"
            alt="Bchollos vista de  escritorio página de inicio"
            title="Bchollos vista de  escritorio página de inicio"
          /> 
          <figcaption>Bchollos vista de  escritorio página de inicio</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/bchollos-desktop-2.webp"
            alt="Bchollos vista de escritorio página Marcas"
            title="Bchollos vista de escritorio página Marcas"
          />
          <figcaption>Bchollos vista de escritorio página Marcas</figcaption>
        </figure> 
        </div>
        </section>

        <hr />

         <section>

        <h3>
        <a href="https://www.jdescuentos.cl/" target="_blank" rel="noopener noreferrer">Jdescuentos</a>
        </h3>


        <p>
          Plataforma de ofertas para la comunidad Chilena.
        </p>

         <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-mobile-1.webp"
            alt="Jdescuentos vista móvil"
            title="Jdescuentos vista móvil"
          />
          <figcaption>Jdescuentos vista móvil</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-tablet-1.webp"
            alt="Jdescuentos vista tablet"
            title="Jdescuentos vista tablet"
          />
          <figcaption>Jdescuentos vista tablet</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-desktop-1.webp"
            alt="Jdescuentos vista de escritorio página de inicio"
            title="Jdescuentos vista de escritorio página de inicio"
          />
          <figcaption>Jdescuentos vista de escritorio página de inicio</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/jdescuentos-desktop-2.webp"
            alt="Jdescuentos vista de escritorio página Marcas"
            title="Jdescuentos vista de escritorio página Marcas"
          />
          <figcaption>Jdescuentos vista de escritorio página Marcas</figcaption>
        </figure> 
        </div>
        </section>

        <hr />

         <section>

        <h3>
        <a href="https://www.okdescontos.com.br/" target="_blank" rel="noopener noreferrer">OKdescontos</a>
        </h3>


        <p>
          Plataforma de ofertas para la comunidad Brasileña.
        </p>

         <div class="section-grid-container">
        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-mobile-1.webp"
            alt="OKdescontos vista móvil"
            title="OKdescontos vista móvil"
          />
          <figcaption>OKdescontos vista móvil</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-tablet-1.webp"
            alt="OKdescontos vista tablet"
            title="OKdescontos vista tablet"
          />
          <figcaption>OKdescontos vista tablet</figcaption>
        </figure> 
        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-desktop-1.webp"
            alt="OKdescontos vista de escritorio página de inicio"
            title="OKdescontos vista de escritorio página de inicio"
          />
          <figcaption>OKdescontos vista de escritorio página de inicio</figcaption>
        </figure> 

        <figure>
          <img
            src="/assets/webp/communitydeals/okdescontos-desktop-2.webp"
            alt="OKdescontos vista de escritorio página Marcas"
            title="OKdescontos vista de escritorio página Marcas"
          />
          <figcaption>OKdescontos vista de escritorio página Marcas</figcaption>
        </figure> 
        </div>
        </section>
       
      </article>

      <hr />
      `,
    },
    {
      slug: "coleccion-milenio-arte",
      title: "Colección Milenio Arte",
      technologies: ["Nuxt.js", "TypeScript", "Tailwind CSS"],
      content: `
      <article>
        <p>
          Como colaborador clave en el desarrollo de esta página web, mis principales responsabilidades incluían:
        </p>
        
        <h3>
         Principales responsabilidades:
        </h3>

        <ul>
            <li>
                Abordé y resolvió problemas de estilización CSS que afectaban el componente de tarjeta, asegurando una experiencia de usuario fluida.
            </li>
            <li>
                Corregí problemas de posición con los elementos del componente y aseguró que el contenido dinámico se representara correctamente.
            </li>
            <li>
                Identifiqué y resolvió problemas con la funcionalidad del icono de «guardar».
            </li>
            <li>
                Verifiqué que el contenido dinámico se representara correctamente, asegurando una experiencia de usuario suave y atractiva.
            </li>
            <li>
                Implementé un componente de modal para el formulario de contacto, mejorando la experiencia del usuario en general.
            </li>
        </ul>

        <h3>
        Desafíos técnicos:
        </h3>

        <p>
          En particular, el proyecto presentaba varios retos de desarrollo complejos, entre ellos:
        </p>

        <ul>
            <li>
                Superar problemas de estilización CSS que requirieron una planificación y ejecución cuidadosas para asegurar una experiencia de usuario fluida.
            </li>
            <li>
                Integrar con éxito el componente de modal con la funcionalidad del formulario de contacto existente, una tarea desafiante que requirió unir tecnologías dispares para crear una interfaz de usuario cohesiva y eficiente.
            </li>
        </ul>

        <hr />

        <h2>Imágenes del proyecto</h2>


        <section>

          <h3>
          <a href="https://www.coleccionmilenioarte.com/" target="_blank" rel="noopener noreferrer">Colección Arte Milenio</a>
          </h3>

          <div class="section-grid-container">
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-1.webp"
                alt="imagen de componente tarjeta"
                title="imagen de componente tarjeta"
              />
              <figcaption>Identifiqué y resolví problemas con la funcionalidad del icono «guardar» y me aseguré de que el contenido dinámico se mostrara correctamente.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-2.webp"
                alt="imagen de componente tarjeta"
                title="imagen de componente tarjeta"
              />
              <figcaption>Identifiqué y resolví problemas con la funcionalidad del icono «guardar».</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-3.webp"
                alt="imagen de componente tarjeta"
                title="imagen de componente tarjeta"
              />
              <figcaption>Se han corregido los problemas de posicionamiento de los elementos del componente y se ha garantizado la representación correcta del contenido dinámico.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-4.webp"
                alt="imagen de componente tarjeta"
                title="imagen de componente tarjeta"
              />
              <figcaption>Se han corregido los problemas de posicionamiento de los elementos del componente y se ha garantizado la representación correcta del contenido dinámico.</figcaption>
            </figure> 
            <figure>
              <img
                src="/assets/webp/artemilenio/arte-milenio-5.webp"
                alt="imagen de componente dinámico"
                title="imagen de componente dinámico"
              />
              <figcaption>Identifiqué y resolví problemas con la funcionalidad del icono «guardar».</figcaption>
            </figure> 
          </div>
        
        </section>

        <hr />

        <section>

          <p>
          El proyecto utiliza un componente modal y un componente de tarjeta, y he preparado demostraciones en vídeo para mostrar su funcionalidad.
          </p>

          <iframe
              width="100%"
              height="100%"
              src="/assets/videos/artemilenio/arte-milenio-video-1.mp4"
              title="Colección Arte Milenio componente tarjeta"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          
          <iframe
              width="100%"
              height="100%"
              src="/assets/videos/artemilenio/arte-milenio-video-2.mp4"
              title="Colección Arte Milenio componente modal"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>

        </section>
       
      </article>

      <hr />
      `,
    },
  ],
};

export const API_CONFIG = {
  english: API_DATA_EN,
  spanish: API_DATA_ES,
};
// export const API_DATA =
//   config.variant === "english" ? API_DATA_EN : API_DATA_ES;
