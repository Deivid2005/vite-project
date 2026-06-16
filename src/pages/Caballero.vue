<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import botonWhatsapp from '../components/botonWhatsapp.vue';

import { ref, computed } from 'vue';

import { productos } from '../data/productos';

const filtroActivo = ref('Todos');

const colorSeleccionado = ref({});

productos.forEach(producto => {
    colorSeleccionado.value[producto.id] =
        producto.paletaPrincipal
})


const categorias = [
    'Todos',
    'Deportivo',
    'Clasico',
    'Ejecutivo',
    'Botas'
];

const productosFiltrados = computed(() => {

    const productosCaballero = productos.filter(
        producto => producto.catalogo === 'Caballero'
    );

    if (filtroActivo.value === 'Todos') {
        return productosCaballero;
    }

    return productosCaballero.filter(
        producto => producto.categoria === filtroActivo.value
    );

});
</script>

<template>

<div class="layout">

    <Header />

    <main>

        <div class="catalogo">

            <!-- FILTROS -->

            <div class="filtros">

                <button
                    v-for="categoria in categorias"
                    :key="categoria"
                    @click="filtroActivo = categoria"
                    :class="{ activo: filtroActivo === categoria }"
                >
                    {{ categoria }}
                </button>

            </div>

            <!-- PRODUCTOS -->

            <div class="productos">

                <div
                    v-for="producto in productosFiltrados"
                    :key="producto.id"
                    class="producto"
                >

                    <!-- IMAGEN -->

                    <img

                        v-if="
                            producto.paletas &&
                            colorSeleccionado[producto.id]
                        "

                        :src="
                            producto.paletas[
                                colorSeleccionado[producto.id]
                            ]?.imagen
                        "

                        :alt="producto.nombre"
                    >

                    <!-- ETIQUETA -->

                    <span class="etiqueta">
                        {{ producto.categoria }}
                    </span>

                    <!-- PALETAS -->

                    <div
                        class="paletas"
                        v-if="producto.paletas"
                    >

                       <button
    v-for="(datos, color) in producto.paletas"
    :key="color"

    class="color-circle"

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

                    <!-- PRECIO -->

                    <p class="precio">
                        ${{ producto.precio.toLocaleString() }}
                    </p>

                    <!-- BOTÓN -->

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

        </div>

    </main>

    <Footer />

</div>

<botonWhatsapp />

</template>



<style scoped>

.layout{
    margin: 0;
    padding: 0;
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    font-family: 'Poppins', sans-serif;
}

main{
    flex: 1;
}

.catalogo{
    width: 90%;
    margin: auto;
    padding: 2rem 0;
}

.filtros{
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2rem;
}

.filtros button{
    border: none;
    padding: .8rem 1.2rem;
    border-radius: 30px;
    cursor: pointer;
    background: #f1f1f1;
    transition: .3s;
}

.filtros button:hover{
    transform: translateY(-2px);
}

.filtros button.activo{
    background: #c62828;
    color: white;
}

.productos{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
}

.producto{
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,.1);
    position: relative;
    transition: .3s;
    width: 250px;
    /*
    transform: translateX(-100px);
    animation: aparecer 0.8s ease-out forwards;
    */
}


/* ANIMACIÓN 
@keyframes aparecer {
    to{
        opacity: 1;
        transform: translateX(0);
    }
}
*/

.producto:hover{
    transform: translateY(-5px);
}

.producto img{
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.producto h5{
    padding: .5rem 1rem;
    color: #ff3c00;
    text-align: center;
   
}

.precio{
    padding: 0 1rem;
    font-weight: bold;
    color: #c62828;
}

.etiqueta{
    position: absolute;
    top: 10px;
    left: 10px;
    background: #c62828;
    color: white;
    padding: .4rem .8rem;
    border-radius: 20px;
    font-size: .8rem;
    font-weight: 600;
}

.btn{
    margin: 1rem;
    width: calc(100% - 2rem);
    padding: .3rem;
    border: none;
    border-radius: 10px;
    background: #c62828;
    color: white;
    font-weight: bold;
    cursor: pointer;
}

.btn:hover{
    transform: scaleX(1.1) scaleY(1.1);
    background: #c63828;
}

.paletas{
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
}

.color-circle{
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: 2px solid #ddd;
    cursor: pointer;
    transition: .3s;
}

.color-circle:hover{
    transform: scale(1.15);
}

.color-circle.activo{
    transform: scale(1.25);
    border: 3px solid #000;
}


@media (max-width: 768px){


  .productos{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }

    .producto{
        width: 100%;
    }


.producto img{
    height: 200px;
}

.btn{
    padding: .1rem;
}



}

</style>