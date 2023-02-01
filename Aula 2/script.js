var numeroSecreto = Math.floor(Math.random() * 1001)

var nome = window.prompt("Qual seu nome?")

var tentativas = Number.parseInt(window.prompt("Quantas tentativas eu tenho para acertar o número?"))

var contador = 0

while((chute != numeroSecreto) && (contador < tentativas)) {
var contador = contador + 1
var chute = window.prompt(`Olá ${nome}, Tente acertar o número:`)
if (chute < numeroSecreto){
window.alert("O número secreto é maior.")
} else if (chute > numeroSecreto){
window.alert("O número secreto é menor")
} else{
  window.alert(`Parabéns ${nome}, Você acertou o número secreto. Caso queira jogar novamente, basta recarregar a página.`)
  var acertou = true
}
}

if(acertou != true){
window.alert(`Sinto muito ${nome}, você não acertou o número secreto em ${tentativas} tentativas. Tente novamente recarregando a página.`)
}