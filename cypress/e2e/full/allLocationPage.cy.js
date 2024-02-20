import '@testing-library/cypress/add-commands'

//Malta
describe('QATEST-1750 - Location page - Malta', () => {
   it('should validate the malta location page in responsive', () => {
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionROW')}`)
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionEU')}`)
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
    })
   
   it('should validate the malta location page in desktop', () => {
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionROW')}`, 'desktop');
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionEU')}`, 'desktop');
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
     })
   
})

//Paris
describe('QATEST-1798 - Location page - Paris', () => {
    it('should validate the paris location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
     })
    
    it('should validate the paris location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
     })
    
 })
 
 //Dubai
 describe('QATEST-1742 - Location page - Dubai', () => {
    it('should validate the dubai location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
     })
     
    it('should validate the malta location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
     })
 })
 
 
 //Cyprus
 describe('QATEST-1758 - Location page - Cyprus', () => {
    it('should validate the cyprus location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
     })

    it('should validate the cyprus location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
     })
 })
 
 //Guernsey
 describe('QATEST-1806 - Location page - Guernsey', () => {
    it('should validate the guernsey location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
     })

    it('should validate the guernsey location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
     })
 
   
 })
 
 //Berlin
 describe('QATEST-1863 - Location page - Berlin', () => {
    it('should validate the berlin location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
     })

    it('should validate the berlin location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
     })
    
 })

 //Reading
 describe('QATEST-1871 - Location page - Reading', () => {
    it('should validate the reading location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
     })

     it('should validate the reading location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
     })
 
 })

 //Cyberjaya
 describe('QATEST-1766 - Location page - Cyberjaya', () => {
    it('should validate the cyberjaya location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
     })

     it('should validate the cyberjaya location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
     })
 
 })

 //Ipoh
 describe('QATEST-1782 - Location page - Ipoh', () => {
    it('should validate the ipoh location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
     })
    
     it('should validate the ipoh location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
     })
   
 })

//Melaka
describe('QATEST-1790 - Location page - Melaka', () => {
    it('should validate the melaka location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
     })

    it('should validate the melaka location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
     })
   
    
 })

 //Labuan
 describe('QATEST-1774 - Location page - Labuan', () => {
    it('should validate the labuan location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
     })
    
    it('should validate the labuan location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
     })
 
 })

 //Singapore
 describe('QATEST-1887 - Location page - Singapore', () => {
    it('should validate the singapore location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
     })

    it('should validate the singapore location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
     })
 
 })

 //Jordan
 describe('QATEST-1879 - Location page - Jordan', () => {
    it('should validate the jordan location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
     })
    
     it('should validate the jordan location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
     })
    
 })

 //Rwanda
 describe('QATEST-1822 - Location page - Rwanda', () => {
    it('should validate the rwanda location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
     })
 
    it('should validate the rwanda location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
     })
 })

 //Asunción
 describe('QATEST-1814 - Location page - Asunción', () => {
    it('should validate the asunción location page in responsive', () => {
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
     })
    
    it('should validate the asunción location page in desktop', () => {
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionEU')}`, 'desktop');
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
     })

 })