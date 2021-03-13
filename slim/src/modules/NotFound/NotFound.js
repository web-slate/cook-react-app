import React from 'react'
import { withRouter } from 'react-router-dom'

// Material UI
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  bgImage: {
    width: '100%',
    height: '100vh',
    objectFit: 'cover',
  },
  mainText: {
    fontSize: 300,
    fontWeight: 900,
    color: '#E0E0E0',
  },
  subText: {
    fontSize: 36,
    color: theme.palette.text.primary,
  },
  button: {
    width: 366,
    textTransform: 'capitalize',
    backgroundColor: theme.palette.baseColor,
    color: theme.palette.white,
    marginTop: 48,
    borderRadius: 4,
  },
}))

const NotFound = (props) => {
  const classes = useStyles()
  const { history } = props

  return (
    <Grid container>
      <Grid item xs={6} xl={6}>
        <Box
          height="100%"
          width="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
        >
          <Text className={classes.mainText} value="404" />
          <Text className={classes.subText} value="Page not found" />
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => history.replace('/sign-in')}
          >
            Go Back
          </Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default withRouter(NotFound)
