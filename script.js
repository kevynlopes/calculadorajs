function AdicionarNumeros(num1, num2) {
    return num1 + num2
}

let numero1 = prompt("Insira o primeiro número:")

let numero2 = prompt("Insira o segundo numero:")

numero1 = Number(numero1);
numero2 = Number(numero2);

let resultado = AdicionarNumeros(numero1, numero2)
alert(`O resultado é ${resultado}.`);