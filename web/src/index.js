import { AuthProvider } from '@redwoodjs/auth'
import NetlifyIdentityWidget from 'netlify-identity-widget'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'fontsource-roboto'
import './scaffold.css'
import './index.css'

NetlifyIdentityWidget.init()

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={NetlifyIdentityWidget} type="netlify">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
