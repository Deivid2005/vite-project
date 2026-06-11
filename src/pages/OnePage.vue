<script setup>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Ubicacion from '../components/Ubicacion.vue';
import Logos from '../components/logos.vue';
import Slider from '../components/Slider.vue';

import { ref, computed, onMounted, onUnmounted } from 'vue';

import { productos } from '../data/productos.js';

const indiceActual = ref(0);
const anchoPantalla = ref(window.innerWidth);

const actualizarAncho = () => {
  anchoPantalla.value = window.innerWidth;
};

onMounted(() => {
  window.addEventListener('resize', actualizarAncho);
});

onUnmounted(() => {
  window.removeEventListener('resize', actualizarAncho);
});

const productosPorPagina = computed(() => {
  return anchoPantalla.value <= 768 ? 3 : 4;
});

const productosDestacados = computed(() => {
  return productos.filter(
    producto => producto.destacado
  )
})

const productosVisibles = computed(() => {
  return productosDestacados.value.slice(
    indiceActual.value,
    indiceActual.value + productosPorPagina.value
  );
});

const siguiente = () => {
  const cantidad = productosPorPagina.value;

   if (
  indiceActual.value + cantidad <
  productosDestacados.value.length)
  {
    indiceActual.value += cantidad;
  } else {
    indiceActual.value = 0;
  }
};

const anterior = () => {
  const cantidad = productosPorPagina.value;

  if (indiceActual.value - cantidad >= 0) {
    indiceActual.value -= cantidad;
  } else {
    indiceActual.value =
  productosDestacados.value.length - cantidad;
  }
};
</script>

<template>

<div class="layout">

 <Header />

 <Slider />

 <main>

  <h1 class="titleDestacado">Destacado</h1>

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
        :src="producto.imagen"
        class="card-img-top"
        :alt="producto.nombre"
      >

      <div class="card-body">
        <h5 class="card-title">
          {{ producto.nombre }}
        </h5>

        <p class="card-text">
          {{ producto.descripcion }}
        </p>

        <router-link
        class="btn"
        :to="{
        name: 'producto',
        params: { id: producto.id }
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
      <p class="textFont">Descubre el estilo que marcará la diferencia.
Explora nuestro catálogo y encuentra calidad, diseño y personalidad en cada detalle.
      </p>

      <div class="caja">
      <router-link class="ingresoCatalogo" align="center" :to="{ name: 'catalogo'}">Ingresar</router-link>
      </div>
   </div>

</section>



   <Ubicacion />

 
 </main>

 <h1 class="titleDestacado">Visita nuestras redes</h1>
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

/*
.layout{
min-height: 100vh;
margin: 0;
padding:0;
 display: flex;
flex-direction: column;
}

main{
  
   flex: 1;
}

.slider{
   padding: 100px;
}

.titleDestacado{
   text-align: center;
   background: linear-gradient(90deg, #ff3c00, #ffb700);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   font-weight: bold;
   padding: 20px;
}

.destacado{
   display: flex;
   justify-content: center;
   gap: 25px;
   flex-wrap: nowrap;

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

   background: linear-gradient(
      135deg,
      #ff3c00,
      #ffb700
   );

   transition: .3s;
}

.flecha:hover{
   transform: scale(1.1);

   box-shadow:
      0 0 15px rgba(255,183,0,.5),
      0 0 25px rgba(255,60,0,.3);
}

.card{
    box-shadow: 0 8px 10px rgba(255, 60, 0, 0.18),
        0 0 20px rgba(255, 170, 0, 0.12);

    border: 1px solid rgba(255, 140, 0, 0.15);
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card h5{
   background: linear-gradient(90deg, #ff3c00, #ffb700);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;

}

.card p{
  color: black;
}

.card:hover{
    transform: translateY(-8px);
    box-shadow: 0px 10px 20px rgba(212, 175, 55, 0.2);
}

.btn{
   border: 1px solid rgba(255, 140, 0, 0.15);
   padding: 10px 20px;
   border-radius: 8px;
   cursor: pointer;
   text-decoration: none;
   background: linear-gradient(135deg, #0f0f0f, #1a1a1a) ;
   color: white;
}

.btn:hover{
   transform: scale(1.05);
   box-shadow: 0px 10px 20px rgba(212, 175, 55, 0.2);

}

.presentacionCatalogo{
   display: flex;
   width: 100%;
   height: 400px;
   justify-content: center;
   align-items: center;
   background-image: url(/img/fondo.png);
   background-repeat: no-repeat; 
   background-size: cover; 
   background-position: center center; 
   margin-top: 30px;
}

.textPresentacion{
   background: transparent;
   display: flex;
   justify-content: center;
   flex-direction: column;
   
}

.textFont{
   background: transparent;
   background: linear-gradient(90deg, #ff3c00, #ffb700);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
   font-weight: bold;
}

.ingresoCatalogo{
border: 1px solid rgba(255, 140, 0, 0.15);
padding: 10px 20px;
border-radius: 8px;
cursor: pointer;
color:white;
background: linear-gradient(135deg, #0f0f0f, #1a1a1a);
text-decoration: none;
}

.ingresoCatalogo:hover{
   transform: scale(1.05);
   box-shadow: 0px 10px 20px rgba(212, 175, 55, 0.2);
}

.caja{
   background: transparent;
   display: flex;
   justify-content: center;
}

*/

.layout{
    min-height: 100vh;
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
    background: linear-gradient(90deg, #ff3c00, #ffb700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
}

.titleDestacado{
    text-align: center;
    padding: 20px;
}

.destacado{
    display: flex;
    justify-content: center;
    gap: 25px;
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
    background: linear-gradient(135deg, #ff3c00, #ffb700);
    transition: .3s;
}

.flecha:hover{
    transform: scale(1.1);
    box-shadow:
        0 0 15px rgba(255,183,0,.5),
        0 0 25px rgba(255,60,0,.3);
}

.card{
    text-align: center;
    border: 1px solid rgba(255, 140, 0, 0.15);
    box-shadow:
        0 8px 10px rgba(255, 60, 0, 0.18),
        0 0 20px rgba(255, 170, 0, 0.12);
    transition: transform .3s ease, box-shadow .3s ease;
}

.card h5{
    background: linear-gradient(90deg, #ff3c00, #ffb700);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.card p{
    color: black;
}

.card:hover{
    transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
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
        width: 30%;
        min-width: 100px;
    }

    .card-img-top{
        height: 120px;
        object-fit: cover;
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

