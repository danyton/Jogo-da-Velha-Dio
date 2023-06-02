var jogador = null;
var jogadorSelecionado = document.getElementById('jogador-selecionado');
var vencedorSelecionado = document.getElementById('vencedor-selecionado');
var quadrados = document.getElementsByClassName('quadrado');
var reiniciarBotao = document.querySelector('button');
var vencedor = null;

mudarJogador('X');

function escolherQuadrado(id) {
    if (vencedor !== null) {
        return;
    }

    var quadrado = document.getElementById(id);

    if (quadrado.innerHTML === 'X' || quadrado.innerHTML === 'O') {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    if (jogador === 'X') {
        jogador = 'O';
    } else {
        jogador = 'X';
    }

    mudarJogador(jogador);
    checarVencedor();
}

function mudarJogador(valor) {
    jogador = valor;
    jogadorSelecionado.innerHTML = jogador;
}

function checarVencedor() {
    if (
        checaSequencia(1, 2, 3) ||
        checaSequencia(4, 5, 6) ||
        checaSequencia(7, 8, 9) ||
        checaSequencia(1, 4, 7) ||
        checaSequencia(2, 5, 8) ||
        checaSequencia(3, 6, 9) ||
        checaSequencia(1, 5, 9) ||
        checaSequencia(3, 5, 7)
    ) {
        vencedor = jogador === 'X' ? 'O' : 'X';
        vencedorSelecionado.innerHTML = vencedor;
    }
}

function checaSequencia(a, b, c) {
    return (
        quadrados[a - 1].innerHTML !== '' &&
        quadrados[a - 1].innerHTML === quadrados[b - 1].innerHTML &&
        quadrados[b - 1].innerHTML === quadrados[c - 1].innerHTML
    );
}

function reiniciarJogo() {
    for (var i = 0; i < quadrados.length; i++) {
        quadrados[i].innerHTML = '';
        quadrados[i].style.background = '#eee';
    }

    vencedor = null;
    vencedorSelecionado.innerHTML = '';
    jogador = 'X';
    jogadorSelecionado.innerHTML = jogador;
}

reiniciarBotao.addEventListener('click', reiniciarJogo);
