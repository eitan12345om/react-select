import { makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) => {
  const checkbox = {
    flexShrink: 0,
    height: '20px',
    marginRight: '8px',
    width: '20px',
  };

  return {
    content: {
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
      },

      alignItems: 'center',
      // backgroundColor: 'rgba(0, 0, 0, 0.075)',
      cursor: 'pointer',
      display: 'flex',
      padding: '8px 16px',
    },
    divider: {
      height: '2px',
    },
    iconAllSelected: {
      ...checkbox,
      color: '#0277BD',
    },
    iconNoneSelected: {
      ...checkbox,
      color: 'rgba(0, 0, 0, 0.6)',
    },
    iconSomeSelected: {
      ...checkbox,
      color: 'rgba(0, 0, 0, 0.6)',
    },
  }
});
