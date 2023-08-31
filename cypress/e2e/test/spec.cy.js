// ประกาศชื่อ 
describe('Amazon Testing', () => {
  
  // ก่อนที่จะรัน it ให้ทำอะไรก่อนบ้าง
  beforeEach(() => {

    // ก่อนที่จะรัน Test ให้ cypress เข้า website ที่จะทำการ Test
    cy.visit('https://www.amazon.com/')

  })

  it('Contains correct title', () => {
    // เช็ค title ของ website ว่ามีคำว่า Amazon อยู่ใน Title ไหม
    cy.title().should('include', 'Amazon')
  })

  it('Searches for a keyboard', () => {

    // ใส่คำว่า keyboard เข้า Input ที่มี Id เป็น twotabsearchtextbox
    cy.get('#twotabsearchtextbox').type('keyboard')
    
    // กดปุ่มที่มีไอดี nav-search-submit-button
    cy.get('#nav-search-submit-button').click()

    // check ว่า result ที่ออกมาเป็น keyboard หรือเปล่า
    cy.get('.a-color-state.a-text-bold').should('contain.text', 'keyboard')
    
  })
  
})


