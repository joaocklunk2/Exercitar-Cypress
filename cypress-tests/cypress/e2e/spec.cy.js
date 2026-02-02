describe('Estudos de Cypress', () => {

  beforeEach(() => {
    cy.visit('./index.html')
  })
  it('passes', () => {
    cy.title('Site simples para testes Cypress')  
  })
})

