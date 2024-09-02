/// < reference types="Cypress"/>
describe('template spec', () => {
    beforeEach(() => {
        cy.viewport(1900,1080)
    })

    const agentEmail = "test@sample.com"
    const agentPassword = "Password"
   
    it('Login com credenciais válidas', () => {
        cy.loginWith(`${agentEmail}`,`${agentPassword}`)
        

    })

})






