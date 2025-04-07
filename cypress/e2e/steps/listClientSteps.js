/// <reference types="cypress" />

import ListClientPage from "../pages/listClientPage"

const listClientPage = new ListClientPage();

Given(/^clico no botao customer$/, () => {
    listClientPage.clickCustomer();
});

Then('devo ver a seguinte lista de clientes:', (dataTable) => {
    const expectedClientes = dataTable.rawTable.slice(1).map(row => row[0]);
    listClientPage.validarListaClientes(expectedClientes);
});




