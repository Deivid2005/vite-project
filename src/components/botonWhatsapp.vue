<script setup>

const mensajeCatalogo = encodeURIComponent(

`Hola, me gustaría recibir información sobre:

1- Modelos disponibles
2- Tallas
3- Colores
4- Precios
5- Opciones de envío

Catálogo visitado:
${window.location.href}`

)

</script>


<template>

<a

   :href="`https://wa.me/573175024502?text=${mensajeCatalogo}`"

   class="whatsapp-float"

   target="_blank"

   data-social="WhatsApp"

>

<svg xmlns="http://www.w3.org/2000/svg"
     width="16"
     height="16"
     fill="currentColor"
     class="bi bi-whatsapp"
     viewBox="0 0 16 16">

  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>

</svg>

</a>

</template>


<style scoped>

/* Botón WhatsApp */
.whatsapp-float {
    --accent-color: #25D366;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 1000;
    background-color: transparent;
}

/* Icono */
.whatsapp-float svg {
    width: 60px;
    height: 60px;
    padding: 12px;
    cursor: pointer;
    background-color: #25D366;
    fill: #f1f1f1;
    border-radius: 50%;
    box-shadow: 0 5px 10px rgba(0,0,0,0.2);
    transition: 0.3s;
}

/* Hover icono */
.whatsapp-float:hover svg {
    background-color: var(--accent-color);
    fill: white;
}

/* Tooltip */
.whatsapp-float::before {
    content: attr(data-social);
    position: absolute;
    bottom: 75px;
    right: 0;
    background-color: var(--accent-color);
    color: white;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    opacity: 0;
    transform: translateY(10px);
    transition: 0.3s;
}

/* Flechita */
.whatsapp-float::after {
    content: '';
    position: absolute;
    bottom: 60px;
    right: 20px;
    border: 8px solid transparent;
    border-top-color: var(--accent-color);
    opacity: 0;
    transition: 0.3s;
}

/* Mostrar tooltip */
.whatsapp-float:hover::before,
.whatsapp-float:hover::after {
    opacity: 1;
    transform: translateY(0);
}


</style>