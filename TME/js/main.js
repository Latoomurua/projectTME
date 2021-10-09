showrooms.push(new showroom(1, "NIKE", 6));
showrooms.push(new showroom(2, "ADIDAS", 12));
showrooms.push(new showroom(3, "PUMA", 8));
showrooms.push(new showroom(4, "REBOOK", 24))
showrooms.push(new showroom(5, "LEVIS", 18));
showrooms.push(new showroom(6, "BENSIMON", 36));


//GENERAR INTERFAZ DE PRODUCTOS CON UNA FUNCION

/*showroomUI(showrooms, 'showroomContenedor');*/

const filtroMarcas = showrooms.filter(function (showroom){
    return showroom.nombre === "NIKE";
})



//JS EN HTML CON JQUERY

$(document).ready(() => {
    $("#navTME").append(`<div class="row bgImg">
    <div class="col-lg-6 col-xs-12">
      <img src="images/logoTMENpng.png" alt="Logotipo TME" class="paddingLogo">
      <h1>Otra forma
      <br> de comprar</h1>
      <button id="boton" type="button" class="btn btn-warning"><strong>Empeza a comprar</strong></button>   
    </div>
    <nav class="col-lg-6 col-xs-12 parametrosNav spaceImg">
      <img src="/images/igLogo-01.png" width="40" alt="" height="40">
      <img src="/images/fbLogo.png" width="40" alt="" height="40">
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
            <img src="/images/adidasCard.png" class="card-img-top" alt="Logotipo Adidas">
            <div class="card-body">
              <h5 class="card-title">Adidas</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="/images/nikeCard.jpg" class="card-img-top" alt="Logotipo Nike">
            <div class="card-body">
              <h5 class="card-title">Nike</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="/images/pumaCard.png" class="card-img-top" alt="Logotipo Puma">
            <div class="card-body">
              <h5 class="card-title">Puma</h5>
              <p class="card-text">Showroom destacado del mes</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card">
            <img src="/images/topperCard.jpg" class="card-img-top" alt="Logotipo Reebok">
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
      <img src="/images/igLogo-01.png" width="40" alt="" height="40">
      <img src="/images/fbLogo.png" width="40" alt="" height="40">
    </footer>
    <footer class="col-lg-4">
      <img src="/images/logoTME-01.png" alt="">
    </footer>
    <footer class="col-lg-4">
      <button type="button" class="btn btn-warning"><strong>Quejas y sugerencias</strong></button>
    </footer>
  </footer>`)

});

