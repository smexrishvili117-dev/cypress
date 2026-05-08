Cypress.Commands.add('login', (username, password) => {
  cy.visit('https://automationteststore.com/index.php?rt=account/login')
  cy.get('#loginFrm_loginname').should('be.visible').clear().type(username, { delay: 100 })
  cy.get('#loginFrm_password').should('be.visible').clear().type(password, { delay: 100 })
  cy.get('#loginFrm').find('button[type="submit"]').click()
  cy.url({ timeout: 15000 }).should('include', 'account/account')
})
