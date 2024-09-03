import { question, questionInt } from "readline-sync";

const taskList = [
    { id: 1, title: "Front-End", description: "Locagica de progração", status: "Cursando" },
    { id: 2, title: "Front-End", description: "To Do List", status: "pendente" },
];

function menuText() {
    let margem = 7, result;
    result = "-".repeat(margem) + " MENU PRINCIPAL " + "-".repeat(margem) + "\n";
    result += "|[1] - Adicionar tarefa      |\n";
    result += "|[2] - Atualizar tarefa      |\n";
    result += "|[3] - Deletar tarefa        |\n";
    result += "|[4] - Obter todas as tarefas|\n";
    result += "|[5] - Obter uma tarefa      |\n";
    result += "|[0] - Sair                  |\n";
    result += "|----------------------------|\n\n";
    return result;
}

function escolherOpc(opc) {
    switch (opc) {
        case 1:
            console.log("Adicionar tarefa");
            // Adicionar lógica para adicionar tarefa
            break;

        case 2:
            console.log("Atualizar tarefa");
            // Adicionar lógica para atualizar tarefa
            break;

        case 3:
            deleteTarefa(taskList);
            break;

        case 4:
            console.log("Obter todas as tarefas");
            console.log(taskList);
            break;

        case 5:
            console.log("Obter uma tarefa");
            // Adicionar lógica para obter uma tarefa
            break;

        default:
            console.log("Opção inválida. Tente novamente.");
    }
}

function deleteTarefa(taskList) {
    console.log("Excluir Tarefa");

    if (taskList.length === 0) {
        console.log("Não há tarefas para excluir.");
        return;
    }

    taskList.forEach(task => {
        console.log(`ID: ${task.id}, Título: ${task.title}, Status: ${task.status}`);
    });

    const taskId = question("\nInforme o ID da tarefa que deseja excluir: ");
    const taskIndex = taskList.findIndex(task => task.id == taskId);

    if (taskIndex !== -1) {
        const deletedTarefa = taskList.splice(taskIndex, 1)[0];
        console.log(`\nTarefa com ID ${taskId} excluída com sucesso:`);
        console.log("ID: " + deletedTarefa.id);
        console.log("Atividade: " + deletedTarefa.title);
        console.log("Descrição: " + deletedTarefa.description);
        console.log("Status: " + deletedTarefa.status);
    } else {
        console.log("Tarefa não encontrada com o ID fornecido.");
    }
}

let option;

do {
    console.log(menuText());
    option = questionInt("Escolha uma opcao: ");
    escolherOpc(option);
} while (option !== 0);

console.log("Programa encerrado.");
