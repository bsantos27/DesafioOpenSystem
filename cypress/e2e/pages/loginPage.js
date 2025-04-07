/// <reference types="cypress" />

import LoginElements from "../elements/loginElements"

const loginElements = new LoginElements

class LoginPage{

    acessarHome(){
        cy.visit('/')
        cy.wait(2000)
    }

    acessoLogin(){
        cy.get(loginElements.btnCustomerLogin()).click();                
    }

    submitLogin(cliente){
        cy.get(loginElements.selectNome()).select(cliente);
        cy.get(loginElements.btnLogin()).click();
    }

    validarLogin(mensagem){
        cy.contains(loginElements.validarLogin);
    }

} export default LoginPage