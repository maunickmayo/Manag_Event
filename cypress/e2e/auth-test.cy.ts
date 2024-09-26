describe('User Authentication ', () => {

  it('Should create a new User and redirect to Login Page', () => {
    cy.visit('/register');
    cy.contains("S'inscrire")
    cy.get('[data-cy="heading"]').should('exist');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('Azerty1@');
    cy.get('input[name="confirmPassword"]').type('Azerty1@');
    cy.get('button[type="submit"]').click();
  });


  it('Should authenticate the User and redirect to Event Page', () => {
    cy.visit('/login');
    cy.contains("Se connecter")
    cy.get('[data-cy="heading"]').should('exist');
    cy.get('input[name="email"]').type('user@example.com');
    cy.get('input[name="password"]').type('Azerty1@');
    cy.get('button[type="submit"]').click();
  });

});