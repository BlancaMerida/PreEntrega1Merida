// CALCULADORA
let seguir = "si";
function calculadora(numeroUno, numeroDos, operacion) {
    switch (operacion) {
        case "+":
            return numeroUno + numeroDos;
            break;

        case "-":
            return numeroUno - numeroDos;
            break;

        case "*":
            return numeroUno * numeroDos;
            break;

        case "/":
            return numeroUno / numeroDos;
            break;

        default:
            return "Operacion no valida";
            break;
    }
}
while(seguir.toLowerCase()!="no"){
let numeroUno = Number(prompt("Ingrese un numero"));
let numeroDos = Number(prompt("Ingrese el siguiente numero"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numeroUno, numeroDos, operacion);

alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);
seguir = prompt(`desea seguir? (si/ no)`)
}
// OTRO CALCULO PRACTICANDO


 //   let producto = prompt("¿que va a comprar?")
 //   if(producto === "salchipapa"){
//        alert("El plato de sachipapa vale 1000 ")
//    }
//    else if(producto === "jugodelimon"){
//        alert("el jugo de limon tiene el valor de 800")
//    }
//    else if(producto ==="pancho"){
//    alert("el pancho tiene el valor de 550")
//    }
//    else{
//        alert("ese producto no esta ala venta")
//    }
//    let dineroAPagar = Number(prompt("concuanto dinero desa pagar?"))
//    if(producto === "salchipapa"){
//        alert("tu vuelto es:" +" " + "$" +(dineroAPagar - 1000))
//    }
//    else if(producto === "jugodelimon"){
//        alert("tu vuelto es:" +" " + "$" +(dineroAPagar - 800))
//    }
//    else if(producto === "pancho"){
//        alert("tu vuelto es:" +" " + "$" +(dineroAPagar - 550))
//    }
//    else{
//        alert("nose pudo completar la compra")
//    }


