describe('SpacesPage', () => {
    beforeEach(() => {
      cy.visit('/') 
  })

  it('Validar consulta e pesquisa nas principais entidades',function(){
  
    //Espaços  
  cy.get('#entities-menu-space > a')
    .click()      
    .get('.icon-show-search-on-list')
    .click()
    .get('#filter-spaces > [ng-show="showSearch()"] > .form-palavra-chave > .search-field')
    .type("Fortaleza","Enter")
    .get('article h1 a:contains(Fortaleza)')

  })

})