let listaDosNumerosSorteados = [];
let numeroLimite = 10;
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
    exibirTextNaTela("p", "Digite um número entre 1 a 10");
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

/*function exibirOla(){
    console.log("Olá,mundo");
}

exibirOla()


function exibirOlaNome(nome) {
    console.log(`Olá, ${nome}`);
    
}

 exibirOlaNome("Alice");

 function numeroEmDobro(numero){
return numero * 2;
 }

let resultadoDobro = numeroEmDobro(5);
console.log(resultadoDobro);


function mediaDosNumeros(a, b, c){
return (a + b + c) / 3;
}

let resultadoMedia = mediaDosNumeros(4, 8, 6);
console.log(resultadoMedia)

function numeroMaior(a, b){
return a > b ? a : b;
}

let resultadoMaior = numeroMaior(8, 67)
console.log(resultadoMaior)

function multiplicarNumero(numero){
return numero * numero
}

let resultadoMultiplicar = multiplicarNumero(4)
console.log(resultadoMultiplicar)*/


/*let listGenerica = [];
let linguagensDeProgramacao = ["JavaScript", "C", "C++", "Kotlin", "Python"];
console.log(linguagensDeProgramacao);
linguagensDeProgramacao.push("Java", "Ruby", "GoLang");
console.log(linguagensDeProgramacao );

let nomeDosAlunos = ["Alice", "Lucas", "Lua"];
console.log(nomeDosAlunos[0]);
console.log(nomeDosAlunos[1]);
console.log(nomeDosAlunos[2]) */

