
describe('Diligence', () => {
  let data;
    beforeEach(() => {
      cy.viewport(1900,1080)
      cy.fixture('opportunityData').then((oppdata) => {
        data = oppdata;
        cy.loginWith(`${data.email}`,`${data.password}`)
        //cy.loginFake(`${opportunityAdminEmail}`)
      })      
      
  })

  it('Valida que é possível configurar a Multidiligencia na oportunidade', () => {
    cy.visit(`/oportunidade/${opportunityNumber}`, {failOnStatusCode: false}) 
    cy.get('.controles > .btn-primary').click({force:true})
    cy.get('#tab-evaluations-config').click()
    cy.get('.field-use-diligence > .js-editable').click()
    cy.get('.editable-input > select').select('Sim')
    cy.get('.field-use-diligence > .js-editable')
      .should('have.text','Sim')
    cy.get('.controles > .btn-primary').click()
    cy.get('#editable-entity > .alert')
      .should('be.visible')
      
  })

  it('Valida que é possível visualizar a aba de Diligêcia na configurações da avaliação, quando esta estiver configurada', () => {
    cy.visit(`/oportunidade/${opportunityNumber}`, {failOnStatusCode: false})
    cy.get('#tab-diligences')
      .should('be.visible')
  })

  it.only('Valida que é possível configurar dias corridos ou dias úteis para a resposta da diligência', () =>{
    cy.loginFake(`${data.opportunities[2].adminOpportunityEmail}`)
    cy.visit(`/oportunidade/${data.opportunities[2].opportunityNumber}`, {failOnStatusCode: false})
    cy.get('a:contains(Editar)').click()
    cy.get('#tab-evaluations-config').click()
    cy.get('.field-use-multiple-diligence > :nth-child(1) > .js-editable')   

  })

  it('Valida que o administrador da oportunidade consegue abrir uma diligência para o propronente', ()=> {

  })

   

})

