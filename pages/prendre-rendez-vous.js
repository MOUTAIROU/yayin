import React,{useEffect,useState} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from './nav'
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {MediaQuery,useMediaQuery } from 'react-responsive'
import { withStyles, makeStyles } from "@material-ui/core/styles";



const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 })
  return isDesktop ? children : null
}

const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 })
  return isTablet ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({minWidth: 667, maxWidth: 767 })
  return isMobile ? children : null
}

const Mobilesm = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 666 })
  return isMobile ? children : null
}
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 })
  return isNotMobile ? children : null
}

const redStyles = makeStyles({
  contained: {
    'background-color': '#fff',
    'height': '55px',
    'width':'95%'
  },
  containedRes: {
    'background-color': '#fff',
    'height': '33px',
    'width':'95%'
  },
  bouton:{
    'background-color':'#624a59',
    padding:'10px 30px',
    color:'#ffe9ef',
    '&:hover': {
       'background-color':'#624a59',
       color:'#ffe9ef'
    }
  },
  boutonRes:{
    'background-color':'#624a59',
    padding:'10px 20px',
    color:'#ffe9ef',
    '&:hover': {
       'background-color':'#624a59',
       color:'#ffe9ef'
    }
  },
  MenuItemBloc:{
    display:"block",
    paddingLeft: '15px',
  }

});

export default function Index() {
   const classes = redStyles();

   function handleClick(state) {




   }

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


           setArrayList(tmpArray)

     },[])



  return (
      <div>

          <div className = 'contact-session'>

             <NavBar
              isnothome = {true}
             />

              <div className = "contact-session-zn">

                <div className = 'contact-session-title'>{arrayList['session31T1']}</div>

                <div className = 'contact-session-des-zone'>

                <Container>

                             <ul>

                                <li>

                                    <div className = 'contact-session-des-zone'>{arrayList['session31T2']} </div>
                                </li>

                                <li>

                                    <div className = 'contact-session-des-zone'>{arrayList['session31T3']}
                                   </div>

                                </li>

                                <li>
                                      <div className = 'contact-session-des-zone'>
                                          {arrayList['session31T4']}
                                     </div>
                                </li>

                             </ul>



                </Container>



                </div>

              </div>





          </div>

          <div className = 'contact-session-send'>

           <Container>

               <div className = 'contact-session-send-line'/>

               <div className = 'contact-send-content'>
                    <div className = 'contact-send-select'>
                       <div className = 'contact-send-select-label'><label>Choisir votre service</label></div>
                       <div className = 'contact-send-select-select'>
                         {/*<select>
                              <option>1</option>
                              <option>2</option>
                              <option>31</option>
                              <option>4</option>
                              <option>5</option>
                         </select>*/}




                          <Mobilesm>
                                  <Select
                                   className = {classes.containedRes}
                                  //value={age}
                                  //onChange={handleChange}
                                  //displayEmpty
                                //  inputProps={{ 'aria-label': 'Without label' }}
                                  >

                                  <MenuItem  className = {classes.MenuItemBloc} value={10}>Programmes Fitness</MenuItem>
                                  <MenuItem  className = {classes.MenuItemBloc} value={20}>Programmes Nutritions</MenuItem>
                                  <MenuItem  className = {classes.MenuItemBloc} value={30}>Thérapies bien-être</MenuItem>
                                  <MenuItem  className = {classes.MenuItemBloc} value={30}>Soins Energetique</MenuItem>
                                  </Select>
                          </Mobilesm>

                          <Desktop>
                                <Select
                                 className = {classes.contained}
                                //value={age}
                                //onChange={handleChange}
                                //displayEmpty
                              //  inputProps={{ 'aria-label': 'Without label' }}
                                >

                                <MenuItem  className = {classes.MenuItemBloc} value={10}>Programmes Fitness</MenuItem>
                                <MenuItem  className = {classes.MenuItemBloc} value={20}>Programmes Nutritions</MenuItem>
                                <MenuItem  className = {classes.MenuItemBloc} value={30}>Thérapies bien-être</MenuItem>
                                <MenuItem  className = {classes.MenuItemBloc} value={30}>Soins Energetique</MenuItem>
                                </Select>
                          </Desktop>


                          <Tablet>
                              <Select
                               className = {classes.containedRes}
                              //value={age}
                              //onChange={handleChange}
                              //displayEmpty
                            //  inputProps={{ 'aria-label': 'Without label' }}
                              >

                              <MenuItem  className = {classes.MenuItemBloc} value={10}>Programmes Fitness</MenuItem>
                              <MenuItem  className = {classes.MenuItemBloc} value={20}>Programmes Nutritions</MenuItem>
                              <MenuItem  className = {classes.MenuItemBloc} value={30}>Thérapies bien-être</MenuItem>
                              <MenuItem  className = {classes.MenuItemBloc} value={30}>Soins Energetique</MenuItem>
                              </Select>
                          </Tablet>

                          <Mobile>
                                <Select
                                 className = {classes.containedRes}
                                //value={age}
                                //onChange={handleChange}
                                //displayEmpty
                              //  inputProps={{ 'aria-label': 'Without label' }}
                                >

                                <MenuItem
                                className = {classes.containedRes}
                                value={10}>Programmes Fitness</MenuItem>
                                <MenuItem
                                className = {classes.containedRes}
                                value={20}>Programmes Nutritions</MenuItem>
                                <MenuItem
                                className = {classes.containedRes}
                                value={30}>Thérapies bien-être</MenuItem>
                                <MenuItem
                                className = {classes.containedRes}
                                value={30}>Soins Energetique</MenuItem>
                                </Select>
                          </Mobile>
                       </div>
                    </div>

                    <div className = 'contact-send-input  contact-send-select-info-contact' >
                          <div className = ' contact-send-input-flex marginLeftContact'>

                              <div className = 'contact-send-label' >Prémon</div>
                              <div  className = 'contact-send-input-ctn'><input/></div>

                           </div>
                          <div className = ' contact-send-input-flex'>

                              <div className = 'contact-send-label' >Nom</div>
                              <div className = 'contact-send-input-ctn'><input/></div>

                          </div>
                    </div>


                    <div className = 'contact-send-input contact-send-select-info-contact margin-top-15' >
                          <div className = ' contact-send-input-flex'>

                              <div className = 'contact-send-label '>Télephont</div>
                              <div className = 'contact-send-input-ctn'><input/></div>

                           </div>
                          <div className = ' contact-send-input-flex'>

                              <div className = 'contact-send-label'>Email</div>
                              <div className = 'contact-send-input-ctn'><input/></div>

                          </div>
                    </div>


                    <div className = 'contact-send-input'>
                      <div className = 'contact-send-label'>Messages</div>
                      <div className = 'contact-send-input-text-area'><textArea/></div>
                    </div>







                     <div className = 'bouton-contenaire'>

                              <Mobilesm>
                              <Button  className = {classes.boutonRes}>Envoyer</Button>
                              </Mobilesm>

                              <Desktop>
                                   <Button  className = {classes.bouton}>Envoyer</Button>
                              </Desktop>


                              <Tablet>
                              <Button  className = {classes.bouton}>Envoyer</Button>
                              </Tablet>

                              <Mobile>
                              <Button  className = {classes.boutonRes}>Envoyer</Button>
                              </Mobile>

                     </div>
               </div>

           </Container>



          </div>




      </div>
  );
}
