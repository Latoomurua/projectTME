//FUNCION PARA GENERAR LA INTERFAZ DE PRODUCTOS CON JQUERY
function productosUI(productos, id){
    $(id).empty();
    for (const producto of productos) {
       $(id).append(`<div class="card" style="width: 18rem;">
                      <img src= "${producto.img}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <h5 class="card-title">${producto.ciudad}</h5>
                        <p class="card-text">${producto.precioProducto}</p> 
                        <span class="badge badge-warning">
                                       ${producto.categoria}</span>                                           
                        <a href="#" id='${producto.id}' class="btn btn-primary btn-compra">COMPRAR</a>
                      </div>
                    </div>`);
    }
  }
  //MANEJADOR DE COMPRA DE PRODUCTOS
  function comprarProducto(event){
    //PREVENIR REFRESCO AL PRESIONAR ENLACES
    event.preventDefault();
    //OBTENER ID DEL BOTON PRESIONADO
    const idProducto   = event.target.id;
    //OBTENER OBJETO DEL PRODUCTO CORRESPONDIENTE AL ID
    const existe=carrito.find(producto => producto.id ==idProducto);
    
    if (existe == undefined) {
      const seleccionado = productos.find(producto => producto.id == idProducto);
      carrito.push(seleccionado);    
    }else{
      existe.agregarCantidad(1);
    }
   
    //GENERAR SALIDA PRODUCTO
    carritoUI(carrito);
  }
  
  
  //FUNCION PARA RENDERIZAR LA INTERFAZ DEL CARRITO
  function carritoUI(productos){
    //CAMBIAR INTERIOR DEL INDICADOR DE CANTIDAD DE PRODUCTOS;
    $('#carritoCantidad').html(productos.length);
    //VACIAR EL INTERIOR DEL CUERPO DEL CARRITO;
    $('#carritoProductos').empty();
    for (const producto of productos) {
      $('#carritoProductos').append(`<p> ${producto.ciudad} 
                                      <span class="badge badge-warning">
                                      $ ${producto.precioProducto}</span>
                                      <span class="badge badge-primary">
                                      Cantidad: ${producto.cantidad}</span>
                                      <span class="badge badge-success">
                                      Subtotal: ${producto.subtotal()}</span>  
                                      </p>`);
    }
    //Agrego un boton confirmar al carrito
    $('#carritoProductos').append(`<button id="btnConfirmar">Confirmar</button>`);
    //Agrego el evento click al boton confirmar
    $("#btnConfirmar").on("click",enviarCompra);
  }
  //Creo una funcion para manejar el evento click en el boton confirmar
  function enviarCompra() {
    //Hago un envio post
    //Envio la info del carrito  transformada a JSON
    $.post("https://jsonplaceholder.typicode.com/posts",JSON.stringify(carrito),function(respuesta,estado) {
      console.log(estado);
      console.log(respuesta);
      ///Pregunto si el estado de la operacion fue exitoso
      if(estado == "success"){
        //Vacio el carrito
        $('#carritoProductos').empty();
        //Vacio el numero de productos
        $('#carritoCantidad').html("0");
      }else{
        console.log('Los datos no se enviaron correctamente');
      }    
  
    })  
  }
  
  function selectUI(lista, selector) {
    $(selector).empty();
    for (const categoria of lista) {
      $(selector).append(`<option>${categoria}</option>`);    
    }
    $(selector).prepend(`<option selected>TODOS</option>`);  
  }
  
  function buscarCategoria() {
  
  //----------Codigo de filtro sin animaciones  
   /* if(this.value != "TODOS"){
      let filtrados= productos.filter(producto => producto.categoria == this.value);
      productosUI(filtrados,"#productosContenedor");
    }else{
      productosUI(productos,"#productosContenedor");
    }*/
  //-----------Codigo de filtro con animaciones    
  //Primero guardo en una variable el valor seleccionado en el select
    let valor=this.value;
    //oculto el div de productos con una animacion y agrego una funcion callback para hacer el filtro
    $("#productosContenedor").fadeOut(2000,function () {
      //si la categoria seleccionada es diferente a todos quiere decir que es una categoria existente
      if(valor != "TODOS"){
        //filtro por categoria
        let filtrados= productos.filter(producto => producto.categoria == valor);
        //genero la interfaz solo con los productos filtrados
        productosUI(filtrados,"#productosContenedor");
      }else{
        //si la categoria seleccionada es todos, genero la interfaz con todos los productos
        productosUI(productos,"#productosContenedor");
      }    
    }).fadeIn(2000);//endadeno una animacion para mostrar el resultado
    
  }

//////////////////////////////////////////////////



//Funcion para generar la interfaz de showrooms
/*
function showroomUI(showrooms, id){
    for (const showroom of showrooms) {
        document.getElementById(id).appendChild(showroomHTML(showroom));
    }
}

//Funcion para generar la estructura HTML por cada showroom

function showroomHTML (showroom){
    let divShowroom = document.createElement("div");
    divShowroom.innerHTML = ``

    return divShowroom;
}
*/

/*
function cards (showroom) {
    for (const showroom of showrooms) {
    filtroMarcas = $("#showroomContenedor").append(`<div class="col mb-4">
                                                <div class="card">
                                                <img src="/images/nikeCard.jpg" class="card-img-top" alt="Logotipo Nike">
                                                <div class="card-body">
                                                    <h5 class="card-title">Nike</h5>
                                                    <p class="card-text">Showroom destacado del mes</p>
                                                </div>
                                                </div>
                                            </div>`);
    }
}*/


