class footer {
  elements = {
    termsAndConditionLink: () =>
      cy.findByRole('link', { name: 'Terms and conditions' }),
    secureAndRespTradingLink: () =>
      cy.findByRole('link', { name: 'Secure and responsible trading' }),
    riskDisclosureLink: () =>
      cy.findByRole('link', { name: 'Risk disclosure' }),
    dfxLicenceLink: () => cy.findAllByRole('link', { name: 'licence' }).eq(0),
    bviLicenceLink: () => cy.findAllByRole('link', { name: 'licence' }).eq(1),
    vanuatuLicenceLink: () =>
      cy.findAllByRole('link', { name: 'licence' }).eq(2),
    dielLicenceLink: () => cy.findByRole('link', { name: '(licence)' }),
    derivLogo: () => cy.findByRole('img', { name: 'deriv logo image' }),
    cookiesAcceptButton: () => cy.findByRole('button', { name: 'Accept' }),
    proceedButton: () => cy.findByRole('button', { name: 'Proceed' }),
    alertDialog: () =>
      cy.findByRole('alertdialog', { name: 'Redirect notice' }),
    alertRedirectMessage: () =>
      cy
        .findByRole('alertdialog')
        .findByText('You are being redirected to an external website.'),
    cfdFloatingBannerLink: () =>
      cy.findByRole('link', {
        name: '71% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here.',
      }),
  }

  riskDisclosurePdf = {
    eu: '/tnc/eu/risk-disclosure.pdf',
    row: '/tnc/risk-disclosure.pdf',
  }

  licencePdf = {
    dfx: '/regulatory/Deriv_(FX)_Ltd.pdf',
    bvi: '/regulatory/Deriv_(BVI)_Ltd.pdf',
    vanuatu: '/regulatory/Deriv_(V)_Ltd.pdf',
    diel: '/regulatory/Deriv_Investments_(Europe)_Limited.pdf',
  }

  socialMediaLinks = {
    facebookLogo: () => cy.findByRole('link', { name: '_t_Facebook_t_' }),
    instagramLogo: () => cy.findByRole('link', { name: '_t_Instagram_t_' }),
    twitterLogo: () => cy.findByRole('link', { name: '_t_Twitter_t_' }),
    youtubeLogo: () => cy.findByRole('link', { name: '_t_Youtube_t_' }),
    linkedInLogo: () => cy.findByRole('link', { name: '_t_Linkedin_t_' }),
  }

  areSocialLinksVisible() {
    this.socialMediaLinks.facebookLogo().should('be.visible')
    this.socialMediaLinks.instagramLogo().should('be.visible')
    this.socialMediaLinks.twitterLogo().should('be.visible')
    this.socialMediaLinks.youtubeLogo().should('be.visible')
    this.socialMediaLinks.linkedInLogo().should('be.visible')
  }

  areSocialLinksCorrect(socialLink, socialWebsiteUrl) {
    socialLink().click()
    this.elements.alertDialog().should('be.visible')
    this.elements.alertRedirectMessage().should('be.visible')
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    this.elements.proceedButton().click()
    cy.reload()
    cy.get('@windowOpen').should('be.calledWith', socialWebsiteUrl)
  }
}

module.exports = new footer()
