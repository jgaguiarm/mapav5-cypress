
describe('AgentsPage', () => {
  beforeEach(() => {
    cy.viewport(1900,1080)
})
  
  it.only('Cria novo evento', () => {

    //Criando um novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()    
    cy.get('input[name="name"]').click({multiple: true, force: true}).eq(3)//Capturando o campo de nome do evento       
      .type('Meu evento')
    cy.get('textarea[name="shortDescription"').eq(3).click({multiple: true, force: true})//Capturando o a área de texo para inserir descrição
      .type('Descrição do meu evento')
    cy.get('select[name="classificacaoEtaria"').select('18 anos').sk
    cy.get('select[name="terms[linguagem][]').select('Cultura Digital')
    cy.contains('button','Criar evento').click()

    cy.get('.entity-type.event-type')
      .siblings()
      .children('span','.entidade')
      .should('not.be.value','Entidade criada com sucesso!')
      

  })

   it.skip('Cria novo agente', () => {
    cy.get('.login')
        .click()
        .get('input[id="agentFilter"')
        .type('username','Enter')
        .get('input[type="radio"')
        .check()
        .get('input[value="Logar"')
        .click()
  })

  it('Cria novo agente', () => {

    //Criando uma novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()
      .get('div[class="entity-modal has-step js-dialog "')
      .get('input[name="name"]')
      .click().and().type('Teste')
     
   })

   it('Validação de funcionalidade criação de novo agente', () => {

    //Criando uma novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()
      .get('div[class="entity-modal has-step js-dialog "')
      .get('input[name="name"]')
      .click().and().type('Teste')
     
   })

   it('Criação da Oportunidade', () => {
    cy.login(`${opportunityAdminEmail}`)
    
//Criando um nova oportunidade
    cy.get(':nth-child(5) > :nth-child(1) > :nth-child(2) > .icon').click()
    cy.contains('Selecione um projeto').dblclick()
    cy.get('.search-agent').click()
    cy.get('[name="evaluationMethod"]').select('Avaliação Técnica')
    cy.get('[name="type"').eq(6).select('Edital')
    cy.get('[name="name"]').eq(7).type(`${oppotunityName}`)
    cy.get('textarea[name="shortDescription"]').eq(7).type('Minha descrição curta')
    cy.get('.form-control.input').eq(0).type("28/05/2024")
    cy.get('.form-control.input').eq(1).type("31/05/2024")
    cy.contains('Adicionar oportunidade').click({multiple: true, force: true})
    cy.contains('button','Continuar navegando').click()

}) 

//Adicionando Avaliador na Oportunidade
it('Adicionar avaliador na oportunidade', () => {
    cy.login(`${opportunityAdminEmail}`)
    cy.visit("/painel/opportunities")
    cy.get('a:contains(editar)').click({multiple: true, force: true})
    cy.get('a[id=tab-evaluations-config]').click()
    cy.get('span:contains(Adicionar avaliador)').click()
    cy.get('input[placeholder="buscar por nome"]').eq(0).click({multiple: true, force: true})//
        .type(`${evaluatorName}`)
        .get('li[class="search-agent clearfix ng-scope"]').click()
        .get('a:contains(Salvar)').click()

})

//Adicionando 
it('Aceite do avaliador',() => {
    cy.login(`${evaluatorName}`)

})


it.skip('Inscreve o agente na oportunidade', () => {
   cy.login('agentEmail@testes.com')
   //Incrição na oportunidade
})

it('Exclui a oportunidade', () => {
    cy.login(`${opportunityAdminEmail}`)
    cy.get('#panel-nav > ul > :nth-child(7) > a').click()
    cy.get('a:contains(excluir)').click({multiple: true,force:true })


})
})