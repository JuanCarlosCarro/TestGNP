
describe('popupAgentsSupervisor Component', () => {
  it('renders the popup for supervisor to view agent details', () => {
    cy.mount(<popupAgentsSupervisor />);
    cy.get('.agents-supervisor-popup').should('exist');
  });
});
