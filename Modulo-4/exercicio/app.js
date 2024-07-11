// exercicios módulo 4

console.log("Boas vindas ao jogo do número secreto");

let nome = "Natan";
console.log(nome);

alert(`Boas vindas ao jogo do número secreto, ${nome}`);

let linguagemProgramacao = prompt("Qual a melhor linguagem de programação?");

let valor1 = 19, valor2 = 20, resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

valor1 = 10;
valor2 = 5;
resultado = valor1 - valor2;
console.log(`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

let idade = prompt("Insira sua idade:");

if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

numero = prompt("Digite um número:");

if (numero > 0) { console.log("O número é positivo."); } else if (numero < 0) { console.log("O número é negativo."); } else { console.log("O número é zero."); }
i = 1; while (i <= 10) { console.log(i); i++; } numero = prompt("Digite um número:");

if (numero > 0) { console.log("O número é positivo."); } else if (numero < 0) { console.log("O número é negativo."); } else { console.log("O número é zero."); }
i = 1; while (i <= 10) { console.log(i); i++; }

let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiro1 = Math.floor(Math.random() * 10) + 1; console.log(numeroInteiro1);

let numeroInteiro2 = Math.floor(Math.random() * 1000) + 1; console.log(numeroInteiro2);