/// <reference types="vite/client" />
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './app/router'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './app/i18n/i18n'
import AppInit from './app/init/AppInit'

const rootElement = document.getElementById('root')

if (!rootElement) {
	throw new Error('Root element not found')
}

createRoot(rootElement).render(
	<div className="app">
		<Provider store={store}>
			<AppInit />
			<RouterProvider router={router} />
		</Provider>
	</div>
)
