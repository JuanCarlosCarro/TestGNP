
describe('ServiceStatus Component', () => {
  it('renders service status indicators', () => {
    cy.mount(<ServiceStatus />);
    cy.get('.service-status').should('exist');
  });
});
