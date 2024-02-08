const locationAddress = {
    Malta     : {address: "Level 3, W Business Centre,", place:'(Europe) Ltd',},
    Dubai     : {address: "Office 1902, Jumeirah Business", place:'DMCC',},
    Paris     : {address: "17 Rue d'Antin, 75002 Paris", place:'(France) SAS',},
    Limassol  : {address: "181, Leoforos Archiepiskopou Makariou III Avenue 15 Business Centre, 1st Floor, 3030, Limassol Cyprus", place:'Operations (Cyprus) Ltd',},
    Guernsey  : {address: "Suite 5, One Cornet Street, St Peter Port, Guernsey GY1 1 BZ", place:'(Guernsey) Ltd',},
    Berlin    : {address: "Kemperplatz 1 Mitte D, 10785 Berlin, Germany", place:'Services GmbH',},
    Reading   : {address: "Suite 1, Ground Floor, Block D, Apex, Forbury Road, Reading RG1 1AX", place:'Technologies Ltd',},
    Cyberjaya : {address: "Deriv HQ, 3500, Jalan Teknokrat 3, 63000 Cyberjaya, Selangor", place:'Services Sdn Bhd',},
    Ipoh      : {address: "E-5-6, Soho Ipoh 2,", place:'Services Sdn Bhd',},
    Melaka    : {address: "67-1 & 69-1, Jalan KLJ 6, Taman Kota", place:'Services Sdn Bhd',},
    Labuan    : {address: "F16, 1st Floor, Paragon Labuan,", place:'(FX) Ltd',},
    Singapore : {address: "80 Robinson Road, #11-03, Singapore 068898", place:'(SG) Pte Ltd',},
    Vanuatu   : {address: "Yumiwork, Lolam building, Kumul Highway, Land # 11/OD22/021, Port Vila, Vanuatu.", place:'Operations (V) Ltd',},
    Amman     : {address: "AJIB Building, No 12A & 12B, 3rd Floor, Al Bonouk Street, Al Abdali Boulevard, Amman - Jordan.", place:'Group Ltd Jordan LLC (Exempt)',},
    Kigali    : {address: "Level 2 East Wing, Kigali Heights, KG7", place:'(RW) Ltd',},
    Asunción  : {address: "Edificio Atrium, Piso 2, Guido Spano Esq.", place:'Paraguay S.A.',},
};


Cypress.Commands.add('c_checkPageContent',(location) => {
    cy.findByRole('heading', { name: `${location}`, exact: true }).should('be.visible')
    cy.findByRole('heading', { name: `Deriv in ${location}` }).should('be.visible')
    cy.findByRole('heading', { name: `Working at Deriv ${locationAddress[location].place}`}).should('be.visible')
    cy.findByRole('link', { name: `View open positions in ${location}`}).should('be.visible')
    cy.findByText(locationAddress[location].address).should('be.visible')
})

Cypress.Commands.add('c_checkMap',(view) => {
    cy.findByRole('img', { name: "map pin"}).scrollIntoView({ force: true }).should('be.visible')
    cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('#mapDiv').should('be.visible')
    //cy.iframe('._location-layout__Iframe-sc-17k1bne-12').contains("View larger map", { timeout: 10000 }).should('be.visible').click()
    if(view === 'desktop')
       {
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('[title="Zoom in"]').should('be.visible').click()
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').find('[title="Zoom out"]').should('be.visible').click()
       cy.iframe('._location-layout__Iframe-sc-17k1bne-12').contains("Directions").should('be.visible').click()
       }
 })