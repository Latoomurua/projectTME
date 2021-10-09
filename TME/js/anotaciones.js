//.fadein sirve para hacer aparecer un elemento en x cantidad de tiempo
//fadeout por otro lado, esta fadeOut
//callback es un segundo parametro opcional

//$("#navTME").fadeIn(4000);

//$("#navTME").fadeOut(4000);

/*
$("#navTME").fadeOut(3000, function (){
$("#navTME").fadeIn(1000)})
*/


//sliderup,down
//creamos un boton en el html y le colocamos un ID y despues colocamos por ejemplo un cartel,
// o un menu que queremos que aparezca cuando apretamos dicho boton
//slideUp es una animacion que desplaza hacia arriba ese objeto hasta desaparecer.
//slideDown es lo mismo pero al reves
/*

$("#miBoton").on("click", function(){
  $("#ejemplo2").slideUp(3000);
})
*/

//slideToggle podemos manejar con este metodo, ambos metodos anteriores.
/*

$("#miBoton").on("click", function(){
  $("#ejemplo2").slideToggle(3000);
})

*/


//animate es un metodo que trabaja sobre una propiedad css pero solamente sobre propiedades que tienen numeros.
//trabaja sobre objetos literales, por eso se hace con llaves ({})
//tambien puede llevar una funcion como callback osea con una animacion final

/*
$("#ejemplo1").animate({
  fontSize: "20px",
  opacity: 0.4},
  3000,
  function() {
    console.log("xxxxxxx")
  }
)

*/

//tambien se pueden concatenar metodos!
//$("#ejemplo1").animate({fontSize: "20px", opacity: 0.4}, 3000).fadeOut(3000);


//.delay es otro metodo para retrasar justamente algun elemento. En este caso lo podemos concatenar con el ejemplo anterior
//$("#ejemplo1").animate({fontSize: "20px", opacity: 0.4}, 3000).delay(3000).fadeOut(3000);

//por ultimo tenemos los scroll "animados"  basicamente colocamos 2 id, uno en un boton por ejemplo, y otro hasta donde queres que llegue.
//primero scrolleamos hasta el catalogo

/*

$("#btnComprarAhora").click(function(e){
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#scrollCatalogoMarcas").offset().top
    }, 2000);
})

//despues volvemos al inicio

$("#arriba").click(function(e){
    e.preventDefault();
    $("html,body").animate({
        scrollTop: $("#container").offset().top
    }, 2000);
})

*/