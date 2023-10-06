import '@testing-library/cypress/add-commands'

describe('Misc Tests', () => {

  it('Full size', () => {
    cy.visitResponsive('/', 'large')

    cy.findByRole('link', { name: 'Trade' }).click()
    cy.findByRole('heading', { name: 'Leveraged forex on the world’s favorite trading platform' }).click()
    cy.findByRole('list').findByText('About us').click()
    cy.findByRole('link', { name: 'Who we are' }).click()
    cy.findByRole('heading', { name: 'Who we are' }).click()
    cy.findByRole('list').findByText('Resources').click()
    //cy.findByRole('link', { name: 'Who we are' }).click()     //Disappeared?
    //cy.findByRole('link', { name: 'Why choose us' }).click()  //Disappeared?
    cy.findByText('EN', { exact: true }).click()
    cy.findByRole('button', { name: 'Log in' }).click()
    //cy.findByText('traders', { exact: true }).click()   //Disappeared?
    cy.findByRole('heading', { name: '2.5M+' }).click()
    cy.findByText('Daily trades: Over 20 billion USD').click()
    cy.findByRole('heading', { name: 'Protected and secure' }).click()
    //cy.findByText('We are licensed and overseen by leading global financial authorities.').click()  //Disappeared?
    cy.findByRole('heading', { name: 'Regulated' }).click()
    cy.findByRole('heading', { name: 'Card Slider Title' }).click()
    cy.findByRole('heading', { name: 'Card 2' }).click()
    cy.get('.swiper-wrapper > div:nth-child(2) > div > div > .flex > .font-sans').click()
    cy.get('.swiper-slide > div > div > .flex > .font-sans').first().click()
    cy.get('div:nth-child(3) > div > div > .flex > .font-sans').click()
    cy.findByText('With 99.97% uptime, we process 5.6 million trades daily, offering seamless and u').click()
    cy.findByRole('heading', { name: 'Monthly deals' }).click()
    cy.findByRole('heading', { name: '168M+' }).click()
    cy.findByRole('heading', { name: '$48M+' }).click()
    cy.get('section').filter({ hasText: 'Fast, reliable forex trading platformAverage trade execution: Below 50msDaily tr' }).click()
    cy.get('section').filter({ hasText: 'Why trade forex with us Trade diverse forex assetsTrade over 50 forex pairs incl' }).click()
    cy.findByRole('navigation').findByText('About us').click()
    cy.findByRole('navigation').findByText('Resources').click()
    cy.findByText('items in this hero banner are not fully styled yet, we need buttons, inputs and ').click()
    cy.findByRole('button', { name: 'Create a demo account' }).click()
    cy.findByText('or sign up with').click()
    cy.findByRole('button', { name: 'Google' }).click()
    cy.findByRole('img', { name: 'hero 2' }).click()
    cy.findByText('50+trading assets').click()
    cy.get('.fixed > .w-screen').click()
    cy.get('.fixed > .w-screen').click()
    //cy.findByRole('link', { name: 'More on forex trading' }).nth(2).click() //TODO Not sure what the equivalent of this is for Cypress.
    cy.findByRole('img', { name: 'hero 2' }).click()
    cy.findByText('With 99.97% uptime, we process 5.6 million trades daily, offering seamless and u').click()
  })


})