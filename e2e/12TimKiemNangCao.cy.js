it("1 Tim Kiem Nang Cao test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ", { delay: 100 })

  cy.get("[name='author']")
  .type("ramen", { delay: 100 })

//   cy.get("[name='illustrator']")
//   .type("", { delay: 100 })

  cy.get('[name="status"]')
  .select('1', { delay: 100 })

  //custom checkbox nen khong the dung .check() ma phai dung .click()
  cy.contains('label.genre_label', 'Action').click()
  cy.wait(100)
  cy.contains('label.genre_label', 'Adventure').dblclick()
  cy.wait(100)
  cy.contains('label.genre_label', 'Comedy').click()
  cy.wait(100)


  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })
})
