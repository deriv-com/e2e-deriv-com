import '@testing-library/cypress/add-commands'

//Malta
describe('QATEST-1750 - Location page - Malta in responsive', () => {
   it('should validate the malta location page for ROW', () => {
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionROW')}`)
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
    })

   it('should validate the malta location page for EU', () => {
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionEU')}`)
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
     })
})

describe('QATEST-1750 - Location page - Malta in desktop', () => {
   it('should validate the malta location page for ROW', () => {
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionROW')}`, 'desktop');
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
    })

   it('should validate the malta location page for EU', () => {
       cy.c_visitResponsive(`careers/locations/malta/${Cypress.env('RegionROW')}`, 'desktop');
       cy.c_checkPageContent('Malta')
       cy.c_checkMap()
     })
})

//Paris
describe('QATEST-1798 - Location page - Paris in responsive', () => {
    it('should validate the paris location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
     })
 
    it('should validate the paris location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
      })
 })
 
 describe('QATEST-1798 - Location page - Paris in desktop', () => {
    it('should validate the malta location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
     })
 
    it('should validate the paris location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/paris/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Paris')
        cy.c_checkMap()
      })
 })

 //Dubai
 describe('QATEST-1742 - Location page - Dubai in responsive', () => {
    it('should validate the dubai location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
     })
 
    it('should validate the dubai location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
      })
 })
 
 describe('QATEST-1742 - Location page - Dubai in desktop', () => {
    it('should validate the malta location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
     })
 
    it('should validate the dubai location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/dubai/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Dubai')
        cy.c_checkMap()
      })
 })

 //Cyprus
 describe('QATEST-1758 - Location page - Cyprus in responsive', () => {
    it('should validate the cyprus location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
     })
 
    it('should validate the cyprus location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
      })
 })
 
 describe('QATEST-1758 - Location page - Cyprus in desktop', () => {
    it('should validate the cyprus location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
     })
 
    it('should validate the cyprus location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/cyprus/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Limassol')
        cy.c_checkMap()
      })
 })

 //Guernsey
 describe('QATEST-1806 - Location page - Guernsey in responsive', () => {
    it('should validate the cyprus location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
     })
 
    it('should validate the cyprus location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
      })
 })
 
 describe('QATEST-1806 - Location page - Cyprus in desktop', () => {
    it('should validate the cyprus location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
     })
 
    it('should validate the cyprus location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/guernsey/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Guernsey')
        cy.c_checkMap()
      })
 })

 //Berlin
 describe('QATEST-1863 - Location page - Berlin in responsive', () => {
    it('should validate the berlin location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
     })
 
    it('should validate the berlin location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1863 - Location page - Berlin in desktop', () => {
    it('should validate the berlin location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
     })
 
    it('should validate the berlin location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/berlin/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Berlin')
        cy.c_checkMap()
      })
 })

 //Reading
 describe('QATEST-1871 - Location page - Reading in responsive', () => {
    it('should validate the reading location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
     })
 
    it('should validate the reading location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1871 - Location page - Reading in desktop', () => {
    it('should validate the reading location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
     })
 
    it('should validate the reading location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/reading/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Reading')
        cy.c_checkMap()
      })
 })

 //Cyberjaya
 describe('QATEST-1766 - Location page - Cyberjaya in responsive', () => {
    it('should validate the cyberjaya location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
     })
 
    it('should validate the cyberjaya location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1766 - Location page - Cyberjaya in desktop', () => {
    it('should validate the cyberjaya location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
     })
 
    it('should validate the cyberjaya location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/cyberjaya/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Cyberjaya')
        cy.c_checkMap()
      })
 })

 //Ipoh
 describe('QATEST-1782 - Location page - Ipoh in responsive', () => {
    it('should validate the ipoh location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
     })
 
    it('should validate the ipoh location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1782 - Location page - Ipoh in desktop', () => {
    it('should validate the ipoh location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
     })
 
    it('should validate the ipoh location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/ipoh/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Ipoh')
        cy.c_checkMap()
      })
 })

//Melaka
describe('QATEST-1790 - Location page - Melaka in responsive', () => {
    it('should validate the melaka location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
     })
 
    it('should validate the melaka location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1790 - Location page - Melaka in desktop', () => {
    it('should validate the melaka location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
     })
 
    it('should validate the melaka location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/melaka/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Melaka')
        cy.c_checkMap()
      })
 })

 //Labuan
 describe('QATEST-1774 - Location page - Labuan in responsive', () => {
    it('should validate the labuan location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
     })
 
    it('should validate the labuan location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1774 - Location page - Labuan in desktop', () => {
    it('should validate the labuan location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
     })
 
    it('should validate the labuan location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/labuan/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Labuan')
        cy.c_checkMap()
      })
 })

 //Singapore
 describe('QATEST-1887 - Location page - Singapore in responsive', () => {
    it('should validate the singapore location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
     })
 
    it('should validate the singapore location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1887 - Location page - Singapore in desktop', () => {
    it('should validate the singapore location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
     })
 
    it('should validate the singapore location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/singapore/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Singapore')
        cy.c_checkMap()
      })
 })

 //Jordan
 describe('QATEST-1879 - Location page - Jordan in responsive', () => {
    it('should validate the jordan location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
     })
 
    it('should validate the jordan location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1895 - Location page - Jordan in desktop', () => {
    it('should validate the jordan location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
     })
 
    it('should validate the jordan location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/jordan/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Amman')
        cy.c_checkMap()
      })
 })

 //Rwanda
 describe('QATEST-1822 - Location page - Rwanda in responsive', () => {
    it('should validate the rwanda location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
     })
 
    it('should validate the rwanda location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1822 - Location page - Rwanda in desktop', () => {
    it('should validate the rwanda location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
     })
 
    it('should validate the rwanda location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/rwanda/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Kigali')
        cy.c_checkMap()
      })
 })

 //Asunción
 describe('QATEST-1814 - Location page - Asunción in responsive', () => {
    it('should validate the asunción location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionROW')}`)
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
     })
 
    it('should validate the asunción location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionEU')}`)
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
      })
 })

 describe('QATEST-1814 - Location page - Asunción in desktop', () => {
    it('should validate the asunción location page for ROW', () => {
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
     })
 
    it('should validate the asunción location page for EU', () => {
        cy.c_visitResponsive(`careers/locations/asuncion/${Cypress.env('RegionROW')}`, 'desktop');
        cy.c_checkPageContent('Asunción')
        cy.c_checkMap()
      })
 })