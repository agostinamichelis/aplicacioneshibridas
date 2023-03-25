let numero1;
let numero2;
let arrayNumeros = [2, 8, 9, 7, 5, 6];
let resultadoSuma;
let resultadoDivision;
let resultadoMayorNumero = 0;



function Suma(numero1, numero2) {
    resultadoSuma = numero1 + numero2;
    return resultadoSuma;
}
console.log("Resultado Suma: " + Suma(5, 10));



function Division(numero1, numero2) {
    resultadoDivision = numero1 / numero2;
    return resultadoDivision;
}
console.log("Resultado Division: " + Division(20, 0));



function Array(array) {
    for (let i = 0; i < array.length; i++) {

        if (array[i] > resultadoMayorNumero) {
            resultadoMayorNumero = array[i];
        }
    }
    return resultadoMayorNumero;
}
console.log("El mayor número vale: " + Array(arrayNumeros));