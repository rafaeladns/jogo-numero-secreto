// Sortear um número secreto aleatório
const menorValor = 1;
const maiorValor = 100;



function gerarNumeroAleatorio() {
    return Math.floor(Math.random() * (maiorValor - menorValor + 1));
}

const numeroSecreto = gerarNumeroAleatorio();

console.log('Número secreto: ', numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;

console.log('oi');