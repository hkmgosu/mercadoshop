describe("Navigation", () => {
  it("should navigate to the about page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // Find a link with an href attribute containing "/" and click it
    cy.get('a[href*="/"]').click();

    // The new url should include "/"
    cy.url().should("include", "/");

    // The new page should contain an a with "MercadoShop"
    cy.get("a").contains("MercadoShop");
  });
});
