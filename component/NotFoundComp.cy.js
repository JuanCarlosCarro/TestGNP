
describe('NotFoundComp Component', () => {
  it('renders the not found message', () => {
    cy.mount(<NotFoundComp />);
    cy.get('.not-found').should('exist');
  });
});
