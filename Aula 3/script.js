window.alert("Olá, vamos montar uma lista com seus filmes e séries favoritos")

var filmes = []
var nomesFilmes = []
var continuar = "Sim"

while (continuar == "Sim"){
var adicionar = filmes.push(window.prompt("Insira a URL da imagem do filme."))
var adicionar2 = nomesFilmes.push(window.prompt("Qual o nome desse filme?"))
var continuar = window.prompt("Deseja adicionar mais algum filme?")
}

for (var i = 0; (i < filmes.length); i++){
  document.write(`
  <div class="item">
  <img src="${filmes[i]}" class="imgfilme">
  <p>${nomesFilmes[i]}</p>
  </div>
  `)
}

