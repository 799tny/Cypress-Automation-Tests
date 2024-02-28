describe("Linkedin", () => {
  it(`Wrong credentials`, () => {
    cy.visit(`www.linkedin.com`);
    cy.get('[action-type="ACCEPT"]').click();
    cy.get(".nav__button-secondary").click();
    cy.get("#username").click().type("dinatanosalexandru@gmail.com");
    cy.get("#password").click().type("1231232121");
    cy.get(".btn__primary--large").click();
    cy.get("#error-for-password").should("exist");
  });
});
