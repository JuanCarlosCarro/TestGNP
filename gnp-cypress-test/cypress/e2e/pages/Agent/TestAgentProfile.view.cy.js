describe("View Agent My Profile", () => {
    beforeEach(() => {
      cy.visit(Cypress.env("url"));
      cy.get('input[name="email"]').clear().type("correo@example.com");
      cy.get('input[name="password"]').clear().type("12345");
      cy.get(".btn.btn-custom.w-100").click();
      cy.get("a.nav-link").contains("My Profile").click();
    });
  
    it("should login successfully and redirect based on user type AGENTE", () => {
      cy.url().should("include", "/agent/profile");
    });
  
    context("Verify profile elements are present and visible", () => {
      it("should display the agent's name container", () => {
        cy.get('h1.mt-3').should("exist").and("be.visible");
      });
  
      it("should display the User Info heading", () => {
        cy.contains('h2', 'User Info').should("exist").and("be.visible");
      });
  
      it("should display the E-mail label", () => {
        cy.contains('strong', 'E-mail:').should("exist").and("be.visible");
      });
  
      it("should display the Birthdate label", () => {
        cy.contains('strong', 'Birthdate:').should("exist").and("be.visible");
      });
  
      it("should display the Logout button", () => {
        cy.contains('button', 'Logout').should("exist").and("be.visible");
      });
  
      it("should display the first paragraph inside div with id=root", () => {
        cy.get('div[id="root"] p').eq(0).should("exist").and("be.visible");
      });
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
  