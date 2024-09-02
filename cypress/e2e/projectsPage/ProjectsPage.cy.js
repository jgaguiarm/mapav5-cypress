describe('ProjectPages', () => {
    beforeEach(() => {
      cy.visit('/') 
  })

  it('Validar consulta e pesquisa nas principais entidades',function(){

  //Projetos
  cy.get('#entities-menu-project > a')
    .click()      
    .get('#filter-projects > [ng-show="showSearch()"] > .form-palavra-chave > .search-field')
    .type("Lei paulo gustavo","Enter")
    .get('article h1 a:contains(LEI PAULO GUSTAVO)')

  })


})