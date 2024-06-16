
describe('HeaderLoginComp Component', () => {
  it('renders the login header component', () => {
    cy.mount(<HeaderLoginComp />);
    cy.get('.login-header').should('exist');
  });
});
