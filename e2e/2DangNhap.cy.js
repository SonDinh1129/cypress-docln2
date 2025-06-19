it ("Dang Nhap Test", function(){
  cy.fixture('tempEmailAndAcc.json').then((data) => {
    const acc = data.acc

    cy.visit('https://docln.sbs/login')

    cy.get('#name').type('jowiqjdock')
    cy.get('#password').type('DinhSon112233@')
    
    
    cy.pause()
    cy.get('.btn-primary').click({force: true})
    cy.url().should('eq', 'https://docln.sbs/');
  })  
    
})
