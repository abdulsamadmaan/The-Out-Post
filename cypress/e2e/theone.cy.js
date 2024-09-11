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

    it('verify the nav bar', () => {
        cy.viewport(1920, 1080)


        cy.get('.h-12 > .relative > .items-center > div').should('be.visible')
        cy.get('.h-12 > :nth-child(3) > a').should('be.visible')
        cy.get('.h-12 > :nth-child(4) > a').should('be.visible')
        cy.get('.h-12 > :nth-child(5) > a').should('be.visible')
            // cy.get('.navbar-nav > :nth-child(5) > .nav-link').should('be.visible')
        cy.wait(8000)

    })

    it('verify the text of nav bar CTA', () => {
        cy.get
    })
})