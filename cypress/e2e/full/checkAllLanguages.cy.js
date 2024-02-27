import '@testing-library/cypress/add-commands'
import homePage from '../../support/POM/homePage'

const languageDetails = {
    '1453': {
        urlCode: 'es',
        testLanguage: 'SPANISH',
        languageSelector: 'Español',
        redirectionVerify: 'Únase a más de 2.5 millones de traders en línea',
        desktopVerify: 'ES'
    },
    '1460': {
        urlCode: 'fr',
        testLanguage: 'FRENCH',
        languageSelector: 'Français',
        redirectionVerify: 'Rejoignez plus de 2,5 millions de traders en ligne',
        desktopVerify: 'FR',
    },
    '1467': {
        urlCode: 'ko',
        testLanguage: 'KOREAN',
        languageSelector: '한국어',
        redirectionVerify: '250만 명 이상의 온라인 트레이더와 함께하세요',
        desktopVerify: 'KO',
    },
    '1474': {
        urlCode: 'ru',
        testLanguage: 'RUSSIAN',
        languageSelector: 'Русский',
        redirectionVerify: 'Более 2.5 миллионов онлайн-трейдеров',
        desktopVerify: 'RU',
    },
    '1481': {
        urlCode: 'it',
        testLanguage: 'ITALIANO',
        languageSelector: 'Italiano',
        redirectionVerify: 'Unisciti a oltre 2,5 milioni di trader online',
        desktopVerify: 'IT',
    },
    '1488': {
        urlCode: 'th',
        testLanguage: 'THAI',
        languageSelector: 'ไทย',
        redirectionVerify: 'เข้าร่วมกับเทรดเดอร์ออนไลน์มากกว่า 2.5 ล้านคน',
        desktopVerify: 'TH',
    },
    '1495': {
        urlCode: 'vi',
        testLanguage: 'VIETNAMESE',
        languageSelector: 'Tiếng Việt',
        redirectionVerify: 'Tham gia cùng với hơn 2,5 triệu trader online',
        desktopVerify: 'VI',
    },
    '101367': {
        urlCode: 'pl',
        testLanguage: 'POLSKI',
        languageSelector: 'Polski',
        redirectionVerify: 'Dołącz do ponad 2,5 miliona traderów online',
        desktopVerify: 'PL',
    },
    '101368': {
        urlCode: 'pt',
        testLanguage: 'PORTUGESE',
        languageSelector: 'Português',
        redirectionVerify: 'Junte-se a mais de 2,5 milhões de traders online',
        desktopVerify: 'PT',
    },
    '101369': {
        urlCode: 'tr',
        testLanguage: 'TURKISH',
        languageSelector: 'Türkçe',
        redirectionVerify: '2,5 milyondan fazla çevrimiçi yatırımcıya katılın',
        desktopVerify: 'TR',
    },
    '101578': {
        urlCode: 'zh-cn',
        testLanguage: 'SIMPLIFIED CHINESE',
        languageSelector: '简体中文',
        redirectionVerify: '加入 250 多万在线交易者的行列',
        desktopVerify: '简体',
    },
    '101579': {
        urlCode: 'zh-tw',
        testLanguage: 'TRADITIONAL CHINESE',
        languageSelector: '繁體中文',
        redirectionVerify: '加入超過 250 萬個在線交易者的隊伍',
        desktopVerify: '繁體',
    },
    '101580': {
        urlCode: 'bn',
        testLanguage: 'BENGALI',
        languageSelector: 'বাংলা',
        redirectionVerify: '2.5 মিলিয়নেরও বেশি অনলাইন ট্রেডারে যোগ',
        desktopVerify: 'BN',
    },
    '101581': {
        urlCode: 'ar',
        testLanguage: 'ARABIC',
        languageSelector: 'العربية',
        redirectionVerify: 'انضم إلى أكثر من 2.5 مليون متداول عبر الإنترنت',
        desktopVerify: 'AR',
    },
    '101582': {
        urlCode: 'de',
        testLanguage: 'DEUTSCH',
        languageSelector: 'Deutsch',
        redirectionVerify: 'Schließen Sie sich über 2,5 Millionen Online-Händlern an',
        desktopVerify: 'DE',
    },
    '101583': {
        urlCode: 'si',
        testLanguage: 'SINHALA',
        languageSelector: 'සිංහල',
        redirectionVerify: 'මිලියන 2.5 කට අධික අන්තර්ජාල ගනුදෙනුකරුවන් සමඟ සම්බන්ධ වන්න',
        desktopVerify: 'SI',
    },
}

const screenSizes = [
    'small',
    'desktop',
]

const redirectionRules = [
    '',
    '/',
    '?x=2',
    '/?x=2'
]

Object.entries(languageDetails).forEach((lang) => {
    describe(`QATEST-${lang[0]} - Language Selection is working:${lang[1].testLanguage}`, () => {
        beforeEach(() => {
            cy.clearAllCookies()
            cy.clearAllLocalStorage()
            cy.clearAllSessionStorage()
        })
        screenSizes.forEach(screenSize => {
            it(`it should verify language selection from UI on ${screenSize} size`, () => {
                cy.c_visitResponsive(`${Cypress.env('RegionDIEL')}`, screenSize)
                if (screenSize == 'small') {
                    homePage.elements.hamBurgerMenu().click()
                    cy.contains('English').click()
                    cy.contains(lang[1].languageSelector).click()
                    cy.location('href').should('contain', `/${lang[1].urlCode}`)
                    homePage.elements.hamBurgerMenu().click()
                    cy.contains(lang[1].languageSelector).should('exist')
                } else {
                    cy.get('[data-cy="desktop-header"]').contains('EN').trigger('mouseover', { timeout: 1000 })
                    cy.contains(lang[1].languageSelector).click()
                    cy.location('href').should('contain', `/${lang[1].urlCode}`)
                    cy.get('[data-cy="desktop-header"]').find('.items-center').should('contain.text', lang[1].desktopVerify)
                }

            })
        })
    })

})

describe(`QATEST-101611 - Url redirection for all languages`, () => {
    beforeEach(() => {
        cy.clearAllCookies()
        cy.clearAllLocalStorage()
        cy.clearAllSessionStorage()
    })
    Object.entries(languageDetails).forEach((lang) => {
        screenSizes.forEach(screenSize=>{
            it(`should verify language redrection for ${lang[1].testLanguage} via link for ${screenSize} size`, () => {
                redirectionRules.forEach(rule => {
                    cy.c_visitResponsive(`/${lang[1].urlCode}${rule}`,screenSize)
                    cy.get('[id="cta-container"]').within(() => {
                        cy.get('h2').should('contain.text', lang[1].redirectionVerify)
                    })
                })
            })
        })
    })
})