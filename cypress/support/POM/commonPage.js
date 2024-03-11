class footer {
  elements = {
    termsAndConditionLink: () =>
      cy.findByRole('link', { name: 'Terms and conditions' }),
    secureAndRespTradingLink: () =>
      cy.findByRole('link', { name: 'Secure and responsible trading' }),
    riskDisclosureLink: () =>
      cy.findByRole('link', { name: 'Risk disclosure' }),

    dielLicenceText: () => cy.findByText('Deriv Investments (Europe) Limited is licensed and regulated by the Malta Financial Services Authority under the Investment Services Act.'),
    dfxLicenceText: () => cy.findByText('Deriv (FX) Ltd is licensed by the Labuan Financial Services Authority.'),
    bviLicenceText: () => cy.findByText('Deriv (BVI) Ltd is licensed by the British Virgin Islands Financial Services Commission.'),
    vanuatuLicenceText: () => cy.findByText('Deriv (V) Ltd is licensed and regulated by the Vanuatu Financial Services Commission.'),
    svgLicenceText: () => cy.findByText('Deriv (SVG) LLC has a registered office at First Floor, SVG Teachers Credit Union Uptown Building, Corner of James and Middle Street, Kingstown P.O., St Vincent and the Grenadines.'),
    derivLimitedLicenceText: () => cy.findByText('Deriv.com Limited, a company registered in Guernsey, is the holding company for these entities.'),

    dfxLicenceLink: () => cy.findAllByRole('link', { name: '(licence)' }).first(),
    bviLicenceLink: () => cy.findAllByRole('link', { name: '(licence)' }).eq(1),
    vanuatuLicenceLink: () =>
      cy.findAllByRole('link', { name: '(licence)' }).eq(2),
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
      cy.contains('% of retail investor accounts lose money when trading CFDs with Deriv, read our full Risk disclosure here'),
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

  socialMediaLinks =
    {
      facebookLogo: () => cy.get('[data-cy="facebook"]'),
      instagramLogo: () => cy.get('[data-cy="instagram"]'),
      twitterLogo: () => cy.get('[data-cy="twitter"]'),
      youtubeLogo: () => cy.get('[data-cy="youtube"]'),
      linkedInLogo: () => cy.get('[data-cy="linkedin"]'),
      telegramLogo: () => cy.get('[data-cy="telegram"]'),
    }

  areSocialLinksVisible() {
    this.socialMediaLinks.facebookLogo().should('be.visible')
    this.socialMediaLinks.instagramLogo().should('be.visible')
    this.socialMediaLinks.twitterLogo().should('be.visible')
    this.socialMediaLinks.youtubeLogo().should('be.visible')
    this.socialMediaLinks.linkedInLogo().should('be.visible')
    this.socialMediaLinks.telegramLogo().should('be.visible')
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
    cy.c_waitForPageLoad()
    cy.get('@windowOpen').should('be.calledWith', socialWebsiteUrl)
  }
}

module.exports = new footer()
