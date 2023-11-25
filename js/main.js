//Arreglo que contiene los productos
const productos = [
    {
        id:"celular-01",
        titulo:"Moto G13 Dual Sim 128 Gb Azul Difuso 4 Gb Ram",
        imagen: [
            "./img/celulares/11.png",
            "./img/celulares/12.png",
            "./img/celulares/13.png"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"celulares"
        },
        precio:70000,
        descuento:14,
        informacion:[
            "Pantalla IPS de 6.5.",
            "Camara trasea 13Mpx.",
            "Cámra delantera 5Mpx",
            "Procesaor 1.66 Gh con 2GB de RAM.",
            "Batería interna 54 GB.",
            "Con reconocimiento facia.l"
        ],
        envio: "Envío Gratis",
        stock:100,
        proveedor:"OVERHARD",
    },
    {
        id:"celular-02",
        titulo:"Moto E22 64gb 4gb Ram Negro Test",
        imagen: [
            "./img/celulares/21.png",
            "./img/celulares/22.png",
            "./img/celulares/23.png"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"celulares"
        },
        precio:79599,
        descuento:17,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras",
            "Pantalla de 6.5",
            "Cámra delantera 5Mpx",
            "Procesaor 1.66 Gh con 2GB de RAM.",
            "Batería 4020m.",
            "Memoria interna de 54 GB"
        ],
        envio: 2000,
        stock:21,
        proveedor:"OVERHARD",
    },
    {
        id:"celular-03",
        titulo:"Samsung A04s 128 GB negro 4 GB RAM",
        imagen: [
            "./img/celulares/31.png",
            "./img/celulares/32.png",
            "./img/celulares/33.png"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"celulares"
        },
        precio:111999,
        descuento:10,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla PLS de 6.5'.",
            "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: 5000,
        stock:21,
        proveedor:"DIGIT",
    },
    {
        id:"celular-04",
        titulo:"Samsung Galaxy A04s 128 GB blanco 4 GB RAM",
        imagen: [
            "./img/celulares/41.png",
            "./img/celulares/42.png",
            "./img/celulares/43.png"
        ], 
        categoria:{
            nombre:"Celulares",
            id:"celulares"
        },
        precio:122000,
        descuento:13,
        informacion:[
            "Dispositivo liberado para que elijas la compañía telefónica que prefieras.",
            "Pantalla PLS de 6.5'.",
            "Tiene 3 cámaras traseras de 50Mpx/2Mpx/2Mpx.",
            "Cámara delantera de 5Mpx.",
            "Procesador Exynos 850 Octa-Core de 2GHz con 4GB de RAM.",
            "Batería de 5000mAh.",
            "Memoria interna de 128GB.",
            "Con reconocimiento facial y sensor de huella dactilar."
        ],
        envio: "Envío Gratis",
        stock:21,
        proveedor:"DIGIT",
    },
    {
        id:"notebook-01",
        titulo:"Samsung Galaxy Book3 15.6 Intel Core I3 6 Núcleos 8gb 256gb Color Silver",
        imagen: [
            "./img/notebooks/11.png",
            "./img/notebooks/12.png",
            "./img/notebooks/13.png",
        ], 
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        },
        precio:593000,
        descuento:13,
        informacion:[
            "Procesador Intel i3",
            "Memoria RAM de 8GB.",
            "Resolución de FHD",
            "Placa de video Intel Iris Xe",
            "Cuenta con puerto USB y puerto HDMI"
        ],
        envio: "Envío Gratis",
        stock:2,
        proveedor:"ECOMODICO",
    },
    {
        id:"notebook-02",
        titulo:"Notebook Noblex N14x1000 14.1 Hd Intel Celeron 4gb/128gb Color Gris",
        imagen: [
            "./img/notebooks/21.png",
            "./img/notebooks/22.png",
            "./img/notebooks/23.png",
        ], 
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        },
        precio:216999,
        descuento:34,
        informacion:[
            "Procesador Intel Celeron.",
            "Memoria RAM de 4GB.",
            "Resolución de 1366x768 px.",
            "Conexión wifi y bluetooth.",
            "Cuenta con 2 puertos USB y puerto HDMI.",
            "La duración de la batería depende del uso que se le dé al producto."
        ],
        envio: "Envío Gratis",
        stock:35,
        proveedor:"Tienda New Sound",
    },
    {
        id:"notebook-03",
        titulo:"Notebook Hp 15-dy2061la Intel Core I3 1125g4 8gb 256gb Win10 Color Plateado",
        imagen: [
            "./img/notebooks/31.png",
            "./img/notebooks/32.png",
            "./img/notebooks/33.png",
        ], 
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        },
        precio:669999,
        descuento:47,
        informacion:[
            "Procesador Intel Core i3.",
            "Memoria RAM de 8GB.",
            "Resolución de 1366x768 px.",
            "Placa de video Intel UHD Graphics Xe G4 48EUs.",
            "Conexión wifi y bluetooth.",
            "Cuenta con 3 puertos USB y puerto HDMI.",
            "Incluye lector de tarjeta de memoria.",
            "Posee pad numérico.",
            "Modo de sonido Stereo.",
            "La duración de la batería depende del uso que se le dé al producto."
        ],
        envio: "Envío Gratis",
        stock:35,
        proveedor:"HP TIENDA OFICIAL",
    },
    {
        id:"notebook-04",
        titulo:"Notebook Gamer Rog Strix G15 G513rm-hq084w 15.6 R7 512gb Color Eclipse gray",
        imagen: [
            "./img/notebooks/41.png",
            "./img/notebooks/42.png",
            "./img/notebooks/43.png",
        ], 
        categoria:{
            nombre:"Notebooks",
            id:"notebooks"
        },
        precio:1499999,
        descuento:5,
        informacion:[
            "Procesador AMD Ryzen 7.",
            "Memoria RAM de 16GB.",
            "Resolución de 2560x1440 px.",
            "Placa de video Nvidia RTX 3060.",
            "Conexión wifi y bluetooth.",
            "Cuenta con 4 puertos USB y puerto HDMI.",
            "Con teclado retroiluminado.",
            "La duración de la batería depende del uso que se le dé al producto."
        ],
        envio: 6000,
        stock:35,
        proveedor:"ATAJO AR",
    },
    {
        id:"televisor-01",
        titulo:"Tv 24' Kodak We-24tm005 Hd ",
        imagen: [
            "./img/televisores/11.png",
            "./img/televisores/12.png",
            "./img/televisores/13.png",
        ], 
        categoria:{
            nombre:"Televisores",
            id:"televisores"
        },
        precio:122999,
        descuento:10,
        informacion:[
            "Su resolución es HD.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Modo de sonido: Dolby Digital.",
            "Manejalo por comando de voz.",
            "Sistema operativo Android.",
            "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB.",
            "Dimensiones: 71.6cm de ancho, 43.3cm de alto, 7.6cm de profundidad.",
            "Entretenimiento y conectividad en un mismo lugar."
        ],
        envio: "Envío Gratis",
        stock:10,
        proveedor:"OPEN FACTORY",
    },
    {
        id:"televisor-02",
        titulo:"Smart Led Fhd 40 Pulgadas Google Tv Chromecast Tda Android Kodak",
        imagen: [
            "./img/televisores/21.png",
            "./img/televisores/22.png",
            "./img/televisores/23.png",
        ], 
        categoria:{
            nombre:"Televisores",
            id:"televisores"
        },
        precio:181000,
        descuento:27,
        informacion:[
            "Su resolución es Full HD.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Modo de sonido: Dolby Atmos.",
            "Manejalo por comando de voz.",
            "Tiene función Screen Share.",
            "Con YouTube.",
            "Google Assistant incorporado.",
            "Sistema operativo Android 10.",
            "Capacidad de almacenamiento de 8GB.",
            "Conectá tus dispositivos mediante sus 3 puertos HDMI y sus 2 puertos USB."
        ],
        envio: "Envío Gratis",
        stock:10,
        proveedor:"MALL WEB",
    },
    {
        id:"televisor-03",
        titulo:"Smart Tv Samsung Hd 32 T4300",
        imagen: [
            "./img/televisores/31.png",
            "./img/televisores/32.png",
            "./img/televisores/33.png",
        ], 
        categoria:{
            nombre:"Televisores",
            id:"televisores"
        },
        precio:145000,
        descuento:27,
        informacion:[
            "Su resolución es HD.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Modo de sonido: Dolby Digital Plus.",
            "Manejalo por comando de voz.",
            "Tiene función Screen Share.",
            "Con Samsung TV Plus.",
            "Sistema operativo Tizen.",
            "Conectá tus dispositivos mediante sus 2 puertos HDMI y su puerto USB.",
            "Dimensiones: 737.4mm de ancho, 438mm de alto, 74.1mm de profundidad.",
            "Entretenimiento y conectividad en un mismo lugar."
        ],
        envio: 8000,
        stock:10,
        proveedor:"MALL WEB",
    },
    {
        id:"televisor-04",
        titulo:"Tv Tcl Qled 55 4k C635 Uhd Google Tv Micro Dimming 120 Hz",
        imagen: [
            "./img/televisores/41.png",
            "./img/televisores/42.png",
            "./img/televisores/43.png",
        ], 
        categoria:{
            nombre:"Televisores",
            id:"televisores"
        },
        precio:159000,
        descuento:10,
        informacion:[
            "Su resolución es 4K.",
            "Tecnología HDR para una calidad de imagen mejorada.",
            "Con Google Duo.",
            "Sistema operativo Google TV.",
            "Conectá tus dispositivos mediante sus 3 puertos HDMI.",
            "Entretenimiento y conectividad en un mismo lugar."
        ],
        envio: "Envío Gratis",
        stock:10,
        proveedor:"MALL WEB",
    }
]

const contenedorProductos = document.querySelector("#contenedor-productos");
const tituloSeccion = document.querySelector("#titulo-seccion");
const cantCarrito = document.querySelector("#num-en-carrito");

//función para mostrar todos los productos
function cargarProductos(productos){
    //Vaciamos el contenedor productos,
    contenedorProductos.innerHTML = "";

    //Recorremos todo el arreglo de elementos
    productos.forEach(producto =>{
        //creamos un div para el elemento producto
        const div = document.createElement("div");
        div.classList.add("producto");

        //Determino como mostrar el tipo de envio
        let precio_envio = ""
        if(producto.envio != "Envío Gratis"){
            precio_envio = ""
        }else{
            precio_envio = producto.envio;
        }
        div.innerHTML = `
            <img src="${producto.imagen[0]}" alt="" class="producto-imagen">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$ ${(producto.precio).toLocaleString()}<span class="descuento"> ${producto.descuento}% OFF</span></p>
                <p class="producto-tipo-envio">${precio_envio}</p>
            </div>
        `;

        //le agrego el id a dicho producto
        div.id = producto.id;
        contenedorProductos.append(div);
    })
}
//Llamamos a la función
cargarProductos(productos);



//Tomo los Botones de las categorías
const botonesCategorias = document.querySelectorAll(".boton-categoria");

//agregamos un eventlistener a cada boton de categoría
function asignarEventListenerBotonCategoria(){
    botonesCategorias.forEach(boton=> {
        boton.addEventListener("click", (e)=>{
    
            if(e.currentTarget.id != "todos"){
                //Filtro por id
                //e.currentTarget.id = hace referencia al id del boton donde hice clic
                const productosFiltrados = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
    
                //colocamos el titulo de la sección
                //Debemos buscar el primer producto que coincida con la categoría seleccionada, para luego tomar el nombre de la categoria
                const productoCagegoria = productos.find(producto=> producto.categoria.id === e.currentTarget.id);
                tituloSeccion.innerHTML = productoCagegoria.categoria.nombre;
    
                cargarProductos(productosFiltrados);
               
            }else{
                cargarProductos(productos);
                tituloSeccion.innerHTML = "Todos los productos";
            }

            // Una vez que se han cargado los productos le asignamos a dichos productos un EventListenerPara llamar que al hacer clic se visualice la información de dicho producto.
            asignarEventListenerProductos();


        })
    });
}
//Llamamos a la función
asignarEventListenerBotonCategoria();



//tomo el elmento donde se agregara la info del producto visitado
const contenedorProductoVisitado = document.querySelector("#contenedor-producto-visitado");

//Agrego a cada producto un eventListener onclikc para dirigirlo a la pàgina producto
function asignarEventListenerProductos(){
    const divsProductos = document.querySelectorAll(".producto");
    
    divsProductos.forEach(producto=>{
        producto.addEventListener("click", (e)=>{
            contenedorProductos.style.display = "none";
    
            //creamos un div para el elemento producto
            const div = document.createElement("div");
            div.classList.add("producto-visitado");
            div.id = e.currentTarget.id;
    
            const prod = productos.find((producto) => producto.id === e.currentTarget.id);
            console.log(prod);
    
            div.innerHTML = `
            <span class="cerrar" onclick="cerrar()"> <i class="bi bi-x-circle"></i> </span>
            <div class="fotos-galeria">
            <div class="miniaturas">
                <img src="${prod.imagen[0]}" alt="" class="img-miniatura">
                <img src="${prod.imagen[1]}" alt="" class="img-miniatura">
                <img src="${prod.imagen[2]}" alt="" class="img-miniatura">
            </div>
            <div class="foto-principal">
                <img src="${prod.imagen[0]}" alt="" id="foto-principal">
            </div>
        </div>
        <div class="info-producto">
            <h2 class="titulo-producto">${prod.titulo}</h2>
    
            <p class="precio-producto">$ ${(prod.precio).toLocaleString()} <span class="descuento">${prod.descuento}% OFF</span></p>
    
            <span class="txt">Lo que tenes que saber de este producto</span>
            <ul id="listado-info">
    
            </ul>
        </div>
        <div class="info-compra">
            <span class="info-stock">Stock disponible</span>
            <span class="cantidad">Cantidad: 1 unidad <span class="stock">(${prod.stock} disponibles)</span> </span>
    
            <button class="btn-agregar-al-carrito" id="${prod.id}">Agregar al Carrito</button>
    
            <span class="vendedor">Vendido por <a href="#">${prod.proveedor}</a></span>
    
            <div class="beneficios">
                <div class="beneficio">
                    <div class="col">
                        <i class="bi bi-arrow-return-left"></i>
                    </div>
                    <div class="col">
                        <a href="#">Devolución Gratis</a> Tenes 30 días desde que lo recibis
                    </div>
                </div>
                <div class="beneficio">
                    <div class="col">
                        <i class="bi bi-shield-check"></i>
                    </div>
                    <div class="col">
                        <a href="#">Compra protegida</a> recibí el producto que esperabas o te devolvemos tu dinero.
                    </div>
                </div>
                <div class="beneficio">
                    <div class="col">
                        <i class="bi bi-trophy"></i>
                    </div>
                    <div class="col">
                        <a href="#">Mercado Puntos</a> Sumá 900 puntos.
                    </div>
                </div>
            </div>
    
        </div>
            `;
            
            contenedorProductoVisitado.append(div);
            contenedorProductoVisitado.style.display = "flex";
    
            const listadoInfo = document.querySelector("#listado-info")
            //agrego los items del detalle del producto
            prod.informacion.forEach(info =>{
                const li = document.createElement("li");
                li.innerHTML = info;
                listadoInfo.append(li);
            })
    
            //agrego la funcionalidad los botones de miniatura
            asignarEventListenerImgMiniatura();

            //asignamos el eventListener al botón Agregar al carrito
            btnAgregar = document.querySelectorAll(".btn-agregar-al-carrito");
            btnAgregar[0].addEventListener("click", agregarAlCarrito)
    
        })
    })
}

asignarEventListenerProductos();


//--------------------------------------------------
//Funión para cerrar la ventana de productos
function cerrar(){
    contenedorProductoVisitado.innerHTML = "";
    contenedorProductos.style.display = "grid";
    contenedorProductoVisitado.style.display = "none";
}

function asignarEventListenerImgMiniatura(){
    const imgMiniatura = document.querySelectorAll(".img-miniatura");
    const fotoPrincipal = document.querySelector("#foto-principal")
    
    imgMiniatura.forEach(mini=>{
        mini.addEventListener("click", (e)=>{
            console.log(e.target);
            fotoPrincipal.src = e.target.src;
        })
    });
}

//Vamos a necesitar una estructura para guardar los elementos que se 
//vayan guardando en el carrito.
let productosEnCarrito;
//controlo si ya hay algo cargado en el localstorage cuando vuelvo de
//carrito.html para que los productos continuen existiendo.
const productosEnCarritoLS = JSON.parse(localStorage.getItem("productos-en-carrito"));
if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumEnCarrito();
}else{//comienzo un carrito vacío
    productosEnCarrito = [];
}

function agregarAlCarrito(e){
    //alert()
    const idBoton = e.currentTarget.id;
    //console.log(id);
    const productoAgregado = productos.find(producto => producto.id=== idBoton);
    //console.log(productoAgregado);

    //controlamos si el producto ya esta en el carrito
    if(productosEnCarrito.some(producto=>producto.id===idBoton)){
        //el producto que se quiere ignresar ya esta en el carrito
        // lo busco y le aumento en uno la cantidad
        const index = productosEnCarrito.findIndex(producto=> producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
        //console.log(productosEnCarrito);
    }else{
        //Al objeto producto le agrego una nueva propiedad para guardar lla cantidad de dicho producto agregados al carrito
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
        //console.log(productosEnCarrito);
    }
    actualizarNumEnCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

    //Lo dirijo al carrito
    location.href = "./carrito.html";
}

function actualizarNumEnCarrito(){
    let nuevaCantEnCarrito = productosEnCarrito.reduce((acc,producto)=> acc + producto.cantidad,0)
    //console.log(nuevaCantEnCarrito);
    cantCarrito.innerHTML = nuevaCantEnCarrito;
}