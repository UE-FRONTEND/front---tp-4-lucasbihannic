describe('Make sure our todo list app is working well', () => {
    it('Test that we can open a browser and load our app', () => {
        cy.visit("http://127.0.0.1:4000");
        cy.wait(5000); // /!\ /!\ /!\ USELESS LINE HERE <---
        // Cypress always wait before doing the next action
        // Please, do not copy that line for the rest of the TP.
    })
    it('Test that field is clear after adding a todo', () => {
        cy.get('#todo-content').type('Faire à des pâtes');
        cy.get('#todo-button').click();
        cy.get('#todo-content').should('have.value', '');
    });
    it('Add new todo and verify it appears in the list', () => {
        cy.get('#todo-content').type('Manger les pâtes');
        cy.get('#todo-button').click();
        cy.contains('Manger les pâtes');
    });
    it('Delete a task', () => {
        cy.get('#todo-content').type('Faire la vaisselle');
        cy.get('#todo-button').click();
        cy.get('#delete-2').click();
        cy.contains('Faire la vaisselle').should('not.exist');
    });
})
