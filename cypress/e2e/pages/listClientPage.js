/// <reference types="cypress" />

import ListClientElements from "../elements/listClientElements"
const listClientElements = new ListClientElements();

const url = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager'

class ListClientPage {

    visitPage() {       
        cy.visit(url)
        cy.wait(2000)
    }

    clickCustomer() {
        cy.get(listClientElements.btnCustomer()).click()
    }

    validarListaClientes(listaEsperada) {

        cy.get('table tbody', { timeout: 10000 }).should('exist');

        cy.get('table tbody tr', { timeout: 10000 }).should('have.length.at.least', listaEsperada.length);

        cy.get('table tbody tr').last().within(() => {
            cy.get('td').eq(0).should('contain.text', listaEsperada[listaEsperada.length - 1]);
        });
    }

} export default ListClientPage