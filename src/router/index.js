import { createRouter, createWebHistory } from "vue-router";
import OnePage from "../pages/OnePage.vue";
import Catalogo from "../pages/Catalogo.vue";
import Caballero from "../pages/Caballero.vue";
import Dama from "../pages/Dama.vue";
import Infantil from "../pages/Infantil.vue";
import DivisionInfantil from "../pages/subcategorias/DivisionInfantil.vue";
import Producto from "../pages/Productos/Producto.vue";
import Nina from "../pages/subcategorias/Nina.vue";
import Nino from "../pages/subcategorias/Nino.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "principal",
            component: OnePage
        },
        {
            path: "/catalogo",
            name: "catalogo",
            component: Catalogo
        },
        {
            path: "/caballero",
            name: "caballero",
            component: Caballero
        },
        {
            path: "/dama",
            name: "dama",
            component: Dama
        },
        {
            path: "/infantil",
            name: "infantil",
            component: Infantil
        },
        {
            path: "/division",
            name: "division",
            component: DivisionInfantil
        },
        {
            path: "/nino",
            name: "nino",
            component: Nino
        },
        {
            path: "/nina",
            name: "nina",
            component: Nina
        },
        {
            path: '/producto/:id',
            name: 'producto',
            component: Producto
        }
    ]
})

export default router;