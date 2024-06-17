describe("View Agent Call", () => {
  beforeEach(() => {
    cy.visit(Cypress.env("url"));
    cy.get('input[name="email"]').clear().type("a01753729@tec.mx");
    cy.get('input[name="password"]').clear().type("12345");
    cy.get(".btn.btn-custom.w-100").click();
    cy.get("a.nav-link").contains("Call").click();
  });

  it("should login successfully and redirect based on user type AGENTE", () => {
    cy.url().should("include", "/agent/call");
  });

  context("Verify call elements are present and visible", () => {
    it("should display the Name input and its container", () => {
      cy.contains("p", "Name:").should("exist").and("be.visible");
      cy.get("input.name").should("exist").and("be.visible");
    });

    it("should display the Phone input and its container", () => {
      cy.contains("p", "Phone:").should("exist").and("be.visible");
      cy.get("input.phone").should("exist").and("be.visible");
    });

    it("should display the Location inputs and their container", () => {
      cy.contains("p.whiteBackground2", "Location:")
        .should("exist")
        .and("be.visible");
      cy.get('input.location[placeholder="latitud"]')
        .should("exist")
        .and("be.visible");
      cy.get('input.location[placeholder="longitud"]')
        .should("exist")
        .and("be.visible");
    });

    it("should display the map container", () => {
      cy.get("div#map").should("exist").and("be.visible");
    });

    it("should display the Insurance information and Policies elements", () => {
      cy.contains("p", "Insurance information:")
        .should("exist")
        .and("be.visible");
      cy.contains("p", "Policies:").should("exist").and("be.visible");
      cy.get("select.selectPolicy").should("exist").and("be.visible");
    });
  });

  context("Verify sentiment elements are present and visible", () => {
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
    it("should display the Call Supervisor button", () => {
      cy.get("button.supervisorAgentCallButton")
        .contains("Call Supervisor")
        .should("exist")
        .and("be.visible");
    });
  });

  context(
    "Verify icons and buttons are present and visible for Connect",
    () => {
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
        cy.get('div[data-bs-toggle="modal"] i')
          .should("exist")
          .and("be.visible");
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
    }
  );
  context("Verify service selection buttons are present and visible", () => {
    it("should display the Ambulance selection buttons", () => {
      cy.contains("p", "Ambulance:").should("exist").and("be.visible");
      cy.get("button.yesButton")
        .contains("Yes")
        .should("exist")
        .and("be.visible");
      cy.get("button.noButton")
        .contains("No")
        .should("exist")
        .and("be.visible");
    });

    it("should display the Crane selection buttons", () => {
      cy.contains("p", "Crane:").should("exist").and("be.visible");
      cy.get("button.yesButton")
        .contains("Yes")
        .should("exist")
        .and("be.visible");
      cy.get("button.noButton")
        .contains("No")
        .should("exist")
        .and("be.visible");
    });

    it("should display the Adjuster selection buttons", () => {
      cy.contains("p", "Adjuster:").should("exist").and("be.visible");
      cy.get("button.yesButton")
        .contains("Yes")
        .should("exist")
        .and("be.visible");
      cy.get("button.noButton")
        .contains("No")
        .should("exist")
        .and("be.visible");
    });
  });
  context("Verify Transcript section is present and visible", () => {
    it("should display the Transcript container", () => {
      cy.get("div.whiteBackgroundTranscript").should("exist").and("be.visible");
      cy.contains("p", "Transcript:").should("exist").and("be.visible");
    });
  });
});
