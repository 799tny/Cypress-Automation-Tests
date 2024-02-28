describe(`Google.com`, () => {
  it(`Simple search works`, () => {
    cy.visit(`https://google.com`);
    cy.get("#L2AGLb > .QS5gu").click();
    cy.get("#APjFqb").type(`youtube`).type(`{enter}`);
    cy.get("#result-stats").should("exist");
  });
});
