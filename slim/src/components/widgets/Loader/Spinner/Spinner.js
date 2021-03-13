import React from 'react'

import useStyles from './Spinner.style'

export default function Spinner(props) {
  const classes = useStyles()

  return <div className={classes.root}>Spinner goes here...</div>
}
