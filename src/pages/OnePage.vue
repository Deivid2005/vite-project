<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Ubicacion from '../components/Ubicacion.vue';
import Logos from '../components/Logos.vue'
import Slider from '../components/Slider.vue';

import { ref, computed, onMounted, onUnmounted } from 'vue'

import { productos } from '../data/productos.js'


const colorSeleccionado = ref({})

productos.forEach(producto => {

    if (producto.paletaPrincipal) {

        colorSeleccionado.value[producto.id] =
            producto.paletaPrincipal

    }

})

const indiceActual = ref(0)

const anchoPantalla = ref(window.innerWidth)

const actualizarAncho = () => {
    anchoPantalla.value = window.innerWidth
}

onMounted(() => {
    window.addEventListener(
        'resize',
        actualizarAncho
    )
})

onUnmounted(() => {
    window.removeEventListener(
        'resize',
        actualizarAncho
    )
})

const productosPorPagina = computed(() => {

    return anchoPantalla.value <= 768
        ? 3
        : 4

})

const productosDestacados = computed(() => {

    return productos.filter(
        producto => producto.destacado
    )

})

const productosVisibles = computed(() => {

    return productosDestacados.value.slice(
        indiceActual.value,
        indiceActual.value + productosPorPagina.value
    )

})

const siguiente = () => {

    const cantidad =
        productosPorPagina.value

    if (
        indiceActual.value + cantidad <
        productosDestacados.value.length
    ) {

        indiceActual.value += cantidad

    } else {

        indiceActual.value = 0

    }

}

const anterior = () => {

    const cantidad =
        productosPorPagina.value

    if (
        indiceActual.value - cantidad >= 0
    ) {

        indiceActual.value -= cantidad

    } else {

        indiceActual.value =
            Math.max(
                0,
                productosDestacados.value.length -
                cantidad
            )

    }

}
</script>

<template>

<div class="layout">

 <Header />

 <Slider />

 <main>

  <h1 class="titleDestacado">DESTACADO</h1>

<section class="contenedorDestacado">

  <button class="flecha" @click="anterior">
    ❮
  </button>

  <section class="destacado">


    <div
  v-for="producto in productosVisibles"
  :key="producto.id"
  class="card"
>

  <img

    :src="
    producto.paletas[
    colorSeleccionado[producto.id]
    ]?.imagen
    "

    class="card-img-top"

    :alt="producto.categoria"

  >

  <div class="card-body">

    <h5 class="card-title">
      {{ producto.categoria }}
    </h5>

    <p class="precio">
      ${{ producto.precio.toLocaleString() }}
    </p>

    <div class="mini-paletas">

    <button

        v-for="(datos, color) in producto.paletas"

        :key="color"

        class="mini-color"

        :class="{
            activo:
            colorSeleccionado[producto.id] === color
        }"

        :style="{
            backgroundColor: datos.color
        }"

        @click="
            colorSeleccionado[producto.id] = color
        "

    ></button>

</div>

    <router-link

      class="btn"

      :to="{
        name: 'producto',
        params: {
          id: producto.id
        }
      }"

    >
      Ver aquí
    </router-link>

  </div>

</div>

  

  </section>

  <button class="flecha" @click="siguiente">
    ❯
  </button>

</section>

<section class="presentacionCatalogo">

   <div class="textPresentacion">
      <p class="textFont2">Descubre el estilo que marcará la diferencia.
Explora nuestro catálogo y encuentra calidad, diseño y personalidad en cada detalle.
      </p>

      <div class="caja">
      <router-link class="ingresoCatalogo" align="center" :to="{ name: 'catalogo'}">Ingresar</router-link>
      </div>
   </div>

</section>



   <Ubicacion />

 
 </main>

 <h1 class="titleDestacado">VISITA NUESTRAS REDES</h1>
 <p class="textoLogos">Ingresa a 
  nuestras redes y 
  enterate de todas 
  las novedades que le daran 
  estilo a tu calzado
 </p>

 <Logos/>

 <Footer/>

</div>

</template>

<style scoped>

.layout{
    min-height: 100dvh;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
}

main{
    flex: 1;
}


.titleDestacado,
.textFont{
    /*background: linear-gradient(90deg, #ff3c00, #ffb700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;+*/
    color: #D6281E;
    font-weight: bold;
}

.textFont2{
    font-weight: bold;
    color: #ddd;
}

.titleDestacado{
    text-align: center;
    padding: 20px;
}

.destacado{
    display: flex;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.inlineIcon{
 display: flex;
 justify-content: center;
margin: 3px;

}

.contenedorDestacado{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    width: 100%;
}

.flecha{
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    font-size: 24px;
    font-weight: bold;
    color: white;
    background: #D6281E;
    transition: .3s;
}

.flecha:hover{
    transform: scale(1.1);
    box-shadow:
        0 0 15px rgba(255,183,0,.5),
        0 0 25px rgba(255,60,0,.3);
}

.precio{
    color: #D6281E;
    font-weight: bold;
    margin-bottom: 12px;
}

.mini-paletas{
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 15px;
}

.mini-color{
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 1px solid #ddd;
    cursor: pointer;
    transition: .3s;
}

.mini-color:hover{
    transform: scale(1.15);
}

.mini-color.activo{
    transform: scale(1.25);
    border: 2px solid #000;
}

.card-body{
    text-align: center;
}

.card{
    text-align: center;
    border: 1px solid rgba(255, 140, 0, 0.15);
    box-shadow: 0 6px 18px rgba(214, 40, 30, 0.25);
    transition: transform .3s ease, box-shadow .3s ease;
    border-radius: 12px;
    width: 240px;
    flex-shrink: 0;

}



.card h5{
    color: #D6281E;
}

.card p{
    color: black;
    margin-left: 5px;
    margin-bottom: 10px;
}

.card:hover{
    transform: translateY(-8px);
    box-shadow: 0 12px 28px rgba(214, 40, 30, 0.35);
}

.card-img-top{
    width: 100%;
    height: 250px;
    object-fit: contain;
    padding: 10px;
}

.btn,
.ingresoCatalogo{
    border: 1px solid rgba(255, 140, 0, 0.15);
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
    text-decoration: none;
    color: white;
    background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
    transition: .3s;
}

.btn:hover,
.ingresoCatalogo:hover{
    transform: scale(1.05);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
}

.presentacionCatalogo{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 400px;
    margin-top: 30px;
    background: url(/img/fondo.png) center/cover no-repeat;
}

.textPresentacion,
.caja{
    display: flex;
    justify-content: center;
    background: transparent;
}

.textPresentacion{
    flex-direction: column;
}

 .textoLogos{
      text-align: center;
      margin-bottom: 12px;
    }

@media (max-width: 768px){

    .slider{
        padding: 20px;
    }

    .titleDestacado{
        font-size: 1.8rem;
        padding: 15px;
    }

    .contenedorDestacado{
        gap: 8px;
        width: 100%;
    }

    .destacado{
        gap: 10px;
    }

    .card{
    width: calc((100% - 20px) / 3);
    min-width: 0;
        
      
    }

   .card-img-top{
    height: 140px;
}

    .card h5{
        font-size: 0.9rem;
    }

    .card p{
        font-size: 0.75rem;
        margin-bottom: 10px;
        
    }

    .btn{
        font-size: 0.75rem;
        padding: 6px 10px;
        display: inline-block;
    }

    .flecha{
        width: 35px;
        height: 35px;
        font-size: 16px;
        flex-shrink: 0;
    }

    .presentacionCatalogo{
        height: auto;
        min-height: 250px;
        padding: 25px 15px;
        text-align: center;
    }

    .textPresentacion{
        align-items: center;
    }

    .textFont{
        font-size: 1rem;
        line-height: 1.5;
    }

    .ingresoCatalogo{
        padding: 8px 16px;
        font-size: 0.9rem;
    }

   

}

</style>

