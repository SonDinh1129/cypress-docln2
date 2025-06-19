it ("Sang Tac Noi Bat Test", function(){

    cy.visit('https://docln.sbs')
    cy.get('#sidenav-icon').click()
    cy.contains('a.nav-menu_item', 'Sáng tác').click();
    
    cy.url().should('include', '/sang-tac');
    })