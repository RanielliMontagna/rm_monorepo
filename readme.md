# Projeto base para criação de um design system utilizando monorepo em react

## Ferramentas e tecnologias

Para criação do projeto é necessária a utilização das seguintes ferramentas e tecnologias:

- [Lerna](https://lerna.js.org/): É um sistema de compilação moderno e rápido para gerenciar e publicar vários pacotes JavaScript/TypeScript do mesmo repositório.
- [Jest](https://jestjs.io/pt-BR/): É um poderoso Framework de Testes em JavaScript com um foco na simplicidade.
- [Storybook](https://storybook.js.org/): É uma ferramenta de código aberto para criar componentes de interface do usuário e páginas isoladamente. Ele simplifica o desenvolvimento, o teste e a documentação da interface do usuário.
- [Typescript](https://www.typescriptlang.org/): Linguagem fortemente tipada baseada em JavaScript.

<br />

## Como rodar o projeto

### Instalação

- Clonar o projeto: `git@github.com:RanielliMontagna/rm_monorepo.git`
- Instalar as dependências: `yarn install`
- Indexar projeto: `npx lerna bootstrap`
- Rodar build do projeto: `yarn run build`

<br/>

### Execução

Para rodar o projeto utilizamos o **Storybook**, com o seguinte comando:

```
yarn dev
```

Ele irá executar o script `start-storybook -p 5555` que esta criado no package.json e o projeto irá iniciar.

<br/>

### Publicação

Para publicar o projeto utilizamos o **Lerna**, com os seguintes comandos:

- Para ver quais pacotes foram alterados: `npx lerna changed`
- Enviar a versão somente para o github: `npx lerna version`
- Lançar nossos pacotes para o npm: `npx lerna publish`

<br/>

### Feito com ❤ by Ranielli Montagna
