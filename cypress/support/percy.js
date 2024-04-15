Cypress.Commands.add('snapshot',(pageName,viewport)=>{
    if (viewport == 'mobile') {
     cy.percySnapshot(pageName, { widths: [400] })
    } else if (viewport == 'medium'){ 
    cy.percySnapshot(pageName, { widths: [800] })}
    else if (viewport == 'desktop'){
        cy.percySnapshot(pageName, { widths: [3072] })} 
    })
