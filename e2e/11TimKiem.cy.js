it("Tim Kiem test", function () {
  cy.visit('https://docln.sbs')

  cy.get('input[placeholder="Tối thiểu 2 kí tự"]')
    .filter(':visible')
    .type("monogatari")

  cy.get('button[type="submit"]')
    .filter(':visible')
    .click({ force: true })

  cy.url().should('include', '/tim-kiem')
})
