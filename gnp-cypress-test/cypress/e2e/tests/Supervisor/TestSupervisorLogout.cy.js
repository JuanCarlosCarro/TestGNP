describe("Logout supervisor from 'My Profile' page", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("adolfo1@supervisor.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("My Profile").click();
    });
  
    context("Verify logout functionality", () => {
      it("should verify My Profile page and logout", () => {
        // Verifica que la URL sea la de My Profile
        cy.url().should("include", "/supervisor/profile");
  
        // Realiza el logout
        cy.get("button.btn.btn-custom").contains("Logout").click();
  
        // Verifica que la URL después del logout sea la esperada (ajusta según tu configuración)
        cy.url().should("eq", Cypress.env("url"));
      });
    });
  });
  