import { makeStyles } from '@material-ui/styles'

export default makeStyles((theme) => ({
  root: {
    boxShadow: 'none',
  },
  flexGrow: {
    flexGrow: 1,
  },
  signOutButton: {
    marginLeft: theme.spacing(1),
  },
  appBar: {
    background: theme.palette.baseColor,
  },
  logo: {
    color: theme.palette.white,
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontFamily: 'Inter',
    fontWeight: '300',
    fontSize: '16px',
    lineHeight: '19px',
  },
}))
