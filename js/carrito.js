//traemos la información del localstorage
const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

//tomo los elmentos del html
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorResumen = document.querySelector("#carrito-resumen");
const cantCarrito = document.querySelector("#num-en-carrito");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

console.log(productosEnCarrito);

//controlamos si hay productos en carrito. Si esta vacío devuelve null
function cargarProductosCarrito(){

    if(productosEnCarrito && productosEnCarrito.length > 0){
        console.log("hay productos")
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorResumen.classList.remove("disabled");

        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {

            //determinamos el tipo de envio
            let tipo_envio = "";
            if(producto.envio != "Envío Gratis"){
                tipo_envio = "$ " + (producto.envio).toLocaleString();
                tipo_estilo = "";
            }else{
                tipo_envio = "Envío Gratis";
                tipo_estilo = "precio-envio";
            }

            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <div class="carrito-producto-proveedor">
                    <span>${producto.proveedor}</span>
                </div>
                <div class="carrito-item">
                    <div class="container-producto-img">
                        <img src="${producto.imagen[0]}" alt="" class="carrito-producto-img">
                    </div>
                    
                    <div class="carrito-producto-info">
                        <span class="carrito-producto-titulo">${producto.titulo}</span>
                        <div class="carrito-producto-opciones">
                            <button class="carrito-producto-eliminar" id="${producto.id}">Eliminar</button>
                        </div>
                    </div>
                    <div class="container-selector-cantidad">
                        <div class="selector">
                            <button class="restar-cantidad" id="${producto.id}"> <i class="bi bi-dash-lg"></i> </button>
                            <span class="cantidad">${producto.cantidad}</span>
                            <button class="sumar-cantidad" id="${producto.id}"> <i class="bi bi-plus-lg"></i> </button>
                        </div>
                    </div>
                    <div class="carrito-producto-precio">
                        <p>$ ${(producto.precio * producto.cantidad).toLocaleString()}</p>
                    </div>
                </div>
                <div class="carrito-producto-precio-envio">
                    <span>Envio</span>
                    <span class="${tipo_estilo}">${tipo_envio}</span>
                </div>
                <div class="carrito-producto-mas-info">
                    <span>Aprovechá tu envío gratis agregando más. <a href="#">Ver más producto del vendedor</a></span>
                </div>
            `
    
            contenedorCarritoProductos.append(div);
        })
    
        actualizarNumEnCarrito();

        agregarEventListenerBotonSumarCantidad();
        agregarEventListenerBotonRestarCantidad();

        actualizarResumenCarrito();
        
    }else{
        console.log("NO hay productos")
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorResumen.classList.add("disabled");

        actualizarNumEnCarrito();
    }

    agregarEventListenerBotonesEliminar();
}

cargarProductosCarrito();   


function actualizarNumEnCarrito(){
    let nuevaCantEnCarrito = productosEnCarrito.reduce((acc,producto)=> acc + producto.cantidad,0)
    //console.log(nuevaCantEnCarrito);
    cantCarrito.innerHTML = nuevaCantEnCarrito;
    return nuevaCantEnCarrito;
}


function agregarEventListenerBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
    botonesEliminar.forEach(boton=>{
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function agregarEventListenerBotonSumarCantidad(){
    botonesSumar = document.querySelectorAll(".sumar-cantidad");
    botonesSumar.forEach(boton=>{
        boton.addEventListener("click", sumarCantidad);
    })
}


function sumarCantidad(e){
    const index = productosEnCarrito.findIndex(producto=> producto.id === e.currentTarget.id);
    //console.log(productosEnCarrito[index].cantidad);
    productosEnCarrito[index].cantidad++;
    //console.log(productosEnCarrito[index].cantidad);
    cargarProductosCarrito();
    actualizarResumenCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function agregarEventListenerBotonRestarCantidad(){
    botonesRestar = document.querySelectorAll(".restar-cantidad");
    botonesRestar.forEach(boton=>{
        boton.addEventListener("click", restarCantidad);
    })
}
function restarCantidad(e){
    const index = productosEnCarrito.findIndex(producto=> producto.id === e.currentTarget.id);
    //console.log(productosEnCarrito[index].cantidad);
    if(productosEnCarrito[index].cantidad>1){
        productosEnCarrito[index].cantidad--;
    }
   
    //console.log(productosEnCarrito[index].cantidad);
    cargarProductosCarrito();
    actualizarResumenCarrito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    //console.log(idBoton);
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    //console.log(productosEnCarrito)
    productosEnCarrito.splice(index,1);
    //console.log(productosEnCarrito)

    //volvemos a cargar los productos en el carrito
    cargarProductosCarrito();   

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarResumenCarrito(){
    const totalProductos = document.querySelectorAll(".num-total");
    totalProductos[0].innerHTML = actualizarNumEnCarrito();

    const totalCompra = document.querySelectorAll(".precio-productos-compra");
    totalCompra[0].innerHTML = "$ " + (productosEnCarrito.reduce((acc,producto)=> acc + (producto.cantidad * producto.precio),0)).toLocaleString();

    const precioTotalEnvio = document.querySelectorAll(".carrito-resumen-precio-envio");
    const productosFiltrados = productosEnCarrito.filter(producto => producto.envio !=  "Envío Gratis");

    
    const calculoSumaEnvio =  productosFiltrados.reduce((acc,producto)=> acc + producto.envio,0)
    precioTotalEnvio[0].innerHTML = "$ " + calculoSumaEnvio.toLocaleString();

    const precioFinal = document.querySelectorAll(".precio-final");
    const calculoPreciFinal = calculoSumaEnvio + (productosEnCarrito.reduce((acc,producto)=> acc + (producto.cantidad * producto.precio),0));
    precioFinal[0].innerHTML = "$ " + calculoPreciFinal.toLocaleString();
}
