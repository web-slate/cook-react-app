import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'

// Material UI
import Grid from '@material-ui/core/Grid'

import useStyles from './Dashboard.style'

// `Custom Hooks`.

import { I18nMsg } from '@google-clone/i18n'

// Utils.
import { RoutePaths } from '@google-clone/utils'

const Dashboard = (props) => {
  let history = useHistory()
  const classes = useStyles()

  return (
    <>
      <Grid container className={classes.root}>
        <Grid item>
          <h1>
            <I18nMsg id="dashboard" /> goes here
          </h1>
          <button
            onClick={() => {
              history.push(RoutePaths.SignIn)
            }}
          >
            Click back
          </button>
        </Grid>
      </Grid>
    </>
  )
}

Dashboard.propTypes = {
  title: PropTypes.string,
}

export default Dashboard
