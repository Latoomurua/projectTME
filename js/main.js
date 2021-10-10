
//Utilizo el metodo HIDE para ocultar todo lo que esta en el div productosContenedor
$('#productosContenedor').hide();

//Utilizo una llamada asincrona para traer los datos desde un JSON
$.get("data/productos.json", function (respuesta, estado) {
    console.dir(respuesta);   
    console.log(estado);
    //Pregunto si el estado de la operacion fue exitoso
    if(estado == "success"){
        //Recorro el array respuesta y lo transformo a objetos de tipo "producto"
        for (const objeto of respuesta) { 
            //Guardo los objetos "traducidos" en el array productos           
            productos.push( new Producto(objeto.id, objeto.ciudad, objeto.precioProducto, objeto.img, objeto.categoria, objeto.cantidad ) );
       
        }  
        //GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
        productosUI(productos, '#productosContenedor');
    }else{
        console.log('Los datos no se cargaron correctamente');
    }  
    
});

$(document).ready(function () {
    //Asocio en evento click a los botones con la clase btn-compra       
    $(".btn-compra").click(comprarProducto);  
    //---------SCROLL ANIMADO-----------
    //1° USO UN SELECTOR PARA LLAMAR AL BOTON O ENLACE QUE QUIERO USAR Y LE ASOCIO EL EVENTO CLICK
    $("#Contacto").click(function (e) {
        //PREVENGO EL COMPORTAMIENTO POR DEFECTO
        e.preventDefault();
        //AGREGO EL METODO ANIMATE    
        $('html, body').animate({
            //2° ANIMO LA PROPIEDAD scrollTop POSICIONANDOLO EN EL BORDE DE contenidoContacto
            scrollTop: $("#contenidoContacto").offset().top  
            //3° DEFINO UN TIEMPO DE DOS SEGUNDOS PARA LA ANIMACION
        }, 2000);        
    })
    //1° USO UN SELECTOR PARA LLAMAR AL BOTON O ENLACE QUE QUIERO USAR Y LE ASOCIO EL EVENTO CLICK
    $("#arriba").click(function (e) {
        e.preventDefault();        
        $('html, body').animate({
            //2° ANIMO LA PROPIEDAD scrollTop POSICIONANDOLO EN EL BORDE DE contenidoContacto
            scrollTop: $(".container").offset().top 
            //3° DEFINO UN TIEMPO DE DOS SEGUNDOS PARA LA ANIMACION 
        }, 2000);        
    })


});

$(window).on('load',function () {    
    $("#espera").remove(); 
    //AGREGO FADEIN PARA QUE SE MUESTREN LOS PRODUCTOS OCULTOS 
    $('#productosContenedor').fadeIn(2000, 
        //Agrego una funcion callback
        function () {console.log("Funcionalidad Callback")
        
    });
});

//$('#ejemplo').show();
//$('#ejemplo').fadeOut(4000,function () {console.log('Hola mundo')} );

//Manejo del metodo Toggle desde un boton
$("#boton1").on("click", function () {
    $("#ejemplo2").slideToggle(1500);
})
//Ejemplo de encadenamiento de animaciones
$("#ejemplo").animate({fontSize: "30px", opacity: 0.4 },3000).delay(2000).fadeOut(2000);
//Funcion para crear la interfaz fel select de categorias
selectUI(categorias,"#selectCategoria");
//Asocio en evento change al select
$("#selectCategoria").on("change", buscarCategoria)



/*
showrooms.push(new showroom(1, "NIKE", 6));
showrooms.push(new showroom(2, "ADIDAS", 12));
showrooms.push(new showroom(3, "PUMA", 8));
showrooms.push(new showroom(4, "REBOOK", 24))
showrooms.push(new showroom(5, "LEVIS", 18));
showrooms.push(new showroom(6, "BENSIMON", 36));
*/

/*

const filtroMarcas = showrooms.filter(function (showroom){
    return showroom.nombre === "NIKE";
})

*/

//LLAMADA ASINCRONA
//PRIMER PARAMETRO, URL DE MI SERVIDOR PARA OBTENER INFORMACION. 
//EN ESTE CASO COMO NO TENGO BACKEND, USARE EL ARCHIVO LOCAL
//EL SEGUNDO PARAMETRO ES LA FUNCION CALLBACK
//El primer parametro de esta funcion es la respuesta osea los datos que queremos recibir,
// y el segundo es el estado en que se enceuntra.

//Vamos a pasar esta lista de objetos literales a un conjunto de objetos producto
//lo vamos a hacer pusheando

//recapitulando, cuando hago el get a esta url recibo los productos y llamo a la funcion callback
//la funcion callback pregunta el estado en el que esta y si esta todo bien
//recorro la respuesta. lo transformo todo a tipo producto
//termino ese for y llamo a showroomUI para mostrar toda la interfaz


/*
$.get("data/productos.json", function(respuesta, estado){
  for (const objeto of respuesta) {
    showrooms.push (new showroom(objeto.id, objeto.nombre, objeto.imagen, objeto.categoria, objeto.tiempoPublicado));
  }
//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION
showroomUI(showrooms, 'showroomContenedor');
});
*/


//Metodo Post
//el primer parametro, lleva la api a la que le queremos enviar informacion
//el segundo parametro es la informacion que le queremos enviar
//la tercera es una funcion de callback
//tengo que enviar la informacion en formato JSON
/*

$.post("url", JSON.stringify(informacion), function(respuesta, estado){
});
*/


//JS EN HTML CON JQUERY

$(document).ready(() => {
    $("#navMenuPrincipal").append(`<div class="row bgImgMenuPrincipal">
    <div class="col-lg-6 col-xs-12">
      <img src="/projectTME/TME/images/logoTMENpng.png" alt="Logotipo TME" class="paddingLogo">
      <h1>Otra forma
      <br> de comprar</h1>
      <button id="boton" type="button" class="btn btn-warning"><strong>Empeza a comprar</strong></button>   
    </div>
    <nav class="col-lg-6 col-xs-12 parametrosNav spaceImg">
      <img src="/projectTME/TME/images/igLogo-01.png" width="40" alt="" height="40">
      <img src="/projectTME/TME/images/fbLogo.png" width="40" alt="" height="40">
    </nav>
  </div>`)

});

$(document).ready(() => {
    $("#carouselNovedades").append(`<div class="row">
    <div class="col-lg-12 col-xs-12">
      <h3>Nuevas marcas ingresantes</h1>
      <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="./images/carouselAdidas.webp" class="d-block w-100" alt="Zapatillas Adidas">
            <div class="carousel-caption d-none d-md-block">
              <h5>Zapatillas Adidas</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carouselNike.jpg" class="d-block w-100" alt="Zapatillas Nike">
            <div class="carousel-caption d-none d-md-block">
              <h5>Zapatillas Nike</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="./images/carouselPuma.png" class="d-block w-100" alt="Zapatillas Puma">
            <div class="carousel-caption d-none d-md-block">
              <h5>Zapatillas Puma</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>`)

});

$(document).ready(() => {
    $("#cardDestacada").append(`<div class="row paddingCard">
    <div class="col-lg-12 col-xs-12">
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row">
          <div class="col-md-4">
            <img src="./images/chinoDarin.jpg" alt="Chino Darin">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">BOWEN</h5>
              <p class="card-text">Chino Darin</p>
              <p class="card-text"><small class="text-muted">TME</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`)

});

$(document).ready(() => {
    $("#catalogoMarcas").append(` <div class="row">
    <div id="catalogoMarcas" class="col-lg-12 col-xs-12">
      <h3>Catalogo de Marcas</h3>
      <div class="row row-cols-1 row-cols-md-2">
        <div class="col mb-4">
          <div class="card">
            <img src="/projectTME/TME/images/adidasCard.png" class="card-img-top" alt="Logotipo Adidas">
            <div class="card-body">
              <h5 class="card-title">Adidas</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="/projectTME/TME/images/nikeCard.jpg" class="card-img-top" alt="Logotipo Nike">
            <div class="card-body">
              <h5 class="card-title">Nike</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="/projectTME/TME/images/pumaCard.png" class="card-img-top" alt="Logotipo Puma">
            <div class="card-body">
              <h5 class="card-title">Puma</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="/projectTME/TME/images/topperCard.jpg" class="card-img-top" alt="Logotipo Reebok">
            <div class="card-body">
              <h5 class="card-title">Reebok</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`)

});

$(document).ready(() => {
    $("#footerTME").append(`<footer class="row parametrosFooter">
    <footer class="col-lg-4 col-xs-12 spaceImg">
      <img src="/projectTME/TME/images/igLogo-01.png" width="40" alt="" height="40">
      <img src="/projectTME/TME/images/fbLogo.png" width="40" alt="" height="40">
    </footer>
    <footer class="col-lg-4">
      <img src="/projectTME/TME/images/logoTME-01.png" alt="">
    </footer>
    <footer class="col-lg-4">
      <button type="button" class="btn btn-warning" ><strong><a href="/views/quejas.html">Quejas y sugerencias</a></strong></button>
    </footer>
  </footer>`)

});
