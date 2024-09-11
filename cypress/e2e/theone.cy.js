describe('visit page', () => {
    beforeEach(() => {
        cy.visit('https://theoutpost.ai/')

    })

    // it('visit page', () => {
    //     cy.get('h1').should('have.text', 'The Outpost')

    // })

    it('verify the logo', () => {
        cy.get('.gap-3 > a > img').should('be.visible')
    })


})