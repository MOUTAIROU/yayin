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
const [arrayList, setArrayList] = useState([])
  useEffect( async ()=>{

    const fetchResponse = await fetch(`/api/getalldoc`)

    const resp = await fetchResponse.json()

    let tmpArray = []

      resp.doc.map((item,index) =>{
     //console.log(item._id);
     let propertyValues = Object.values(item);


       tmpArray[propertyValues['0']] = propertyValues['1']
      })

      console.log(tmpArray);
        setArrayList(tmpArray)

  },[])

   const classes = redStyles();
   const home = useRef();
   const promo = useRef();
   const offre = useRef();
   const contact = useRef();
   const description = useRef();
   const [scrollY, setScrollY] = useState(0);
   const [isVisible_Home, setIsVisible_Home] = useState(true)
   const [isVisible_Promo, setIsVisible_Promo] = useState(false)
   const [isVisible_Offre, setIsVisible_Offre] = useState(false)
   const [isVisible_Contact, setIsVisible_Contact] = useState(false)
   const [isVisible_Description, setIsVisible_Description] = useState(false)

   const router = useRouter()







   useEffect(()=>{
      const {ss} = router.query


        setTimeout(function(){ handleClick(ss) }, 500);

        const handleScroll = () => {


          if(home.current){


                if(window.scrollY > home.current.offsetTop && window.scrollY < description.current.offsetTop){
                  

                  setIsVisible_Home(true)
                  setIsVisible_Promo(false)
                  setIsVisible_Offre(false)
                  setIsVisible_Contact(false)
                  setIsVisible_Description(false)

                }

            }


            if(description.current){

                if(window.scrollY > description.current.offsetTop && window.scrollY < offre.current.offsetTop){
                   console.log('description');
                   setIsVisible_Home(false)
                   setIsVisible_Promo(true)
                   setIsVisible_Offre(false)
                   setIsVisible_Contact(false)
                   setIsVisible_Description(false)
                }


              }


              if(offre.current){

                  if(window.scrollY > offre.current.offsetTop && window.scrollY < promo.current.offsetTop){
                    setIsVisible_Home(false)
                    setIsVisible_Promo(false)
                    setIsVisible_Offre(true)
                    setIsVisible_Contact(false)
                    setIsVisible_Description(false)
                 }

                }


                if(promo.current){

                  if(window.scrollY > promo.current.offsetTop && window.scrollY < contact.current.offsetTop){
                    setIsVisible_Home(false)
                    setIsVisible_Promo(false)
                    setIsVisible_Offre(false)
                    setIsVisible_Contact(true)
                    setIsVisible_Description(false)
                 }
              }

              if(contact.current){


                  if(window.scrollY  > contact.current.offsetTop){
                    setIsVisible_Home(false)
                    setIsVisible_Promo(false)
                    setIsVisible_Offre(false)
                    setIsVisible_Contact(false)
                    setIsVisible_Description(true)
                   }
                }



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
                 isVisible_Home={isVisible_Home}
                 isVisible_Promo={isVisible_Promo}
                 isVisible_Offre={isVisible_Offre}
                 isVisible_Contact={isVisible_Contact}
                 isVisible_Description={isVisible_Description}
             />

              <div className = "fs-text-ctnt">
                  <div className = 'fs-text-ctnt-innere .fs-text-ctnt-innere-sticker'>
                      <div>
                         <div><h1>{arrayList['sessionT1']}</h1></div>
                      </div>

                      <div className = 'fs-text-ctnt-innere-line'/>

                      <div className = 'fs-text-ctnt-innere-small'><small>{arrayList['sessionT2']}</small></div>

                      <Button variant="contained" className={ classes.contained }> <Link href='/prendre-rendez-vous' color="inherit">Prendre rendez-vous</Link></Button>
                  </div>
              </div>



          </div>

          <div className = 'second-session' ref={description}>

            <Container>
             <div className = 'second-session-content'>

               <div className = 'second-session-content-l'>
                 <div className = 'second-session-content-l-bigText'>{arrayList['session2T1']}</div>
                 <div className = 'second-session-content-l-small-text'>{arrayList['session2T2']}</div>
                  <div className = 'second-session-content-line'/>
                  <div className = 'second-session-content-l-des'>
                      {arrayList['session2T3']}

                  </div>
               </div>

               <div className = 'second-session-content-r'>

                   <img src = {`./${arrayList['session2Image']}`}/>

               </div>

             </div>
             </Container>
          </div>


          <div className = 'second-third' ref={offre}>
          <Container>
               <div className = 'second-third-title'>
                    <div className = 'second-third-t-text'>{arrayList['session2T3']}</div>
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
                           img = {arrayList['session3imageOne']}
                           title= {arrayList['session3T2']}
                           des={arrayList['session3T3']}
                           margin = "margin-ItemOffre"
                         />
                    </Grid>
                    <Grid  >
                        <ItemOffre
                            img = {arrayList['session3imageTwo']}
                            title= {arrayList['session3T4']}
                            des={arrayList['session3T5']}
                            margin = "margin-ItemOffre"
                         />
                    </Grid>
                    <Grid >
                        <ItemOffre
                            img = {arrayList['session3imageThree']}
                            title= {arrayList['session3T6']}
                            des={arrayList['session3T7']}
                            margin = "margin-ItemOffre"
                         />
                    </Grid>
                    <Grid >
                          <ItemOffre
                                img = {arrayList['session3imageFour']}
                                title= {arrayList['session3T8']}
                                des={arrayList['session3T9']}
                                margin = "margin-ItemOffre"
                           />
                    </Grid>
                </Grid>
                </Box>

                </div>




              </Container>
          </div>


          <div className = 'second-four' ref={promo}>
          <Container>
               <div className = 'second-four-title'>
                    <div className = 'second-third-t-four'>{arrayList['session4T1']}</div>
                    <div className = 'second-four-line'/>
               </div>

               <div className = 'second-third-content'>


               </div>

               <div className = 'second-four-content'>

                      <ItemOffre
                          img = {arrayList['session4imageOne']}
                          title= {arrayList['session4T2']}
                          des={arrayList['session4T3']}
                         margin = "margin-ItemOffre-third"
                       />
                      <ItemOffre
                          img = {arrayList['session4imageTwo']}
                          title= {arrayList['session4T4']}
                          des={arrayList['session4T5']}
                        margin = "margin-ItemOffre-third"
                      />
                      <ItemOffre
                      img = {arrayList['session4imageThree']}
                      title= {arrayList['session4T6']}
                      des={arrayList['session4T7']}
                        margin = "margin-ItemOffre-third"
                      />

               </div>


              </Container>
          </div>


          <div className = 'second-five-content' ref={contact}>
                <Container>
                      <div className = 'second-five'>
                          <div className = 'second-five-content-l'>
                              <div className = 'second-five-content-l-img'> <img src = {`./${arrayList['session5imageOne']}`}/></div>
                          </div>
                          <div className = 'second-five-content-r'>
                              <div className = 'second-five-content-r-z'>
                                 <div className = 'second-five-content-r-title'>{arrayList['session5T1']}</div>
                                 <div className = 'second-five-content-r-des'>{arrayList['session5T2']}</div>
                              </div>

                              <div className = 'second-five-content-r-z'>
                                 <div className = 'second-five-content-r-title'>{arrayList['session5T3']}</div>
                                 <div className = 'second-five-content-r-des'>{arrayList['session5T4']}</div>
                              </div>

                              <div className = 'second-five-content-r-z'>
                                 <div className = 'second-five-content-r-title'>{arrayList['session5T5']}</div>
                                 <div className = 'second-five-content-r-des'>{arrayList['session5T6']}</div>
                              </div>

                          </div>


                      </div>
                </Container>
                <div className = 'second-five-content-Button'>
                  <Link href='/prendre-rendez-vous' color="inherit">
                    <Button variant="contained" className={ classes.contained }>Prendre rendez-vous</Button>
                   </Link>
                </div>

          </div>


      </div>
  );
}

const ItemOffre = (props) => {
  return(
    <div className = {`offre-item ${props.margin}`}>
           <div className = 'offre-item-img'> <img src = {`./${props.img}`}/></div>
           <div className = 'offre-item-title'>{props.title}</div>
           <div className = 'offre-item-des'>{props.des}</div>
    </div>
  )
}
