describe('Recurso', () => {
    let data;
    beforeEach(() => {
        cy.viewport(1900,1080) 
        cy.fixture('opportunityData').then((oppdata) => {
           data = oppdata;
        })       
    })   

    it('Valida que o agente consegue abrir recurso na oportunidade' , () => {
        cy.loginWith(`${data.agentEmail}`,`${data.agentPassword}`)
        cy.visit(`/oportunidade/${data.opportunityNumber}`)     
        cy.get('.opportunity-claim-button > .btn').click()
        cy.get('.opportunity-claim-button > .btn').click()
        cy.get('#context-recourse-user-1693875788').type(`${data.recourseText}`)
        //cy.get('#attachment-recourse-user-1693875788').click()
        cy.get('.swal2-confirm').click()
        cy.get('h2:contains(Recurso enviado com sucesso)')
            .should('be.equal','Recurso enviado com sucesso')
    })

    it('Valida que o avaliador visualiza e responde o rescurso', () => {
        cy.loginWith(`${data.adminOpportunityEmail}`,`${data.adminOpportunityPassword}`)
        cy.visit(`/recursos/oportunidade/${data.opportunityNmber}`)
        cy.get(':nth-child(6) > .ng-scope > .fas').click()//Busca botão de abertura do recurso
        cy.get('.form-control.ng-binding').type('Resposta o recurso')
        cy.get('.ng-pristine').select('Deferido')
        cy.get('button:contains(Enviar resposta)').click()
        cy.wait(2000)
        cy.get('button:contains(Publicar Recursos)').click()
        cy.get('button:contains(Sim,Publicar)').click()
        cy.wait(2000)
        cy.get('.form-control.ng-binding')
            .should('be.visible', 'Recurso publicado')
        
    })

    it('Valida que o agente visualiza a resposta do avaliador', () => {
        cy.loginWith(`${data.agentEmail}`,`${data.agentPassword}`)
        cy.get('ul > :nth-child(9) > a').click()
        cy.get('tr > :nth-child(6) > a').click()
        cy.get('.swal2-html-container')
            .should('contain', `${data.recourseAnswer}`)        

    })   
    

})

