
const url = "https://www.amazon.com/"
const text = "keyboard"
const title = "Amazon"

// ประกาศหัวเรื่องในการ Test
describe('Amazon Testing', () => {

  
    // ก่อนที่จะรัน it ให้ทำอะไรก่อนบ้าง
    before(() => {
  
      // ก่อนที่จะรัน Test ให้ cypress เข้า website ที่จะทำการ Test
      cy.visit('https://www.amazon.com/')
      
    })

    // หลังจาก Test เสร็จแล้วให้กลับไปที่หน้าเดิม
    after(() => {
      cy.visit('https://www.amazon.com')
    });
  
    // การประกาศ Logic Test
    it('Contains correct title', () => {
      // เช็ค title ของ website ว่ามีคำว่า Amazon อยู่ใน Title ไหม
      cy.title().should('include', title)
    })

    // การประกาศ Logic Test
    it(`Searches for a product`, () => {
    
      // ใส่คำว่า keyboard เข้า Input ที่มี Id เป็น twotabsearchtextbox
      cy.get('#twotabsearchtextbox').type(text)
      
      // กดปุ่มที่มีไอดี nav-search-submit-button
      cy.get('#nav-search-submit-button').click()
      
      // check ว่า result ที่ออกมาเป็น keyboard หรือเปล่า
      cy.get('.a-color-state.a-text-bold').should('contain.text', text)
      
    })
  
    
  })
  
  
  