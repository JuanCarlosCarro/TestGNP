describe("Funcionality Calls History", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("adolfo1@supervisor.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("Calls History").click();
    });
  
    it("should display the Agents", () => {
      // Asegúrate de que la caja de error exista en el DOM y sea visible
      cy.get("div.backgroundBlueAgents").should("exist").and("be.visible");  
      // Verifica el contenido del mensaje de error
    });
  
    it("should allow searching by agent name", () => {
        
      // Asegúrate de que el campo de búsqueda exista en el DOM y sea visible
      cy.get('input.inputSearch').should('exist').and('be.visible');
  
      // Escribe un valor en el campo de búsqueda
      cy.get('input.inputSearch').clear().type('Test Agent');
      
      // Aquí puedes agregar más aserciones o acciones según sea necesario
      cy.get('input.inputSearch').should('have.value', 'Test Agent');
    });
    it("should open the calendar and select a date", () => {
        // Asegúrate de que el campo de fecha exista en el DOM y sea visible
        cy.get('input.inputDate').should('exist').and('be.visible');        
      });
      it("should click search and all buttons", () => {
        // Asegúrate de que los botones de búsqueda existan en el DOM y sean visibles
        cy.get('button.buttonSearch').contains('Search').should('exist').and('be.visible');
        cy.get('button.buttonSearch').contains('All').should('exist').and('be.visible');
    
        // Haz clic en el botón de búsqueda
        cy.get('button.buttonSearch').contains('Search').click();
        // Aquí puedes agregar más aserciones o acciones según sea necesario después de hacer clic en el botón de búsqueda
    
        // Haz clic en el botón All
        cy.get('button.buttonSearch').contains('All').click();
        // Aquí puedes agregar más aserciones o acciones según sea necesario después de hacer clic en el botón All
      });
  });
  