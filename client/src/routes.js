// Guards
import Layout from './components/layouts/Layout'
import AlertPopup from './components/layouts/AlertPopup'

// Pages
import Home from './pages'
import User from './pages/user'
import Admin from './pages/admin'
import HeaderAppBar from './components/layouts/Layout'


const routes = [
  {
    path: '/',
    children: [
      {
        path: '',
        element: (
          <>
            <AlertPopup />
            <Home />
          </>
        ),
      },
      {
        path: 'user',
        element: (
          <>
            <HeaderAppBar />
            <AlertPopup />
            <User />
          </>
        ),
      },
      {
        path: 'admin',
        element: (
          <>
            <HeaderAppBar />
            <AlertPopup />
            <Admin />
          </>
        ),
      },
    ],
  },
]

export default routes
