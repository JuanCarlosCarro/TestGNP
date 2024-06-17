describe("Profile Page Elements and Buttons", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("eduardoramu@supervisor.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("My Profile").click();
      cy.url().should("include", "/supervisor/profile");
    });
  
    context("Check profile elements", () => {
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
      
      it("should display user email, name, and birthdate", () => {
        // Asegúrate de que los elementos existan en el DOM y sean visibles
        cy.get("h1.mt-3").should("exist").and("be.visible"); // Nombre del usuario
        cy.contains("E-mail:").parent().should("exist").and("be.visible");
        cy.contains("Birthdate:").parent().should("exist").and("be.visible");
      });
  
      it("should display buttons Logout and My Agents", () => {
        // Asegúrate de que los botones existan en el DOM y sean visibles
        cy.get("button").contains("Logout").should("exist").and("be.visible");
        cy.get("button").contains("My Agents").should("exist").and("be.visible");
      });
    });

  });
  