/// <reference types="cypress" />

import RegisterElements from "../elements/registerElements"
import { typeIfNotEmpty } from './function'

const registerElements = new RegisterElements();

const url = 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager'

class RegisterPage {

    visitPage() {     
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/manager');
        cy.wait(2000)
    }

    addUser() {
        cy.get(registerElements.btnAddCustomer()).click();
    }

    fillNameAndLastNameandCode(name, lastName, code) {
        typeIfNotEmpty(registerElements.inputFirstName(), name);
        typeIfNotEmpty(registerElements.inputLastName(), lastName);
        typeIfNotEmpty(registerElements.inputCode(), code);
    }

    submitCustomer() {
        cy.get(registerElements.btnAdd()).click();
    }

    validateAlertMessage(message) {
        cy.on('window:alert', (str) => {
            expect(str).to.contain(message);
        });
    }

} export default RegisterPage