function verificaChute(chute) {
    const numero = parseInt(chute);

    if(Number.isNaN(numero)) {
        elementoChute.innerHTML += '<div>Valor invalido</div>';
    }

    if(verificaMaiorOuMenor(numero)) {
        elementoChute.innerHTML += `<div>Fale um numero entre ${menorValor} e ${maiorValor}</div>`;
    }

    if(numero === numeroAleatorio) {
        document.body.innerHTML = `
            <h2>Parabens, voce acertou!!!</h2>
            <h3>O numero secreto era ${numeroAleatorio}</h3>

            <button id="jogar-novamente" class="botao-jogar">Jogar novamente</button>
        `
        return;
    } else if(numero < numeroAleatorio) {
        elementoChute.innerHTML += `
            <div>O numero secreto eh maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    } else {
        elementoChute.innerHTML += `
            <div>O numero secreto eh menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    }
}

function verificaMaiorOuMenor(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', (e) => {
    if(e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})