import {v4 as uuid} from 'uuid'

describe('EventsPage', () => {
  let oppdata;
  let agtdata;
  let uid = uuid();
    
  
  beforeEach(() => {
    cy.viewport(1900,1080) 
    cy.fixture('entityData').then((data) => {
      oppdata = data;
    })

    cy.fixture('agentProfileData').then((data) => {
      agtdata = data;   
      cy.loginWith(`${agtdata.profiles[0].adminEmail}`,`${agtdata.profiles[0].adminPassword}`)   
    }) 
    
  })  


  it('Cria novo evento', () => {

    const entityName = oppdata.entities[0].entityName + `${uid}`;
    
    cy.visit('/painel')     

    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()    
    cy.get('input[name="name"]').click({multiple: true, force: true}).eq(3)//Capturando o campo de nome do evento
      .type(entityName)
    cy.get('textarea[name="shortDescription"').eq(3).click({multiple: true, force: true})//Capturando o a área de texo para inserir descrição
      .type(oppdata.entities[0].entityDescription)
    cy.get('select[name="classificacaoEtaria"').select(oppdata.entities[0].ageRating)
    cy.get('select[name="terms[linguagem][]').select('Cultura Digital')
    cy.contains('button','Criar evento').click()

    cy.get('.entity-type.event-type')
      .siblings()
      .children('span','.entidade')
      .should('not.be.value','Entidade criada com sucesso!')
      .should('not.be.visible')
      .invoke('show',{multiple: true, force:true})
      
    cy.get('.entity-type.event-type~h2>span.entidade')//(Entidade criada com sucesso !)')
      .should('be.visible')
    cy.get('a:contains(Continuar navegando)')
    .click({multiple:true, force:true})   

  // Validando que o evento é encontrado na busca
    cy.get('a:contains(Meus Eventos)').click({multiple:true, force:true})
    cy.get(`a:contains(${entityName})`).should('exist')   
  })

  it('Valida a busca e resultado da entidade evento', () => {
    const entityName = oppdata.entities[0].entityName + `${uid}`;

    cy.visit('/')

    //Eventos
    cy.get('#entities-menu-event > a')
      .click()
      .get('.icon-show-search-on-list')
      .click()
      .get('#filter-events > [ng-show="showSearch()"] > .form-palavra-chave > .search-field')
      .type(`${entityName}`,"Enter")
      .should('exist')

  })
 
 

  
})