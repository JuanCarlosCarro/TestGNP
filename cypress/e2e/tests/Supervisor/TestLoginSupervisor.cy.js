describe("Login Supervisor", () => {
  const LocalUrl = Cypress.env("apiUrl");
  const apiVerifyToken = `${Cypress.env("apiUrl")}/tools/verifyToken`;
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
  it("should login successfully and redirect based on user type SUPERVISOR", () => {
    // Mocking the API response for valid login (supervisor)
    cy.intercept("POST", LocalUrl, {
      statusCode: 200,
      body: {
        data: {
          tipo: "supervisor", // Change to "supervisor" for supervisor user
          idSupervisor: "4bc5909f-0193-48e2-a78f-dc68fc0c5c65",
          token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiYzU5MDlmLTAxOTMtNDhlMi1hNzhmLWRjNjhmYzBjNWM2NSIsInRpcG8iOiJzdXBlcnZpc29yIiwiaWF0IjoxNzE2OTQxMzIzLCJleHAiOjE3MTY5NzM3MjN9.GXx79zqOoD4sT78a0TIYnJNamL8wI8juKhtyLkt4gxY",
        },
      },
    });

    cy.intercept(
      "GET",
      `${apiVerifyToken}/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjRiYzU5MDlmLTAxOTMtNDhlMi1hNzhmLWRjNjhmYzBjNWM2NSIsInRpcG8iOiJzdXBlcnZpc29yIiwiaWF0IjoxNzE2OTQxMzIzLCJleHAiOjE3MTY5NzM3MjN9.GXx79zqOoD4sT78a0TIYnJNamL8wI8juKhtyLkt4gxY`,
      {
        statusCode: 200,
        body: { isValid: true },
      }
    );

    cy.get('input[name="email"]').clear().type("eduardoramu@supervisor.com");
    cy.get('input[name="password"]').type("12345");
    cy.get("button").contains("Login").click();

    // Check local storage for token and user type
    cy.window().then((win) => {
      const token = win.localStorage.getItem("token");

      // Verify redirection (optional, adapt URL based on supervisor redirection)
      cy.url().should("include", "/supervisor/home"); // Change URL based on supervisor redirection
    });
  });
});
