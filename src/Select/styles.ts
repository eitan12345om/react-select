import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => ({
  container: {
    position: 'relative',
    width: '100%',
  },
  dropdown: {
    '& > :not(:last-child)': {
      marginBottom: '4px',
    },

    boxShadow: '0px 1px 3px 0px rgba(0, 0, 0, 0.2), ' +
      '0px 1px 1px 0px rgba(0, 0, 0, 0.14), ' +
      '0px 2px 1px -1px rgba(0, 0, 0, 0.12)',
    '-webkit-box-shadow': '0px 1px 3px 0px rgba(0, 0, 0, 0.2), ' +
      '0px 1px 1px 0px rgba(0, 0, 0, 0.14), ' +
      '0px 2px 1px -1px rgba(0, 0, 0, 0.12)',

    borderTop: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '0 0 2px 2px',

    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
    maxHeight: '300px',
    minHeight: '32px',
    overflowX: 'auto',
    position: 'absolute',
    padding: '8px 0',
    width: '100%',
    zIndex: 100,
  },
  dropdownIcon: {
    flexShrink: 0,
    height: '24px',
    width: '24px',
  },
  header: {
    '&:focus': {
      outline: 'none',
    },

    alignItems: 'center',
    border: '2px solid grey',
    borderRadius: '4px',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '8px 16px',
  },
  headerDisabled: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    cursor: 'default',
  },
  headerEnabled: {
    '&:focus': {
      borderColor: '#0277BD',
    },
    '&:hover:not(:focus)': {
      borderColor: 'black',
    },
  },
  headerError: {
    '&:focus': {
      borderColor: theme.palette.error.dark
    },

    '&:hover': {
      borderColor: theme.palette.error.dark
    },

    borderColor: theme.palette.error.main,
  },
  noOptionsMessage: {
    alignItems: 'center',
    display: 'flex',
    padding: '8px 16px',
  },
  selectedValues: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
}));
