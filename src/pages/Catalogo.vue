<script setup>

import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import BotonWhatsapp from '../components/botonWhatsapp.vue';


</script>

<template>

<div class="layout">

<Header />

<main class="main">

<div class="contenedorCategorias">


<div class="categoria-card">
  <img src="../referencia/Caballero.jpeg" alt="producto">

  <div class="contenido">
    <h3>CALZADO CABALLERO</h3>
    <p>Clasico, deportivo, ejecutivo, botas</p>
  </div>

    <router-link class="btn" :to="{name: 'caballero'}">
     →
  </router-link>
</div>

<div class="categoria-card">
  <img src="../referencia/Dama.jpeg" alt="producto">

  <div class="contenido">
    <h3>CALZADO DAMA</h3>
    <p>Deportivas, vans, baletas, sandalias, plataformas, tacones</p>
  </div>

  <router-link class="btn" :to="{name: 'dama'}">
     →
  </router-link>
</div>

<div class="categoria-card">
  <img src="../referencia/Infantil.jpeg" alt="producto">

  <div class="contenido">
    <h3>CALZADO INFANTIL</h3>
    <p>Deportivo, sandalias</p>
  </div>

  <router-link class="btn" :to="{ name: 'division'}">
    →
</router-link>
</div>




</div> 

<BotonWhatsapp />
  
</main>

<Footer />

</div>


</template>




<style scoped>

.layout{
min-height: 100vh;
margin: 0;
padding:0;
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: column;
}

.main{
    flex: 1;
}

.contenedorCategorias{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
}


 .categoria-card{

  border-radius:16px;
  margin: 10px;

  background:
    radial-gradient(
      circle at center,
      rgba(255, 196, 0, 0.15),
      rgba(255,255,255,0.03) 60%
    );

  backdrop-filter: blur(15px);

  border:1px solid rgba(255,255,255,0.1);

  box-shadow:
    0 0 30px rgba(255,196,0,0.08),
    inset 0 0 20px rgba(255,255,255,0.03);
    display:flex;
  flex-direction:column;

  width:320px;
  padding:15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
  transition: transform .3s ease, box-shadow .3s ease;

 
}

.categoria-card:hover{
   transform: translateY(-8px);
    box-shadow: 0 10px 20px rgba(212, 175, 55, 0.2);
}

.categoria-card img{
  width: 18rem;
 
  border-radius:10px;
  background:rgba(0,0,0,0.3);
}

.contenido{
  flex:1;
}

.contenido h3{
  color: #D6281E;
   font-weight: bold;
  font-size:1.5rem;
  margin:0;
  font-weight:700;
  background-color: transparent;
}

.contenido p{
  color: #0f0f0f;
  margin-top:5px;
  background-color: transparent;
}

.btn{
  border:none;
  border-radius:50%;

  background: #222222;
  color: #D6281E;

  font-size:1.5rem;
  cursor:pointer;

  display:flex;
  justify-content:center;
  align-items:center;

  width:55px;
  height:55px;

  text-decoration:none;
  
  margin:15px auto 0;

}  


@media (max-width: 768px){

.contenedorCategorias{
    flex-direction: column;
}


 .categoria-card{
  display:flex;


  border-radius:30px;

  overflow:hidden;

  margin: 20px;

  
    flex-direction:row;
    align-items:center;
    gap:20px;

    width:90%;
    padding:20px;
  

}

.categoria-card img{
  width:90px;
  height:90px;
  object-fit:contain;

  border-radius:20px;
  background:rgba(0,0,0,0.3);
}

.contenido{
  flex:1;
}

.contenido h3{
  color:#D6281E;
  font-size:1.2rem;
  margin:0;
  font-weight:700;
}

.contenido p{
  color: #0f0f0f;
  margin-top:5px;
}

.btn{
  width:55px;
  height:55px;
  border:none;
  border-radius:50%;
/*
  background:rgba(255, 196, 0, 0.15);
  color:#d4af37;
  */
  background: #0f0f0f;
  color: #D6281E;
 margin:0;
 flex-shrink:0;
  font-size:1.5rem;
  cursor:pointer;
  transition: transform .2s ease;
}  

.btn:active{
  transform: scale(.95);
}

}





</style>