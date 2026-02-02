describe('Estudos de Cypress', () => {

  beforeEach(() => {
    cy.visit('./index.html')
  })
  it('passes', () => {
    cy.get('h1')
      .contains('Login de Teste')
      .should('be.visible')     
      
  })
})

