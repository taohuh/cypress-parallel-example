describe('Cypress parallel run example - 4', () => {
    it('Should display the blog link', () => {
        cy.visit('https://mherman.org');
        cy.get('a').contains('RSS');
    });
});