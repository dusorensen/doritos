let imagem = document.querySelector(".modelo")
let circulo = document.querySelector(".circulo")
let doritos = document.querySelector(".texto-doritos")
let botao = document.querySelector(".leiamais")

function trocaimagem(endereco) {
    imagem.src = endereco
}

function trocacor(cor) {
    circulo.style.background = cor
}

function trocacordoritos(cor) {
    doritos.style.color = cor
}

function trocacorbotao(cor){
    botao.style.background = cor
}