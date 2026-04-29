describe('SignUpForm', () => {
	const visitSignUpPage = () => {
		cy.visit('/login', {
			onBeforeLoad(win) {
				win.localStorage.setItem('i18nextLng', 'en')
			},
		})
		cy.contains('button', 'Create account').click()
	}

	beforeEach(() => {
		visitSignUpPage()
	})

	it('renders name, email and password fields with correct placeholders', () => {
		cy.get('input[placeholder="Name"]').should('be.visible')
		cy.get('input[placeholder="Email"]').should('be.visible')
		cy.get('input[placeholder="Password"]').should('be.visible')
	})

	it('renders create account button', () => {
		cy.get('button[type="submit"]').should('contain.text', 'Create account')
	})

	it('shows validation errors when fields are empty', () => {
		cy.get('button[type="submit"]').click()

		cy.contains('Name is required').should('be.visible')
		cy.contains('Email is required').should('be.visible')
		cy.contains('Password is required').should('be.visible')
	})

	it('shows invalid email format error for malformed email', () => {
		cy.get('input[placeholder="Name"]').type('User Name')
		cy.get('input[placeholder="Email"]').type('bad-email')
		cy.get('input[placeholder="Password"]').type('strongpass')
		cy.get('button[type="submit"]').click()

		cy.contains('Invalid email format').should('be.visible')
	})

	it('shows password minimum length error when password is too short', () => {
		cy.get('input[placeholder="Name"]').type('User Name')
		cy.get('input[placeholder="Email"]').type('user@example.com')
		cy.get('input[placeholder="Password"]').type('123')
		cy.get('button[type="submit"]').click()

		cy.contains('Minimum length is 6 characters').should('be.visible')
	})
})
