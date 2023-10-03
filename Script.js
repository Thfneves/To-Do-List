const button = document.querySelector(".button-task");
const input = document.querySelector(".input-task");
const listaCompleta = document.querySelector(".list-task");

let minhaListaDeItens = [];

function adicionarNovaTarefa() {
  minhaListaDeItens.push({
    tarefa: input.value,
    concluida: false,
  });

  input.value = "";

  mostrarTarefas();
}

function mostrarTarefas() {
  let novaLi = "";

  minhaListaDeItens.forEach((item, posicao) => {
    novaLi =
      novaLi +
      `
    <li class="task">
          <img src="img/chechout.png" alt="check-na-tarefa" />
          <p>${item.tarefa}</p>
          <img src="img/lixeira.png" alt="tarefa-para-o-lixo" onclick="deletarItem(posicao)">
          </li>`;
  });

  listaCompleta.innerHTML = novaLi;
}

function deletarItem(posicao) {
  minhaListaDeItens.splice(posicao, 1);
  mostrarTarefas();
}

button.addEventListener("click", adicionarNovaTarefa);
