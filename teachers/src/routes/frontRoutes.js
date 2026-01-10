export default {
	pages: {
		home: '/',
		teachers: {
			root: '/teachers',
			add: 'new',
			edit: ':id/edit',
			detail: ':id'
		},
		meetings: '/meetings',
		aboutApp: '/about-app',
		aboutDev: '/about-dev'
	},
	navigate: {
		home: '/',
		teachers: {
			root: '/teachers',
			add: '/teachers/new',
			edit: '/teachers/:id/edit',
			detail: '/teachers/:id',

		},
		meetings: '/meetings',
		aboutApp: '/about-app',
		aboutDev: '/about-dev',
	}
}