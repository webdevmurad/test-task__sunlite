import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles({
    profileTopWrap: {
        paddingTop: '20px',
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    profileTitle: {
        fontFamily: "Open Sans",
        fontSize: "14px",
        color: 'white',
        marginLeft: '20px',
        '&:hover': {
            cursor: "pointer",
        },
        ['@media (max-width:600px)']: { 
            display: "none",
        }
    },
    profileLine: {
        width: "1px",
        height: '39px',
        backgroundColor: 'white',
        marginLeft: '20px',
        ['@media (max-width:600px)']: { 
            height: '24px',
        }
    },
    profileAvatar: {
        marginLeft: '20px',
        '&:hover': {
            cursor: "pointer",
        },
        ['@media (max-width:600px)']: { 
            width: "24px",
            height: '24px',
        }
    },
    profileIcon: {
        '&:hover': {
            cursor: "pointer",
        },
        ['@media (max-width:600px)']: { 
            width: "16px",
            height: '19px',
        }
    }
});
  
export default function ProfileTop() {
    const classes = useStyles();
  
    return (
      <div>
            <Box className={classes.profileTopWrap}>
                <svg className={classes.profileIcon} width="24" height="30" viewBox="0 0 24 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 30C13.65 30 15 28.65 15 27H9C9 28.65 10.35 30 12 30ZM21 21V13.5C21 8.895 18.555 5.04 14.25 4.02V3C14.25 1.755 13.245 0.75 12 0.75C10.755 0.75 9.75 1.755 9.75 3V4.02C5.46 5.04 3 8.88 3 13.5V21L0 24V25.5H24V24L21 21ZM18 22.5H6V13.5C6 9.78 8.265 6.75 12 6.75C15.735 6.75 18 9.78 18 13.5V22.5Z" fill="white"/>
                </svg>
                <span className={classes.profileLine}></span>
                <Avatar className={classes.profileAvatar} src="img/profile1.png"/>
                <p className={classes.profileTitle}>Иванова А.</p>
            </Box>
      </div>
    );
}