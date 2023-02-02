function adicionarFilme() {
    var filmeFavorito = document.getElementById("filme").value
    var nomeFilme = document.getElementById("nome").value
    
    var elementoListaFilmes = document.getElementById("listaFilmes")
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + `
    <div  class="itemlista">
    <img src="${filmeFavorito}" class="imagemfilme">
    <p class="page-subtitle">${nomeFilme}</p>
    </div>
    `
    document.getElementById('filme').value = ''
    document.getElementById('nome').value = ''
  }

  function limparFilmes() {
    var removerListaFilmes = document.getElementsByClassName('itemlista');
    for(var i = removerListaFilmes.length - 1; i >= 0; i--){
    removerListaFilmes[i].remove()
    }
  }