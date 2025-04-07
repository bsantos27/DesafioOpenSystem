
# Projeto de Testes Automatizados com Cypress e Cucumber

## Sobre

Este projeto tem como objetivo realizar um teste prático de automação utilizando **Cypress** e **Cucumber**, garantindo a qualidade e o comportamento das aplicações web de forma automatizada.

## Pré-requisitos

Antes de rodar o projeto, é necessário ter instalado:

- **Node.js** na versão `16.16.0` ou compatível
- **npm** (gerenciador de pacotes do Node)

Além disso, é obrigatório instalar as seguintes dependências:

- **Cypress** na versão `12.17.4`
- **Cypress Cucumber Preprocessor** na versão `4.3.1`

> ⚠️ **Importante:** Certifique-se de utilizar exatamente essas versões para evitar problemas de compatibilidade.

## Instalação

Siga os passos abaixo para configurar o ambiente:

```bash
# Clone o repositório
git clone https://github.com/bsantos27/DesafioOpenSystem.git

# Acesse a pasta do projeto
cd DesafioOpenSystem

# Instale as dependências
npm install

# Instale o Cypress na versão especificada
npm install cypress@12.17.4 --save-dev

# Instale o Cucumber Preprocessor para Cypress
npm install cypress-cucumber-preprocessor@4.3.1 --save-dev
```

## Como Executar os Testes

Para abrir a interface gráfica do Cypress:

```bash
npx cypress open
```

Para executar os testes diretamente no terminal (modo headless):

```bash
npx cypress run
```

> 📝 Os arquivos de teste no formato `.feature` devem ser colocados dentro da pasta `cypress/e2e`.

## Tecnologias Utilizadas

- [Cypress 12.17.4](https://docs.cypress.io/)
- [Cypress Cucumber Preprocessor 4.3.1](https://github.com/badeball/cypress-cucumber-preprocessor)
- [Node.js 16.16.0](https://nodejs.org/)

## Contato

Feito por **Bruno Santos** 👋

- [LinkedIn](https://www.linkedin.com/in/bruno-santos-ti)
- [GitHub](https://github.com/bsantos27)
