it.skip('Register',function(){

    //Criando uma novo evento
    cy.get(':nth-child(1) > :nth-child(1) > :nth-child(2) > .icon')
      .click()
      .get('div[class="entity-modal has-step js-dialog "')
      .get('input[name="name"]')
      .click().and().type('Teste')
     
   })