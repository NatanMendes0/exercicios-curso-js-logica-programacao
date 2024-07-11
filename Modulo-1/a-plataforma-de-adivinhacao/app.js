alert('Boas vindas ao jogo do número secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1);

let chute;
let tentativas = 1;

// testa se o chute é diferente do numero secreto
while (chute != numeroSecreto) {
    chute = parseInt(prompt(`Digite um número entre 0 e ${numeroSecreto}`));
    if (chute < 0 || chute > 10) {
        alert(`Digite um número entre 0 e ${numeroSecreto}`);
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

//utilizando operador ternário
let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativas}!`);


// if (tentativas > 1) {
// alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas!`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com uma tentativa!`);
// }