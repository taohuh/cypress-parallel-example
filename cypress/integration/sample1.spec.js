describe('Cypress parallel run example - 1', () => {
    it('Should display the title', () => {
        cy.visit('https://mherman.org');
        cy.get('a').contains('Michael Herman');
    });
});