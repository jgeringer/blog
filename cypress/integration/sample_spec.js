import { cyan } from "chalk"

describe('My First Test', function () {
    it ('Makes an assertion', function () {
        // Arrange - setup initial app state
            // - visit a page
            cy.visit('https://example.cypress.io')

            // great for debugging
            // cy.pause()

            // - query for an element
            cy.contains('type').click()
        // Act - take an action
            // - interact with that element
        // Assert - make an assertion
            // - make an assertion about page content
            cy.url()
                .should('include', '/commands/actions')

            cy.get('.action-email')
                .type('fake@email.com')
                .should('have.value', 'fake@email.com')
    })
})