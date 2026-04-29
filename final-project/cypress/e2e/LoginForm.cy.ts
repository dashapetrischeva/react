describe('LoginForm', () => {
	const visitLoginPage = () => {
		cy.visit('/login', {
			onBeforeLoad(win) {
				win.localStorage.setItem('i18nextLng', 'en')
			},
		})
	}

	beforeEach(() => {
		visitLoginPage()
	})

	it('renders email and password inputs with correct placeholders', () => {
		cy.get('input[type="email"]').should('have.attr', 'placeholder', 'Email')
		cy.get('input[type="password"]').should('have.attr', 'placeholder', 'Password')
	})

	it('renders login and google buttons', () => {
		cy.get('button[type="submit"]').should('contain.text', 'Login')
		cy.contains('button', 'Google').should('be.visible')
	})

	it('shows validation errors when fields are empty', () => {
		cy.get('button[type="submit"]').click()

		cy.contains('Email is required').should('be.visible')
		cy.contains('Password is required').should('be.visible')
	})

	it('shows invalid email format error for malformed email', () => {
		cy.get('input[type="email"]').type('not-an-email')
		cy.get('input[type="password"]').type('correct123')
		cy.get('button[type="submit"]').click()

		cy.contains('Invalid email format').should('be.visible')
	})

	it('shows password minimum length error when password is too short', () => {
		cy.get('input[type="email"]').type('user@example.com')
		cy.get('input[type="password"]').type('123')
		cy.get('button[type="submit"]').click()

		cy.contains('Minimum length is 6 characters').should('be.visible')
	})
})
