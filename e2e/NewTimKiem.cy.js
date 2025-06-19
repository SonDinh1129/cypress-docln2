it("1 Khong dien gi het test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("2 Chi dien ten truyen test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("3.1 CHI DIEN TEN TRUYEN IN HOA test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("BẠN THUỞ NHỎ", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("3.2 chi dien ten truyen khong in hoa test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("bạn thuở nhỏ", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

// ra kết quả giống có dấu
it("3.3 chi dien ten truyen khong viet dau test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("ban thuo nho", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("4 Chi dien ten tac gia test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("Kiếm Sĩ Trọng Nghĩa", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("4.1 CHI DIEN TEN TAC GIA IN HOA test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("KIẾM SĨ TRỌNG NGHĨA", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("4.2 chi dien ten tac gia khong in hoa test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("kiếm sĩ trọng nghĩa", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

//cho ra kết quả giống với có dấu
it("4.3 chi dien ten tac gia khong viet dau test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("kiem si trong nghia", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("5 Chi dien ten hoa si test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='illustrator']")
    .type("Akino", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("6 Chi nhap tinh trang test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

  cy.get('[name="status"]')
    .select('1', { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

//Chi duoc chon 1 tinh trang va ket qua chi hien thi 1 tinh trang
it("7 Nhap nhieu tinh trang test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

  cy.get('[name="status"]')
    .select('1', '2', { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it(" 8 Chi check mot the loai test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

  cy.contains('label.genre_label', 'Fantasy').click()
  cy.wait(100)

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it(" 9 Check nhieu the loai test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

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

it("10 Dien ten truyen khong co nghia test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("dsadacsvsad", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("11 Kiem tra ket qua tim kiem hien thi nhu the nao test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("12 Thoi gian tim kiem test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ")

  cy.get("[name='author']")
    .type("ramen")

  cy.get('[name="status"]')
    .select('1')

  // Chọn các thể loại
  cy.contains('label.genre_label', 'Action').click()
  cy.wait(100)
  cy.contains('label.genre_label', 'Adventure').dblclick()
  cy.wait(100)
  cy.contains('label.genre_label', 'Comedy').click()
  cy.wait(100)

  // Bắt đầu đo thời gian trước khi gửi yêu cầu
  const startTime = performance.now();
  // Gửi yêu cầu tìm kiếm và đo thời gian
  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })
    .then(() => {
      // Kết thúc đo thời gian sau khi nhận phản hồi
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      // In thời gian truy vấn ra console
      cy.log(`Thời gian truy vấn: ${responseTime.toFixed(2)} ms`);
    });
});

it("1 Khong dien gi het test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("2 Chi dien ten truyen test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("3.1 CHI DIEN TEN TRUYEN IN HOA test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("BẠN THUỞ NHỎ", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("3.2 chi dien ten truyen khong in hoa test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("bạn thuở nhỏ", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

//không ra kết quả giống có dấu
it("3.3 chi dien ten truyen khong viet dau test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("ban thuo nho", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("4 Chi dien ten tac gia test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("Kiếm Sĩ Trọng Nghĩa", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("4.1 CHI DIEN TEN TAC GIA IN HOA test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("KIẾM SĨ TRỌNG NGHĨA", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("4.2 chi dien ten tac gia khong in hoa test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("kiếm sĩ trọng nghĩa", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

//cho ra kết quả giống với có dấu
it("4.3 chi dien ten tac gia khong viet dau test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='author']")
  .type("kiem si trong nghia", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("5 Chi dien ten hoa si test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get("[name='illustrator']")
    .type("Akino", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("6 Chi nhap tinh trang test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

  cy.get('[name="status"]')
    .select('1', { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

//Chi duoc chon 1 tinh trang va ket qua chi hien thi 1 tinh trang
it("7 Nhap nhieu tinh trang test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

  cy.get('[name="status"]')
    .select('1', '2', { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it(" 8 Chi check mot the loai test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

  cy.contains('label.genre_label', 'Fantasy').click()
  cy.wait(100)

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it(" 9 Check nhieu the loai test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)

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

it("10 Dien ten truyen khong co nghia test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("dsadacsvsad", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("11 Kiem tra ket qua tim kiem hien thi nhu the nao test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('.in')
    .filter(':visible')
    .type("", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("12 Thoi gian tim kiem test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ")

  cy.get("[name='author']")
    .type("ramen")

  cy.get('[name="status"]')
    .select('1')

  // Chọn các thể loại
  cy.contains('label.genre_label', 'Action').click()
  cy.wait(100)
  cy.contains('label.genre_label', 'Adventure').dblclick()
  cy.wait(100)
  cy.contains('label.genre_label', 'Comedy').click()
  cy.wait(100)

  // Bắt đầu đo thời gian trước khi gửi yêu cầu
  const startTime = performance.now();
  // Gửi yêu cầu tìm kiếm và đo thời gian
  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })
    .then(() => {
      // Kết thúc đo thời gian sau khi nhận phản hồi
      const endTime = performance.now();
      const responseTime = endTime - startTime;

      // In thời gian truy vấn ra console
      cy.log(`Thời gian truy vấn: ${responseTime.toFixed(2)} ms`);
    });
});

//Fail, khong hien thi lich su tim kiem
describe("Tim kiem Tests", () => {
  beforeEach(() => {
    cy.visit('https://docln.sbs/tim-kiem-nang-cao');
    cy.wait(2000); // Chờ trang tải (có thể thay bằng .should('be.visible'))
  });

  it("13 Hien thi lich su tim kiem test", function () {
    // Bước 1: Thực hiện tìm kiếm lần đầu
    cy.get('.in')
      .filter(':visible')
      .should('be.visible')
      .type("Bạn thuở nhỏ", { delay: 100 });

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true });

    // Chờ kết quả tải 
    cy.wait(1000); // Điều chỉnh thời gian chờ nếu cần

    // Bước 2: Thực hiện tìm kiếm lần hai
    cy.get('.in')
      .filter(':visible')
      .clear()
      .type("Bạn thuở nhỏ", { delay: 100 });

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true });

    // Chờ kết quả tải
    cy.wait(1000);
  });
});

//true, khong gioi han
  it("14 Kiem tra toi da so ky tu nhap vao test", function () {
    cy.visit('https://docln.sbs/tim-kiem-nang-cao');
    cy.wait(2000);
    // Bước 1: Nhấn vào thanh tìm kiếm
    cy.get('input.search-form.in.col-md-9.col-lg-10')
      .filter(':visible')
      .should('be.visible')
      .click();

    // Bước 2: Nhập chuỗi ký tự vượt quá giới hạn 50 ký tự
    //const maxLength = 100; = .should('have.value', longString.substring(0, 100));
    const maxLength = 100; 
    const longString = "a".repeat(maxLength); 
    cy.get('input.search-form.in.col-md-9.col-lg-10')
      .filter(':visible')
      .type(longString, { delay: 100 })
      .should('have.value', longString.substring(0, 100)); // Kỳ vọng chỉ 50 ký tự

    // Bước 3: Nhấn nút tìm kiếm và kiểm tra hành vi
    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true });

  });

  //true, co hien thi goi y, va click va ket qua som nhat tim duoc
  it("15 Kiem tra goi y truyen dung va lien quan khi go nham ten truyen", function () {
    
    cy.visit('https://docln.sbs/tim-kiem-nang-cao');
    cy.wait(2000);
    
    cy.get('input.search-form.in.col-md-9.col-lg-10')
      .filter(':visible')
      .should('be.visible')
      .click();

    const wrongKeyword = "Bna thou nho"; // Gõ sai "Bạn thuở nhỏ"
    cy.get('input.search-form.in.col-md-9.col-lg-10')
      .filter(':visible')
      .type(wrongKeyword, { delay: 100 });

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true });

    cy.contains('.thumb-item-flow a', 'Bạn thuở nhỏ').click({ force: true });

     });

//Khong co Hieu ung => false
it("16 Hieu ung nut tim kiem test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')

  cy.wait(2000)
  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("17 Kiem tra hien thi phan title mo rong cua truyen Test", () => {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao');
    cy.wait(2000);
    
    cy.get('.in')
      .filter(':visible')
      .should('be.visible')
      .type("Bạn thuở nhỏ", { delay: 100 });

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true })

  // Kiểm tra thuộc tính title của truyện đầu tiên
  cy.get('.thumb_attr.chapter-title > a')
  //.eq(2) su dung de chi dinh
    .first()
    .trigger('mouseover', {force: true})
    .should('have.attr', 'title')
    .and('include', 'Chương 06: Nụ hôn trước mọi người') // hoặc một phần nội dung bạn mong đợi
  
  cy.get('.thumb_attr.series-title > a')
  //.eq(2)  
  .first()
  .trigger('mouseover')
  .should('have.attr', 'title')
  .and('include', 'Khi tôi khiến cho cô')
})

//fail, khong co chuc nang
it("18 Tim kiem bang giong noi Test", () => {
    cy.visit('https://docln.sbs/tim-kiem-nang-cao'); // Thay bằng 'https://docln.sbs/tim-kiem-nang-cao' nếu tích hợp trực tiếp
    cy.wait(2000);
    
    cy.get('#voiceSearchBtn')
      .should('be.visible')
      .click();

    // Kiểm tra kết quả giọng nói
    cy.get('.in')
      .should('contain', 'Bạn thuở nhỏ');

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true })
  });

//fail. khong co chuc nang
it("19 Tim kiem bang hinh anh Test", () => {
    // Tải một tệp hình ảnh (cần file ảnh trong thư mục fixtures)
    cy.fixture('sample-image.jpg').then(fileContent => {
      cy.get('#imageInput')
        .should('be.visible')
        .attachFile({
          fileContent: fileContent.toString(),
          fileName: 'sample-image.jpg',
          mimeType: 'image/jpeg'
        });
    });

    // Kiểm tra kết quả hình ảnh
    cy.get('.in')
      .should('contain', 'sample-image.jpg');

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true })
  });

  //fail vi khong hien thi ket qua la khong thay truyen, 
  // ma hien thi ket qua la danh sach truyen
it("20 Tim kiem bang cac ki tu dac biet test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')
  cy.wait(2000)
  
  cy.get('.in')
    .filter(':visible')
    .type("=-+$%@!%@#^*()", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })

})

it("21 Hien thi thong tin truyen test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao');
  cy.wait(2000);
    
    cy.get('.in')
      .filter(':visible')
      .should('be.visible')
      .type("Bạn thuở nhỏ", { delay: 100 });

    cy.get('#search-go')
      .filter(':visible')
      .click({ force: true })
  
    cy.get('.thumb_attr.series-title > a')
    .eq(2)
    .click()
})

//expected result la thong bao khong ton tai tac gia, goi y truyen theo ten
//fail
it("22 Tim kiem voi ten truyen va tac gia khong ton tai test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')
  cy.wait(2000)

  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ")

  cy.get("[name='author']")
    .type("Unknown")

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })
})

//expected result la thong bao khong ton tai hoa si minh hoa, goi y truyen theo ten
//fail
it("23 Tim kiem voi ten truyen va hoa si minh hoa khong ton tai test", function () {
  cy.visit('https://docln.sbs/tim-kiem-nang-cao')
  cy.wait(2000)

  cy.get('.in')
    .filter(':visible')
    .type("Bạn thuở nhỏ")

  cy.get("[name='illustrator']")
    .type("Unknown1", { delay: 100 })

  cy.get('#search-go')
    .filter(':visible')
    .click({ force: true })
})





