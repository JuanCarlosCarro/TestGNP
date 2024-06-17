describe("Login Agente", () => {
  const LocalUrl = Cypress.env("apiUrl");
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
  it("should show error message on invalid login", () => {
    // PRUEBA DE API
    cy.intercept("POST", LocalUrl, {
      statusCode: 401,
      body: { message: "Incorrect username or password." },
    });

    cy.get('input[name="email"]').type("invalid@example.com");
    cy.get('input[name="password"]').type("wrongpassword");
    cy.get("button").contains("Login").click();

    //PRUEBA DE ALERTA
    cy.get(".alert-danger")
      .should("be.visible")
      .and("contain", "Incorrect username or password.");
  });
  it("should login successfully and redirect based on user type AGENTE", () => {
    // Mocking the API response for valid login

    cy.get('input[name="email"]').type("correo@example.com");
    cy.get('input[name="password"]').type("12345");
    cy.get('.btn.btn-custom.w-100').click();
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");

      // Verify redirection (optional, adapt URL based on supervisor redirection)
      cy.url().should("include", "agent/home"); // Change URL based on supervisor redirection
    });

  });
});


