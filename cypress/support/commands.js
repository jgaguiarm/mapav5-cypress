// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// const { log } = require("cypress/lib/logger");

Cypress.Commands.add('loginFake', (username) => {
  const loginFake = () => {
    cy.visit('/autenticacao/')
    .get('input[id="agentFilter"]')
    .type(username,'Enter')
    .get('input[type="radio"]').eq(0)
    .check()
    .get('input[value="Logar"]')
    .click()

  }
  cy.session(username, loginFake)
});

Cypress.Commands.add('loginWith', (username,password) => {
  const loginWith = () => {    
    cy.visit('/autenticacao')
      .get('#email').type(username)
      .get('#password').type(password, {log: false})
    cy.solveGoogleReCAPTCHA()
    cy.wait(3000)
    cy.get('.login-options > form > .submit-options > input').click() 
  }

  cy.session(username, loginWith)
})

Cypress.Commands.add('solveGoogleReCAPTCHA', () => {
  // Wait until the iframe (Google reCAPTCHA) is totally loaded
  cy.wait(500);
  cy.get('.g-recaptcha *> iframe')
    .then($iframe => {
      const $body = $iframe.contents().find('body');
      cy.wrap($body)
        .find('.recaptcha-checkbox-border')
        //.should('be.visible')
        .eq(0)
        .click({multiple:true},{force:true})        
        
});
    
});

Cypress.Commands.add('agentSubscribe', () => {
  let oppdata;
  let agtdata;

  cy.fixture('agentProfileData')
    .then((data) => {
      for (let agent of data.profiles.agents){
        cy.log(agent);
        cy.loginWith(`${agent.email}`,`${agent.password}`);
      }
    })
    
  cy.fixture('opportunityData')
    .then((data) => {
      oppdata = data;
    })

  // for (let agente in agtdata.profiles){
  //   cy.loginWith(`${agente.agentName}`,`${agente.adminOpportunityPassword}`);
  // }
  
  
});




