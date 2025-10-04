let listaDosNumerosSorteados = [];
let numeroLimite = 60;
let numeroSecreto = gerarNumeroAleatorio();
console.log(numeroSecreto);


let tentativas = 1;


function exibirTextNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, "Brazilian Portuguese Female",
        {rate:  1.2})
}

function exibirmensagemInicial() {
    exibirTextNaTela("h1", "Jogo do número secreto");
    exibirTextNaTela("p", "Digite um número entre 1 a 60");
}

exibirmensagemInicial();


function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {

        let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;

        exibirTextNaTela("h1", "Acertou!");
        exibirTextNaTela("p", mensagemTentativas);
        document.getElementById("reiniciar").removeAttribute("disabled", true);
    } else
        if (chute < numeroSecreto) {
            exibirTextNaTela("p", "o número secreto é maior");
        } else {
            exibirTextNaTela("p", "O número secreto é menor");
        }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDosNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDosNumerosSorteados = [];
    }
    if (listaDosNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDosNumerosSorteados.push(numeroEscolhido);
        console.log(listaDosNumerosSorteados);
        return numeroEscolhido;
    }

}

function limparCampo() {
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativas = 1;
    limparCampo();
    exibirmensagemInicial();

}
