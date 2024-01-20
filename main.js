// CALCULADORA
//let seguir = "si";
//function calculadora(numeroUno, numeroDos, operacion) {
//    switch (operacion) {
//        case "+":
//            return numeroUno + numeroDos;
//            break;
//
//        case "-":
//            return numeroUno - numeroDos;
//            break;
//
//        case "*":
//            return numeroUno * numeroDos;
//            break;
//
//        case "/":
//            return numeroUno / numeroDos;
//            break;
//
//        default:
//            return "Operacion no valida";
//            break;
//    }
//}
//while(seguir.toLowerCase()!="no"){
//let numeroUno = Number(prompt("Ingrese un numero"));
//let numeroDos = Number(prompt("Ingrese el siguiente numero"));
//let operacion = prompt("Ingrese la operacion");
//
//let resultado = calculadora(numeroUno, numeroDos, operacion);
//
//alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);
//seguir = prompt(`desea seguir? (si/ no)`)
//}

//            SEGUNDA ENTREGA

const productos =  [
    { id: 1, nombre: "cuaderno", precio: 1500 },
    { id: 2, nombre: "lapicera", precio: 850 },
    { id: 3, nombre: "carpeta", precio: 1900},
    { id: 4, nombre: "resaltador", precio: 1000 },
    { id: 5, nombre: "libros", precio: 900 },
];
let nombre = prompt("Ingrese el nombre del producto a buscar");
const producto = productos.find((item) => item.nombre === nombre);
if (producto) { 
    alert(` 
    Id: ${producto.id}
    Nombre: ${producto.nombre}
    Precio:${producto.precio}
    `);
} else {
    alert("Producto no disponible");

}

const precio = Number(prompt("Ingrese el precio minimo del producto"));
const filtra = productos.filter((item) => item.precio > precio);

filtra.forEach((item) => {
    alert(`
    Id: ${item.id}
    Nombre: ${item.nombre}
    Precio:${item.precio}
    `);
});

