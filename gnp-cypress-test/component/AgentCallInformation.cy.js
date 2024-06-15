
describe('AgentCallInformation Component', () => {
  it('renders agent call information panel', () => {
    cy.mount(<AgentCallInformation />);
    cy.get('.agent-info').should('exist');
  });
});
