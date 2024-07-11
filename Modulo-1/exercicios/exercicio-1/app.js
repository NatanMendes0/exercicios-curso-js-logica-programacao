let diaSemana = prompt('Digite o dia da semana');

if (diaSemana == 'Sabado' || diaSemana == 'Domingo') {
    alert('Bom fim de semana!');
} else {
    alert('Boa semana!');
}

let identificaNumero = prompt('Digite um número');

if (identificaNumero < 0) {
    alert('Número negativo');
} else if (identificaNumero > 0) {
    alert('Número positivo');
} else {
    alert('Número neutro');
}

let saldo = prompt('Digite o saldo da sua conta');

alert("O saldo da sua conta é R$ " + saldo + ",00");