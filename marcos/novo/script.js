var clicou1 = document.getElementById('botao')
var div = document.getElementById('divbotao')
var clicou2 = document.getElementById('botao2')

clicou1.addEventListener('click', clicou)
clicou2.addEventListener('click', clicou3)

function clicou() {
    div.style.backgroundColor = 'black'
    clicou1.style.backgroundColor = 'white'
}

function clicou3() {
    div.style.backgroundColor = 'white'
}