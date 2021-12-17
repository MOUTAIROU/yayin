import React,{useState,useEffect} from 'react';
import { useRouter } from "next/router";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Container from '@material-ui/core/Container';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'

const redStyles = makeStyles({
  listeMenu: {
    'padding-left': '25px',
    'padding-right': '25px',
    color:'#624A59'
  },
  MenuText: {
    'fontweight': 'bolder',
    'color': '#fff'
  },
  listeItem:{
    'background-color':'#FFE9EF'
  }
});



export default function Index(props) {

 const classes = redStyles();
  const router = useRouter()
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
    const [scrollY, setScrollY] = useState(0);

  const toggleDrawer = (anchor, open) => (event) => {

    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
        className = {classes.listeItem}
    >


      <List >
        {['Home', 'Promo', 'Nos offres', 'Nous contactez'].map((text, index) => {

          return(

              <ListItem button key={text}   className = {classes.listeItem}>

                <ListItemText
                className = {classes.listeMenu}
                 onClick = {() => {
                   if(text == 'Home'){
                        setTimeout(function(){ props.handleClick('home') }, 500);

                   }

                   if(text == 'Promo'){

                      setTimeout(function(){ props.handleClick('promo') }, 500);
                   }

                   if(text == 'Nos offres'){

                       setTimeout(function(){ props.handleClick('offre') }, 500);

                   }

                   if(text == 'Nous contactez'){
                     setTimeout(function(){ props.handleClick('contact') }, 500);


                   }
                 }}
                 primary={text}
                 />

              </ListItem>

          )
        })}
      </List>
    </Box>
  );

  const handleClick = (state) => {

    router.push({
          pathname: '/',
          query: { ss: state },
        })

  }



  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  return (

    <div>
        <nav className  = {`nav-bar not-responsive-nav-bar ${scrollY > 100 ? "hidenavbar" : ""} `}>
                <img src = './nav-bar.png' />
                <div className = "nav-bar-contenaire">


                         {
                           props.isnothome == true ?

                            <div className = 'menu-liste' >

                               <a onClick={() => handleClick('home')}>Home</a>
                               <a onClick={ () =>  handleClick('promo')}>Promo</a>
                               <a onClick={ () =>  handleClick('offre')}>Nos offres</a>
                               <a onClick={ () =>  handleClick('contact')}>Nous contactez</a>

                            </div>
                            :
                            <div className = 'menu-liste' >
                               <a onClick={ () => props.handleClick('home')}>Home</a>
                               <a onClick={ () => props.handleClick('promo')}>Promo</a>
                               <a onClick={ () => props.handleClick('offre')}>Nos offres</a>
                               <a onClick={ () => props.handleClick('contact')}>Nous contactez</a>
                            </div>

                         }

                </div>
        </nav>

        <nav className  = {`nav-bar not-responsive-nav-bar stickernavbar  ${scrollY > 100 ? "stickernavbar-active" : ""}`}>
                <div className = "nav-bar-contenaire">


                         {
                           props.isnothome == true ?

                            <div className = 'menu-liste' >

                               <a onClick={() => handleClick('home')}>Home</a>
                               <a onClick={ () =>  handleClick('promo')}>Promo</a>
                               <a onClick={ () =>  handleClick('offre')}>Nos offres</a>
                               <a onClick={ () =>  handleClick('contact')}>Nous contactez</a>

                            </div>
                            :
                            <div className = 'menu-liste' >
                               <a onClick={ () => props.handleClick('home')}>Home</a>
                               <a onClick={ () => props.handleClick('promo')}>Promo</a>
                               <a onClick={ () => props.handleClick('offre')}>Nos offres</a>
                               <a onClick={ () => props.handleClick('contact')}>Nous contactez</a>
                            </div>

                         }

                </div>
        </nav>

        <nav  className  = {`nav-bar responsive-nav-bar ${scrollY > 100 ? "hidenavbar" : ""} `}>
                <img src = './nav-bar.png' />
                <div className = "nav-bar-contenaire">
                  <Container>
                    <div className = 'nav-bar-resp-menu'>
                       <div className = 'nav-bar-resp-menu-r'>Ya Yin</div>
                       <div className = 'nav-bar-resp-menu-l'>
                             {[ 'top'].map((anchor) => (
                               <React.Fragment key={anchor}>
                                 <Button
                                   onClick={toggleDrawer(anchor, true)}
                                   className={classes.MenuText}
                                   >Menu</Button>
                                 <SwipeableDrawer
                                   anchor={anchor}
                                   open={state[anchor]}
                                   onClose={toggleDrawer(anchor, false)}
                                   onOpen={toggleDrawer(anchor, true)}
                                 >
                                   {list(anchor)}
                                 </SwipeableDrawer>
                               </React.Fragment>
                             ))}
                           </div>
                    </div>
                      </Container>

                </div>
        </nav>

        <nav className  = {`nav-bar responsive-nav-bar stickernavbar  ${scrollY > 100 ? "stickernavbar-active stickernavbar-active-specific-styles" : ""}`}>
                <div className = "nav-bar-contenaire">


                <div className = "nav-bar-contenaire">
                  <Container>
                    <div className = 'nav-bar-resp-menu'>
                       <div className = 'nav-bar-resp-menu-r'>Ya Yin</div>
                       <div className = 'nav-bar-resp-menu-l'>
                             {[ 'top'].map((anchor) => (
                               <React.Fragment key={anchor}>
                                 <Button
                                   onClick={toggleDrawer(anchor, true)}
                                   className={classes.MenuText}
                                   >Menu</Button>
                                 <SwipeableDrawer
                                   anchor={anchor}
                                   open={state[anchor]}
                                   onClose={toggleDrawer(anchor, false)}
                                   onOpen={toggleDrawer(anchor, true)}
                                 >
                                   {list(anchor)}
                                 </SwipeableDrawer>
                               </React.Fragment>
                             ))}
                           </div>
                    </div>
                      </Container>

                </div>

                </div>
        </nav>
    </div>


  );
}
