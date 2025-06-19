it ("1 Kiem tra ke sach trong voi tai khoan dang nhap Test", function(){

    cy.visit('https://docln.sbs/login')

    cy.get('#name').type('baodinh112903')
    cy.get('#password').type('29112003')
    cy.pause()
    cy.get('.btn-primary').click({force: true})
    cy.url().should('eq', 'https://docln.sbs/');
    
    cy.get(".nav-user_icon").click({ delay: 100 })
    cy.contains('Kệ sách').click({ delay: 100 })  
    cy.url().should('include', '/ke-sach')
    
  // Kiểm tra thông báo lỗi hiển thị
  cy.get('.col-6')
    .should('be.visible')
    .and('contain', 'Chú ý: Số chương mới tính từ ngày đánh dấu đã đọc gần nhất');
  
  cy.get('.action-link.mark-read-all.strong')
    .should('be.visible')
    .and('contain', 'Đã đọc tất cả');

  cy.get('.basic-section.has-pagination')
    .should('be.visible')
    .and('contain', 'Chưa có truyện nào');
});

it ("2 Kiem tra thong bao thanh cong khi them truyen vao Ke sach Test", function(){

    cy.visit('https://docln.sbs/login')

    cy.get('#name').type('baodinh112903')
    cy.get('#password').type('29112003')
    cy.pause()
    cy.get('.btn-primary').click({force: true})
    cy.url().should('eq', 'https://docln.sbs/');
    
    cy.wait(2000)
    cy.get('#sidenav-icon').click()
    cy.contains('a.nav-menu_item', 'Sáng tác').click();
    
    cy.url().should('include', '/sang-tac');

    cy.get('button[data-nav="1"]').click({ force: true });

    cy.get('.popular-thumb-item a')
  .then($items => {
    const randomIndex = Math.floor(Math.random() * $items.length);
    cy.wrap($items[randomIndex]).click({ force: true });
  });
    cy.get('#collect').click()

  //chỉ định truyện
    // cy.contains('.popular-thumb-item a', 'Kẹo Ngọt Thế Gian').click({ force: true });
    
    cy.get('div[role="alert"]')
    .should('be.visible')
    .and('contain.text', 'Bạn đã theo dõi truyện');
})

it ("3 Kiem tra them truyen vao Ke sach Test", function(){

    cy.visit('https://docln.sbs/login')

    cy.get('#name').type('baodinh112903')
    cy.get('#password').type('29112003')
    cy.pause()
    cy.get('.btn-primary').click({force: true})
    cy.url().should('eq', 'https://docln.sbs/');
    
    cy.wait(2000)
    cy.get('#sidenav-icon').click()
    cy.contains('a.nav-menu_item', 'Sáng tác').click();
    
    cy.url().should('include', '/sang-tac');

    cy.get('button[data-nav="1"]').click({ force: true });

    cy.get('.popular-thumb-item a')
  .then($items => {
    const randomIndex = Math.floor(Math.random() * $items.length);
    cy.wrap($items[randomIndex]).click({ force: true });
  });
  
  cy.get('#collect').click()

  //chỉ định truyện
    // cy.contains('.popular-thumb-item a', 'Kẹo Ngọt Thế Gian').click({ force: true });
    
    cy.get(".nav-user_icon").click({ delay: 100 })
    cy.contains('Kệ sách').click({ delay: 100 })  
    cy.url().should('include', '/ke-sach')
})

it ("4 Kiem tra thong bao khi ngung theo doi truyen Test", function(){

    cy.visit('https://docln.sbs/login')

    cy.get('#name').type('baodinh112903')
    cy.get('#password').type('29112003')
    cy.pause()
    cy.get('.btn-primary').click({force: true})
    cy.url().should('eq', 'https://docln.sbs/');
    
    cy.get(".nav-user_icon").click({ delay: 100 })
    cy.contains('Kệ sách').click({ delay: 100 })  
    cy.url().should('include', '/ke-sach')
    cy.get('.series-name a')
    //khi muốn random ngừng theo dõi truyện
//   .then($items => {
//     const randomIndex = Math.floor(Math.random() * $items.length);
//     cy.wrap($items[randomIndex]).click({ force: true });
//   });

  //chỉ định truyện
    cy.contains('.series-name a', 'Người Giấy').click({ force: true });

  cy.get('#collect').click()
  cy.get('div[role="alert"]')
    .should('be.visible')
    .and('contain.text', 'Bạn đã ngừng theo dõi truyện');
})

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
    cy.contains('.series-name a', 'Người Giấy').should('not.exist');
})

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
