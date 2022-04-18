describe('Cypress parallel run example - 3', () => {
    it('Should display the blog link', () => {
        cy.visit('https://mherman.org');
        cy.get('a').contains('Abouasdfsadft');
    });
});