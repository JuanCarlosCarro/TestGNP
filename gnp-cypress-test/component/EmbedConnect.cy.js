
describe('EmbedConnect Component', () => {
  it('embeds external connection tools', () => {
    cy.mount(<EmbedConnect />);
    cy.get('.embed-container').should('exist');
  });
});
