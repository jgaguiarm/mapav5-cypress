describe('Draw', () => {
  let data;
  beforeEach(() => {
      cy.viewport(1900,1080)
      // cy.fixture('opportunityData').then((oppdata) => {
      //   data = oppdata;

      // })

  })
 
  // MCV5-6 Habiliar Sorteio
  it('Valida que o administrador da oportunidade consegue habilitar a funcionalidade de Sorteio e visualiza a aba "Sorteios" na tela página da oportunidade', () => {
    //Habilitando a funcionalidade de Sorteio
    cy.loginWith(`${data.opportunities[1].adminOpportunityEmail}`,`${data.opportunities[1].adminOpportunityPassword}`)
    cy.visit(`/oportunidade/${data.opportunities[1].opportunityNumber}`)
    cy.get('a:contains(Editar)').click()
    cy.get('#use-registrations-draw').click()
    cy.get('.editable-input > select').select('Sim')
    cy.get('a:contains(Salvar)').click()
    cy.get('#editable-entity > .alert')
      .should('be.visible','Edições salvas')

    //Validando a visualização da aba Sorteios na página da oportunidade  
    cy.visit(`/oportunidade/${data.opportunities[1].opportunityNumber}`)
    cy.get('#tab-prize-draw')
      .should('be.visible')

  })
  //MCV5-7
  it('Valida que o administrador da oportunidade consegue realizar o sorteio sem categorias cadastradas', () => {
    cy.loginWith(`${data.opportunities[1].adminOpportunityEmail}`,`${data.opportunities[1].adminOpportunityPassword}`)
    cy.visit(`/oportunidade/${data.opportunities[1].opportunityNumber}`)
    cy.get('#tab-prize-draw').click()
    cy.get('#categories-draw').select(1)
    cy.get('button:contains(Realizar sorteio)').click()
    cy.get('button:contains(Sim)').click()
    cy.get('td:contains(✅ Sorteio Finalizado)')
      .should('be.visible')
  })

  //MCV5
  it('Valida que o administrador da oportunidade não consegue realizar o sorteio sem inscrições selecionadas', () => {
  cy.loginWith(`${data.opportunities[1].adminOpportunityEmail}`,`${data.opportunities[1].adminOpportunityPassword}`)
  cy.visit(`/oportunidade/${data.opportunities[1].opportunityNumber}`)
  cy.get('#tab-inscritos').click()
  // cy.contains('div','Pendente')

  cy.get('div[class="placeholder ng-binding"]:contains(Pendente)')


  // cy.get('#tab-prize-draw').click()
  // cy.get('#categories-draw').select(1)
  // cy.get('button:contains(Realizar sorteio)').click()
  // cy.get('button:contains(Sim)').click()
  // cy.get('td:contains(✅ Sorteio Finalizado)')
  //   .should('be.visible')
  })

  //MCV5-9
  it('Valida que é possível realizar sorteio para oportunidades por categoria cadastrada', () => {
    //Realizando o sorteio por categoria
    cy.loginWith(`${data.opportunities[0].adminOpportunityEmail}`,`${data.opportunityNumber[0].adminOpportunityPassword}`)
    cy.visit(`/oportunidade/${data.opportunities[0].opportunityNumber}`)
    cy.get('#tab-prize-draw').click()
    cy.get('#categories-draw').select(`${data.opportunities[0].categories[2]}`)
    // cy.get('button:contains(Realizar sorteio)').click()
    

    //Validando a visualização do lista de sorteados para a categoria escolhida
    // cy.get('tbody > :nth-child(1) > :nth-child(3) > a')
    //   .should('have.text',`${data.categories[random]}`)
  })
  
    //MCV5-10
  it.skip('Valida que o administrador não consegue realizar o sorteio sem que hajam candidatos com status selecionado', () => {
    cy.loginWith(`${data.opportunities[1].adminOpportunityEmail}`,`${data.opportunities[1].adminOpportunityPassword}`)
    cy.visit(`/oportunidade/${data.opportunities[1].opportunityNumber}`)
    cy.get('#tab-prize-draw').click()
    cy.get('#categories-draw').select(1)
    cy.get('button:contains(Realizar sorteio)').click()
    cy.get('button:contains(Sim)').click()
    cy.get('td:contains(✅ Sorteio Finalizado)')
      .should('be.visible')
  })

  it.only('Cadastro agente na oportunidade', () => {
    cy.agentSubscribe();
  })



  



})