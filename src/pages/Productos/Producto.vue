<script setup>
import Footer from '../../components/Footer.vue';
import Header from '../../components/Header.vue';

import { productos } from '../../data/productos'

import { useRoute } from 'vue-router'

import { ref, computed } from 'vue'

const route = useRoute()

console.log(route.params.id)

const producto = productos.find(
    p => p.id === Number(route.params.id)
)

/*colores*/

const colorSeleccionado = ref(
    producto.paletaPrincipal
)

const imagenesActivas = computed(() => {
    return producto.variantes[
        colorSeleccionado.value
    ].imagenes
})

/* Talla */

const tallaSeleccionada = ref(null)

const irWhatsapp = () => {

    if (!tallaSeleccionada.value) {

        alert('Por favor selecciona una talla')

        return
    }

    window.open(

        `https://wa.me/573174209327?text=${mensajeWhatsapp.value}`,

        '_blank'
    )

}


/* boton de whatsapp */

const imagenActual = computed(() => {

    return producto.paletas[
        colorSeleccionado.value
    ].imagen

})

const mensajeWhatsapp = computed(() => {

    return encodeURIComponent(

`👋 Hola, me gustaría solicitar información sobre el siguiente producto de Punto del Calzado.

*DATOS DEL PRODUCTO*

Referencia: ${producto.id}
Categoría: ${producto.categoria}
Color seleccionado: ${colorSeleccionado.value}
Talla seleccionada: ${tallaSeleccionada.value}
Precio: $${producto.precio.toLocaleString()}

*REFERENCIA VISUAL*

${window.location.origin}${imagenActual.value}

*ENLACE DEL PRODUCTO*

${window.location.origin}/producto/${producto.id}

Quedo atento a información sobre disponibilidad, formas de pago, tiempo de entrega y proceso de compra.

Muchas gracias.`
    )

})


</script>


<template>

<div class="layout">

<Header />


    <!-- MAIN -->
    <main>

        <section class="producto-container">

            <!-- GALERÍA -->
            <div class="producto-galeria">

                <div id="carouselExampleIndicators" class="carousel slide">



                    <!-- Indicadores -->
                       <div class="carousel-indicators">

                         <button
                           v-for="(imagen, index) in imagenesActivas"
                           :key="index"
                           type="button"
                           data-bs-target="#carouselExampleIndicators"
                           :data-bs-slide-to="index"
                           :class="{ active: index === 0 }"
                           >
                         </button>

                      </div>

                    

                    <!-- Slides -->
                   <div class="carousel-inner">

                <div
                 v-for="(imagen, index) in imagenesActivas"
                 :key="imagen"
                 class="carousel-item"
                 :class="{ active: index === 0 }"
                  >

                <img
                   :src="imagen"
                   class="d-block w-100"
                   :alt="producto.nombre"
                   >

                </div>

                 </div>

                    <!-- Flechas -->
                    <button class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">

                        <span class="carousel-control-prev-icon"></span>

                    </button>

                    <button class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">

                        <span class="carousel-control-next-icon"></span>

                    </button>

                </div>

            </div>

            <!-- INFORMACIÓN -->
            <section class="productInfo">

                <p class="productCategoria">
                 {{ producto.categoria }}
                </p>


                <h2 class="productPrice">
                 ${{ producto.precio.toLocaleString() }}
                </h2>

                <!-- COLORES -->
                <div class="productColors">

                    <span class="section-label">
                        Colores
                    </span>

                    

                    <div class="colors">

    <button

        v-for="(datos, color) in producto.paletas"

        :key="color"

        class="color-btn"

        :class="{
            active: colorSeleccionado === color
        }"

        :style="{
            backgroundColor: datos.color
        }"

        @click="colorSeleccionado = color"

        ></button>

        

         </div>

                    

                    

                  

                </div>



                <!-- DESCRIPCIÓN -->
                <p class="productDescription">
                 {{ producto.descripcion }}
                </p>


                <!-- TALLAS -->
                <div class="productSizes">

                    <span class="sectionLabel">
                        Tallas
                    </span>

                    <div class="tamaño">

                          <button

                           v-for="talla in producto.tallas"

                           :key="talla"

                           class="size-btn"

                          :class="{
                           active: tallaSeleccionada === talla
                           }"

                          @click="tallaSeleccionada = talla"

                         >
                          {{ talla }}
                         </button>
                    </div>

                </div>

                <!-- ESTADO -->
                <div class="productStatus">

                    <p>✔ Disponible</p>

                    <p>🚚 Envíos nacionales</p>

                </div>


            </section>

        </section>

        <!-- BOTÓN -->
     <button

    class="whatsapp-btn"

    :disabled="!tallaSeleccionada"

    @click="irWhatsapp"

    :href="`https://wa.me/573164616364?text=${mensajeWhatsapp}`"



>

    {{
        tallaSeleccionada
        ? 'Solicitar por WhatsApp'
        : 'Selecciona una talla'
    }}

</button>

    </main>

    <Footer />

</div>

</template>


<style scoped>

.layout{
    margin: 0;
    padding: 0;
    min-height: 100vh;
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;

}

.main{
    flex: 1;
}


/* CONTENEDOR GENERAL */
.producto-container{
    width: 90%;
    margin: 40px auto 120px;
    display: flex;
    gap: 50px;
    align-items: flex-start;
}

/* GALERÍA */
.producto-galeria{
    flex: 1;
}

/* CARRUSEL */
.carousel{
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 15px 40px rgba(0,0,0,.4);
}

.carousel-item img{
    width: 100%;
    height: 650px;
    object-fit: cover;
}

/* INFO */
.productInfo{
    flex: 1;
    color: #1a1a1a;
}

/* CATEGORÍA */
.productCategoria{
    color: black;
    font-size: 1rem;
    margin-bottom: 10px;
}

/* NOMBRE */
.productName{
    color: #d4af37;
    font-size: 2.5rem;
    margin-bottom: 15px;
    font-weight: 700;
}

/* PRECIO */
.productPrice{
    color: #c62828;
    font-size: 2rem;
    margin-bottom: 30px;
    font-weight: 600;
}

/* LABELS */
.section-label,
.sectionLabel{
    display: block;
    margin-bottom: 15px;
    color: #c62828;
    font-weight: 600;
}

/* COLORES */
.productColors{
    margin-bottom: 30px;
}

.colors{
    display: flex;
    gap: 12px;
}

.color-btn{
    width: 38px;
    height: 38px;
    border-radius: 50%;
    border: 2px solid transparent;
    cursor: pointer;
    transition: .2s ease;
}

.color-btn:hover{
    transform: scale(1.1);
}

.color-btn.active{
    border-color: #c62828;
}

.black{
    background: black;
}

.red{
    background: #c1121f;
}

/* DESCRIPCIÓN */
.productDescription{
    color: black;
    line-height: 1.8;
    margin-bottom: 35px;
}

/* TALLAS */
.productSizes{
    margin-bottom: 35px;
}

.tamaño{
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
}

.size-btn{
    min-width: 55px;
    height: 48px;
    border-radius: 12px;
    border: 1px solid #333;
    background: #1a1a1a;
    color: #f8f8f8;
    font-size: 1rem;
    cursor: pointer;
    transition: .2s ease;
}

.size-btn:hover{
    border-color: #c62828;
    transform: translateY(-2px);
}

.size-btn.active{
    background: #c62828;
    color: #f8f8f8;
    font-weight: bold;
}

/* ESTADO */
.productStatus{
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 35px;
    color: black;
}

/* FEATURES */
.productFeatures h3{
    margin-bottom: 18px;
    color: #d4af37;
}

.productFeatures ul{
    list-style: none;
}

.productFeatures li{
    margin-bottom: 15px;
    color: black;
    padding-left: 20px;
    position: relative;
}

.productFeatures li::before{
    content: "•";
    position: absolute;
    left: 0;
    color: #d4af37;
}

/* BOTÓN WHATSAPP */
.whatsapp-btn{
    position: fixed;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
    width: 85%;
    max-width: 500px;
    height: 60px;
    background: #25D366;
    color: #f1f1f1;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 18px;
    font-weight: bold;
    font-size: 1.1rem;
    box-shadow: 0 10px 30px rgba(0,0,0,.4);
    transition: .2s ease;
}

.whatsapp-btn:hover{
    transform: translateX(-50%) translateY(-2px);
    box-shadow: 0 10px 25px rgba(212,175,55,.25);
}

.whatsapp-btn:disabled{
    opacity: .6;
    cursor: not-allowed;
}

/* RESPONSIVE */
@media(max-width: 768px){

    .producto-container{
       flex-direction: column;
    }

    .carousel-item img{
        height: 50%;
     
    }

    .productName{
        font-size: 2rem;
    }

    .productPrice{
        font-size: 1.6rem;
    }
}


</style>