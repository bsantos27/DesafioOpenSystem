/// <reference types="cypress" />
import TransactionsPage from "../pages/transactiosPage"

const transactionsPage = new TransactionsPage()

When(/^faco um deposito "([^"]*)"$/, (deposito) => {
    transactionsPage.addDeposit();
    transactionsPage.fillDeposit(deposito);
    transactionsPage.clickDeposit();    
  });

Then(/^valido a mensagem do deposito "([^"]*)"$/, (mensagemSucessDeposito) => {
    transactionsPage.validMsnDeposit(mensagemSucessDeposito)  ;
});

And(/^faco um saque "([^"]*)"$/, (saque) => {
	transactionsPage.addWithdrawn();
    transactionsPage.fillWithdrawn(saque);
    transactionsPage.clickWithdrawn();
});

Then(/^valido a mensagem de saque "([^"]*)"$/, (mensagemSucessSaque) => {
    transactionsPage.validMsnDeposit(mensagemSucessSaque)  ;
});

