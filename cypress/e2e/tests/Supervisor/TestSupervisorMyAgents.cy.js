describe("Funcionality My Agents", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("adolfo1@supervisor.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("My Profile").click();
      cy.get("button").contains("My Agents").click();
    });
  
    it("should display the agents", () => {
      // Asegúrate de que la caja de error exista en el DOM y sea visible
      cy.get("div.not-found-container").should("exist").and("be.visible");
    });
});
  