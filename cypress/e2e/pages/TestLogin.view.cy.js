describe("View Login", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
  });

  it("should display GNP and vivir es increible images ", () => {
    cy.get(
      'img[src="/src/assets/images/GNP_Seguros.svg"][alt="Logo GNP"]'
    ).should("be.visible");
    cy.get('img[src="/src/assets/images/gnpVivirIncreible.png"]').should(
      "be.visible"
    );
  });

  it("should display the login form", () => {
    cy.get("h2").contains("Login").should("be.visible");
    cy.get('input[name="email"]').should("be.visible");
    cy.get('input[name="password"]').should("be.visible");
    cy.get("button").contains("Login").should("be.disabled");
  });
  it("should enable the login button when form is valid", () => {
    cy.get('input[name="email"]').type("correo5@example.com");
    cy.get('input[name="password"]').type("12345");
    cy.get("button").contains("Login").should("not.be.disabled");
  });

  it("button should be disabled if the Email is invalid", () => {
    cy.get('input[name="email"]').type("correo5example.com");
    cy.get('input[name="password"]').type("12345");
    cy.get("button").contains("Login").should("be.disabled");
  });
  it("button should be disabled if missing password is invalid", () => {
    cy.get('input[name="email"]').type("correo5example.com");
    cy.get("button").contains("Login").should("be.disabled");
  });
  it("button should be disabled wihout information", () => {
    cy.get("button").contains("Login").should("be.disabled");
  });
});
