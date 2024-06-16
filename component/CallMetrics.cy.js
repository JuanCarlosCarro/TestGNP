
describe('CallMetrics Component', () => {
  it('renders call metrics dashboard', () => {
    cy.mount(<CallMetrics />);
    cy.get('.metrics-container').should('exist');
  });
});
