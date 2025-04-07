/// <reference types="cypress" />

import OpenAccountPage from "../pages/openAccountPage";
const openAccountPage = new OpenAccountPage();
let mensagemDoAlerta = '';

Given(/^que estamos na pagina de abrir conta$/, () => {
    openAccountPage.visitPage();
});

Then(/^e clico no botao abrir conta$/, () => {
    openAccountPage.clickCustomer();
});

And(/^e seleciono o nome do cliente$/, (dataTable) => {
    const customer = dataTable.rows()[0][0];  
    cy.get('select#userSelect').select(customer);
});

And(/^e seleciono o tipo de moeda$/, (dataTable) => {
    const currency = dataTable.rows()[0][0];
    cy.get('select#currency').select(currency);
});


When('clico no botao processar', () => {
  cy.window().then((win) => {
    cy.stub(win, 'alert').callsFake((msg) => {
      mensagemDoAlerta = msg; // Salva o alerta na variável
    });
  });
  cy.get('button[type="submit"]').click();
});

Then('valido a abertura de conta com a mensagem {string}', (mensagemEsperada) => {
  cy.on('window:alert', (alertText) => {
    expect(alertText).to.include(mensagemEsperada);
  });
});;

