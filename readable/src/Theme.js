import { createMuiTheme } from 'material-ui/styles'
import { lightBlue, green, grey } from 'material-ui/colors'

const CustomTheme = createMuiTheme({
  palette: {
    primary: {
      ...lightBlue,
      A300: '#4FC3F7',
      A50: '#E1F5FE'
    }, // Purple and green play nicely together.
    secondary: {
      ...green,
      A400: '#4FC3F7',
    },
    background: {
      ...grey,
      A300: '#f5f5f5',
    },
  },
  
  overrides: {
    MuiTypography: {
      headline: {
        fontFamily: '\'Inconsolata\', monospace',
        fontSize: '20px',
        letterSpacing: '0.02rem',
        fontWeight: 'bolder',
      },
    },
    
    MuiButton: {
      root: {
        borderRadius: '15px',
        fontFamily: '\'Inconsolata\', monospace',
      },
      raised: {
        color: '#616161',
      },
      
    },
    MuiAppBar: {
      root: {
        color: 'inherit',
      },
    },
    MuiPaper: {
      root: {
        borderRadius: '0 !important',
      },
      
    },
    MuiCardContent : {
      root: {
        '&:last-child' : {
          paddingBottom: '0 !important'
        }
      }
    }
  },
})

export default CustomTheme
