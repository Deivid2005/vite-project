<template>

<section class="heroSlider">

    <div id="heroCarousel" class="carousel slide" data-bs-ride="carousel">

        <div class="carousel-inner">

            <!-- Slide 1 -->
            <div class="carousel-item active">

                <div class="heroContent">

                    <div class="heroText">

                        <span class="heroEtiqueta">
                            Visitanos
                        </span>

                        <h1>
                            Calzado que combina
                            estilo y comodidad
                        </h1>

                        <p>
                            Descubre nuestros modelos más destacados. 
                            Calidad, diseño y confort
                            para cada ocasión.
                        </p>

                        <div class="heroBotones">

                            <router-link
                                :to="{ name: 'catalogo' }"
                                class="btnCatalogo"
                            >
                                Ver catálogo
                            </router-link>

                            <a
                                href="https://wa.me/TUNUMERO"
                                class="btnWhatsapp"
                                target="_blank"
                            >
                                Pedir por WhatsApp
                            </a>

                        </div>

                    </div>

                    <div class="heroImagen">

                        <img
                            src="/img/almacen.jpeg"
                            alt="Zapato destacado"
                        >

                    </div>

                </div>

            </div>

            <!-- Slide 2 -->
            <div class="carousel-item">

                <div class="heroContent">

                    <div class="heroText">

                        <span class="heroEtiqueta">
                            Elegancia
                        </span>

                        <h1>
                            Diseños modernos
                            para cada ocasión
                        </h1>

                        <p>
                            Encuentra modelos que resaltan tu estilo
                            sin sacrificar comodidad.
                        </p>

                        <div class="heroBotones">

                            <router-link
                                :to="{ name: 'catalogo' }"
                                class="btnCatalogo"
                            >
                                Explorar
                            </router-link>

                        </div>

                    </div>

                    <div class="heroImagen">

                        <img
                            src="/img/zapatoReferencia1.jpeg"
                            alt="Zapato elegante"
                        >

                    </div>

                </div>

            </div>

            <!-- Slide 3 -->
            <div class="carousel-item">

                <div class="heroContent">

                    <div class="heroText">

                        <span class="heroEtiqueta">
                            Calidad premium
                        </span>

                        <h1>
                            Calzado que combina
                            estilo y comodidad
                        </h1>

                        <p>
                            Descubre nuestros modelos más destacados. 
                            Calidad, diseño y confort
                            para cada ocasión.
                        </p>

                        <div class="heroBotones">

                            <router-link
                                :to="{ name: 'catalogo' }"
                                class="btnCatalogo"
                            >
                                Ver productos
                            </router-link>

                        </div>

                    </div>

                    <div class="heroImagen">

                        <img
                            src="/img/zapatoReferencia2.jpeg"
                            alt="Zapato premium"
                        >

                    </div>

                </div>

            </div>

        </div>

        <div class="carousel-indicators">

            <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="0"
                class="active"
            ></button>

            <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="1"
            ></button>

            <button
                type="button"
                data-bs-target="#heroCarousel"
                data-bs-slide-to="2"
            ></button>

        </div>

    </div>

</section>

</template>

<style scoped>

.heroSlider{
    padding: 40px 80px;
}

.heroContent{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 50px;

    min-height: 500px;

    border-radius: 25px;

    padding: 60px;

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,0.95),
            rgba(248,248,248,0.95)
        );

    box-shadow:
        0 10px 30px rgba(255,60,0,.08),
        0 0 40px rgba(255,183,0,.05);
}

.heroText{
    flex: 1;
}

.heroEtiqueta{
    display: inline-block;

    padding: 8px 16px;

    border-radius: 50px;

    font-size: .9rem;
    font-weight: 600;

    color: #ff3c00;

    background: rgba(255,60,0,.1);

    margin-bottom: 20px;
}

.heroText h1{
    font-size: 3.5rem;
    line-height: 1.1;

    font-weight: 700;

    margin-bottom: 20px;

    background: linear-gradient(
        90deg,
        #ff3c00,
        #ffb700
    );

    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.heroText p{
    font-size: 1.1rem;
    line-height: 1.8;

    color: #555;

    max-width: 600px;

    margin-bottom: 30px;
}

.heroBotones{
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.btnCatalogo{
    text-decoration: none;

    padding: 12px 24px;

    border-radius: 10px;

    color: white;

    background: linear-gradient(
        135deg,
        #ff3c00,
        #ffb700
    );

    font-weight: 600;

    transition: .3s;
}

.btnCatalogo:hover{
    transform: translateY(-3px);

    box-shadow:
        0 10px 20px rgba(255,60,0,.2);
}

.btnWhatsapp{
    text-decoration: none;

    padding: 12px 24px;

    border-radius: 10px;

    border: 1px solid rgba(0,0,0,.1);

    color: #222;

    font-weight: 600;

    transition: .3s;
}

.btnWhatsapp:hover{
    transform: translateY(-3px);

    box-shadow:
        0 10px 20px rgba(0,0,0,.08);
}

.heroImagen{
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;
}

.heroImagen img{
    width: 100%;
    max-width: 500px;

    object-fit: contain;

    transition: .4s;
    border-radius: 12px;
}

.heroImagen img:hover{
    transform: scale(1.05);
}

.carousel-indicators{
    bottom: -50px;
}

.carousel-indicators button{
    width: 12px !important;
    height: 12px !important;

    border-radius: 50%;

    background-color: #ff3c00 !important;
}

@media (max-width: 768px){

    .heroSlider{
        padding: 20px;
    }

    .heroContent{
        flex-direction: column-reverse;

        text-align: center;

        padding: 25px 20px;

        min-height: auto;

        gap: 20px;
    }

    .heroText h1{
        font-size: 2rem;
    }

    .heroText p{
        font-size: .95rem;
        line-height: 1.6;
    }

    .heroBotones{
        justify-content: center;
    }

    .heroImagen img{
        max-width: 280px;
    }

}

</style>