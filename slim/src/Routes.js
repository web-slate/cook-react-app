import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// `Block` Components.
import { PageLoader } from '@google-clone/blocks'

// Utils.
import { RoutePaths } from '@google-clone/utils'

const SignInModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/sign-in" */ './modules/SignIn')
)
const DashboardModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/dashboard" */ './modules/Dashboard')
)

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={RoutePaths.SignIn} exact component={SignInModule} />
        <Route path={RoutePaths.Dashboard} component={DashboardModule} />
        <Redirect to={RoutePaths.NotFound} />
      </Switch>
    </Suspense>
  )
}

export default Routes
