describe('Account Management', () => {

  beforeEach(() => {
    cy.login('salome', 'salome02042003')
  })

  it('should edit account details and verify changes are saved', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/edit')
    cy.get('#AccountFrm_firstname').clear().type('NewName')
    cy.get('#AccountFrm_lastname').clear().type('NewLastname')
    cy.get('button[title="Continue"]').click()
    cy.contains('Your account has been successfully updated.').should('be.visible')
    cy.visit('https://automationteststore.com/index.php?rt=account/edit')
    cy.get('#AccountFrm_firstname').should('have.value', 'NewName')
    cy.get('#AccountFrm_lastname').should('have.value', 'NewLastname')
  })

  it('should edit address', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/address')
    cy.contains('Edit').first().click()
    cy.get('#AddressFrm_firstname').clear().type('NewFirstName')
    cy.get('#AddressFrm_lastname').clear().type('NewLastName')
    cy.get('#AddressFrm_address_1').clear().type('123 Test Street')
    cy.get('#AddressFrm_city').clear().type('Tbilisi')
    cy.get('button[title="Continue"]').click()
    cy.contains('Your address has been successfully').should('be.visible')
  })

  it('should change password', () => {
    cy.visit('https://automationteststore.com/index.php?rt=account/password')
    cy.get('#AccountFrm_password').type('NewPassword123')
    cy.get('#AccountFrm_confirm').type('NewPassword123')
    cy.get('button[title="Continue"]').click()
    cy.contains('Your password has been successfully updated.').should('be.visible')
    cy.visit('https://automationteststore.com/index.php?rt=account/logout')
    cy.login('salome', 'NewPassword123')
    cy.url().should('include', 'account/account')
    cy.visit('https://automationteststore.com/index.php?rt=account/password')
    cy.get('#AccountFrm_password').type('salome02042003')
    cy.get('#AccountFrm_confirm').type('salome02042003')
    cy.get('button[title="Continue"]').click()
  })

})
