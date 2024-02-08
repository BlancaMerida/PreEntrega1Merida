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
//t carrito = []
const productos =  [
    { id: 1, nombre: "cuaderno", precio: 1500 },
    { id: 2, nombre: "lapicera", precio: 850 },
    { id: 3, nombre: "carpeta", precio: 1900},
    { id: 4, nombre: "resaltador", precio: 1000 },
];
let carrito = []
let seleccion = prompt("¿Desea comprar algun producto? (escriba si o no)")

while(seleccion != "si" && seleccion != "no")//{
   // alert("Por favor escriba si o no")
   // seleccion = prompt("¿Desea comprar algun vinilo? (escriba si o no)")
//}

if(seleccion == "si"){
    alert("por favor ingrese el producto deceado")
    let productoos = productos.map((productos) => productos.nombre + " " + "$" + productos.precio);
    alert(productoos.join(" - "))
}else{
    alert("Gracias por visitarnos");
}

while (seleccion != "no"){
    let productos = prompt("Agregue productos a su carrito");
    let precio = 0;

    if (productos == "cuaderno" || productos == "lapicera" || productos == "carpeta" || productos == "resaltador"){
        switch (productos){
            case "cuaderno":
                precio = 1500;
                break;
            case "lapicera":
                precio = 850;
                break;
            case "carpeta":
                precio = 1900;
                break;
            case "resaltador":
                precio = 1000;
                break;
            default:
                break;
        }

        let cantidad = parseInt(prompt("¿Cuantas unidades desea comprar?"));

        carrito.push({productos, cantidad, precio});
        console.log(carrito);
    } else {
        alert("No existe el producto indicado");
    }

    //se controla para que el loop no sea infinito
    seleccion = prompt("¿Desea agregar otro producto?")

    while (seleccion === "no"){
        alert("Gracias por comprar")
        carrito.forEach((carritoLleno) => {console.log(`Productos: ${carritoLleno.productos}, Cantidad:  ${carritoLleno.cantidad}, Total a Pagar x Productos:  ${carritoLleno.cantidad * carritoLleno.precio}`)});
        break;
    }
}
const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);
console.log(`El total a pagar de su compra es: ${total}`);