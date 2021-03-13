import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createBrowserHistory } from 'history'

import CssBaseline from '@material-ui/core/CssBaseline'

import store from './store'
import Routes from './Routes'

// `Block` Components.
import { ErrorHandler, PageLoader } from '@google-clone/blocks'

import { withTranslation } from '@google-clone/i18n'
import { ThemeProvider } from '@material-ui/styles'

import theme from './theme'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <ErrorHandler>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <PageLoader />
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </Provider>
    </ErrorHandler>
  )
}

export default withTranslation(App)
