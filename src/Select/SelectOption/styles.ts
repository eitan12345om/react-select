import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const baseIcon = {
    color: 'rgba(0, 0, 0, 0.6)',
    flexShrink: 0,
    height: '20px',
    marginRight: '8px',
    width: '20px',
  }

  return {
    dropdownItem: {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },

      alignItems: 'center',
      cursor: 'pointer',
      display: 'flex',
      padding: '8px 16px',
    },
    dropdownItemIcon: baseIcon,
    dropdownItemIconSelected: {
      ...baseIcon,
      color: '#0277BD',
    }
  }
});
