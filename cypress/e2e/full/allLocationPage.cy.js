import '@testing-library/cypress/add-commands'

//Malta
describe('QATEST-1750 - Location page - Malta', () => {
   it('should validate the malta location page in responsive', () => {
       cy.c_visitResponsive(`careers/locations/malta`)
       cy.c_waitForPageLoad()
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
       cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/malta`)
       cy.c_checkPageContent('Malta')
      //  cy.c_checkMap()
    })
   
   it('should validate the malta location page in desktop', () => {
       cy.c_visitResponsive(`careers/locations/malta`, 'desktop');
       cy.c_waitForPageLoad()
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
       cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/malta`, 'desktop');
       cy.c_checkPageContent('Malta')
      //  cy.c_checkMap()
     })
   
})

//Paris
describe('QATEST-1798 - Location page - Paris', () => {
    it('should validate the paris location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/paris`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/paris`)
        cy.c_checkPageContent('Paris')
      //   cy.c_checkMap()
     })
    
    it('should validate the paris location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/paris`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/paris`, 'desktop');
        cy.c_checkPageContent('Paris')
      //   cy.c_checkMap()
     })
    
 })
 
 //Dubai
 describe('QATEST-1742 - Location page - Dubai', () => {
    it('should validate the dubai location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/dubai`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/dubai`)
        cy.c_checkPageContent('Dubai')
      //   cy.c_checkMap()
     })
     
    it('should validate the malta location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/dubai`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/dubai`, 'desktop');
        cy.c_checkPageContent('Dubai')
      //   cy.c_checkMap()
     })
 })
 
 
 //Cyprus
 describe('QATEST-1758 - Location page - Cyprus', () => {
    it('should validate the cyprus location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/cyprus`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/cyprus`)
        cy.c_checkPageContent('Limassol')
      //   cy.c_checkMap()
     })

    it('should validate the cyprus location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/cyprus`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/cyprus`, 'desktop');
        cy.c_checkPageContent('Limassol')
      //   cy.c_checkMap()
     })
 })
 
 //Guernsey
 describe('QATEST-1806 - Location page - Guernsey', () => {
    it('should validate the guernsey location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/guernsey`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/guernsey`)
        cy.c_checkPageContent('Guernsey')
      //   cy.c_checkMap()
     })

    it('should validate the guernsey location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/guernsey`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/guernsey`, 'desktop');
        cy.c_checkPageContent('Guernsey')
      //   cy.c_checkMap()
     })
 
   
 })
 
 //Berlin
 describe('QATEST-1863 - Location page - Berlin', () => {
    it('should validate the berlin location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/berlin`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/berlin`)
        cy.c_checkPageContent('Berlin')
      //   cy.c_checkMap()
     })

    it('should validate the berlin location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/berlin`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/berlin`, 'desktop');
        cy.c_checkPageContent('Berlin')
      //   cy.c_checkMap()
     })
    
 })

 //Reading
 describe('QATEST-1871 - Location page - Reading', () => {
    it('should validate the reading location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/reading`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/reading`)
        cy.c_checkPageContent('Reading')
      //   cy.c_checkMap()
     })

     it('should validate the reading location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/reading`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/reading`, 'desktop');
        cy.c_checkPageContent('Reading')
      //   cy.c_checkMap()
     })
 
 })

 //Cyberjaya
 describe('QATEST-1766 - Location page - Cyberjaya', () => {
    it('should validate the cyberjaya location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/cyberjaya`)
        cy.c_checkPageContent('Cyberjaya')
      //   cy.c_checkMap()
     })

     it('should validate the cyberjaya location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/cyberjaya`, 'desktop');
        cy.c_checkPageContent('Cyberjaya')
      //   cy.c_checkMap()
     })
 
 })

 //Ipoh
 describe('QATEST-1782 - Location page - Ipoh', () => {
    it('should validate the ipoh location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/ipoh`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/ipoh`)
        cy.c_checkPageContent('Ipoh')
      //   cy.c_checkMap()
     })
    
     it('should validate the ipoh location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/ipoh`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/ipoh`, 'desktop');
        cy.c_checkPageContent('Ipoh')
      //   cy.c_checkMap()
     })
   
 })

//Melaka
describe('QATEST-1790 - Location page - Melaka', () => {
    it('should validate the melaka location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/melaka`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/melaka`)
        cy.c_checkPageContent('Melaka')
      //   cy.c_checkMap()
     })

    it('should validate the melaka location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/melaka`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/melaka`, 'desktop');
        cy.c_checkPageContent('Melaka')
      //   cy.c_checkMap()
     })
   
    
 })

 //Labuan
 describe('QATEST-1774 - Location page - Labuan', () => {
    it('should validate the labuan location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/labuan`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/labuan`)
        cy.c_checkPageContent('Labuan')
      //   cy.c_checkMap()
     })
    
    it('should validate the labuan location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/labuan`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/labuan`, 'desktop');
        cy.c_checkPageContent('Labuan')
      //   cy.c_checkMap()
     })
 
 })

 //Singapore
 describe('QATEST-1887 - Location page - Singapore', () => {
    it('should validate the singapore location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/singapore`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/singapore`)
        cy.c_checkPageContent('Singapore')
      //   cy.c_checkMap()
     })

    it('should validate the singapore location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/singapore`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/singapore`, 'desktop');
        cy.c_checkPageContent('Singapore')
      //   cy.c_checkMap()
     })
 
 })

 //Jordan
 describe('QATEST-1879 - Location page - Jordan', () => {
    it('should validate the jordan location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/jordan`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/jordan`)
        cy.c_checkPageContent('Amman')
      //   cy.c_checkMap()
     })
    
     it('should validate the jordan location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/jordan`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/jordan`, 'desktop');
        cy.c_checkPageContent('Amman')
      //   cy.c_checkMap()
     })
    
 })

 //Rwanda
 describe('QATEST-1822 - Location page - Rwanda', () => {
    it('should validate the rwanda location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/rwanda`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/rwanda`)
        cy.c_checkPageContent('Kigali')
      //   cy.c_checkMap()
     })
 
    it('should validate the rwanda location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/rwanda`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/rwanda`, 'desktop');
        cy.c_checkPageContent('Kigali')
      //   cy.c_checkMap()
     })
 })

 //Asunción
 describe('QATEST-1814 - Location page - Asunción', () => {
    it('should validate the asunción location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/asuncion`)
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/asuncion`)
        cy.c_checkPageContent('Asunción')
      //   cy.c_checkMap()
     })
    
    it('should validate the asunción location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/asuncion`, 'desktop');
        cy.c_waitForPageLoad()
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
        cy.c_visitResponsive(`${Cypress.env('RegionEU')}/careers/locations/asuncion`, 'desktop');
        cy.c_checkPageContent('Asunción')
      //   cy.c_checkMap()
     })

 })