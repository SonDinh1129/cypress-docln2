it("Dang Ky Test", function () {
  cy.visit('https://docln.sbs/register')

  const randomEmail = 'Son' + Math.floor(Math.random() * 5000) + '@gmail.com'
  const randomAcc = 'Son' + Math.floor(Math.random() * 5000)
  // Luu vao fixtures
  cy.writeFile('cypress/fixtures/tempEmailAndAcc.json', { email: randomEmail , acc: randomAcc})

  cy.get('#name').type(randomAcc)
  cy.get('#email').type(randomEmail)
  cy.get('#password').type('DinhSon112233@')
  cy.get('#password-confirm').type('DinhSon112233@')

  cy.pause()

  cy.get('.btn').click()
})
