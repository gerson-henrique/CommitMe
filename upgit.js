const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getTag = () => {

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
        console.log('deu bom')
      rl.close();
      }});
}

getTag();


