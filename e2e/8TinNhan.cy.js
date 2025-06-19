describe("Tin Nhan test khi dang nhap", () => {

  before(() => {
    cy.fixture('tempEmailAndAcc.json').then((data) => {
      const acc = data.acc;

      cy.visit('https://docln.sbs/login')
      cy.get('#name').type('sonilu29112003@gmail.com')
      cy.get('#password').type('son29112003')
    
      cy.pause()
      cy.get('.btn-primary').click({force: true})
    })
  })

  it("Tin Nhan test", () => {
    cy.visit('https://docln.sbs')

    cy.get(".nav-user_icon").click({ delay: 100 })
    cy.contains('Tin nhắn').click({ delay: 100 })  
    cy.url().should('include', '/tin-nhan')
  })

})
