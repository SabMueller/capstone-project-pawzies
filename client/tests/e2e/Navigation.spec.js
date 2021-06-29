/* eslint-disable no-undef */
/// <reference types='Cypress'/>;

describe('Use Navigation', () => {
  it('Visits the Main Page', () => {
    cy.visit('/main');
    cy.get('.action-btn').click();
    cy.get('[href="/main"]').click();
    cy.get('p').contains('matching');
  });

  it('changes to Favorites page', () => {
    cy.visit('/main');
    cy.get('.action-btn').click();
    cy.get('[href="/favorites"]').click();
    cy.get('h1').contains('Your Favorites');
  });

  it('changes to Search page', () => {
    cy.visit('/favorites');
    cy.get('.action-btn').click();
    cy.get('[href="/search"]').click();
    cy.get('p').contains('up to You');
  });
});
