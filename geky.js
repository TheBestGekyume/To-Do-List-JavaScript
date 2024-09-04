import prompt from "readline-sync";
import { exec } from 'child_process';
exec('chcp 65001'); //fix readline-sync UTF-8

// const ArrayTarefas = [
//   { id: 1, title: "Exemplo", description: "exemplo", status: "concluído" },
//   { id: 2, title: "Exemplo", description: "exemplo", status: "concluído" },

// ];

const arrayTarefas = new Map();

let id = 1;

function menuText() {
  let margem = 7,
    result;
  result = "-".repeat(margem) + " MENU PRINCIPAL " + "-".repeat(margem) + "\n";
  result += "|[1] - Adicionar tarefa      |\n";
  result += "|[2] - Atualizar tarefa      |\n";
  result += "|[3] - Deletar tarefa        |\n";
  result += "|[4] - Obter todas as tarefas|\n";
  result += "|[5] - Obter uma tarefa      |\n";
  result += "|[0] - Sair                  |\n";
  result += "|" + "-".repeat(margem * 4) + "|\n\n";
  return result;
}

function escolherOpc(opc) {
  switch (opc) {
    case 0:
        console.log("Programa Encerrado!");
      break;
    case 1:
      adicionarTarefa(arrayTarefas);
      console.log("Tarefa Cadastrada!\n\n");

      break;

    case 2:
      console.log("Atualizar tarefa");
      break;

    case 3:
      deleteTarefa(arrayTarefas);
      break;

    case 4:
      console.log("Obter todas as tarefas");
      console.log(arrayTarefas);
      //fazer a função com exibição melhorada
      break;

    case 5:
      const idTarefa = prompt.questionInt(
        "Digite o ID da tarefa que sera exibida: "
      );
      console.log(arrayTarefas.get(idTarefa));
      //fazer a função com exibição melhorada
      break;

    default:
      console.log("Opção inválida. Tente novamente.");
  }
}

let option;

const pausa = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

do {
  console.log(menuText());
  option = prompt.questionInt("Escolha uma opcao: ");
  escolherOpc(option);
  await pausa(750);
} while (option !== 0);

function adicionarTarefa(arrayTarefas) {
  let title = prompt.question("Digite o titulo da Tarefa: ");

  while (verificarTitulo(arrayTarefas, title)) {
    console.log(
      "Uma tarefa com esse título já existe. Por favor, escolha um título diferente."
    );
    title = prompt.question("Digite o título da Tarefa: ");
  }

  const description = prompt.question("Digite a descrição da Tarefa: ");
  const status = prompt.question("Digite o status da Tarefa: ");
  arrayTarefas.set(id, { title, description, status });
  id++;
}

function verificarTitulo(arrayTarefas, title) {
  for (let tarefa of arrayTarefas.values()) {
    if (tarefa.title === title) {
      return true;
    }
  }
  return false;
}
