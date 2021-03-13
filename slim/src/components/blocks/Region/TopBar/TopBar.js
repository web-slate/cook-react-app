import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import PropTypes from 'prop-types'

import { I18nMsg } from '@google-clone/i18n'

import useStyles from './TopBar.style'

const TopBar = (props) => {
  const { className, ...rest } = props
  const classes = useStyles()

  return (
    <header {...rest} className={`${classes.root} ${classes.appBar}`}>
      <RouterLink to="/" className={classes.logo}>
        <I18nMsg id="app_name" />
      </RouterLink>
      <div className={classes.flexGrow} />
    </header>
  )
}

TopBar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func,
}

export default TopBar
