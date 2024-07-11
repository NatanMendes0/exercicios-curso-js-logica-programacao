alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = 4;
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// testa se o chute é diferente do numero secreto
while (chute != numeroSecreto) {
    chute = parseInt(prompt('Digite um número entre 0 e 10'));
    if (chute < 0 || chute > 10) {
        alert('Digite um número entre 0 e 10');
    }
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}

if (tentativas > 1) {
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
} else {
    alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com uma tentativa!`);
}