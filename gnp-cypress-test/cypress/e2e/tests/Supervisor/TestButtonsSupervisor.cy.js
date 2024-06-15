describe("Test buttons in Header", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("adolfo1@supervisor.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.url().should("include", "/supervisor/home");
    });
  
    context("Check navigation buttons", () => {
      it("should display buttons My Profile, Calls History, and Home", () => {
        // Asegúrate de que los elementos existan en el DOM
        cy.get("a.nav-link").contains("My Profile").should("exist");
        cy.get("a.nav-link").contains("Calls History").should("exist");
        cy.get("a.nav-link").contains("Home").should("exist");
  
        // Asegúrate de que los elementos sean visibles
        cy.get("a.nav-link").contains("My Profile").should("be.visible");
        cy.get("a.nav-link").contains("Calls History").should("be.visible");
        cy.get("a.nav-link").contains("Home").should("be.visible");
      });
    });
  
    context("Navigate using buttons", () => {
      it("should navigate to My Profile when the button is clicked", () => {
        cy.get("a.nav-link").contains("My Profile").click();
        cy.url().should("include", "/supervisor/profile");
      });
      it("should navigate to Calls History when the button is clicked", () => {
        cy.get("a.nav-link").contains("Calls History").click();
        cy.url().should("include", "/supervisor/history");
      });
  
      it("should navigate to Home when the button is clicked", () => {
        cy.get("a.nav-link").contains("Home").click();
        cy.url().should("include", "/supervisor/home");
      });
    });
  });
  