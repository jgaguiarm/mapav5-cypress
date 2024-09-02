/// < reference types="Cypress"/>
describe('AgentsPage', () => {
    beforeEach(() => {
      cy.visit('/') 
  })

  it('Valida funcionalidade de pesquisa na página de Agentes',function(){

  //Agentes  
  cy.get('#entities-menu-agent > a')
    .click()      
    .get('.icon-show-search-on-list')
    .click()
    .get('#filter-agents > [ng-show="showSearch()"] > .form-palavra-chave > .search-field')
    .type("Agentes","Enter")
    .get('article h1 a:contains(Fortaleza)')

  })



})