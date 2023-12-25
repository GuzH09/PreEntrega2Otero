class Producto {
    // Clase Producto
    constructor(info) {
        this.nombre = info.nombre
        this.precio = info.precio
        this.cantidadParaDescuento = info.cantidadParaDescuento
        this.valorDescuento = info.valorDescuento
    }
}

// Recibe un objeto Producto y 
// Calcula el valor total de carrito sumando todas las unidades de un mismo producto, 
// Y da un descuento si pasas cierta cantidad de productos.
function calculaTotal(productoObjeto) {
    let cantidadCorrecta = false
    let cantidadProducto;

    // Validación para la cantidad, corrección de la PreEntrega 1
    while (cantidadCorrecta == false) {
        let cantidadProductoStr = prompt("Ingrese la cantidad de productos que desea comprar:");
        cantidadProducto = parseInt(cantidadProductoStr);
        // RegEx para validar numero
        if (!isNaN(cantidadProducto) && cantidadProducto > 0 && /^\d+$/.test(cantidadProductoStr) ) {
            cantidadCorrecta = true;
        } else {
            alert("Cantidad no valida. Ingrese un número mayor que 0.");
        }
    };

    // Calculo del descuento
    let resultadoOriginal = productoObjeto.precio * cantidadProducto;
    if (cantidadProducto >= productoObjeto.cantidadParaDescuento) {
        let resultadoDescuento = (productoObjeto.precio - (productoObjeto.valorDescuento * productoObjeto.precio)) * cantidadProducto;
        alert(`Obtienes un descuento del ${productoObjeto.valorDescuento * 100}%. Valor total: ${resultadoDescuento}. Valor sin descuento: ${resultadoOriginal}`);
    } else {
        alert(`No obtienes un descuento. Valor total: ${resultadoOriginal}.`);
    }
}

// Simulador Interactivo
// Creamos los productos para el simulador, usando la clase Producto
const producto1 = new Producto({
    nombre: "zapatillas",
    precio: 20000,
    cantidadParaDescuento: 3,
    valorDescuento: 0.2,
});

const producto2 = new Producto({
    nombre: "remera",
    precio: 40000,
    cantidadParaDescuento: 2,
    valorDescuento: 0.3,
});

const producto3 = new Producto({
    nombre: "jeans",
    precio: 50000,
    cantidadParaDescuento: 3,
    valorDescuento: 0.4,
});

// Creamos un Array de productos con cada producto
const productosArray = [
    producto1,
    producto2,
    producto3,
];

// Crea una lista de los nombres de los productos para usarla en el Prompt
const nombreProductos = productosArray.map((item) => item.nombre);

// Le pedimos al usuario que ingrese un producto de la lista
// Corrección de PreEntrega1 agregar toLowerCase para validar mejor el input
let productoIngresado = prompt("Ingrese un producto de la siguiente lista: " + nombreProductos + ". O la palabra reservada ESC para finalizar.").toLowerCase();
while (productoIngresado != "esc") {
    if (productoIngresado === 'esc') {
        break
    } else if (nombreProductos.includes(productoIngresado)) {
        // Metodo de búsqueda validado así no retorna undefined
        let productoObjeto = productosArray.find(p => p.nombre === productoIngresado);
        calculaTotal(productoObjeto);
        productoIngresado = prompt("Ingrese un producto de la siguiente lista: " + nombreProductos + ". O la palabra reservada ESC para finalizar.").toLowerCase();
    } else {
        productoIngresado = prompt("Valor no válido. Ingrese un producto de la siguiente lista: " + nombreProductos + ". O la palabra reservada ESC para finalizar.").toLowerCase();
    }
}