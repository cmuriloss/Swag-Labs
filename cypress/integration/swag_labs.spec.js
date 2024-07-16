describe("Sistema de venda Swag Labs", () => {
  before("Acesso a pagina da aplicacao", () => {
    cy.visit("https://www.saucedemo.com/");
  });
  it("Validação do titulo da página", () => {
    cy.title().should("be.equal", "Swag Labs");
  });

  it("Login da pagina e selecao de um produto", () => {
    cy.loginCredential();
    cy.get('[data-test="item-4-title-link"]')
      .should("have.text", "Sauce Labs Backpack")
      .click();
    cy.get('[data-test="inventory-item-name"]').should(
      "have.text",
      "Sauce Labs Backpack"
    );
  });

  it("Add cionando produto pelo card", () => {
    cy.get('[data-test="add-to-cart"]')
      .should("have.text", "Add to cart")
      .click();
    cy.get('[data-test="shopping-cart-link"]').should("have.text", "1");
    //bug: ao solicitar o cypress para clicar no botã de retorno, a aplicação desloga
    cy.get('[data-test="back-to-products"]').click();
  });

  it("Adicao de mais produtos pela tela inicial", () => {
    cy.loginCredential();
    cy.get('[data-test="shopping-cart-link"]').should("have.text", "");
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="shopping-cart-link"]').should("have.text", "3");
    cy.get('#react-burger-menu-btn').click()
    cy.get('[data-test="logout-sidebar-link"]').click()

    
  });
  it("Validação compra completa", () => {
    cy.loginCredential();
    cy.get('[data-test="shopping-cart-link"]').should('have.text', '');
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    cy.get('[data-test="shopping-cart-link"]')
        .should("have.text", "4")
        .click();
    cy.get('[data-test="checkout"]').should("have.text", "Checkout").click();
    cy.get('[data-test="firstName"]')
      .type("Damon")
      .should("not.have.value", "")
      .should("have.value", "Damon");
    cy.get('[data-test="lastName"]')
      .type("Pope")
      .should("not.have.value", "")
      .should("have.value", "Pope");
    cy.get('[data-test="postalCode"]')
      .type("6543-987")
      .should("not.have.value", "")
      .should("have.value", "6543-987")
    cy.get('[data-test="continue"]')
        .should('have.value','Continue')
        .click()
    cy.get('[data-test="finish"]')
    .should('have.text','Finish')
    .click()
    cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!')
  });
});
