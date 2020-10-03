import React from 'react';
import Container from '@material-ui/core/Container';
import ProfileTop from '../src/ProfileTop';
import Navigation from '../src/Navigation';
import App from '../src/App';
import ProfileInfo from '../src/ProfileInfo';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  wrap: {
    backgroundImage: `url(img/background.png)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    ['@media (max-width:600px)']: { 
      backgroundSize: '600px, auto, contain',
    }
  }
});

export default function Index() {
  const classes = useStyles();

  const [popupInputs, setPopupInputs] = React.useState(false)

  const openPopupInputs = () => {
    setPopupInputs(true)
    if(popupInputs) {
      setPopupInputs(false)
    }
  }

  return (
    <Container className={classes.wrap} maxWidth="xl">
      <ProfileTop/>
      <Navigation/>
      <App openPopupInputs={openPopupInputs} popupInputs={popupInputs}/>
      <ProfileInfo popupInputs={popupInputs}/>
    </Container>
  );
}
