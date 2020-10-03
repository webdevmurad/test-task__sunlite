import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
    navigationWrap: {
        marginTop: '20px'
    },
    profTitle: {
        fontFamily: "Open Sans",
        fontSize: "18px",
        color: 'white',
        ['@media (max-width:600px)']: { 
            fontSize: "14px",
        }
    },
    navigation: {
        fontFamily: "Open Sans",
        fontSize: "14px",
        color: 'white',
        marginTop: '10px',
        marginBottom: '80px',
        ['@media (max-width:768px)']: { 
            marginBottom: '40px',
        },
        ['@media (max-width:600px)']: { 
            marginBottom: '20px',
            fontSize: "12px",
        }
    }
});
  
export default function Navigation() {
    const classes = useStyles();
  
    return (
      <div>
            <Box className={classes.navigationWrap}>
                <h3 className={classes.profTitle}>ЛИЧНЫЙ ПРОФИЛЬ</h3>
                <p className={classes.navigation}>Главная/Личный профиль</p>
            </Box>
      </div>
    );
}