# CommitMe! 🦤

Estão cheios de criar commits nada intuitivos, confusos e que não acrescentam nada na sua documentação?
Já se viu em situações onde você queria voltar uma alteração, mas não sabia qual desses commits restaurar?

    Finalizando projeto
    Finalizando projeto v2
    Finalizando projeto v3
    Finalizando projeto AGORA VAI
    Finalizando projeto FOI 
    Finalizando projeto Não tinha ido antes, mas agora foi!
    Finalizando projeto v4

<p  align="center">
<img src="./assets/ezgif-1-8783a798b8.gif"  alt="Creepy Dodo">
</p>

<h4 align="center" > "Tentando entender o meu próprio histórico de Commits" </h4>


Vamos começar a organizar essa bagunça? Esse repositório funciona como rodinhas de bicicleta na hora de desenvolver [commits semanticos](https://www.conventionalcommits.org/en/v1.0.0/)  tornando todo seu histórico de alterações mais legível e estruturado!

## Como usar o CommitMe?


 para rodar esse script basta clonar esse repositório, uma vez que ele esta em sua maquina, é só rodar o arquivo commitme.js pelo node.
 
 * Dentro do diretorio do commitme use
    <code>node commitme</code>


* a aplicação vai pedir pela sua tag de alteração, caso não conheça nenhuma, basta digitar help para receber uma lista
* em seguida a aplicação vai te pedir por uma descrição do que foi feito naquele commit, tente não ultrapassar 50 caracteres, facilita muito a leitura.
* Pronto seu commit já está enviado.
<p  align="center">
<img src="./assets/hmmm%20intresting.gif"  alt="happy Dodo">
</p>


> Mas Gero, eu não quero commitar apenas nesse repositório!
> Eu quero usar o CommitMe dentro dos MEUS repositórios pessoais!!!

Calma querid@! isso nós vamos resolver agora! 
Vamos criar um um *Alias* pra nosso script para podermos chamalo em qualquer lugar


* dentro do diretório do commitme 

    <code> pwd </code>

* O comando acima mostra nossa rota atual, o meu terminal me retorna o seguinte :

 

    

  

     <code> /home/gero/CommitMe </code>

* o seu deve retornar algo parecido, é só copiar esse retorno
* agora precisamos editar nosso arquivo de  configurações do shell, isso pode variar dependendo do seu terminal, além disso vamos precisar de um editor de texto, qualquer um que você se sinta mais confortavel (No meu caso estarei usando ZSH com o editor de texto VIM)
 
   

    <code> vim ~/.zshrc </code>

 

* OBS (você pode usar qualquer editor, vim, nano, até mesmo o vscode, no caso o comando seria *code ~/.zshrc*)
* OBS 2 ( a pasta de configuração pode variar dependendo do seu Shell, caso não tenha certeza do seu basta usar o comando `echo $SHELL`  case seu retorno seja algo como Bash , você não fara as alterações em ~/.zshrc e sim em ~/.bashrc, é bem menos complicado do que parece)

* uma vez com seu arquivo .blábláblá**rc** aberto  vamos adicionar na última linha o seguinte comando:

      alias commitme="node /home/gero/CommitMe/commitme.js "

* OBS1 ( um alias é um apelido para um código pré definido, por exemplo:  posso criar um alias para me dar uma força quando estou esgotado, basta ir no meu arquivo rc e :  <code>alias ToCansado="echo 'Força Tigrão</code>' , agora sempre que eu digitar ToCansado no terminal ele vai me dizer Força Tigrão e eu vou trabalhar 300% mais focado, viu como um alias pode mudar sua vida )
* OBS2  (lembrese que home/gero/CommitMe é o pwd da minha maquina! a sua vai ser diferente,  basicamente estamos dizendo que  quando o usuario digitar commitme no terminal , o node vai executar o que estiver no caminho passado + commitme.js que é nosso script)

Agora CommitMe Já está configurado em sua máquina, bons commits e bem vindo ao mundo semantico!

### O que o script faz ?
na versão atual  esse esse pequeno programa executa 3 comandos git de uma forma mais rapida e interativa!
primeiro armazenamos o tipo da sua alteração e depois a sua descrição,  pegamos esses valores e passamos para o template do conventional commits, feito isso, passamos por um `git add .` ( que adiciona todas as alterações), seguido por um `git commit -m "{varivael}"` onde `{variavel}` é subistituido pelo valor formatado anteriormente, e por ultimo enviamos o commit para o github com `git push -f`.

o programa não tem o comportamento esperado CASO
* Git não esteja instalado
* Não esteja em um repositorio
* O repositorio não tenha uma origem
(Os dois ultimos podem ser tratados em versões futuras)

### Quero fazer parte desse projeto


Esse projeto é muito simples, e pode servir de porta de entrada para muitos programadores nas contribuições a softwares abertos, se sinta mais do que convidado a forkear esse projeto, e fazer dele seu sandbox e claro, se quiser que todos tenham acesso a uma nova funcionalidade do script desenvolvida inteiramente por você, é só abrir uma PR!




O que estudar para alterar uma parte especifica projeto ?
* [Node.js](https://nodejs.org/en/) para alterar ou incluir o uso de bibliotecas
* [ReadLine](https://node.readthedocs.io/en/latest/api/readline/) para trabalhar com data recebida pelo terminal
* [Shell.js](http://adilapapaya.com/docs/shelljs/) para controle de terminal 
* Correções de ortografia e traduções também são sempre bem vindas!


<p  align="center">
<img src="./assets/giphy.gif"  alt="goodby Dodo">
</p>
