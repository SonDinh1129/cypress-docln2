it("1 Kiem tra phan dang ky co reCaptcha Test", function () {
  cy.visit('https://docln.sbs/register')

  cy.wait(2000);

  cy.get('.g-recaptcha')
    .should('be.visible');
});

it("2 Dang Ky voi du lieu hop le Test", function () {
  cy.visit('https://docln.sbs/register')

  const randomEmail = 'Son' + Math.floor(Math.random() * 5000) + '@gmail.com'
  const randomAcc = 'Son' + Math.floor(Math.random() * 5000)
  // Luu vao fixture
  cy.writeFile('cypress/fixtures/tempEmailAndAcc.json', { email: randomEmail , acc: randomAcc})

  cy.get('#name').type(randomAcc)
  cy.get('#email').type(randomEmail)
  cy.get('#password').type('DinhSon112233@')
  cy.get('#password-confirm').type('DinhSon112233@')
  cy.get('.g-recaptcha')
    .should('be.visible');

  cy.pause()

  cy.get('.btn').click()
})

it("3 Dang Ky voi du lieu de trong Test", function () {
  cy.visit('https://docln.sbs/register')

  cy.get('#name').should('be.visible')
  cy.get('#email').should('be.visible')
  cy.get('#password').should('be.visible')
  cy.get('#password-confirm').should('be.visible')
  cy.get('.g-recaptcha').should('be.visible');

  cy.get('.btn').click()

  
  cy.get('#name + .help-block') 
    .should('be.visible')
    .and('contain', 'Cần phải nhập name.');

  cy.get('#email + .help-block')
    .should('be.visible')
    .and('contain', 'Cần phải nhập email.');

  cy.get('#password + .help-block')
    .should('be.visible')
    .and('contain', 'Mật khẩu không thể bỏ trống');

    //nhap mat khau ma khong nhap xac nhan moi hien thi, con de trong thi khong hien thi
  // cy.get('#password-confirm + .help-block')
  //   .should('be.visible')
  //   .and('contain', 'password không giống với bản xác nhận.');

  cy.get('.help-block')
    .should('be.visible')
    .and('contain', 'Xin hãy xác nhận bạn không phải là người máy.');
})

it("4 Dang Ky voi email sai dinh dang Test", function () {
  cy.fixture('tempEmailAndAcc.json').then((data) => {
    const acc = data.acc

    cy.visit('https://docln.sbs/register')

    cy.get('#name').type(acc)
    cy.get('#email').type('abc@xyz.com')
    cy.get('#password').type('DinhSon112233@')
    cy.get('#password-confirm').type('DinhSon112233@')
    
    cy.pause()
    cy.get('.btn').click()

    cy.get('#email + .help-block')
    .should('be.visible')
    .and('contain', 'Chỉ có thể sử dụng những email sau: gmail.com, icloud.com, edu.com.vn')
  })
})

it("5 Dang Ky voi password va confirm password khac nhau Test", function () {
  cy.fixture('tempEmailAndAcc.json').then((data) => {
    const acc = data.acc
    const email = data.email
    
    cy.visit('https://docln.sbs/register')

    cy.get('#name').type(acc)
    cy.get('#email').type(email)
    cy.get('#password').type('DinhSon1122')
    cy.get('#password-confirm').type('DinhSon112233@')
    
    cy.pause()
    cy.get('.btn').click()

    cy.get('#password + .help-block')
    .should('be.visible')
    .and('contain', 'không giống')
  })
})

it("6 Dang Ky voi email trung voi email da dang ky Test", function () {
  cy.fixture('tempEmailAndAcc.json').then((data) => {
    const email = data.email
    
    cy.visit('https://docln.sbs/register')

    cy.get('#name').type('jowiqjdock')
    cy.get('#email').type(email)
    cy.get('#password').type('DinhSon112233@')
    cy.get('#password-confirm').type('DinhSon112233@')
    
    cy.pause()
    cy.get('.btn').click()

    cy.get('#email + .help-block')
    .should('be.visible')
    .and('contain', 'tồn tại')
  })
})

it("7 Dang Ky voi ten dang nhap trung voi ten dang nhap da dang ky Test", function () {
  cy.fixture('tempEmailAndAcc.json').then((data) => {
    const acc = data.acc
    const email7 = 'Son' + Math.floor(Math.random() * 5000)
    
    cy.visit('https://docln.sbs/register')

    cy.get('#name').type(acc)
    cy.get('#email').type(email7)
    cy.get('#password').type('DinhSon112233@')
    cy.get('#password-confirm').type('DinhSon112233@')
    
    cy.pause()
    cy.get('.btn').click()

    cy.get('#name + .help-block')
    .should('be.visible')
    .and('contain', 'tồn tại')
  })
})

//fail do khong co hien thi alert success
it("8 Hien thi thong bao dang ky thanh cong Test", function () {
  cy.visit('https://docln.sbs/register')

  const randomEmail = 'Son' + Math.floor(Math.random() * 5000) + '@gmail.com'
  const randomAcc = 'Son' + Math.floor(Math.random() * 5000)

  cy.get('#name').type(randomAcc)
  cy.get('#email').type(randomEmail)
  cy.get('#password').type('DinhSon112233@')
  cy.get('#password-confirm').type('DinhSon112233@')
  cy.get('.g-recaptcha')
    .should('be.visible');

  cy.pause()

  cy.get('.btn').click()

  cy.get('.alert-success') 
    .should('be.visible')
    .and('contain', 'Đăng ký thành công');

})

it("9 Chuyen huong trang sau khi dang ky thanh cong Test", function () {
  cy.visit('https://docln.sbs/register')

  const randomEmail = 'Son' + Math.floor(Math.random() * 5000) + '@gmail.com'
  const randomAcc = 'Son' + Math.floor(Math.random() * 5000)

  cy.get('#name').type(randomAcc)
  cy.get('#email').type(randomEmail)
  cy.get('#password').type('DinhSon112233@')
  cy.get('#password-confirm').type('DinhSon112233@')
  cy.get('.g-recaptcha')
    .should('be.visible');

  cy.pause()

  cy.get('.btn').click()

  cy.url().should('eq', 'https://docln.sbs/');

})
