import '@testing-library/cypress/add-commands'

function checkPartnerEmailPage() {
  cy.url().should('include', '/signup-affiliates/')
  cy.title().should('eq', 'Be our partner | Partnership programmes | Deriv')
  cy.findByRole('heading', {
    name: 'Deriv Affiliate',
    exact: true,
  }).should('be.visible')
}

function enterEmail(email) {
  cy.findByPlaceholderText('Email').type(email)
  cy.findByRole('button', { name: 'Create partner account' }).click()
}

function validatePartnerForm(username) {
  const nextButton = cy.findByRole('button', { name: 'Next' })

  cy.findByRole('heading', {
    name: 'Choose the type of partner account you want to register',
  }).should('be.visible')
  cy.findByRole('heading', { name: 'Individual' }).click()
  nextButton.click()

  const townInput = cy.findByPlaceholderText('Town/city*')
  const streetInput = cy.findByPlaceholderText('Street*')
  const postalInput = cy.findByPlaceholderText('Postal/Zip code')

  function inputFieldDetails(inputElement, value, expectedError = '') {
    inputElement.clear().type(value)
    if (expectedError !== '') {
      cy.contains(expectedError).should('be.visible') // Check for error message
      cy.findByRole('button', { name: 'Next' }).should('be.disabled')
    }
  }

  cy.findByPlaceholderText('Country of residence*').click()
  cy.get('#Afghanistan').click()
  cy.findByPlaceholderText('State/province*').click()
  cy.get('#Badakhshān').click()

  // Town field validations
  inputFieldDetails(townInput, 'a', 'You should enter 2-50 characters')
  inputFieldDetails(
    townInput,
    ''.padEnd(51, 'a'),
    'You should enter 2-50 characters'
  )
  inputFieldDetails(townInput, 'test@', 'Only Latin characters')
  inputFieldDetails(townInput, '{backspace}', 'City is required')

  // Valid town inputs
  inputFieldDetails(townInput, 'Valid-Town')
  inputFieldDetails(townInput, 'Another-Valid-Town')

  // Street field validations
  inputFieldDetails(streetInput, 'a', 'You should enter 2-50 characters')
  inputFieldDetails(
    streetInput,
    ''.padEnd(51, 'a'),
    'You should enter 2-50 characters'
  )
  inputFieldDetails(streetInput, 'test@', 'Only Latin characters')
  inputFieldDetails(streetInput, '      ', 'Please enter a valid street')

  // Valid street inputs
  inputFieldDetails(streetInput, 'ValidStreet')
  inputFieldDetails(streetInput, 'Another Valid Street')
  inputFieldDetails(streetInput, 'Test-Street')
  inputFieldDetails(streetInput, 'Multiple-Words-Street')

  // Postal field validations
  inputFieldDetails(
    postalInput,
    'a',
    'You should enter 2-10 numbers, characters'
  )
  inputFieldDetails(
    postalInput,
    ''.padEnd(11, 'a'),
    'You should enter 2-10 numbers, characters'
  )
  inputFieldDetails(
    postalInput,
    'test@',
    'You should enter 2-10 numbers, characters.'
  )

  // Valid postal code inputs
  inputFieldDetails(postalInput, 'ValidPostalCode123')
  inputFieldDetails(postalInput, 'AnotherValidPC-456')
  inputFieldDetails(postalInput, 'Test123')
  inputFieldDetails(postalInput, 'Test-456')

  nextButton.click()

  const firstNameInput = cy.findByPlaceholderText('First name*')
  const lastNameInput = cy.findByPlaceholderText('Last name*')
  const mobileInput = cy.findByPlaceholderText('Phone number*')
  const websiteInput = cy.findByPlaceholderText('Website/social media URL*')
  const secondWebsiteInput = cy.findByPlaceholderText(
    'Second website/social media URL'
  )
  const usernameInput = cy.findByPlaceholderText('Username*')
  const passwordInput = cy.findByPlaceholderText('Password*')
  const today = new Date()
  const updatedDate = new Date(
    today.getFullYear() - 18,
    today.getMonth(),
    today.getDate()
  )
  const formattedDate = `${updatedDate.getDate()} ${updatedDate.toLocaleString('default', { month: 'long' })} ${updatedDate.getFullYear()}`

  inputFieldDetails(firstNameInput, 'a', 'You should enter 2-50 characters')
  inputFieldDetails(
    firstNameInput,
    ''.padEnd(51, 'a'),
    'You should enter 2-50 characters'
  )
  inputFieldDetails(firstNameInput, '123', 'Only Latin and Alphabet characters')
  inputFieldDetails(firstNameInput, '{backspace}', 'First Name is required')

  // Valid first name inputs
  inputFieldDetails(firstNameInput, 'Test-test')
  inputFieldDetails(firstNameInput, 'test')

  // Last name field validations
  inputFieldDetails(lastNameInput, 'a', 'You should enter 2-50 characters')
  inputFieldDetails(
    lastNameInput,
    ''.padEnd(51, 'a'),
    'You should enter 2-50 characters'
  )
  inputFieldDetails(lastNameInput, '123', 'Only Latin and Alphabet characters')
  inputFieldDetails(lastNameInput, '{backspace}', 'Last Name is required')

  // Valid last name inputs
  inputFieldDetails(lastNameInput, 'Test-test')
  inputFieldDetails(lastNameInput, 'test')

  cy.findByRole('button', { name: 'calendar icon' }).click()
  cy.findByRole('button', { name: formattedDate, exact: true }).click()

  // Mobile field validations
  inputFieldDetails(mobileInput, '++123456789', 'You should enter 8-13 numbers')
  inputFieldDetails(mobileInput, '1234567', 'You should enter 8-13 numbers')
  inputFieldDetails(
    mobileInput,
    '1234567890123456',
    'You should enter 8-13 numbers'
  )
  inputFieldDetails(mobileInput, '123abc456', 'You should enter 8-13 numbers')
  inputFieldDetails(mobileInput, '123+456', 'You should enter 8-13 numbers')
  inputFieldDetails(mobileInput, '0122 22', 'You should enter 8-13 numbers')
  inputFieldDetails(mobileInput, '12345678')
  inputFieldDetails(mobileInput, '1234567890123')

  // Website field validations
  inputFieldDetails(websiteInput, 'a', 'You should enter 2-50 characters')
  inputFieldDetails(
    websiteInput,
    ''.padEnd(51, 'a'),
    'You should enter 2-50 characters'
  )
  inputFieldDetails(websiteInput, '?$url', 'Please enter a valid url')
  inputFieldDetails(websiteInput, 'test test.com', 'Please enter a valid url')
  inputFieldDetails(websiteInput, '{backspace}')
  inputFieldDetails(websiteInput, 'http://example.com/example/')

  // Second website field validations (optional)
  inputFieldDetails(secondWebsiteInput, 'a', 'Please enter a valid url')
  inputFieldDetails(
    secondWebsiteInput,
    ''.padEnd(51, 'a'),
    'Please enter a valid url'
  )
  inputFieldDetails(secondWebsiteInput, '?$url', 'Please enter a valid url')
  inputFieldDetails(
    secondWebsiteInput,
    'test test.com',
    'Please enter a valid url'
  )
  inputFieldDetails(secondWebsiteInput, 'http://example.com/example/')

  // Username field validations
  inputFieldDetails(
    usernameInput,
    'ab',
    'Please enter 3-20 Latin characters, numbers'
  )
  inputFieldDetails(
    usernameInput,
    ''.padEnd(22, 'a'),
    'Please enter 3-20 Latin characters, numbers'
  )
  inputFieldDetails(
    usernameInput,
    'test@01',
    'Please enter 3-20 Latin characters, numbers'
  )
  inputFieldDetails(
    usernameInput,
    'test user',
    'Please enter 3-20 Latin characters, numbers'
  )
  inputFieldDetails(usernameInput, '{backspace}', 'Username is required')
  inputFieldDetails(usernameInput, '123456')
  inputFieldDetails(usernameInput, 'test01')

  // Password field validations
  inputFieldDetails(passwordInput, 'abcd', 'You should enter 8-50 characters')
  inputFieldDetails(
    passwordInput,
    ''.padEnd(51, 'a'),
    'You should enter 8-50 characters'
  )
  inputFieldDetails(
    passwordInput,
    'Abcd@1234',
    'Password should have lower and uppercase English letters with numbers.'
  )
  inputFieldDetails(
    passwordInput,
    'ABCDEFGH',
    'Password should have lower and uppercase English letters with numbers.'
  )
  inputFieldDetails(
    passwordInput,
    'abcdefgh',
    'Password should have lower and uppercase English letters with numbers.'
  )
  inputFieldDetails(
    passwordInput,
    '12345678',
    'Password should have lower and uppercase English letters with numbers.'
  )
  inputFieldDetails(passwordInput, '{backspace}')
  inputFieldDetails(passwordInput, 'Abcd1234')

  nextButton.click()

  cy.findByRole('heading', {
    name: 'Choose which plan you would like to subscribe.',
  }).should('be.visible')
  cy.findByRole('heading', { name: 'Revenue share' }).click()

  nextButton.click()

  cy.findByRole('heading', {
    name: 'Real accounts are not available to politically exposed persons (PEPs).',
  }).should('be.visible')
  cy.get('input[type="checkbox"]').first().check({ force: true })
  cy.get('input[type="checkbox"]').eq(1).check({ force: true })
  cy.get('input[type="checkbox"]').eq(2).check({ force: true })

  cy.findByRole('button', { name: 'Submit' }).click()

  cy.findByRole('heading', { name: 'Signup failed' }).should('be.visible')

  cy.findByPlaceholderText('Username*').clear().type('test01')

  cy.findByRole('button', { name: 'Change username' }).click()

  cy.findByPlaceholderText('Username*').clear().type(username)

  cy.findByRole('button', { name: 'Change username' }).click()

  cy.findByRole('heading', { name: 'Thank you for signing up' }).should(
    'be.visible'
  )

  cy.findByRole('button', { name: 'Got it' }).click()

  cy.findByRole('heading', {
    name: 'Partner with a trusted online trading provider',
  }).should('be.visible')
}

describe('QATEST-103493 - should validate the Partners form in responsive', () => {
  it(
    'should be able to navigate to Partners form and validate form in responsive for ROW',
    { tags: ['@full-tests', '@row-tests'] },
    () => {
      cy.c_visitResponsive('/signup-affiliates', { waitLoad: true })
      checkPartnerEmailPage()
      cy.c_generateRandomEmail('@test.com').then((email) => {
        enterEmail(email)
      })
      cy.c_generateRandomUsername().then((username) => {
        validatePartnerForm(username)
      })
    }
  )

  it(
    'should be able to navigate to Partners form and validate the form in responsive for EU',
    { tags: ['@full-tests', '@eu-tests'] },
    () => {
      cy.c_visitResponsive(`${Cypress.env('RegionEU')}/signup-affiliates`, {
        waitLoad: true,
      })
      checkPartnerEmailPage()
      cy.c_generateRandomEmail('@test.com').then((email) => {
        enterEmail(email)
      })
      cy.c_generateRandomUsername().then((username) => {
        validatePartnerForm(username)
      })
    }
  )
})

describe('QATEST-103493 - should validate the Partners form in desktop', () => {
  it('should be able to navigate to Partners form and validate the form in desktop for ROW', () => {
    cy.c_visitResponsive('/signup-affiliates', { size: 'desktop' })
    checkPartnerEmailPage()
    cy.c_generateRandomEmail('@test.com').then((email) => {
      enterEmail(email)
    })
    cy.c_generateRandomUsername().then((username) => {
      validatePartnerForm(username)
    })
  })

  it('should be able to navigate to Partners form and validate the form in desktop for EU', () => {
    cy.c_visitResponsive(`${Cypress.env('RegionEU')}/signup-affiliates`, {
      size: 'desktop',
    })
    checkPartnerEmailPage()
    cy.c_generateRandomEmail('@test.com').then((email) => {
      enterEmail(email)
    })
    cy.c_generateRandomUsername().then((username) => {
      validatePartnerForm(username)
    })
  })
})
