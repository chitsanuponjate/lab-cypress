// ประกาศหัวเรื่องในการ Test
describe('Why use beforeEach and afterEach', function() {
    
    // รันแค่ Test แรกครั้งเดียวเท่านั้น
    before(function() {
        cy.log("before -> รันแค่ครั้งแรกครั้งเดียวเท่านั้น")
    })

    // รันแค่ Test สุดท้ายครั้งเดียวเท่านั้น
    after(function() {
        cy.log("after -> รันแค่ครั้งสุดท้ายครั้งเดียวเท่านั้น")
    })

    // รันก่อน Test ทุกครั้ง
    beforeEach(function() {
        cy.log("beforeEach -> รันทุกครั้งก่อน Test")
    })
    
    // รันหลัง Test ทุกครั้ง
    afterEach(function() {
        cy.log("afterEach -> รันทุกครั้งหลัง Test")
    })
    
    // การประกาศ Logic Test
    it('First Test', function() {
        cy.log("First Test")
    })

    // การประกาศ Logic Test
    it('Second Test', function() {
        cy.log("Second Test")
    })
})


        
