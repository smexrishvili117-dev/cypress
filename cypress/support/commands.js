Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login')
<<<<<<< HEAD
  cy.get('#loginFrm_loginname').type(username)
  cy.get('#loginFrm_password').type(password)
  cy.get('button[title="Login"]').click()
=======
  cy.get('#loginFrm_loginname').clear().type(username)
  cy.get('#loginFrm_password').clear().type(password)
  cy.get('button[type="submit"]').click()
  cy.url().should('include', 'account/account')
>>>>>>> main
})