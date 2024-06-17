describe("See CPP", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.get('input[name="email"]').clear().type("a01753729@tec.mx");
    cy.get('input[name="password"]').clear().type("12345");
    cy.get(".btn.btn-custom.w-100").click();
    cy.get("a.nav-link").contains("Call").click();
    cy.get("button.chatbot-button").click();
  });

  context("Verify Connect CPP modal elements are present and visible", () => {
    it("should open the Connect CPP modal when the chatbot button is clicked", () => {
      // Verifica que el modal de Connect CPP esté presente y visible
      cy.get("#modalConnectCpp").should("exist").and("be.visible");

      // Verifica el contenido del modal
      cy.get("#modalConnectCpp .modal-title")
        .contains("CONNECT CPP")
        .should("exist")
        .and("be.visible");
      cy.get("#modalConnectCpp .btn-close").should("exist").and("be.visible");
      cy.get("#modalConnectCpp .modal-body #ccp")
        .should("exist")
        .and("be.visible");
      cy.get("#modalConnectCpp .modal-footer .btn.btn-secondary")
        .contains("Close")
        .should("exist")
        .and("be.visible");
    });
  });
  it("should close the Connect CPP modal when the Close button in the header is clicked", () => {
    // Haz clic en el botón de cerrar en el encabezado del modal
    cy.get('button[type="button"].btn-close[data-bs-dismiss="modal"]').click();
  });

  it("should close the Connect CPP modal when the modal Close button in the footer is clicked", () => {
    cy.get('button.btn-close[data-bs-dismiss="modal"]').click();
  });
});
