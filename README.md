# CommitMe! 🦤

Estão cheios de criar commits nada intuitivos, confusos e que não acressentam nada na sua documentação ?
Já se viu em situações onde você queria voltar uma alteração mas não sabia qual desses commits restaurar ?

    Finalizando projeto
    Finalizando projeto v2
    Finalizando projeto v3
    Finalizando projeto AGORA VAI
    Finalizando projeto FOI 
    Finalizando projeto Não tinha ido antes mas agora foi
    Finalizando projeto v4

<p  align="center">
<img src="./assets/ezgif-1-8783a798b8.gif"  alt="Creepy Dodo">
</p>

<h4 align="center" > "Tentando entender o meu póprio historico de Commits" </h4>


  Vamos começar a organizar essa bagunça ? esse repositorio funciona como rodinhas de bicicleta na hora de desenvolver [commits semanticos](https://www.conventionalcommits.org/en/v1.0.0/)  tornando todo seu historico de alterações mais legivel e estruturado!

## Como usar o CommitMe ?

 para rodar esse script basta clonar esse repositorio, uma vez que ele esta em sua maquina, é só rodar o arquivo commitme.js pelo node
 
 * dentro do diretorio do commitme 
    <code>node commitme</code>

* a aplicação vai pedir pela sua tag de alteração , caso não conheça nehuma, basta digitar help para receber uma lista
* em seguida a aplicação vai te pedir por uma descrição do que foi feito naquele commit,  tente não ultrapassar 50 caracteres, facilita muito a leitura.
* Pronto seu commit já está enviado.
<p  align="center">
<img src="./assets/hmmm%20intresting.gif"  alt="happy Dodo">
</p>


> mas Gero eu n quero comitar apenas nesse respositorio ! eu quero usar
> o CommitMe dentro dos meus repositorios pessoais !!!!

Calma querid@! isso nos vamos resolver agora! 
Vamos criar um um *Alias* pra nosso script para podermos chamalo em qualquer lugar

* dentro do diretorio do commitme 

    <code> pwd </code>

* O comando acima mostra nossa rota atual, o meu terminal me retorna o seguinte :

 

    

  

     <code> /home/gero/CommitMe </code>

* o seu deve retornar algo parecido, é só copiar esse retorno
* agora precisamos editar nosso arquivo de  configurações do shell, isso pode variar dependendo do seu terminal, alem disso vamos precisar de um editor de texto, qualquer um que você se sinta mais confortavel (No meu caso estarei usando ZSH com o editor de texto VIM)
 
   

    <code> vim ~/.zshrc </code>

 

* OBS (você pode usar qualquer editor, vim, nano, até mesmo o vscode, no caso o comando seria *code ~/.zshrc*)
* OBS 2 ( a pasta de configuração pode variar dependendo do seu Shell, caso não tenha certeza do seu basta usar o comando `echo $SHELL`  case seu retorno seja algo como Bash , você não fara as alterações em ~/.zshrc e sim em ~/.bashrc, é bem menos complicado do que parece)

* uma vez com seu arquivo .blábláblá**rc** aberto  vamos adicionar na ultima linha o seguinte comando

      alias commitme="node /home/gero/CommitMe/commitme.js "

* OBS1 ( um alias é um apelido para um código pré definido, por exemplo:  posso criar um alias para me dar uma força quando estou esgotado, basta ir no meu arquivo rc e :  <code>alias ToCansado="echo 'Força Tigrão</code>' , agora sempre que eu digitar ToCansado no terminal ele vai me dizer Força Tigrão e eu vou trabalhar 300% mais focado, viu como um alias pode mudar sua vida )
* OBS2  (lembrese que home/gero/CommitMe é o pwd da minha maquina! a sua vai ser diferente,  basicamente estamos dizendo que  quando o usuario digitar commitme no terminal , o node vai executar o que estiver no caminho passado + commitme.js que é nosso script)

Agora CommitMe Já está configurado em sua máquina, bons commits e bem vindo ao mundo semantico!

# Files

<p  align="center">
<img src="./assets/giphy.gif"  alt="goodby Dodo">
</p>
