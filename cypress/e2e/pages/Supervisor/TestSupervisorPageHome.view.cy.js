describe("View supervisor", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.get('input[name="email"]').clear().type("eduardoramu@supervisor.com");
    cy.get('input[name="password"]').clear().type("12345");
    cy.get(".btn.btn-custom.w-100").click();
  });

  it("should login successfully and redirect based on user type SUPERVISOR", () => {
    cy.url().should("include", "/supervisor/home");
  });

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
  
  it("should display the transcript message", () => {
    // Verifica que el contenedor con la clase "containerServiceStatus" esté visible
    cy.get('.containerServiceStatus').should('be.visible');
  }); 
});
