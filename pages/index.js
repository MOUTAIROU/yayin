import React, { useRef,useEffect,useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from './nav'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { useRouter } from 'next/router'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
const redStyles = makeStyles({
  contained: {

    'background-image': 'linear-gradient( rgba(255,233,239,1) 22%, rgba(98,74,95,1) 62%)',
    'color': '#fff',
    'height': '50px',
    'padding-left': '25px',
    'padding-right': '25px'
  }
});

export default function Index() {

   const classes = redStyles();
   const home = useRef();
   const promo = useRef();
   const offre = useRef();
   const contact = useRef();
   const description = useRef();
     const [scrollY, setScrollY] = useState(0);

   const router = useRouter()

   useEffect(()=>{
      const {ss} = router.query


        setTimeout(function(){ handleClick(ss) }, 500);

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


   },[])



   function handleClick(state) {


       if(state == 'home'){
           home.current.scrollIntoView({ behavior: "smooth" });
       }

       if(state == 'promo'){
           promo.current.scrollIntoView({ behavior: "smooth" });
       }

       if(state == 'offre'){
           offre.current.scrollIntoView({ behavior: "smooth" });
       }

       if(state == 'contact'){
           contact.current.scrollIntoView({ behavior: "smooth" });
       }

       if(state == 'description'){
           description.current.scrollIntoView({ behavior: "smooth" });
       }

   }


  return (
      <div>

          <div className = 'first-session' ref={home}>

             <NavBar
                 isnothome={false}
                 handleClick={(state)=>handleClick(state)}
             />

              <div className = "fs-text-ctnt">
                  <div className = 'fs-text-ctnt-innere .fs-text-ctnt-innere-sticker'>
                      <div>
                         <div><h1>COACH DE VIE ENERGETIQUE</h1></div>
                      </div>

                      <div className = 'fs-text-ctnt-innere-line'/>

                      <div className = 'fs-text-ctnt-innere-small'><small>Un esprit sain dans un corps sain</small></div>

                      <Button variant="contained" className={ classes.contained }> <Link href='/prendre-rendez-vous' color="inherit">Prendre rende-vous</Link></Button>
                  </div>
              </div>



          </div>

          <div className = 'second-session' ref={description}>

            <Container>
             <div className = 'second-session-content'>

               <div className = 'second-session-content-l'>
                 <div className = 'second-session-content-l-bigText'>REPRENEZ LE CONTROLE DE VOTRE VIE</div>
                 <div className = 'second-session-content-l-small-text'>Physique bien être mental et spirituel</div>
                  <div className = 'second-session-content-line'/>
                  <div className = 'second-session-content-l-des'>
                      Le bien-être physique et mental vont toujours de
                      pair. Inscrivez-vous dès maintenant pour profiter de
                      nos programmes de remise en forme physique et
                      thérapies de bien-être !

                  </div>
               </div>

               <div className = 'second-session-content-r'>

                   <img src = {'./vie_controle.png'}/>

               </div>

             </div>
             </Container>
          </div>


          <div className = 'second-third' ref={offre}>
          <Container>
               <div className = 'second-third-title'>
                    <div className = 'second-third-t-text'>NOS OFFRES</div>
                    <div className = 'second-third-line'/>
               </div>
                <div className = 'second-third-content'>
                <Box sx={{ flexGrow: 1 }}>
                <Grid
                 container
                  justifyContent="center"
                  alignItems="stretch"

                    >
                    <Grid  >
                        <ItemOffre
                           img = './offre1.png'
                           title= 'Programmes Fitness'
                           des='Coach sportif et mental 100 % satisfait remboursées'
                           margin = "margin-ItemOffre"
                         />
                    </Grid>
                    <Grid  >
                        <ItemOffre
                            img = './offre2.png'
                            title= 'Programmes Nutritions'
                            des='Naturopathie quantique personnalisées'
                            margin = "margin-ItemOffre"
                         />
                    </Grid>
                    <Grid >
                        <ItemOffre
                            img = './offre3.png'
                            title= 'Thérapies bien-être'
                            des="Les classes de méditation qui contribuent à promouvoir l'équilibre intérieur"
                            margin = "margin-ItemOffre"
                         />
                    </Grid>
                    <Grid >
                          <ItemOffre
                                img = './offre4.png'
                                title= 'Soins Energetique'
                                des='HOLISTIQUE RECONNECTION SACRE FEMININ MASCULIN ..'
                                margin = "margin-ItemOffre"
                           />
                    </Grid>
                </Grid>
                </Box>

                </div>

              {/* <div className = 'second-third-content'>

                      <ItemOffre
                         img = './offre1.png'
                         title= 'Programmes Fitness'
                         des='Coach sportif et mental 100 % satisfait remboursées'
                         margin = "margin-ItemOffre"
                       />
                      <ItemOffre
                        img = './offre2.png'
                        title= 'rogrammes Nutritions'
                        des='Naturopathie quantique personnalisées'
                        margin = "margin-ItemOffre"
                      />
                      <ItemOffre
                        img = './offre3.png'
                        title= 'Thérapies bien-être'
                        des="Les classes de méditation qui contribuent à promouvoir l'équilibre intérieur"
                        margin = "margin-ItemOffre"
                      />

                      <ItemOffre
                        img = './offre4.png'
                        title= 'Soins Energetique'
                        des='HOLISTIQUE RECONNECTION SACRE FEMININ MASCULIN ..'
                        margin = "margin-ItemOffre"
                      />

               </div> */}


              </Container>
          </div>


          <div className = 'second-four' ref={promo}>
          <Container>
               <div className = 'second-four-title'>
                    <div className = 'second-third-t-four'>PROMO D'ETE</div>
                    <div className = 'second-four-line'/>
               </div>

               <div className = 'second-third-content'>


               </div>

               <div className = 'second-four-content'>

                      <ItemOffre
                         img = './offre5.png'
                         title= 'PARAPSYCHOLOGUE - SEXOLOGUE CONSULTATION ACCOMPAGNEMENT 50 EUOROS'
                         des='SEXUALITE TANTRIQUE 2 SEANCES INITIATION 70 EUROS'
                         margin = "margin-ItemOffre-third"
                       />
                      <ItemOffre
                        img = './offre6.png'
                        title= 'NATUROPATHIE NATUROPATHIE'
                        des='POIDS COMPRENDRE ET AGIR, GERER SES EMOTIONS ET ADDICTION BILAN 30 EUROS'
                        margin = "margin-ItemOffre-third"
                      />
                      <ItemOffre
                         img = './offre7.png'
                        title= 'SOINS ENERGIE QUANTIQUE'
                        des='ANCIENNE MEMOIRE, BLESSURES, EMPECHER CYCLES DE SE REPRODUIRE, SE PROTEGER ET SE PREMUNIR DE CERTAINES ENERGIES...'
                        margin = "margin-ItemOffre-third"
                      />

               </div>


              </Container>
          </div>


          <div className = 'second-five-content' ref={contact}>
                <Container>
                      <div className = 'second-five'>
                          <div className = 'second-five-content-l'>
                              <div className = 'second-five-content-l-img'> <img src = './nous-contactez.png'/></div>
                          </div>
                          <div className = 'second-five-content-r'>
                              <div className = 'second-five-content-r-z'>
                                 <div className = 'second-five-content-r-title'>Adresse postale</div>
                                 <div className = 'second-five-content-r-des'>RUE NAUJAC 33008 BORDEAUX CEDES</div>
                              </div>

                              <div className = 'second-five-content-r-z'>
                                 <div className = 'second-five-content-r-title'>Adresse e-mail</div>
                                 <div className = 'second-five-content-r-des'>Relooktavie@yahoo.fr</div>
                              </div>

                              <div className = 'second-five-content-r-z'>
                                 <div className = 'second-five-content-r-title'>Adresse de téléphone</div>
                                 <div className = 'second-five-content-r-des'>0624254164</div>
                              </div>

                          </div>


                      </div>
                </Container>
                <div className = 'second-five-content-Button'>
                  <Link href='/prendre-rendez-vous' color="inherit">
                    <Button variant="contained" className={ classes.contained }>Prendre rende-vous</Button>
                   </Link>
                </div>

          </div>


      </div>
  );
}

const ItemOffre = (props) => {
  return(
    <div className = {`offre-item ${props.margin}`}>
           <div className = 'offre-item-img'> <img src = {props.img}/></div>
           <div className = 'offre-item-title'>{props.title}</div>
           <div className = 'offre-item-des'>{props.des}</div>
    </div>
  )
}
