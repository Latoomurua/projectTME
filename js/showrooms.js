//DECLARACIÓN DE CLASE PRODUCTO
class Producto {
    constructor(id, ciudad, precioProducto,img,categoria) {
            this.id = parseInt(id);
            this.ciudad = ciudad;
            this.precioProducto = parseFloat(precioProducto);
            this.img = img;
            this.cantidad= 1;
            this.categoria=categoria;
    }
    agregarCantidad(valor){
        this.cantidad += valor; 
    }
    subtotal(){
        return this.cantidad * this.precio;
    }
}