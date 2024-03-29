
function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
        elementoChute.innerHTML += '<div>Valor inválido</div>';
        redirecionarPagina('game-over.html', 1000);
        return;
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
        <div>Valor inválido: o número secreto precisa estar entre 
        ${menorValor} e ${maiorValor}</div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <div class="main">
        <h2>Parabéns, você acertou o valor!</h2>
        <h3>O número secreto era ${numeroSecreto} </h3>
        <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
        </div>
        `;
        return;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
        <div>
        O número secreto é menor <i class="fa-solid fa-circle-arrow-down"></i>
        </div>
        `;
    } else {
        elementoChute.innerHTML += `
        <div>
        O número secreto é maior <i class="fa-solid fa-circle-arrow-up"></i>
        </div>
        `;
    }
}

function chuteForInvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}

function redirecionarPagina(url, tempoEspera) {
    setTimeout(() => {
        window.location.replace(url);
    }, tempoEspera) 
}

// Pegando o botão jogar novamente e adicionando a função para a página recarregar
document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
});
