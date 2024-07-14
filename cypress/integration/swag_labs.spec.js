describe("Sistema de venda Swag Labs", () => {
    before('Acesso a pagina da aplicacao', () => {
        cy.visit("https://www.saucedemo.com/")
    })
    it("Validação do titulo da página", () => {
        cy.title().should("be.equal", "Swag Labs");
    });

    it("Login da pagina", () => {
        cy.loginCredential()
    })
})