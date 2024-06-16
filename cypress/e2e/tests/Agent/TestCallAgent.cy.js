describe("Agent Call Page Functionality and UI Verification", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.get('input[name="email"]').clear().type("correo@example.com");
    cy.get('input[name="password"]').clear().type("12345");
    cy.get(".btn.btn-custom.w-100").click();
    cy.get("a.nav-link").contains("Call").click();
  });

  it("should log in successfully and navigate to the agent call page", () => {
    cy.url().should("include", "/agent/call");
  });

  context("Verify presence and functionality of call input fields", () => {
    it("should display the Name input field and allow typing", () => {
      cy.contains("p", "Name:").should("exist").and("be.visible");
      cy.get("input.name").should("exist").and("be.visible").type("John Doe");
      cy.get("input.name").should("have.value", "John Doe");
    });

    it("should display the Phone input field and allow typing", () => {
      cy.contains("p", "Phone:").should("exist").and("be.visible");
      cy.get("input.phone")
        .should("exist")
        .and("be.visible")
        .type("1234567890");
      cy.get("input.phone").should("have.value", "1234567890");
    });

    it("should display the Location input fields and allow typing", () => {
      cy.contains("p.whiteBackground2", "Location:")
        .should("exist")
        .and("be.visible");
      cy.get('input.location[placeholder="latitud"]')
        .should("exist")
        .and("be.visible")
        .type("40.7128");
      cy.get('input.location[placeholder="latitud"]').should(
        "have.value",
        "40.7128"
      );
      cy.get('input.location[placeholder="longitud"]')
        .should("exist")
        .and("be.visible")
        .type("-74.0060");
      cy.get('input.location[placeholder="longitud"]').should(
        "have.value",
        "-74.0060"
      );
    });

    it("should display the map container", () => {
      cy.get("div#map").should("exist").and("be.visible");
    });

    it("should display insurance information and policy elements", () => {
      cy.contains("p", "Insurance information:")
        .should("exist")
        .and("be.visible");
      cy.contains("p", "Policies:").should("exist").and("be.visible");
      cy.get("select.selectPolicy").should("exist").and("be.visible");
    });
  });

  context("Verify presence and functionality of sentiment elements", () => {
    it("should display the Sentiment label", () => {
      cy.contains("p", "Sentiment:").should("exist").and("be.visible");
    });

    it("should display the Positive Sentiment image", () => {
      cy.get('img.sentimentImage[alt="Positive Sentiment"]')
        .should("exist")
        .and("be.visible");
    });

    it("should display the Neutral Sentiment image", () => {
      cy.get('img.sentimentImage[alt="Neutral Sentiment"]')
        .should("exist")
        .and("be.visible");
    });

    it("should display the Negative Sentiment image", () => {
      cy.get('img.sentimentImage[alt="Negative Sentiment"]')
        .should("exist")
        .and("be.visible");
    });

    it("should display and allow clicking the Call Supervisor button", () => {
      cy.get("button.supervisorAgentCallButton")
        .contains("Call Supervisor")
        .should("exist")
        .and("be.visible")
        .click();
    });
  });

  context("Verify presence and visibility of connect icons and buttons", () => {
    it("should display the telephone icon", () => {
      cy.get("i.bi-telephone-fill").should("exist").and("be.visible");
    });

    it("should display the chatbot icon", () => {
      cy.get("i.chatbot-icon").should("exist").and("be.visible");
    });

    it("should display icons within buttons of type button", () => {
      cy.get('button[type="button"] i').should("exist").and("be.visible");
    });

    it("should display icons within divs with data-bs-toggle attribute", () => {
      cy.get('div[data-bs-toggle="modal"] i').should("exist").and("be.visible");
    });

    it("should display icons within divs targeting modalConnectCpp", () => {
      cy.get('div[data-bs-target="#modalConnectCpp"] i')
        .should("exist")
        .and("be.visible");
    });

    it("should display icons within chatbot button", () => {
      cy.get("button.chatbot-button i").should("exist").and("be.visible");
    });

    it("should display icons within chatbot button container", () => {
      cy.get("div.chatbot-button-container i")
        .should("exist")
        .and("be.visible");
    });
  });

  context(
    "Verify presence and functionality of service selection buttons",
    () => {
      it("should display and allow clicking Ambulance selection buttons", () => {
        cy.contains("p", "Ambulance:").should("exist").and("be.visible");
        cy.get("button.yesButton")
          .contains("Yes")
          .should("exist")
          .and("be.visible")
          .click();
        cy.get("button.noButton")
          .contains("No")
          .should("exist")
          .and("be.visible")
          .click();
      });

      it("should display and allow clicking Crane selection buttons", () => {
        cy.contains("p", "Crane:").should("exist").and("be.visible");
        cy.get("button.yesButton")
          .contains("Yes")
          .should("exist")
          .and("be.visible")
          .click();
        cy.get("button.noButton")
          .contains("No")
          .should("exist")
          .and("be.visible")
          .click();
      });

      it("should display and allow clicking Adjuster selection buttons", () => {
        cy.contains("p", "Adjuster:").should("exist").and("be.visible");
        cy.get("button.yesButton")
          .contains("Yes")
          .should("exist")
          .and("be.visible")
          .click();
        cy.get("button.noButton")
          .contains("No")
          .should("exist")
          .and("be.visible")
          .click();
      });
    }
  );

  context("Verify presence and visibility of Transcript section", () => {
    it("should display the Transcript container and label", () => {
      cy.get("div.whiteBackgroundTranscript").should("exist").and("be.visible");
      cy.contains("p", "Transcript:").should("exist").and("be.visible");
    });
  });
});
