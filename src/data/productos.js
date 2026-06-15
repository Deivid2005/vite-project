// src/data/productos.js

export const productos = [

    /* CABALLERO*/
    {
        id: 1,

        categoria: 'Clasico',

        catalogo: 'Caballero',

        precio: 85000,

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/1.png'
            },

            Cafe:{
                color: '#6F4E37',
                imagen: '/src/zapatosCaballero/alt1.png'
            }
        } ,

        descripcion:
            'Zapato urbano cómodo y ligero ideal para uso diario y outfits casuales.',

        variantes: {
        Negro: {
            imagenes: [
                '/zapatosCaballero/1.png',
                '/img/ejemplo.jpg',
                '/img/ejemplo.jpg'
            ]
        },

        Cafe: {
            imagenes: [
                '/img/zapatoReferencia1.jpeg',
                '/img/zapatoReferencia1.jpeg',
                '/img/zapatoReferencia1.jpeg'
            ]
        }
    },


        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Material sintético premium',
            'Suela antideslizante',
            'Diseño casual y deportivo'
        ],

        disponible: true,

        envio: true,

        destacado: true
    },

    {
        id: 2,

        imagen: '/src/zapatosCaballero/2.png',

        categoria: 'Clasico',

        catalogo: 'Caballero',

        precio: 90000,

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/2.png'
            },

            Cafe:{
                color: '#6F4E37',
                imagen: '/src/zapatosCaballero/alt2.png'
            }
        } ,

        
        variantes: {
        Negro: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Cafe: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42, 
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true,

        destacado: true
    },
    {
        id: 3,

        imagen: '/src/zapatosCaballero/3.png ',

        categoria: 'Clasico',
        
        catalogo: 'Caballero',


        precio: 90000,

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/3.png'
            },

            Cafe:{
                color: '#6F4E37',
                imagen: '/src/zapatosCaballero/alt3.png'
            }
        } ,

        
        variantes: {
        Negro: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Cafe: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true,

        destacado: true
    },
    {
        id: 4,

        imagen: '/src/zapatosCaballero/4.png ',

        categoria: 'Deportivo',

        catalogo: 'Caballero',

        precio: 75000,

   

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/4.png'
            },

        } ,

        
        variantes: {
        Negro: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true,

        destacado: true
    },
    {
        id: 5,

        imagen: '/src/zapatosCaballero/5.png',

        categoria: 'Deportivo',

        catalogo: 'Caballero',

        precio: 100000,

      

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Azul',

        paletas: {

            Azul:{
                color: '#1E3A8A',
                imagen: '/src/zapatosCaballero/5.png'
            },

            Cafe:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/alt5.png'
            }
        } ,

        
        variantes: {
        Azul: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Negro: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true,

        destacado: false
    },
    {
        id: 6,

        imagen: '/src/zapatosCaballero/6.png ',

        categoria: 'Deportivo',

        catalogo: 'Caballero',

        precio: 75000,

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/6.png'
            }

        } ,

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        
        variantes: {
        Negro: {
            imagenes: [
                '/img/ejemplo.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true
    },
    {
        id: 7,

        imagen: '/src/zapatosCaballero/7.png ',

        categoria: 'Clasico',

        catalogo: 'Caballero',

        precio: 85000,

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/7.png'
            },

            Cafe:{
                color: '#6F4E37',
                imagen: '/src/zapatosCaballero/alt7.png'
            }
        } ,

        

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        
        variantes: {
        Negro: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Cafe: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true
    },
    {
        id: 8,

        imagen: '/src/zapatosCaballero/8.png ',

        categoria: 'Clasico',

        catalogo: 'Caballero',

       
        precio: 85000,

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        
        paletaPrincipal: 'Miel',

        paletas: {

            Miel:{
                color: '#B87333',
                imagen: '/src/zapatosCaballero/8.png'
            },

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/alt8.png'
            }
        } ,

        variantes: {
        Miel: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Negro: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true
    },
    {
        id: 9,

        imagen: '/src/zapatosCaballero/9.png ',

        categoria: 'Clasico',

        catalogo: 'Caballero',

        precio: 85000,

       

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/9.png'
            },

            Cafe:{
                color: '#B87333',
                imagen: '/src/zapatosCaballero/alt9.png'
            }
        } ,

        
        variantes: {
        Negro: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Miel: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true
    },
    {
        id: 10,

        imagen: '/src/zapatosCaballero/10.png ',

        categoria: 'Botas',

        catalogo: 'Caballero',

        precio: 100000,

     

        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Almendra',

        paletas: {

            Almendra:{
                color: '#C19A6B',
                imagen: '/src/zapatosCaballero/10.png'
            },

            Cafe:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/alt10.png'
            }
        } ,

        
        variantes: {
        Almendra: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Negro: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true
    },
        {
        id: 11,

        imagen: '/src/zapatosCaballero/11.png',

        categoria: 'Botas',

        catalogo: 'Caballero',

        precio: 90000,


        descripcion:
            'Zapato elegante ideal para reuniones y eventos formales.',

        paletaPrincipal: 'Talco',

        paletas: {

            Talco:{
                color: '#EDE6D6',
                imagen: '/src/zapatosCaballero/11.png'
            },

            Cafe:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/alt1.png'
            }
        } ,

        
        variantes: {
        Talco: {
            imagenes: [
                '/img/negro1.jpg',
                '/img/negro2.jpg',
                '/img/negro3.jpg'
            ]
        },

        Negro: {
            imagenes: [
                '/img/rojo1.jpg',
                '/img/rojo2.jpg',
                '/img/rojo3.jpg'
            ]
        }
    },

        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Cuero sintético',
            'Diseño formal',
            'Plantilla acolchada'
        ],

        disponible: true,

        envio: true
    },




    /* DAMA */

     {
        id: 100,


        imagen: '/img/zapatoReferencia1.jpeg',

        categoria: 'Deportivo',

        catalogo: 'Dama',

        precio: 289900,

        descripcion:
            'Zapato urbano cómodo y ligero ideal para uso diario y outfits casuales.',


           paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/1.png'
            },
        },

        variantes: {
        Negro: {
            imagenes: [
                '/img/ejemplo.jpg',
                '/img/ejemplo.jpg',
                '/img/ejemplo.jpg'
            ]
        },

        Rojo: {
            imagenes: [
                '/img/zapatoReferencia1.jpeg',
                '/img/zapatoReferencia1.jpeg',
                '/img/zapatoReferencia1.jpeg'
            ]
        }
    },


        tallas: [
            38,
            39,
            40,
            41
        ],

        caracteristicas: [
            'Material sintético premium',
            'Suela antideslizante',
            'Diseño casual y deportivo'
        ],

        disponible: true,

        envio: true,

        destacado: false
    } , 



    /* NIÑO */

       {
        id: 200,

        catalogo: 'Niño',

        categoria: 'Deportivo',

        precio: 70000,

        paletaPrincipal: 'Tiza',

        paletas: {

            Tiza:{
                color: '#000000',
                imagen: '#'
            }

        } ,

        descripcion:
            'Zapato urbano cómodo y ligero ideal para uso diario y outfits casuales.',

        variantes: {
        Tiza: {
            imagenes: [
                '#',
                '/img/ejemplo.jpg',
                '/img/ejemplo.jpg'
            ]
        },
    },


        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Material sintético premium',
            'Suela antideslizante',
            'Diseño casual y deportivo'
        ],

        disponible: true,

        envio: true,

        destacado: false
    },
       {
        id: 201,

        catalogo: 'Niño',

        categoria: 'Deportivo',

        precio: 70000,

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#361c1c',
                imagen: '/src/zapatosCaballero/1.png'
            },
        } ,

        descripcion:
            'Zapato urbano cómodo y ligero ideal para uso diario y outfits casuales.',

        variantes: {
        Negro: {
            imagenes: [
                '/zapatosCaballero/1.png',
                '/img/ejemplo.jpg',
                '/img/ejemplo.jpg'
            ]
        },

       
    },


        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Material sintético premium',
            'Suela antideslizante',
            'Diseño casual y deportivo'
        ],

        disponible: true,

        envio: true,

        destacado: false
    },






    /* NIÑA */

       {
        id: 300,

        catalogo: 'Niña',

        categoria: 'Sandalia',

        precio: 85000,

        paletaPrincipal: 'Negro',

        paletas: {

            Negro:{
                color: '#000000',
                imagen: '/src/zapatosCaballero/1.png'
            },

            Cafe:{
                color: '#6F4E37',
                imagen: '/src/zapatosCaballero/alt1.png'
            }
        } ,

        descripcion:
            'Zapato urbano cómodo y ligero ideal para uso diario y outfits casuales.',

        variantes: {
        Negro: {
            imagenes: [
                '/zapatosCaballero/1.png',
                '/img/ejemplo.jpg',
                '/img/ejemplo.jpg'
            ]
        },

        Cafe: {
            imagenes: [
                '/img/zapatoReferencia1.jpeg',
                '/img/zapatoReferencia1.jpeg',
                '/img/zapatoReferencia1.jpeg'
            ]
        }
    },


        tallas: [
            39,
            40,
            41,
            42,
            43
        ],

        caracteristicas: [
            'Material sintético premium',
            'Suela antideslizante',
            'Diseño casual y deportivo'
        ],

        disponible: true,

        envio: true,

        destacado: false
    }
]