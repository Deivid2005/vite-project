<template>
  <section class="location-section">
    <div class="info">
      <h2>NUESTRA UBICACION</h2>

      <p>
        Visita nuestro almacén y conoce todos nuestros productos.
      </p>

    </div>

    <div class="map-container">
      <iframe
         src="https://www.google.com/maps?q=Calle+30+24-69+Palmira+Valle+del+Cauca&output=embed" 
        allowfullscreen=""
        loading="lazy">
      </iframe>
    </div>
  </section>
</template>

<style scoped>

.location-section{
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 2rem;
  padding: 4rem;
  color: black;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
}

.info{
  flex: 1;
  min-width: 300px;
  border-radius: 25px;
  background: transparent;
}

.info h2{
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #D6281E;
  font-weight: bold;
}

.info p{
  font-size: 1.1rem;
  opacity: .8;

  margin-bottom: 2rem;
}

.map-container{
  flex: 1;
  min-width: 320px;

  border-radius: 24px;
  overflow: hidden;

  box-shadow: 0 10px 40px rgba(255, 179, 0, 0.2);
}

iframe{
  width: 100%;
  height: 450px;

  border: none;
}

</style>