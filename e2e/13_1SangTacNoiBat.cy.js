it ("Sang Tac Noi Bat Test", function(){

    cy.visit('https://docln.sbs')
    cy.get('#sidenav-icon').click()
    cy.contains('a.nav-menu_item', 'Sáng tác').click();
    
    cy.url().should('include', '/sang-tac');

    cy.get('button[data-nav="1"]').click({ force: true });

    cy.get('.popular-thumb-item a')
  .then($items => {
    const randomIndex = Math.floor(Math.random() * $items.length);
    cy.wrap($items[randomIndex]).click({ force: true });
  });

  //chỉ định truyện
    // cy.contains('.popular-thumb-item a', 'Kẹo Ngọt Thế Gian').click({ force: true });

   
})
