it ("5 Kiem tra Ke sach khi ngung theo doi truyen Test", function(){

    cy.visit('https://docln.sbs/login')

    cy.get('#name').type('baodinh112903')
    cy.get('#password').type('29112003')
    cy.pause()
    cy.get('.btn-primary').click({force: true})
    cy.url().should('eq', 'https://docln.sbs/');
    
    cy.wait(2000)
    
    cy.get(".nav-user_icon").click({ delay: 100 })
    cy.contains('Kệ sách').click({ delay: 100 })  
    cy.url().should('include', '/ke-sach')
    cy.contains('.series-name a', 'Người giấy').should('not.exist');
})