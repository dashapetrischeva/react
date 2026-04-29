describe('DreamForm', () => {
  const visitDreamForm = () => {
    cy.visit('/dreams/new', {
      onBeforeLoad(win) {
        win.localStorage.setItem('i18nextLng', 'en')
      },
    })
  }

  beforeEach(() => {
    visitDreamForm()
  })

  it('renders the dream form with all fields', () => {
    cy.contains('Create new dream').should('be.visible')
    cy.contains('label', 'Dream description').should('be.visible')
    cy.contains('label', 'Achieve dreams year').should('be.visible')
    cy.contains('label', 'Friend').should('be.visible')
    cy.get('button[type=submit]').should('contain.text', 'Add')
  })

  it('shows validation errors when required fields are empty', () => {
    cy.contains('label', 'Achieve dreams year')
      .parent()
      .find('input')
      .clear()

    cy.get('button[type=submit]').click()

    cy.contains('Description is required').should('be.visible')
    cy.contains('Year is required').should('be.visible')
  })

  it('accepts valid values and does not display validation errors', () => {
    cy.contains('label', 'Dream description')
      .parent()
      .find('textarea')
      .clear()
      .type('Explore Cypress testing for dream forms')

    cy.contains('label', 'Achieve dreams year')
      .parent()
      .find('input')
      .clear()
      .type('2040')

    cy.contains('label', 'Friend')
      .parent()
      .find('input')
      .clear()
      .type('Alex')

    cy.get('button[type=submit]').should('not.be.disabled').click()

    cy.contains('Description is required').should('not.exist')
    cy.contains('Year is required').should('not.exist')
  })
})
