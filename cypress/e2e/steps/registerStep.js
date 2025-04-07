/// <reference types="cypress" />
import RegisterPage from "../pages/registerPage";
const registerPage = new RegisterPage();
let mensagemDoAlerta = '';

Given(/^que estamos na pagina de cadastro$/, () => {
    registerPage.visitPage()
    registerPage.addUser()
});

When(/^inserimos o Nome (.*) e o sobre nome (.*) e o code (.*)$/, (name, lastName, code) => {
    registerPage.fillNameAndLastNameandCode(name, lastName, code);
});

And(/^e clico no botao adicionar$/, () => {
    registerPage.submitCustomer();
});

Then(/^valido o cadastro com a mensagem (.*)$/, (message) => {
    registerPage.validateAlertMessage(message)
});

Then('valido a abertura de conta com a mensagem {string}', (mensagemEsperada) => {
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.include(mensagemEsperada);
    });
  });;





