
describe('popupCallContext Component', () => {
  it('renders the call context information as a popup', () => {
    cy.mount(<popupCallContext />);
    cy.get('.call-context').should('exist');
  });
});
