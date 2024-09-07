import { exec } from 'child_process';
import prompt from "readline-sync";
exec('chcp 65001'); //fix readline-sync UTF-8

let taskList = new Map();
let id = 2;
taskList.set(1, { title:"To-Do-List", description:"Leia o README.md", status:"Concluído" });

function menuText() {
  let margin = 7,
    result;
  result = "-".repeat(margin) + " MENU PRINCIPAL " + "-".repeat(margin) + "\n";
  result += "|[1] - Adicionar tarefa      |\n";
  result += "|[2] - Atualizar tarefa      |\n";
  result += "|[3] - Deletar tarefa        |\n";
  result += "|[4] - Obter todas as tarefas|\n";
  result += "|[5] - Obter uma tarefa      |\n";
  result += "|[0] - Sair                  |\n";
  result += "|" + "-".repeat(margin * 4) + "|\n\n";
  return result;
}

function chooseOption(option) {
    try {
      switch (option) {
        case 0:
          console.log("Programa Encerrado!");
          break;
        case 1:
          addTask(taskList);
          console.log("Tarefa Adicionada!\n\n");
          break;
        case 2:
          updateTask(taskList);
          break;
        case 3:
          taskList = deleteTask(taskList);
          break;
        case 4:
          listAllTasks(taskList);
          break;
        case 5:
          showTaskById(taskList);
          break;

        default:
          console.log("Opção inválida. Tente novamente.");
      }
    } catch (error) {
      console.log("Ocorreu um erro ao processar a sua solicitação. Tente novamente.");
    }
}

let option;

const pause = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

do {
  console.log(menuText());
  option = prompt.questionInt("Escolha uma opção: ");
  chooseOption(option);
  await pause(1000);
} while (option !== 0);

// FUNÇÕES DE MANIPULAÇÃO DAS TAREFAS

function addTask(taskList) {
  let title = prompt.question("Digite o Título da Tarefa: ");
  while (checkTitle(taskList, title)) {
    console.log("Uma tarefa com esse título já existe. Por favor, escolha um título diferente.");
    title = prompt.question("Digite o Título da Tarefa: ");
  }
  const description = prompt.question("Digite a Descrição da Tarefa: ");
  const status = prompt.question("Digite o Status da Tarefa: ");
  taskList.set(id, { title, description, status });
  id++;
}

function checkTitle(taskList, title) {
    for (let task of taskList.values()) {
      if (task.title === title) {
        return true;
      }
    }
    return false;
}

function updateTask(taskList) {
    
    const task = taskList.get(prompt.questionInt("Digite o ID da Tarefa: "));
    let optionEdit;

    if (task) {
      do {
        optionEdit = prompt.question(
          "O que deseja editar?\n[1] - Título\n[2] - Descrição\n[3] - Status\n[4] - Sair\n"
        )
        switch (optionEdit) {
          case '1':
              let title = prompt.question("Digite o novo título da Tarefa: ");
              while (checkTitle(taskList,title)) {
                console.log("Uma tarefa com esse título já existe. Por favor, escolha um título diferente.");
                title = prompt.question("Digite o Título da Tarefa: ");
              }
              task.title = title;
              console.log("Tarefa atualizada com sucesso!");
            break;
          case '2':
              task.description = prompt.question("Digite a nova descrição da Tarefa: ");
              console.log("Tarefa atualizada com sucesso!");
            break;
          case '3':
              task.status = prompt.question("Digite o novo status da Tarefa: ");
              console.log("Tarefa atualizada com sucesso!");
            break;
          case '4':
            console.log("\nSaindo...\n\n");
            break;
    
          default:
            console.log("Opção inválida. Tente novamente.");
          }
        } while (optionEdit !== '4');
    } else {
      console.log("Tarefa não encontrada.");
    }
}

function deleteTask(taskList) {
  console.log("Excluir Tarefa");

  if (taskList.size === 0) {
    console.log("Não há tarefas disponíveis para excluir.");
    return taskList;
  }

  taskList.forEach((task, id) => {
    console.log(`ID: ${id}, Título: ${task.title}, Status: ${task.status}`);
  });

  const taskId = prompt.questionInt("Digite o ID da tarefa que deseja excluir: ");

  if (taskList.has(taskId)) {
    taskList.delete(taskId);
    console.log(`Tarefa com ID ${taskId} excluída com sucesso.`);
  } else {
    console.log("Tarefa não encontrada.");
  }

  return taskList;
}

function listAllTasks(taskList) {
    if (taskList.length === 0) {
        console.log("Não há tarefas salvas.");
    } else {
        console.log("\n=== Tarefas Salvas ===");
        taskList.forEach((task, id) => {
            console.log(`ID: ${id}`);
            console.log(`Título: ${task.title}`);
            console.log(`Descrição: ${task.description}`);
            console.log(`Status: ${task.status}`);
            console.log("---------------------------");
        });

        console.log("\n===========================\n\n");
        
    }
}

function showTaskById(taskList) {
    const taskId = prompt.questionInt("Digite o ID da tarefa que deseja exibir: ");
    if (taskList.has(taskId)) {
        const task = taskList.get(taskId);
        console.log("---------------------------");
        console.log(`Título: ${task.title}`);
        console.log(`Descrição: ${task.description}`);
        console.log(`Status: ${task.status}`);
        console.log("---------------------------");
    } else {
        console.log("Tarefa não encontrada.");
    }
}


