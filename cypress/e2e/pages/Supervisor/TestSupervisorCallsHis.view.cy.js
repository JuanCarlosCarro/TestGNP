describe("Views for Calls History Page", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("eduardoramu@supervisor.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("Calls History").click();
    });
  
    context("Check view elements on Calls History page", () => {
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
          
      it("should display the Agents section", () => {
        // Asegúrate de que la sección de agentes exista en el DOM y sea visible
        cy.get("div.backgroundBlueAgents").should("exist").and("be.visible");
      });
  
      it("should display the search input field", () => {
        // Asegúrate de que el campo de búsqueda exista en el DOM y sea visible
        cy.get('input.inputSearch').should('exist').and('be.visible');
      });
  
      it("should display the date input field", () => {
        // Asegúrate de que el campo de fecha exista en el DOM y sea visible
        cy.get('input.inputDate').should('exist').and('be.visible');
      });
  
      it("should display the search and all buttons", () => {
        // Asegúrate de que los botones de búsqueda y "All" existan en el DOM y sean visibles
        cy.get('button.buttonSearch').contains('Search').should('exist').and('be.visible');
        cy.get('button.buttonSearch').contains('All').should('exist').and('be.visible');
      });
    });
  });
  