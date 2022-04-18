const readLine = require("readline-sync");

entradaDados = function entrada(texto) {
  dado = readLine.question(texto);
  return dado;
};

console.log("\nBem-vindo ao sistema de cadastramento de alunos da ITMK!");

let nomes = [];
let idades = [];
let cursos = [];

function cadastroAluno() {
  console.log("\nDigite o nome do aluno:");
  entradaDados();
  nomeAluno = dado;
  console.log("Digite a idade do aluno:");
  entradaDados();
  idadeAluno = dado;
  console.log("Digite o curso o qual o aluno irá frequentar:");
  entradaDados();
  cursoAluno = dado;
  nomes.push(nomeAluno);
  idades.push(idadeAluno);
  cursos.push(cursoAluno);
  console.log("\nCadastro realizado com sucesso!\n");
  console.log("Cadastrar novo aluno?\n");
  console.log("1.Sim");
  console.log("2.Não\n");
  console.log("Selecione uma das opções:");
  entradaDados();
  novoAluno = dado;
  if (novoAluno == "1") {
    cadastroAluno();
  } else if (novoAluno == "2") {
    principal();
  }
}

function removerAluno() {
  if (nomes.length === 0) {
    console.log("\nLista vazia");
    principal();
  } else {
    contador = 0;
    console.log("\nLISTA DE ALUNOS\n");
    nomes.forEach((e1) => {
      let idade_X = idades[contador];
      let curso_X = cursos[contador];
      let dados_lista =
        contador +
        "." +
        e1 +
        "; IDADE: " +
        idade_X +
        " anos; CURSO: " +
        curso_X +
        ";";
      console.log(dados_lista);
      contador++;
    });
    console.log("\nSelecione um aluno para remover:");
    entradaDados();
    let apagarAluno = dado;
    nomes.splice(apagarAluno, 1);
    idades.splice(apagarAluno, 1);
    cursos.splice(apagarAluno, 1);
    console.log("\nAluno removido com sucesso!\n");
    principal();
  }
}

function lista() {
  if (nomes.length === 0) {
    console.log("\nLista vazia");
    principal();
  } else {
    contador = 0;
    console.log("\nLISTA DE ALUNOS\n");
    nomes.forEach((e1) => {
      let idade_X = idades[contador];
      let curso_X = cursos[contador];
      let dados_lista =
        "NOME: " +
        e1 +
        "; IDADE: " +
        idade_X +
        " anos; CURSO: " +
        curso_X +
        ";";
      console.log(dados_lista);
      contador++;
    });
    principal();
  }
}

function principal() {
  console.log("\n1.Cadastrar aluno");
  console.log("2.Descadastrar aluno");
  console.log("3.Ver lista completa");
  console.log("4.Encerrar atividade\n");
  console.log("Selecione uma das opções:");
  entradaDados();
  condicao(dado);
}

function condicao(resposta) {
  switch (resposta) {
    case "1":
      cadastroAluno();
    case "2":
      removerAluno();
    case "3":
      lista();
    case "4":
      process.exit(
        console.log("\nAté a próxima! \nEncerrando o Programa...\n")
      );
    default:
      console.log("\nDesculpe, resposta inválida.\n");
  }
}

principal();
