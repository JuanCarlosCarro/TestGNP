
describe('MapAgent Component', () => {
  it('renders the map for agents', () => {
    cy.mount(<MapAgent />);
    cy.get('.agent-map').should('exist');
  });
});
