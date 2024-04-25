let listaDeNumerosSorteados = []; 
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAletorio();
let tentativas = 1; 
 

//let titulo = document.querySelector("h1");
//titulo.innerHTML = "jogo do numero secreto";

//let paragrafo = document.querySelector("p");
//paragrafo.innerHTML = "escolha um numero entre 1 e 10";

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
campo.innerHTML = texto; 
 responsiveVoice.speak(texto, "Brazilian Portuguese Female",{rate: 1.2});
 
}
function exibirMensageminicial(){
    exibirTextoNaTela("h1", "jogo do numero secreto");
    exibirTextoNaTela("p", "escolha um numero entre 1 e 10!");
}
exibirMensageminicial()

function verificarChute() {
let chute = document.querySelector("input").value;
console.log(chute == numeroSecreto);  

if (chute == numeroSecreto){
    exibirTextoNaTela("h1", "acertou!");
    let palavratentativa = tentativas > 1? "tentativas" : "tentativa"; 
    let mensagenstentativas = `você descobriu o numero secreto com ${tentativas} ${palavratentativa}`;
    exibirTextoNaTela("p", mensagenstentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
}  else {
    if( chute > numeroSecreto){
        exibirTextoNaTela("p", "o numero secreto é menor");
    } else {
        exibirTextoNaTela("p", "o numero secreto é maior");
    }
    tentativas ++;
    limparCampo();
} 

}

function gerarNumeroAletorio(){
let numeroEscolhido =  parseInt(Math.random() * numeroLimite + 1);
let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

if(quantidadeDeElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
}

if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return gerarNumeroAletorio();
}else {  
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
}
}

function limparCampo(){ 
   chute = document.querySelector("input");
   chute.value = "";
   

}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAletorio();
    limparCampo();
    tentativas = 1;
    exibirMensageminicial()
    document.getElementById("reiniciar").setAttribute("disabled", true);
}