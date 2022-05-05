const readline = require('readline');
const shell = require('shelljs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getTag = () => {
  if (!shell.which('git')) {
    shell.echo('esse script requer git instalado em sua maquina, saindo..')
    return 0;
}

  rl.question("Qual o tipo de alteração efetuada?\n(digite help para ajuda) \n", function(answer) {
    const lowerAnswer = answer.toLowerCase();
     if (lowerAnswer === 'help') {
        console.log(" FEAT para novos recursos.\n FIX para correção de bugs. \n DOCS para alteração de documentação. \n STYLE para mudança apenas visual. \n REFAC para refatoração de código.  \n PERF para melhorias de performance. \n TEST para adição ou correção de testes. \n CI para mudanças que alteram seus arquivos de configuração CI. \n CHORE mudanças que não alteram as pastas src ou tests. \n REVERT para retornar o Commit anterior. ")
        getTag();
      } else {
        getMessage(lowerAnswer)
      }});
}

const getMessage = (tag) => {

  rl.question("\nDescreva o que foi alterado\n(descrição não pode ser vazia) \n", function(res) {
      if (!res) {
      console.log("mensagem não pode ser vazia \n")
      getMessage(tag);
    } else {
      const lowerAnswer = res.toLowerCase()
        shell.exec('git add .');
        console.log('Mudanças Adicionadas [X][][]')
        shell.exec(`git commit -m "${tag} : ${lowerAnswer}"`);
        console.log('Commit Criado  [X][X][]')
        shell.exec(`git push`);
        console.log('Commit Enviado [X][X][X]')
        console.log
      rl.close();
      }});
}

getTag();


