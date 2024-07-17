Cypress.Commands.add('loginCredential', function(){
    cy.get('[data-test="username"]').type("standard_user").should("have.value", "standard_user")
    cy.get('[data-test="password"]').type("secret_sauce").should("have.value", "secret_sauce")
    cy.get('[data-test="login-button"]').click()
       
})