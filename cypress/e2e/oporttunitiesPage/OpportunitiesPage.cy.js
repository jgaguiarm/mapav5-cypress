describe('OpportunitiesPage', () => {
    beforeEach(() => {
      cy.visit('/') 
  })

    it('Valida funcionalidade de pesquisa na página Oportunidades',function(){

        //Oportunidades 
        cy.get('#entities-menu-opportunity > a')
        .click()      
        .get('.icon-show-search-on-list')
        .click()
        .get('#filter-opportunitys > [ng-show="showSearch()"] > .form-palavra-chave > .search-field')
        .type("Secultfor","Enter")
        .get('article h1 a:contains(SECULTFOR)')
    
    
    })

    

})