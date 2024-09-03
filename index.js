import { question } from "readline-sync";

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

function escolherOpc (opc){
    console.log("teste")

    switch(opc){
        case 1:
            console.log("primeira opc")
            break;
            
        case 2:
    }
}
const option = 6;

do{
    console.log(menuText())
    option = prompt.questionInt("Escolha uma opcao: ");
}while(option !== 0)

escolherOpc(option)

