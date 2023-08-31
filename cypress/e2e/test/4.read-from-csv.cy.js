// ประกาศตัวแปร
// อธิบายตัวแปรแบบง่ายๆ const = ตัวแปรที่ไม่สามารถอัพเดตค่าได้ภายหลัง
// let = ตัวแปรที่สามารถเปลี่ยนค่าภายหลังได้
const url = "https://www.amazon.com/"
let productNames; 

// import package neat-csv
// หากใครยังไม่มีในใช้คำสั่งนี้ในการติดตั้ง npm install neat-csv@v5.2.0
const neatCsv = require("neat-csv")

// ประกาศหัวเรื่องในการ Test
describe("Sample Test", function() {

  // ก่อนที่จะรัน test ทุกครั้งให้ทำอะไรก่อนบ้าง
  beforeEach(() => {  

    // ก่อนที่จะรัน Test ให้ cypress เข้า website ที่จะทำการ Test
    cy.visit(url);
    
    // ให้ไปการข้อมูลมาจาก folder fixture ที่มีไฟล์ชือ่ว่า product.csv
    // ด้านล่างเป็น Logic ที่ใช้ในการเอาข้อมูลมาเก็บเข้าตัวแปร
    cy.fixture('product.csv')
      .then(neatCsv)
      .then(data => {
        productNames = data
      });
  });
  
  // การประกาศ Logic Test
  it('Contains correct title', () => {
  
    cy.title().should('include', 'Amazon');
  
  });

  // การประกาศ Logic Test
  it(`Searches for products`, () => {
    
    // .wrap ใช้เพื่อรอจนกว่าโค้ดด้านในจะถูกรันจนหมด
    // .each ใช้เพื่อเป็นการแจกข้อมูลใน array ออกมาทีละเช่น เช่น [1,2,3] จะออกมาทีละค่า 1, 2, 3 ตามลำดับ
    cy.wrap(productNames).each(productToSearch => {

      // .get หมายความว่าให้ไปที่ element ที่มีไอดีหรือ ชื่อ class นั้นอยู่
      // .type พิมข้อความเข้าไปด้ายใน element นั้น ซึ่งในเคสนี้ element เป็น Input ทำให้สามารถพิมได้
      // productToSeach['productName'] คือการเข้าถึงข้อมูลจากไฟล์ csv ด้วยชื่อ field 
      cy.get('#twotabsearchtextbox').clear().type(productToSearch['productName']);
      
      
      // .get หมายความว่าให้ไปที่ element ที่มีไอดีหรือ ชื่อ class นั้นอยู่
      // .click ใช้เพื่อกดปุ่ม
      cy.get('#nav-search-submit-button').click();
      
      // .get หมายความว่าให้ไปที่ element ที่มีไอดีหรือ ชื่อ class นั้นอยู่
      // .should('contain.text', text) ใช้เพื่อเช็คว่า element ที่ไป get มามี text นี้อยู่หรือเปล่า
      cy.get('.a-color-state.a-text-bold').should('contain.text', productToSearch['productName']);
    
    });
  
  });


})
