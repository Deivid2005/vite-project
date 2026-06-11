<template>

<a href="https://wa.me/573164616364?text=Hola%20quiero%20hacer%20un%20pedido"
   class="whatsapp-float"
   target="_blank"
   data-social="WhatsApp">
   
<svg viewBox="0 0 24 24">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/>
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
    background-color: black;
    fill: #d4af37;
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