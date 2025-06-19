it("6 Hien thi canh bao khi theo doi truyen ma chua dang nhap", () => {

  cy.visit("https://docln.sbs");

  cy.wait(2000)
  cy.get('#sidenav-icon').click()
  cy.contains('a.nav-menu_item', 'Sáng tác').click();
  cy.get('.popular-thumb-item a')
  .then($items => {
    const randomIndex = Math.floor(Math.random() * $items.length);
    cy.wrap($items[randomIndex]).click({ force: true });
  });
   //chỉ định truyện
    // cy.contains('.popular-thumb-item a', 'ten truyen').click({ force: true });

  cy.get('#collect').click();

  cy.on("window:alert", (message) => {
    expect(message).to.equal("Cần đăng nhập để thực hiện!");
  }); 
});
