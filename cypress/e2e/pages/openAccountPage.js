/// <reference types="cypress" />

import OpenAccountElements from "../elements/openAccountElements";

const openAccountElements = new OpenAccountElements();

//const url = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager'

class OpenAccountPage {

    visitPage() {
        cy.log('estou aqui3')
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        // cy.visit(url)
        // cy.wait(2000)
    }

    clickCustomer() {
        cy.get(openAccountElements.btnCustomer()).click();
    }

    selectCustomer(customerName) {
        cy.get(openAccountElements.selectCustomer()).select(customerName);
    }

    selectCurrency(currency) {
        cy.get(openAccountElements.selectCurrency()).select(currency);
    }

    clickProcess() {
        cy.get(openAccountElements.btnProcess()).click();
    }

} export default OpenAccountPage