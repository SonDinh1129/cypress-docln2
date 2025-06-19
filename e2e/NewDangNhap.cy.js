it("1 Kiem tra phan dang nhap co reCaptcha Test", function () {
  cy.visit('https://docln.sbs/login')

  cy.wait(2000);

  cy.get('.g-recaptcha')
    .should('be.visible');
});

it("2 Dang nhap voi du lieu da dang ky Test", function () {
  cy.visit('https://docln.sbs/login')

  cy.get('#name').type('jowiqjdock')
  cy.get('#password').type('DinhSon112233@')
  cy.get('.g-recaptcha')
    .should('be.visible');

  cy.pause()

  cy.get('.btn-primary').click()
})

it("3 Dang nhap that bai khi de trong cac truong va khong check reCatpcha", () => {

  cy.visit('https://docln.sbs/login');
  cy.wait(2000); 

  // Không nhập dữ liệu vào các trường
  cy.get('#name') 
    .should('be.visible')
    .should('have.value', '');

  cy.get('#password') 
    .should('be.visible')
    .should('have.value', '');
   
  // Kiểm tra reCAPTCHA hiển thị nhưng không check
  cy.get('.g-recaptcha')
    .should('be.visible')

  // Nhấp nút Đăng nhập
 cy.get('.btn-primary')
    .should('be.visible')
    .click();

  // Kiểm tra thông báo lỗi "Đã có lỗi xảy ra"
  cy.get('.alert.alert-danger')
    .should('be.visible')
    .and('contain', 'Đã có lỗi xảy ra');

   cy.get('#name + .help-block') 
    .should('be.visible')
    .and('contain', 'Tên đăng nhập hoặc Email không thể bỏ trống');

  cy.get('#password + .help-block')
    .should('be.visible')
    .and('contain', 'Mật khẩu không thể bỏ trống');

  cy.get('.help-block')
    .should('be.visible')
    .and('contain', 'Xin hãy xác nhận bạn không phải là người máy.');

  });

it ("4 Chuyen huong trang ve trang chu sau khi dang nhap Test", function(){
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

it("5 Kiem tra dang nhap bang tai khoan gg", () => {
  cy.visit('https://docln.sbs/login');

  cy.get('.btn.btn-danger.ml-2')
    .should('be.visible')
    .should('have.attr', 'href')
    .and('include', 'https://docln.sbs/login/google'); // Kiểm tra URL OAuth Google

    //đoạn test case bên dưới có bấm nút login bằng gg nhưng do 
    //bảo mật của gg nên không thể hiển thị mặc dù cypress vẫn xác nhận pass

//cy.visit('https://docln.sbs/login');
// cy.wait(2000);

// cy.get('.btn.btn-danger.ml-2')
//   .should('be.visible')
//   .click();

// cy.origin('https://accounts.google.com', () => {
//   cy.wait(5000);
//   cy.url().should('include', 'accounts.google.com');
// });

  });

it("6 Dang nhap that bai khi de trong cac truong va khong check reCatpcha", () => {

  cy.visit('https://docln.sbs/login');
  cy.wait(2000); 

  cy.get('#name') 
    .should('be.visible')
    .type('jowiqjdock')

  cy.get('#password') 
    .should('be.visible')
    .type('jowiqjdock')
   
  cy.get('.g-recaptcha')
    .should('be.visible')

  cy.pause()

  // Nhấp nút Đăng nhập
 cy.get('.btn-primary')
    .should('be.visible')
    .click();

  cy.get('.alert.alert-danger')
    .should('be.visible')
    .and('contain', 'Đã có lỗi xảy ra');

   cy.get('#name + .help-block') 
    .should('be.visible')
    .and('contain', 'Tên đăng nhập hoặc mật khẩu không đúng.');

  });

  it("7 Quen Mat Khau Test", function () {
  cy.visit('https://docln.sbs/login');
  cy.get('.btn.btn-link').click()
    cy.fixture('tempEmailAndAcc.json').then((data) => {
    const email = data.email
    cy.get('#email').type(email)

    cy.get('.btn').click()
    cy.get('.alert')
    .should('be.visible')
    .and('contain', 'Chúng tôi đã gửi đường link thiết lập lại mật khẩu vào Email của bạn!');
  })
})

it("8 Quen Mat Khau nhung nhap email khong ton tai Test", function () {
  cy.visit('https://docln.sbs/login');
  cy.get('.btn.btn-link').click()
    cy.get('#email').type('abcxyzmnop123@mmmm.xyz')

    cy.get('.btn').click()
    cy.get('#email + .help-block') 
    .should('be.visible')
    .and('contain', 'Không tìm thấy tài khoản với Email này.');
  })

it("9 Quen mat khau nhung nhap email sai dinh dang", function () {
  cy.visit('https://docln.sbs/login');

  cy.get('.btn.btn-link').click(); 

  cy.get('#email').type('abcxyz'); 
  cy.get('.btn').click(); 

  cy.get('.alert').should('not.exist');
});









