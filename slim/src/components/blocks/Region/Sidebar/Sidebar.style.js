import { makeStyles } from '@material-ui/styles'
export default makeStyles((theme) => ({
  root: {
    background: theme.palette.baseColor,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(8, 0),
  },
  nav: {
    marginBottom: theme.spacing(2),
  },
  navIcon: {
    fill: '#FFFFFF',
    height: 'auto',
    width: '16px',
  },
}))
