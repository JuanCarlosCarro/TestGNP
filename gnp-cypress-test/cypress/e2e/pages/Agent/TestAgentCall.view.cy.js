describe("View Agent Call", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("correo@example.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("Call").click();
    });
  
    it("should login successfully and redirect based on user type AGENTE", () => {
      cy.url().should("include", "/agent/call");
    });
    
  
    context("Verify icons and buttons are present and visible for Connect", () => {
        it("should display the telephone icon", () => {
          cy.get('i.bi-telephone-fill').should("exist").and("be.visible");
        });
    
        it("should display the chatbot icon", () => {
          cy.get('i.chatbot-icon').should("exist").and("be.visible");
        });
    
        it("should display icons within buttons of type button", () => {
          cy.get('button[type="button"] i').should("exist").and("be.visible");
        });
    
        it("should display icons within divs with data-bs-toggle attribute", () => {
          cy.get('div[data-bs-toggle="modal"] i').should("exist").and("be.visible");
        });
    
        it("should display icons within divs targeting modalConnectCpp", () => {
          cy.get('div[data-bs-target="#modalConnectCpp"] i').should("exist").and("be.visible");
        });
    
        it("should display icons within chatbot button", () => {
          cy.get('button.chatbot-button i').should("exist").and("be.visible");
        });
    
        it("should display icons within chatbot button container", () => {
          cy.get('div.chatbot-button-container i').should("exist").and("be.visible");
        });
      });
  });
  