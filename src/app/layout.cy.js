describe("<RootLayout />", () => {
  it("should render and display expected content", () => {
    // Mount the React component for the Layout
    cy.mount(<RootLayout />);

    // Validate that a link with the expected URL is present
    // *Following* the link is better suited to an E2E test
    cy.get('a[href="/"]').should("be.visible");
  });
});
