it("Quen Mat Khau Test", function () {
  cy.fixture('tempEmailAndAcc.json').then((data) => {
    const email = data.email

    cy.visit('https://docln.sbs/password/reset')
    cy.get('#email').type(email)

    cy.get('.btn').click()
  })
})
