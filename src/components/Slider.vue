<script setup>

const slides = [
    {
        etiqueta: 'Visítanos',
        titulo: 'DESCUBRE NUESTRO PUNTO DEL CALZADO PALMIRA CON CALZADO UNICO',
        descripcion: 'Encuentranos en la direccion Cl. 30 #24-69 y deslumbrate con nuestro calzado premiun',
        imagen: '/img/almacen.jpeg',
        alt: 'Almacén Punto del Calzado',
        textoBoton: 'Ver catálogo',
        whatsapp: true
    },

    {
        etiqueta: 'Elegancia',
        titulo: 'DISEÑOS MODERNOS PARA CADA OCASION',
        descripcion: 'Compra nuestros modelos que resaltan tu estilo sin sacrificar comodidad.',
        imagen: '/img/zapatoReferencia1.jpeg',
        alt: 'Zapato elegante',
        textoBoton: 'Explorar',
        whatsapp: false
    },

    {
        etiqueta: 'Calidad premium',
        titulo: 'CALZADO QUE COMBINA ESTILO Y COMODIDAD',
        descripcion: 'Descubre nuestros modelos más destacados. Calidad, diseño y confort para cada ocasión.',
        imagen: '/img/zapatoReferencia2.jpeg',
        alt: 'Zapato premium',
        textoBoton: 'Ver productos',
        whatsapp: false
    }
]

</script>


<template>

<section class="heroSlider">

    <div
        id="heroCarousel"
        class="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"
    >

        <div class="carousel-inner">

            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="carousel-item"
                :class="{ active: index === 0 }"
            >

                <div class="heroContent">

                    <div class="heroText">

                        <span class="heroEtiqueta">
                            {{ slide.etiqueta }}
                        </span>

                        <h1>
                            {{ slide.titulo }}
                        </h1>

                        <p>
                            {{ slide.descripcion }}
                        </p>

                        <div class="heroBotones">

                            <router-link
                                :to="{ name: 'catalogo' }"
                                class="btnCatalogo"
                            >
                                {{ slide.textoBoton }}
                            </router-link>

                            <a
                                v-if="slide.whatsapp"
                                href="#Ubicacion"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="btnWhatsapp"
                            >
                                Ubicacion
                            </a>

                        </div>

                    </div>

                    <div class="heroImagen">

                        <img
                            :src="slide.imagen"
                            :alt="slide.alt"
                            loading="lazy"
                        >

                    </div>

                </div>

            </div>

        </div>

        <!-- Flecha izquierda -->

        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
        >

            <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
            ></span>

            <span class="visually-hidden">
                Anterior
            </span>

        </button>

        <!-- Flecha derecha -->

        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
        >

            <span
                class="carousel-control-next-icon"
                aria-hidden="true"
            ></span>

            <span class="visually-hidden">
                Siguiente
            </span>

        </button>

        <!-- Indicadores -->

        <div class="carousel-indicators">

            <button
                v-for="(slide, index) in slides"
                :key="'indicator-' + index"
                type="button"
                data-bs-target="#heroCarousel"
                :data-bs-slide-to="index"
                :class="{ active: index === 0 }"
                :aria-current="index === 0 ? 'true' : null"
                :aria-label="`Slide ${index + 1}`"
            ></button>

        </div>

    </div>

</section>

</template>


<style scoped>

.heroSlider{
    padding: 40px 80px 80px;
}

/* =========================
   CONTENEDOR PRINCIPAL
========================= */

.heroContent{
    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: 60px;

    min-height: 550px;

    padding: 60px;

    border-radius: 24px;

    background:
        linear-gradient(
            135deg,
            #ffffff,
            #f8f8f8
        );

    border: 1px solid rgba(214, 40, 30, .08);

    overflow: hidden;

    box-shadow:
        0 15px 35px rgba(214, 40, 30, .08),
        0 0 40px rgba(214, 40, 30, .04);
}

/* =========================
   TEXTO
========================= */

.heroText{
    flex: 1;
    animation: fadeUp .8s ease;
}

.heroEtiqueta{
    display: inline-flex;
    align-items: center;

    padding: 10px 18px;

    border-radius: 999px;

    background: rgba(214, 40, 30, .08);

    color: #D6281E;

    font-size: .9rem;
    font-weight: 600;

    margin-bottom: 20px;
}

.heroText h1{
    font-size: 4rem;
    line-height: 1.1;

    font-weight: 700;

    color: #D6281E;

    margin-bottom: 20px;
}

.heroText p{
    max-width: 600px;

    font-size: 1.1rem;
    line-height: 1.8;

    color: #555;

    margin-bottom: 35px;
}

/* =========================
   BOTONES
========================= */

.heroBotones{
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
}

.btnCatalogo{
    display: inline-flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    padding: 14px 28px;

    border-radius: 12px;

    background:
        linear-gradient(
            135deg,
            #D6281E,
            #f44336
        );

    color: white;

    font-weight: 600;

    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

.btnCatalogo:hover{
    color: white;

    transform: translateY(-4px);

    box-shadow:
        0 12px 24px rgba(214, 40, 30, .35);
}

.btnWhatsapp{
    display: inline-flex;
    align-items: center;
    justify-content: center;

    text-decoration: none;

    padding: 14px 28px;

    border-radius: 12px;

    background: white;

    border: 1px solid rgba(0,0,0,.1);

    color: #222;

    font-weight: 600;

    transition:
        transform .3s ease,
        box-shadow .3s ease;
}

.btnWhatsapp:hover{
    color: #222;

    transform: translateY(-4px);

    box-shadow:
        0 10px 20px rgba(0,0,0,.08);
}

/* =========================
   IMAGEN
========================= */

.heroImagen{
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

.heroImagen img{
    width: 100%;
    max-width: 550px;

    height: 420px;

    object-fit: cover;

    border-radius: 20px;

    transition:
        transform .4s ease,
        box-shadow .4s ease;

    box-shadow:
        0 15px 35px rgba(0,0,0,.12);
}

.heroImagen img:hover{
    transform:
        translateY(-8px)
        scale(1.03);
}

/* =========================
   CONTROLES DEL CARRUSEL
========================= */

.carousel-control-prev,
.carousel-control-next{
    width: 6%;
}

.carousel-control-prev-icon,
.carousel-control-next-icon{
    padding: 22px;

    border-radius: 50%;

    background-color: #D6281E;
    background-size: 60%;
}

/* =========================
   INDICADORES
========================= */

.carousel-indicators{
    bottom: -60px;
}

.carousel-indicators button{
    width: 12px !important;
    height: 12px !important;

    border-radius: 50%;

    background-color: #D6281E !important;

    opacity: .35;
}

.carousel-indicators .active{
    opacity: 1;
}

/* =========================
   ANIMACIONES
========================= */

@keyframes fadeUp{

    from{
        opacity: 0;
        transform: translateY(30px);
    }

    to{
        opacity: 1;
        transform: translateY(0);
    }

}

/* =========================
   TABLETS
========================= */

@media (max-width: 992px){

    .heroSlider{
        padding: 30px;
    }

    .heroContent{
        gap: 40px;
        padding: 40px;
    }

    .heroText h1{
        font-size: 3rem;
    }

    .heroImagen img{
        height: 340px;
    }

}

/* =========================
   MOVILES
========================= */

@media (max-width: 768px){

    .heroSlider{
        padding: 20px;
    }

    .heroContent{
        flex-direction: column;

        text-align: center;

        gap: 25px;

        padding: 25px;

        min-height: auto;
    }

    .heroText h1{
        font-size: 2.2rem;
    }

    .heroText p{
        font-size: .95rem;
        line-height: 1.6;

        max-width: 100%;
    }

    .heroBotones{
        justify-content: center;
    }

    .heroImagen{
        width: 100%;
    }

    .heroImagen img{
        width: 100%;
        max-width: 100%;

        height: 280px;
    }

    .carousel-control-prev,
    .carousel-control-next{
        display: none;
    }

}

/* =========================
   MOVILES PEQUEÑOS
========================= */

@media (max-width: 480px){

    .heroSlider{
        padding: 15px;
    }

    .heroContent{
        padding: 20px;
    }

    .heroText h1{
        font-size: 1.8rem;
    }

    .heroEtiqueta{
        font-size: .8rem;
    }

    .btnCatalogo,
    .btnWhatsapp{
        width: 100%;
    }

    .heroImagen img{
        height: 220px;
    }

}

</style>