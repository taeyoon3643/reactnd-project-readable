export const styles = theme => ({
  
  root: {
    maxWidth: '100%',
    margin: theme.spacing.unit * 3,
    display: 'flex',
    padding: theme.spacing.unit * 2,
    '&:hover': {
      background: '#f9f9f9',
      transition: '.5s all',
      cursor: 'pointer',
    },
  },
  
  form: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
  
  inputField: {
    alignItems: 'right',
    width: '100%',
  },
  
  avatar: {
    marginRight: '16px',
  },
  
  input: {
    borderBottom: '1px solid #ebebeb',
    marginLeft: theme.spacing.unit * 4,
    padding: '6px 15px 7px',
    '&:hover': {
      cursor: 'text !important',
    },
  },
  
})