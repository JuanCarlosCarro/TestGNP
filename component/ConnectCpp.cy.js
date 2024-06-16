
describe('ConnectCpp Component', () => {
  it('renders CPP connection interface', () => {
    cy.mount(<ConnectCpp />);
    cy.get('.connect-cpp').should('exist');
  });
});
