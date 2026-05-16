describe('Test Cases 1 2 3', () => {

  beforeEach(function () {
    cy.fixture('data12').as('user')
  })

  // ტესტ ქეისი 1 - რეგისტრაცია
  it('Test Case 1: Register User', function () {
    cy.visit('https://automationexercise.com')
    cy.get('a[href="/login"]').click()
    cy.contains('New User Signup!').should('be.visible')

    cy.registerUser(this.user)

    cy.contains('Account Created!').should('be.visible')
    cy.get('[data-qa="continue-button"]').click()
    cy.contains('Logged in as').should('be.visible')
  })

  // ტესტ ქეისი 2 - სწორი მონაცემებით
  it('Test Case 2: Login User with correct email and password', function () {
    cy.visit('https://automationexercise.com/login')
    cy.loginUser(this.user.email, this.user.password)
    cy.contains('Logged in as').should('be.visible')
  })

  // ტესტ ქეისი 3 - არასწორი მონაცემებით
  it('Test Case 3: Login User with incorrect email and password', function () {
    cy.visit('https://automationexercise.com/login')
    cy.loginUser(this.user.incorrectEmail, this.user.incorrectPassword)
    cy.contains('Your email or password is incorrect!').should('be.visible')
  })

})
