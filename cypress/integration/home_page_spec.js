describe('The Home Page', () => {
    it('successfully loads', () => {
        cy.visit('/');
    });
    it('navigate to the testing page', () => {
        cy.get('[data-cy="cy-nav-testing"]')
            .click();
        
        cy.url()
            .should('include', '/testing/two');
    });
  })