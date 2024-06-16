
describe('HeaderComp Component', () => {
  it('renders the header component', () => {
    cy.mount(<HeaderComp />);
    cy.get('.header').should('exist');
  });
});
