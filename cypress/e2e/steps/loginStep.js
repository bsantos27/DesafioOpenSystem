/// <reference types="cypress" />
import LoginPage from "../pages/loginPage";
const loginPage = new LoginPage

Given(/^eu acesso a pagina home da aplicação$/, () => {
    loginPage.acessarHome()
});

When(/^eu clico no botao Customer Login$/, () => {
    loginPage.acessoLogin()
});

When(/^eu seleciono o cliente "([^"]*)"$/, (cliente) => {
    console.log(cliente);
    loginPage.submitLogin(cliente);  
});

Then(/^valido que foi logado com sucesso "([^"]*)"$/, (mensagem) => {
    console.log(mensagem);
    cy.contains(mensagem);
});



