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
        <Provider store={store}>
          <PageLoader />
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </Provider>
      </ErrorHandler>
    </>
  )
}

export default withTranslation(App)
