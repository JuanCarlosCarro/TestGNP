describe("View supervisor", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.get('input[name="email"]').clear().type("adolfo1@supervisor.com");
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
  it("should display an image ", () => {
    // Asegúrate de que el contenedor con la clase "containerAgentCallInformation" esté presente
    cy.get(".containerAgentCallInformation").should("be.visible");

    // Verifica que el mensaje de error específico esté presente
    cy.get(".containerAgentCallInformation")
      .contains("Request failed with status code 404")
      .should("be.visible");
  });
  it("should display the container for call metrics and its rows", () => {
    // Verifica que el contenedor con la clase "containerCallMetrics" esté visible
    cy.get(".containerCallMetrics").should("be.visible");

    // Verifica que cada fila dentro del contenedor esté visible
    cy.get(".containerCallMetrics .row").each(($row) => {
      cy.wrap($row).should("be.visible");
    });
  });

  it("should display sentiment percentages and images", () => {
    // Verifica que el contenedor con la clase "containerCallMetrics" esté visible
    cy.get(".containerCallMetrics").should("be.visible");

    // Verifica el título "Average Sentiment"
    cy.get(".containerCallMetrics .avgSentiment").should(
      "contain",
      "Average Sentiment"
    );

    // Verifica que los porcentajes y las imágenes estén presentes y visibles
    // Primer bloque (0% y cara roja)
    cy.get(".containerCallMetrics .row")
      .eq(1)
      .within(() => {
        cy.get(".col-md-4")
          .eq(0)
          .within(() => {
            cy.get(".sentimentPercentage").should("be.visible");
            cy.get(".sentimentImage")
              .should("have.attr", "src", "/src/assets/images/CaraRoja.png")
              .and("be.visible");
          });

        // Segundo bloque (100% y cara amarilla)
        cy.get(".col-md-4")
          .eq(1)
          .within(() => {
            cy.get(".sentimentPercentage").should("be.visible");
            cy.get(".sentimentImage")
              .should("have.attr", "src", "/src/assets/images/CaraAmarilla.png")
              .and("be.visible");
          });

        // Tercer bloque (0% y cara verde)
        cy.get(".col-md-4")
          .eq(2)
          .within(() => {
            cy.get(".sentimentPercentage").should("be.visible");
            cy.get(".sentimentImage")
              .should("have.attr", "src", "/src/assets/images/CaraVerde.png")
              .and("be.visible");
          });
      });
  });
  it("should display the CAR CRANES service title, number, and image correctly", () => {
    // Verifica que el contenedor con la clase "col-lg-6 justify-content-center" esté visible
    cy.get(".col-lg-6.justify-content-center").should("be.visible");

    // Verifica el título "Car Cranes"
    cy.get(".col-lg-6.justify-content-center .serviceTitle").should(
      "contain",
      "Car Cranes"
    );

    // Verifica el número de servicio
    cy.get(".col-lg-6.justify-content-center .serviceNumber").should(
      "be.visible"
    );

    // Verifica que la imagen del servicio esté presente y visible
    cy.get(".col-lg-6.justify-content-center .serviceImage")
      .should("have.attr", "src", "/src/assets/images/Grua.png")
      .and("have.attr", "alt", "Service Status")
      .and("be.visible");
  });
  it("should display the AMBULANCE service title, number, and image correctly", () => {
    // Verifica que el contenedor con la clase "col-lg-6 justify-content-center" esté visible
    cy.get(".col-lg-6.justify-content-center").should("be.visible");

    // Verifica el título "Ambulance"
    cy.get(".col-lg-6.justify-content-center .serviceTitle").should(
      "contain",
      "Ambulance"
    );

    // Verifica el número de servicio
    cy.get(".col-lg-6.justify-content-center .serviceNumber").should(
      "be.visible"
    );

    // Verifica que la imagen del servicio esté presente y visible
    cy.get('.serviceImage[src="/src/assets/images/Ambulancia.png"]')
      .should("have.attr", "alt", "Service Status")
      .and("be.visible");
  });
  it("should display the average call time title and chart", () => {
    // Verifica que el contenedor con la clase "containerCallMetrics" esté visible
    cy.get('.containerCallMetrics').should('be.visible');
  
    // Verifica el título "Avg Call Time"
    cy.get('.containerCallMetrics .avgSentiment').should('contain', 'Avg Call Time');
  
    // Verifica que el canvas del gráfico esté presente y visible
    cy.get('.containerCallMetrics .chart-container canvas')
      .should('have.attr', 'role', 'img')
      .and('be.visible');
  });
  it("should display the transcript message", () => {
    // Verifica que el contenedor con la clase "containerServiceStatus" esté visible
    cy.get('.containerServiceStatus').should('be.visible');
  }); 
});
