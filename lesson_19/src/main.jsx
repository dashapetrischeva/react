import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './app/router'
import { Provider } from 'react-redux'
import { store } from './app/store'
import './app/i18n/i18n'
import AppInit from './app/init/AppInit'
createRoot(document.getElementById('root')).render(
  <div className="app">
    <Provider store={store}>
      <AppInit />
      <RouterProvider router={router} />
    </Provider>
  </div>
)
