function calculadora(numeroUno, numeroDos, operacion){
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

let numeroUno = Number(prompt("Ingrese un numero"));
let numeroDos = Number(prompt("Ingrese el siguiente numero"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numeroUno, numeroDos, operacion);

alert(`${numeroUno} ${operacion} ${numeroDos} = ${resultado}`);