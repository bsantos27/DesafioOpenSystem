/// <reference types="cypress" />

import TransactionsElements from "../elements/transactiosElements";

const transactionsElements = new TransactionsElements();

class TransactionsPage {

    addDeposit() {
        cy.get(transactionsElements.btnDeposit()).click();
    }

    fillDeposit(deposito) {
        cy.get(transactionsElements.typeDeposit()).type(deposito);
    }

    clickDeposit() {
        cy.get(transactionsElements.btnAddDeposit()).click();
    }

    validMsnDeposit(mensagemSucessDeposito) {
        cy.get(transactionsElements.msnSucessoDeposit()).should('be.visible').and('contain.text', mensagemSucessDeposito);
    }

    addWithdrawn() {
        cy.get(transactionsElements.btnWithdrawn()).click();
    }

    fillWithdrawn(saque) {
        cy.get(transactionsElements.typeWithdrawn()).type(saque);
    }

    clickWithdrawn() {
        cy.get(transactionsElements.btnAddWithdrawn()).click();
    }

    validMsnWithdrawnt(mensagemSucessSaque) {
        cy.get(transactionsElements.msnSucessoWithdrawn()).should('be.visible').and('contain.text', mensagemSucessSaque);
    }

} export default TransactionsPage