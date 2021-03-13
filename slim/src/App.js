import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import Routes from './Routes'

// `Block` Components.
import { ErrorHandler, PageLoader } from '@google-clone/blocks'

import { withTranslation } from '@google-clone/i18n'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <>
      <ErrorHandler>
        <PageLoader />
        <Router history={browserHistory}>
          <Routes />
        </Router>
      </ErrorHandler>
    </>
  )
}

export default withTranslation(App)
