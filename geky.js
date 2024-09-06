const prompt = require("readline-sync");

const ArrayTarefas = [
//   { id: 1, title: "Exemplo", description: "exemplo", status: "concluído" },
//   { id: 2, title: "Exemplo", description: "exemplo", status: "concluído" },

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

// const retorno = menuText();

// console.log(retorno)


// Parte Larissa - Listar tarefas

function listarTarefas() {
    if (ArrayTarefas.length === 0) {
        console.log("Não há tarefas salvas.");
    } else {
        console.log("\n=== Tarefas Salvas ===");
        ArrayTarefas.forEach((tarefa) => {
            console.log(`ID: ${tarefa.id}`);
            console.log(`Título: ${tarefa.title}`);
            console.log(`Descrição: ${tarefa.description}`);
            console.log(`Status: ${tarefa.status}`);
            console.log("---------------------------");
        });
    }
}

function escolherOpc(opc) {
    switch(opc) {
        case 1:
            console.log("Adicionar tarefa");
            
            break;
            
        case 2:
            console.log("Atualizar tarefa");
            
            break;

        case 3:
            console.log("Deletar tarefa");
            
            break;

        case 4:
            listarTarefas(); 
            break;

        case 5:
            console.log("Obter uma tarefa");
        
            break;

        case 0:
            console.log("Saindo...");
            break;

        default:
            console.log("Opção inválida.");
            break;
    }
}

let option = 2;

do{
    console.log(menuText())
    option = prompt.questionInt("Escolha uma opcao: ");
}while(option !== 0)

escolherOpc(option)