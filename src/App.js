import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: '#1A78C2',
    background: 'linear-gradient(270deg, #1A78C2 0%, #1A78C2 101.06%)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    paddingTop: '25px!important',
    paddingBottom: '25px!important',
    ['@media (max-width:768px)']: { 
      paddingTop: '10px!important',
      paddingBottom: '10px!important'
    }
  },
  avatarImg: {
    width: '80px',
    height: '80px',
    ['@media (max-width:768px)']: { 
      width: '60px',
      height: '60px',
    },
    ['@media (max-width:600px)']: { 
      width: '40px',
      height: '40px',
    }
  },
  titleApp: {
    fontFamily: "Open Sans",
    fontSize: "30px",
    color: 'white',
    marginLeft: '40px',
    ['@media (max-width:768px)']: { 
      fontSize: "20px",
      marginLeft: '20px',
    },
    ['@media (max-width:600px)']: { 
      fontSize: "14px",
    },
    ['@media (max-width:400px)']: { 
      marginLeft: '10px',
    }
  },
  boxWrapLeft: {
    display: 'flex',
    alignItems: 'center'
  },
  boxWrapRight: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: "pointer",
    },
  },
  edit: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    color: 'white',
    marginRight: '10px',
    textTransform: 'uppercase',
    ['@media (max-width:600px)']: { 
      display: "none",
    }
  },
  close: {
    fontFamily: "Open Sans",
    fontSize: "14px",
    color: 'white',
    marginRight: '10px',
    textTransform: 'uppercase',
    ['@media (max-width:600px)']: { 
      display: "none",
    }
  }
}));

export default function App({openPopupInputs, popupInputs}) {

  const classes = useStyles();
  return (
    <Box>
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid className={classes.paper} item xs={12}>
            <Box className={classes.boxWrapLeft}>
              <Avatar src="img/profile.svg" className={classes.avatarImg}/>
              <h1 className={classes.titleApp}>Иванова Анна Михайловна</h1>
            </Box>
            <Box className={classes.boxWrapRight} onClick={openPopupInputs}>
              {!popupInputs ? 
                <>
                  <p className={classes.edit}>Редактировать</p>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 15.25V19H3.75L14.81 7.94L11.06 4.19L0 15.25ZM17.71 5.04C18.1 4.65 18.1 4.02 17.71 3.63L15.37 1.29C14.98 0.899998 14.35 0.899998 13.96 1.29L12.13 3.12L15.88 6.87L17.71 5.04Z" fill="white"/>
                  </svg>
                </>
                :
                <>
                  <p className={classes.close}>Закрыть</p>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
                  </svg>
                </>
              }
            </Box>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z" fill="white"/>
</svg>
