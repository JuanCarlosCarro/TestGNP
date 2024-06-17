describe("View Agent Home", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.get('input[name="email"]').clear().type("a01753729@tec.mx");
    cy.get('input[name="password"]').clear().type("12345");
    cy.get(".btn.btn-custom.w-100").click();
  });

  it("should login successfully and redirect based on user type AGENTE", () => {
    cy.url().should("include", "/agent/home");
  });

  it("should display buttons My Profile, Calls, and Home", () => {
    // Asegúrate de que los elementos existan en el DOM
    cy.get("a.nav-link").contains("My Profile").should("exist");
    cy.get("a.nav-link").contains("Call").should("exist");
    cy.get("a.nav-link").contains("Home").should("exist");

    // Asegúrate de que los elementos sean visibles
    cy.get("a.nav-link").contains("My Profile").should("be.visible");
    cy.get("a.nav-link").contains("Call").should("be.visible");
    cy.get("a.nav-link").contains("Home").should("be.visible");
  });
  it("should display Text ATTENDED CASES ", () => {
    cy.contains("h1", "ATTENDED CASES").should("be.visible");
  });
  it("should display the container for call metrics and its rows", () => {
    cy.get("div.contenedorCasosAtenndidoHomeAgente").should("be.visible");
  });
  it("should display Text Beneficiary, Adjuster, Ambulance and Crane", () => {
    cy.contains("th", "Crane").should("be.visible");
    cy.contains("th", "Beneficiary").should("be.visible");
    cy.contains("th", "Adjuster").should("be.visible");
    cy.contains("th", "Ambulance").should("be.visible");
  });
context("Verify icons in table rows", () => {
    it("should display the correct icons in the table row", () => {
      // Verifica que la tabla exista en el DOM y sea visible
      cy.get("tbody.table-light").should("exist").and("be.visible");

      // Verifica que el ícono de usuario esté presente y visible en cualquier lugar dentro del tbody
      cy.get("tbody.table-light i.bx.bxs-user.userHomeAgente.bx-cssSize")
        .should("exist")
        .and("be.visible");

      // Verifica que el ícono de ambulancia esté presente y visible en cualquier lugar dentro del tbody
      cy.get("tbody.table-light i.bx.bxs-ambulance.userHomeAgente.bx-cssSize")
        .should("exist")
        .and("be.visible");

      // Verifica que el ícono de usuario (repetido) esté presente y visible en cualquier lugar dentro del tbody
      cy.get("tbody.table-light i.bx.bxs-user.userHomeAgente.bx-cssSize")
        .should("exist")
        .and("be.visible");
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

