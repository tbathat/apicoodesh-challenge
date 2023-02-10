<h1>Nesse documento será possível acompanhar não somente a descrição, como também as tomada de decisões do projeto.</h1>

<p>1.Deve conter o título do projeto.</p>
<p>2.Uma descrição sobre o projeto em frase.</p>
<p>3.Deve conter uma lista com linguagem, framework e/ou tecnologias usadas.</p>
<p>4.Como instalar e usar o projeto (instruções).</p>


<h2>Instruções iniciais obrigatórias</h2>

- O projeto deverá ser desenvolvido com uma das tecnologias a seguir: Node.js | C# .NET Core | PHP Laravel | RubyOnRails | Go Lang | Python FastAPI | SpringBoot Kotlin | Rust | Elixir;
- Criar um banco de dados grátis MongoDB usando Atlas: https://www.mongodb.com/cloud/atlas ou banco de dados grátis MySQL no Heroku: https://elements.heroku.com/addons/jawsdb ou banco de dados grátis Postgres no Heroku: https://elements.heroku.com/addons/heroku-postgresql; (Recomendável usar Drivers oficiais para integração com o DB)

<h3>MODELO DE DADOS:</h3>

{
    "id": 0,
    "featured": false,
    "title": "string",
    "url": "string",
    "imageUrl": "string",
    "newsSite": "string",
    "summary": "string",
    "publishedAt": "string",
    "launches": [
      {
        "id": "string",
        "provider": "string"
      }
    ],
    "events": [
      {
        "id": "string",
        "provider": "string"
      }
    ]
  }

<h3>Backend - obrigatório</h3>

<p>Nessa etapa você deverá construir uma API Restful com as melhores práticas de desenvolvimento, baseada na API Space Flight News. Para isso você deve executar os passos a seguir:</p>

<h4>Obrigatório 1 - Você deverá desenvolver as seguintes rotas:</h4>

[GET]/:  Retornar um Status: 200 e uma Mensagem "Back-end Challenge 2021 🏅 - Space Flight News"

[GET]/articles/:   Listar todos os artigos da base de dados, utilizar o sistema de paginação para não sobrecarregar a REQUEST

[GET]/articles/{id}: Obter a informação somente de um artigo

[POST]/articles/: Adicionar um novo artigo

[PUT]/articles/{id}: Atualizar um artigo baseado no id

[DELETE]/articles/{id}: Remover um artigo baseado no id

<h4>Obrigatório 2 - Para alimentar o seu banco de dados você deve criar um script para armazenar os dados de todos os artigos na Space Flight News API.</h4>

<h4>Obrigatório 3 - Além disso você precisa desenvolver um CRON para ser executado diariamente às 9h e armazenar em seu os novos artigos ao seu banco de dados. (Para essa tarefa você poderá alterar o seu modelo de dados)</h4>

<h3>Backend - Diferencial (Isso dará destaque para a vaga)</h3>

Diferencial 1 Configurar Docker no Projeto para facilitar o Deploy da equipe de DevOps;
Diferencial 2 Configurar um sistema de alerta se houver algum falha durante a sincronização dos artigos;
Diferencial 3 Descrever a documentação da API utilizando o conceito de Open API 3.0;
Diferencial 4 Escrever Unit Tests para os endpoints da API;

