function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        return 
    }

    if(numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre 
        ${menorValor} e ${maiorValor}</div>
        `;
        return 
    }

    if(numero === numeroSecreto) {
        document.body.innerHTML = `
        <h2>Parabéns, você acertou o valor!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
        O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i>
        </div>
        `
    } else {
        elementoChute.innerHTML += `
        <div>
        O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i>
        </div>
        `
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

//Pegando o botão jogar novamente e adicinando a função para a página recarregar
document.body.addEventListener('click',e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})

//Api estava apresentando os valores abaixo de 10 por extenso, criado um objeto para resolver este bug da API
