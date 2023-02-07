var listaJog = []

var elementoTabela = document.getElementById("tabelaJogadores");

exibirNaTela();

function adicionarJogador() {
  var novoJogador = document.getElementById("nomeNovoJogador").value
  
  listaJog.push({
    nome: novoJogador,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    pontos: 0
    });
  
  document.getElementById("nomeNovoJogador").value = ""
  exibirNaTela()
}

function exibirNaTela() {
   elementoTabela.innerHTML = ""
  listaJog.forEach((jogador, i) => {
    console.log(jogador);
    elementoTabela.innerHTML = elementoTabela.innerHTML + `
        <tr>
            <td>${jogador.nome}</td>
            <td>${jogador.vitorias}</td>
            <td>${jogador.empates}</td>
            <td>${jogador.derrotas}</td>
            <td>${jogador.pontos}</td>
            <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
            <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
            <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
          </tr>
    `;
  });
}

function adicionarVitoria(i) {
  listaJog[i].vitorias++;
  listaJog[i].pontos = listaJog[i].pontos + 3;
  exibirNaTela();
}

function adicionarEmpate(i) {
  listaJog[i].empates++;
  listaJog[i].pontos++;
  exibirNaTela();
}

function adicionarDerrota(i) {
  listaJog[i].derrotas++;
  exibirNaTela();
}

function limparTela() {
    listaJog = []
    exibirNaTela();
}

