export  function typeIfNotEmpty(selector, value) {
    if (value) {
        cy.get(selector).type(value);
    } else {
        cy.get(selector);
    }
}