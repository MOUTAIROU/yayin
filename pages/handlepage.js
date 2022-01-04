import React,{useState,useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ProTip from '../src/ProTip';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import NavBar from './nav'
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {MediaQuery,useMediaQuery } from 'react-responsive'
import { withStyles, makeStyles } from "@material-ui/core/styles";
import MenuList from '@mui/material/MenuList';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';


const redStyles = makeStyles({

headerNav:{
  height: '50px',
  backgroundColor: '#525252',
  borderBottom: '1px solid #efefef',
},
sidebar:{
  height: '100vh',
  backgroundColor: '#525252',
},
color:{
  color:'#efefef',
  opacity:"1 !important",
  width: '100%',
  paddingLeft:'10px'
},

sessionContainerText: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '32px',
    backgroundColor: '#fff',
    borderRadius: '30px',
    margin: '17px 0px',
},

sessionContainerTextListItem: {
    borderRadius: '13px',
    padding: '10px',
    backgroundColor: '#fff',
    display: 'inline-flex',
    marginRight: '20px',
    maxWidth: '50%',
    height: 'auto',

},

sessionContainer:{
  padding: '30px'
},
sessionContainerTextList: {
    marginBottom: '15px'
},

BoxUpadateContent: {
    marginBottom: '10px',
    height: 'auto'
},


BoxUpadateContentTField: {
    height: '100%',
    backgroundColor: '#fff',
    marginRight: '33px'
},

BoxUpadateContentBtn: {
    height: '100%',
    backgroundColor: '#fff'
},
sessionContainerTextListItemImg:{
  height:'50px',
  width:'50px'
},
BoxUpadateContentImg:{
      marginRight: '28px'
},
paperStyle:{
  padding:'15px',
  marginBottom:"20px"
}

});

export default function Index() {
   const classes = redStyles();
   const [session, setSession] = useState('session1')
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

          <Box>
            <Box className = {classes.headerNav}></Box>
            <Box className = {classes.container}>
              <Grid container>
                <Grid xs = {2} className = {classes.sidebar}>
                   <Box>
                           <MenuList dense className = {classes.color}>
                                 <Box>
                                 <MenuItem disabled className = {classes.color}>
                                   <ListItemText className = {classes.color}>Page : Home</ListItemText>
                                 </MenuItem>
                                  <Divider />
                                 </Box>
                                 <MenuItem className = {classes.color} onClick = {() => setSession('session1')}>
                                   <ListItemText inset>Session 1</ListItemText>
                                 </MenuItem>
                                 <MenuItem className = {classes.color} onClick = {() => setSession('session2')}>
                                   <ListItemText inset>Session 2</ListItemText>
                                 </MenuItem>
                                 <MenuItem className = {classes.color} onClick = {() => setSession('session3')}>
                                   <ListItemText inset>Session 3</ListItemText>
                                 </MenuItem>
                                 <MenuItem className = {classes.color} onClick = {() => setSession('session4')}>
                                   <ListItemText inset>Session 4</ListItemText>
                                 </MenuItem>
                                 <MenuItem className = {classes.color} onClick = {() => setSession('session5')}>
                                   <ListItemText inset>Session 5</ListItemText>
                                 </MenuItem>

                                 <Divider />


                                 <MenuItem disabled className = {classes.color}>
                                   <ListItemText>Page : Contact</ListItemText>
                                 </MenuItem>
                                 <Divider />

                                 <MenuItem className = {classes.color} onClick = {() => setSession('session31')}>
                                   <ListItemText inset>Session 1</ListItemText>
                                 </MenuItem>



                          </MenuList>
                   </Box>
                </Grid>
                <Grid xs = {10} className = {classes.container}>
                     {
                      session == 'session1' &&
                      <Session1

                        sessionT1 = {arrayList['sessionT1']}
                        sessionT2 = {arrayList['sessionT2']}
                      />
                     }


                     {
                      session == 'session2' &&
                      <Session2
                      session2T1 = {arrayList['session2T1']}
                      session2T2 = {arrayList['session2T2']}
                      session2T3 = {arrayList['session2T3']}
                      session2Image = {arrayList['session2Image']}

                      />
                     }


                     {
                      session == 'session3' &&
                      <Session3
                          session3T1 = {arrayList['session3T1']}
                          session3T2 = {arrayList['session3T2']}
                          session3T3 = {arrayList['session3T3']}
                          session3T4 = {arrayList['session3T4']}
                          session3T5 = {arrayList['session3T5']}
                          session3T6 = {arrayList['session3T6']}
                          session3T7 = {arrayList['session3T7']}
                          session3T8 = {arrayList['session3T8']}
                          session3T9 = {arrayList['session3T9']}
                          session3imageFour = {arrayList['session3imageFour']}
                          session3imageOne = {arrayList['session3imageOne']}
                          session3imageThree = {arrayList['session3imageThree']}
                          session3imageTwo = {arrayList['session3imageTwo']}
                      />
                     }

                     {
                      session == 'session4' &&
                      <Session4
                        session4T1 = {arrayList['session4T1']}
                        session4T2 = {arrayList['session4T2']}
                        session4T3 = {arrayList['session4T3']}
                        session4T4 = {arrayList['session4T4']}
                        session4T5 = {arrayList['session4T5']}
                        session4T6 = {arrayList['session4T6']}
                        session4T7 = {arrayList['session4T7']}
                        session4imageOne = {arrayList['session4imageOne']}
                        session4imageTwo = {arrayList['session4imageTwo']}
                        session4imageThree = {arrayList['session4imageThree']}

                      />
                     }

                     {
                      session == 'session5' &&
                      <Session5

                      session5T1 = {arrayList['session5T1']}
                      session5T2 = {arrayList['session5T2']}
                      session5T3 = {arrayList['session5T3']}
                      session5T5 = {arrayList['session5T5']}
                      session5T6 = {arrayList['session5T6']}
                      session5imageOne = {arrayList['session5imageOne']}
                      />
                     }

                     {
                      session == 'session21' &&  <Session21/>
                     }

                     {
                      session == 'session31' &&  <Session31/>
                     }







                </Grid>
              </Grid>
            </Box>
          </Box>



      </div>
  );
}


const Session1 = (props) => {


   const classes = redStyles();
   const [opent1, setOpent1] = useState(false)
   const [opent2, setOpent2] = useState(false)
   const [value1, setValue1] = useState(props.sessionT1)
   const [value2, setValue2] = useState(props.sessionT2)
   const [checkValue1, setCheckValue1] = useState(false)
   const [checkValue2, setCheckValue2] = useState(false)


   const sendData = async (data) => {

       if(data == 'sessionT1'){

           if(value1.length == 0) {
             setCheckValue1(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       sessionT1:value1,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/sessionT1`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }

       }

       if(data == 'sessionT2'){



           if(value2.length == 0) {
             setCheckValue2(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       sessionT2:value2,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/sessionT2`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }

       }

   }
  return(
    <Box className = {classes.sessionContainer}>
       <Typography  > Page > Home > Session 1</Typography>

       <Box className = {classes.sessionContainerText}> Session 1</Box>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value1}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent1(!opent1)}
               >Modifier</Button>
           </Box>

           {
             opent1 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           error = {checkValue1 == true ? true : false}
                           className = {classes.BoxUpadateContentTField}
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           onChange = {(e) => setValue1(e.target.value)}
                           value= {value1}
                           />

                         <Button
                           className = {classes.BoxUpadateContentBtn}
                           onClick = {() => sendData('sessionT1')}
                           >Valider</Button>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value2}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent2(!opent2)}
               >Modifier</Button>
           </Box>

           {
             opent2 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           error = {checkValue2 == true ? true : false}
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           value= {value2}
                           onChange = {(e) => setValue2(e.target.value)}/>

                         <Button
                          className = {classes.BoxUpadateContentBtn}
                          onClick = {() => sendData('sessionT2')}
                         >Valider</Button>
                      </Box>
           }
       </Paper>


    </Box>
  )
}

const Session2 = (props) => {

 let imageName = './'+props.session2Image;


  const classes = redStyles();
  const [opent1, setOpent1] = useState(false)
  const [opent2, setOpent2] = useState(false)
  const [opent3, setOpent3] = useState(false)
  const [opent4, setOpent4] = useState(false)
  const [value1, setValue1] = useState(props.session2T1)
  const [value2, setValue2] = useState(props.session2T2)
  const [value3, setValue3] = useState(props.session2T3)
  const [checkValue1, setCheckValue1] = useState(false)
  const [checkValue2, setCheckValue2] = useState(false)
  const [checkValue3, setCheckValue3] = useState(false)
  const [createObjectURL, setCreateObjectURL] = useState(imageName)
  const [image, setImage] = useState()


  const sendData = async (data) => {



      if(data == 'session2T1'){

          if(value1.length == 0) {
            setCheckValue1(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session2T1:value1,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session2T1`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }

      }

      if(data == 'session2T2'){



          if(value2.length == 0) {

            setCheckValue2(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session2T2:value2,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session2T2`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }

      }

      if(data == 'session2T3'){



          if(value2.length == 0) {
            setCheckValue3(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session2T3:value3,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session2T3`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }

      }

  }

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {

      const i = event.target.files[0]

      setImage(i);

      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const uploadToServer = async (event) => {
    const formData  = new FormData();

    formData.append("file", image);
    for (var key of formData.entries()) {
        console.log( key[1]);
    }


        const settings = {
          method: 'POST',
          body: formData
         }

     const response = await fetch("/api/session2image", settings);

     if(response.status == 200){

            alert('Enregistrement effectué avec succès')
     }else {
         alert("Veuillez choisir une image valide")
     }
  };

  return(
    <Box className = {classes.sessionContainer}>
       <Typography  > Page > Home > Session 2</Typography>

       <Box className = {classes.sessionContainerText}> Session 2</Box>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value1}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent1(!opent1)}
               >Modifier</Button>
           </Box>

           {
             opent1 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           error = {checkValue1 == true ? true : false}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           onChange = {(e) => setValue1(e.target.value)}
                           value= {value1}
                           />

                         <Button
                          className = {classes.BoxUpadateContentBtn}
                          onClick = {() => sendData('session2T1')}
                          >Valider</Button>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value2}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent2(!opent2)}
               >Modifier</Button>
           </Box>

           {
             opent2 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}

                           error = {checkValue2 == true ? true : false}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           onChange = {(e) => setValue2(e.target.value)}
                           value= {value2}

                           />

                         <Button
                           className = {classes.BoxUpadateContentBtn}
                           onClick = {() => sendData('session2T2')}
                           >Valider</Button>
                      </Box>
           }
       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value3}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent3(!opent3)}
               >Modifier</Button>
           </Box>

           {
             opent3 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           error = {checkValue3 == true ? true : false}
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           onChange = {(e) => setValue3(e.target.value)}
                           value= {value3}

                           />

                         <Button
                          className = {classes.BoxUpadateContentBtn}
                          onClick = {() => sendData('session2T3')}
                          >Valider</Button>
                      </Box>
           }
       </Paper>

       <Box className = {classes.sessionContainerText}> Image</Box>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>
                 <Box > <img  className = {classes.sessionContainerTextListItemImg} src = {`${createObjectURL}`}/></Box>
              </Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent4(!opent4)}
               >Modifier</Button>
           </Box>

           {
             opent4 && <Box className = {classes.BoxUpadateContent}>
                         <Button
                          variant='contained'
                          component='label'
                          className = {classes.BoxUpadateContentImg}
                         >

                            <input
                              type = 'file'
                              onChange={uploadToClient}

                            />

                         </Button>

                         <Button
                           className = {classes.BoxUpadateContentBtn}
                           onClick={uploadToServer}
                           >Valider</Button>
                      </Box>
           }
       </Paper>




    </Box>
  )
}

const Session3 = (props) => {


   let imageName1 = './'+props.session3imageOne;

  let imageName2 = './'+props.session3imageTwo;

  let imageName3 = './'+props.session3imageThree;

  let imageName4 = './'+props.session3imageFour;




   const classes = redStyles();
   const [opent1, setOpent1] = useState(false)
   const [opent2, setOpent2] = useState(false)
   const [opent3, setOpent3] = useState(false)
   const [opent4, setOpent4] = useState(false)
   const [opent5, setOpent5] = useState(false)

   const [checkValue1, setCheckValue1] = useState(false)
   const [value1, setValue1] = useState(props.session3T1)
   const [checkValue2, setCheckValue2] = useState(false)
   const [value2, setValue2] = useState(props.session3T2)
   const [checkValue3, setCheckValue3] = useState(false)
   const [value3, setValue3] = useState(props.session3T3)
   const [checkValue4, setCheckValue4] = useState(false)
   const [value4, setValue4] = useState(props.session3T4)
   const [checkValue5, setCheckValue5] = useState(false)
   const [value5, setValue5] = useState(props.session3T5)


   const [checkValue6, setCheckValue6] = useState(false)
   const [value6, setValue6] = useState(props.session3T6)

   const [checkValue7, setCheckValue7] = useState(false)
   const [value7, setValue7] = useState(props.session3T7)

   const [checkValue8, setCheckValue8] = useState(false)
   const [value8, setValue8] = useState(props.session3T8)

   const [checkValue9, setCheckValue9] = useState(false)
   const [value9, setValue9] = useState(props.session3T9)

   const [createObjectURLS1, setCreateObjectURLS1] = useState(imageName1)
   const [images1, setImages1] = useState()

   const [createObjectURLS2, setCreateObjectURLS2] = useState(imageName2)
   const [images2, setImages2] = useState()

   const [createObjectURLS3, setCreateObjectURLS3] = useState(imageName3)
   const [images3, setImages3] = useState()

   const [createObjectURLS4, setCreateObjectURLS4] = useState(imageName4)
   const [images4, setImages4] = useState()

    const uploadToClientS1 = (event) => {
     if (event.target.files && event.target.files[0]) {
       console.log(event.target.files[0])
       const i = event.target.files[0]

       setImages1(i);
       setCreateObjectURLS1(URL.createObjectURL(i));
     }
   };

    const uploadToServerS1 = async (event) => {
     const formData  = new FormData();

     formData.append("file", images1);



         const settings = {
           method: 'POST',
           body: formData
          }

      const response = await fetch("/api/session3imageOne", settings);

      if(response.status == 200){

             alert('Enregistrement effectué avec succès')
      }else {
          alert("Veuillez choisir une image valide")
      }

   };

   const uploadToClientS2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0])
      const i = event.target.files[0]

      setImages2(i);
      setCreateObjectURLS2(URL.createObjectURL(i));
    }
  };

   const uploadToServerS2 = async (event) => {
    const formData  = new FormData();

    formData.append("file", images2);



        const settings = {
          method: 'POST',
          body: formData
         }

     const response = await fetch("/api/session3imageTwo", settings);

     if(response.status == 200){

            alert('Enregistrement effectué avec succès')
     }else {
         alert("Veuillez choisir une image valide")
     }

  };

   const uploadToClientS3 = (event) => {
   if (event.target.files && event.target.files[0]) {
     console.log(event.target.files[0])
     const i = event.target.files[0]

     setImages3(i);
     setCreateObjectURLS3(URL.createObjectURL(i));
   }
 };

   const uploadToServerS3 = async (event) => {
   const formData  = new FormData();

   formData.append("file", images3);



       const settings = {
         method: 'POST',
         body: formData
        }

    const response = await fetch("/api/session3imageThree", settings);

    if(response.status == 200){

           alert('Enregistrement effectué avec succès')
    }else {
        alert("Veuillez choisir une image valide")
    }

 };

   const uploadToClientS4 = (event) => {
 if (event.target.files && event.target.files[0]) {
   console.log(event.target.files[0])
   const i = event.target.files[0]

   setImages4(i);
   setCreateObjectURLS4(URL.createObjectURL(i));
 }
};

   const uploadToServerS4 = async (event) => {
 const formData  = new FormData();

 formData.append("file", images4);



     const settings = {
       method: 'POST',
       body: formData
      }

  const response = await fetch("/api/session3imageFour", settings);

  if(response.status == 200){

         alert('Enregistrement effectué avec succès')
  }else {
      alert("Veuillez choisir une image valide")
  }

};

   const sendData = async (data) => {



           if(value1.length == 0) {
             setCheckValue1(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T1:value1,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T1`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataTwo = async (data) => {



           if(value2.length == 0) {
             setCheckValue2(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T2:value2,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T2`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataThree = async (data) => {


           if(value3.length == 0) {
             setCheckValue3(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T3:value3,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T3`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatafour = async (data) => {



           if(value4.length == 0) {
             setCheckValue4(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T4:value4,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T4`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatafive = async (data) => {


           if(value5.length == 0) {
             setCheckValue5(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T5:value5,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T5`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatasix = async (data) => {



           if(value6.length == 0) {
             setCheckValue6(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T6:value6,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T6`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataseven = async (data) => {


           if(value7.length == 0) {
             setCheckValue7(true)
             return
           }else {
                  console.log('totottotootooto');
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T7:value7,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T7`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataeight = async (data) => {



           if(value8.length == 0) {
             setCheckValue8(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T8:value8,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T8`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataneight = async (data) => {


           if(value9.length == 0) {
             setCheckValue9(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session3T9:value9,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session3T9`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

  return(
    <Box className = {classes.sessionContainer}>
       <Typography  > Page > Home > Session 3</Typography>



       <Box className = {classes.sessionContainerText}> Session 3</Box>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>NOS OFFRES</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent1(!opent1)}
               >Modifier</Button>
           </Box>

           {
             opent1 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           error = {checkValue1 == true ? true : false}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           onChange = {(e) => setValue1(e.target.value)}
                           value= {value1}/>

                         <Button
                           className = {classes.BoxUpadateContentBtn}
                           onClick = {() => sendData()}
                           >Validerr</Button>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
              <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS1}/></Box>
               <Box className = {classes.sessionContainerTextListItem}>Programmes Fitness</Box>
               <Box className = {classes.sessionContainerTextListItem}>Coach sportif et mental 100 % satisfait remboursées</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent2(!opent2)}
               >Modifier</Button>


           </Box>

           {
             opent2 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                error = {checkValue2 == true ? true : false}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                onChange = {(e) => setValue2(e.target.value)}
                                value= {value2}/>

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDataTwo()}
                               >Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                error = {checkValue3 == true ? true : false}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                onChange = {(e) => setValue3(e.target.value)}
                                value= {value3}/>

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDataThree()}
                               >Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                >

                                   <input
                                     type = 'file'
                                     onChange={uploadToClientS1}

                                   />


                                </Button>

                                <Button
                                  className = {classes.BoxUpadateContentBtn}
                                  onClick={uploadToServerS1}
                                  >Valider</Button>

                          </Box>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
              <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS2}/></Box>
               <Box className = {classes.sessionContainerTextListItem}>Programmes Nutritions</Box>
               <Box className = {classes.sessionContainerTextListItem}>Naturopathie quantique personnalisées</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent3(!opent3)}
               >Modifier</Button>


           </Box>

           {
             opent3 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue4 == true ? true : false}
                                onChange = {(e) => setValue4(e.target.value)}
                                value= {value4}
                                />

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDatafour()}
                               >Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue5 == true ? true : false}
                                onChange = {(e) => setValue5(e.target.value)}
                                value= {value5}
                                />

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDatafive()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                 onChange={uploadToClientS2}
                                >

                                   <input
                                     type = 'file'


                                   />



                                </Button>

                                <Button
                                  className = {classes.BoxUpadateContentBtn}
                                  onClick={uploadToServerS2}
                                  >Valider</Button>
                          </Box>
                      </Box>
           }

       </Paper>


       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
              <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS3}/></Box>
               <Box className = {classes.sessionContainerTextListItem}>Thérapies bien-être</Box>
               <Box className = {classes.sessionContainerTextListItem}>Les classes de méditation qui contribuent à promouvoir l'équilibre intérieur</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent4(!opent4)}
               >Modifier</Button>


         </Box>

           {
             opent4 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue6 == true ? true : false}
                                onChange = {(e) => setValue6(e.target.value)}
                                value= {value6}/>

                              <Button
                                className = {classes.BoxUpadateContentBtn}
                                onClick = {() => sendDatasix()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue7 == true ? true : false}
                                onChange = {(e) => setValue7(e.target.value)}
                                value= {value7}/>

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDataseven()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                 onChange={uploadToClientS3}

                                >

                                   <input
                                     type = 'file'

                                   />

                                </Button>

                                <Button
                                  className = {classes.BoxUpadateContentBtn}
                                  onClick={uploadToServerS3}
                                  >Valider</Button>


                          </Box>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
               <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS4}/></Box>
               <Box className = {classes.sessionContainerTextListItem}>Soins Energetique</Box>
               <Box className = {classes.sessionContainerTextListItem}>HOLISTIQUE RECONNECTION SACRE FEMININ MASCULIN ..</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent5(!opent5)}
               >Modifier</Button>


           </Box>

           {
             opent5 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue8 == true ? true : false}
                                onChange = {(e) => setValue8(e.target.value)}
                                value= {value8}/>

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDataeight()}
                               >Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue9 == true ? true : false}
                                onChange = {(e) => setValue9(e.target.value)}
                                value= {value9}/>

                              <Button
                              className = {classes.BoxUpadateContentBtn}
                              onClick = {() => sendDataneight()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                 onChange={uploadToClientS4}
                                >

                                   <input
                                     type = 'file'

                                   />

                                </Button>

                                <Button
                                  className = {classes.BoxUpadateContentBtn}
                                  onClick={uploadToServerS4}
                                  >Valider</Button>
                          </Box>
                      </Box>
           }

       </Paper>




    </Box>
  )
}

const Session4 = (props) => {



  let imageName1 = './'+props.session4imageOne;

 let imageName2 = './'+props.session4imageTwo;

 let imageName3 = './'+props.session4imageThree;


   const classes = redStyles();
   const [opent1, setOpent1] = useState(false)
   const [opent2, setOpent2] = useState(false)
   const [opent3, setOpent3] = useState(false)
   const [opent4, setOpent4] = useState(false)
   const [opent5, setOpent5] = useState(false)
   const [checkValue1, setCheckValue1] = useState(false)
   const [value1, setValue1] = useState(props.session4T1)
   const [checkValue2, setCheckValue2] = useState(false)
   const [value2, setValue2] = useState(props.session4T2)
   const [checkValue3, setCheckValue3] = useState(false)
   const [value3, setValue3] = useState(props.session4T3)
   const [checkValue4, setCheckValue4] = useState(false)
   const [value4, setValue4] = useState(props.session4T4)
   const [checkValue5, setCheckValue5] = useState(false)
   const [value5, setValue5] = useState(props.session4T5)
   const [checkValue6, setCheckValue6] = useState(false)
   const [value6, setValue6] = useState(props.session4T6)
   const [checkValue7, setCheckValue7] = useState(false)
   const [value7, setValue7] = useState(props.session4T7)

   const [createObjectURLS1, setCreateObjectURLS1] = useState(imageName1)
   const [images1, setImages1] = useState(null)

   const [createObjectURLS2, setCreateObjectURLS2] = useState(imageName2)
   const [images2, setImages2] = useState(null)

   const [createObjectURLS3, setCreateObjectURLS3] = useState(imageName3)
   const [images3, setImages3] = useState(null)


    const uploadToClientS1 = (event) => {
     if (event.target.files && event.target.files[0]) {
       console.log(event.target.files[0])
       const i = event.target.files[0]

       setImages1(i);
       setCreateObjectURLS1(URL.createObjectURL(i));
     }
   };

    const uploadToServerS1 = async (event) => {
     const formData  = new FormData();

     formData.append("file", images1);



         const settings = {
           method: 'POST',
           body: formData
          }

      const response = await fetch("/api/session4imageOne", settings);

      if(response.status == 200){

             alert('Enregistrement effectué avec succès')
      }else {
          alert("Veuillez choisir une image valide")
      }

   };

   const uploadToClientS2 = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0])
      const i = event.target.files[0]

      setImages2(i);
      setCreateObjectURLS2(URL.createObjectURL(i));
    }
  };

   const uploadToServerS2 = async (event) => {
    const formData  = new FormData();

    formData.append("file", images2);



        const settings = {
          method: 'POST',
          body: formData
         }

     const response = await fetch("/api/session4imageTwo", settings);

     if(response.status == 200){

            alert('Enregistrement effectué avec succès')
     }else {
         alert("Veuillez choisir une image valide")
     }

  };

   const uploadToClientS3 = (event) => {
   if (event.target.files && event.target.files[0]) {
     console.log(event.target.files[0])
     const i = event.target.files[0]

     setImages3(i);
     setCreateObjectURLS3(URL.createObjectURL(i));
   }
 };

   const uploadToServerS3 = async (event) => {
   const formData  = new FormData();

   formData.append("file", images3);



       const settings = {
         method: 'POST',
         body: formData
        }


    const response = await fetch("/api/session4imageThree", settings);

    if(response.status == 200){

           alert('Enregistrement effectué avec succès')
    }else {
        alert("Veuillez choisir une image valide")
    }

 };

   const sendData = async (data) => {



           if(value1.length == 0) {
             setCheckValue1(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session4T1:value1,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T1`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataTwo = async (data) => {



           if(value2.length == 0) {
             setCheckValue2(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session4T2:value2,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T2`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataThree = async (data) => {


           if(value3.length == 0) {
             setCheckValue3(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session4T3:value3,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T3`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatafour = async (data) => {



           if(value4.length == 0) {
             setCheckValue4(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session4T4:value4,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T4`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatafive = async (data) => {


           if(value5.length == 0) {
             setCheckValue5(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session5T5:value5,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T5`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatasix = async (data) => {



           if(value6.length == 0) {
             setCheckValue6(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session4T6:value6,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T6`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataseven = async (data) => {



           if(value7.length == 0) {
             setCheckValue7(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session4T7:value7,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session4T7`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

  return(
    <Box className = {classes.sessionContainer}>
       <Typography  > Page > Home > Session 4  </Typography>


       <Box className = {classes.sessionContainerText}> Session 4</Box>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value1}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent1(!opent1)}
               >Modifier</Button>
           </Box>

           {
             opent1 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           error = {checkValue1 == true ? true : false}
                           onChange = {(e) => setValue1(e.target.value)}
                           value = {value1}
                           />

                         <Button
                           className = {classes.BoxUpadateContentBtn}
                           onClick = {() => sendData()}>Valider</Button>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
                <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS1}/>
              </Box>
               <Box className = {classes.sessionContainerTextListItem}>{value2}</Box>
               <Box className = {classes.sessionContainerTextListItem}>{value3}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent2(!opent2)}
               >Modifier</Button>


           </Box>

           {
             opent2 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue2 == true ? true : false}
                                onChange = {(e) => setValue2(e.target.value)}
                                value = {value2}
                                />

                              <Button
                              className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDataTwo()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue3 == true ? true : false}
                                onChange = {(e) => setValue3(e.target.value)}
                                value = {value3}/>


                              <Button
                              className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDataThree()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                 onChange={uploadToClientS1}
                                >

                                   <input
                                     type = 'file'

                                   />

                                </Button>


                                <Button
                                 className = {classes.BoxUpadateContentBtn}
                                 onClick={uploadToServerS1}
                                 >Valider</Button>
                          </Box>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
              <img
               className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS2}/></Box>
               <Box className = {classes.sessionContainerTextListItem}>{value4}</Box>
               <Box className = {classes.sessionContainerTextListItem}>{value5}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent3(!opent3)}
               >Modifier</Button>


           </Box>

           {
             opent3 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue4 == true ? true : false}
                                onChange = {(e) => setValue4(e.target.value)}
                                value = {value4}/>

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                                onClick = {() => sendDatafour()}
                               >Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue5 == true ? true : false}
                                onChange = {(e) => setValue5(e.target.value)}
                                value = {value5}/>

                              <Button
                               className = {classes.BoxUpadateContentBtn}
                               onClick = {() => sendDatafive()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                 onChange={uploadToClientS2}
                                >

                                   <input
                                     type = 'file'

                                   />

                                </Button>

                                <Button
                                 className = {classes.BoxUpadateContentBtn}
                                 onClick={uploadToServerS2}
                                 >Valider</Button>


                          </Box>
                      </Box>
           }

       </Paper>


       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>


              <Box className = {classes.sessionContainerTextListItem}>
              <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS3}/></Box>
               <Box className = {classes.sessionContainerTextListItem}>{value6}</Box>
               <Box className = {classes.sessionContainerTextListItem}> {value7}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent4(!opent4)}
               >Modifier</Button>


           </Box>

           {
             opent4 && <Box className = {classes.BoxUpadateContent}>
                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue6 == true ? true : false}
                                onChange = {(e) => setValue6(e.target.value)}
                                value = {value6}
                                />

                              <Button
                                className = {classes.BoxUpadateContentBtn}
                                onClick = {() => sendDatasix()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                              <TextField
                                className = {classes.BoxUpadateContentTField}
                                id="outlined-basic"
                                label="Entrez votre text"
                                variant="outlined"
                                size="small"
                                error = {checkValue7 == true ? true : false}
                                onChange = {(e) => setValue7(e.target.value)}
                                value = {value7}/>

                              <Button
                                className = {classes.BoxUpadateContentBtn}
                                onClick = {() => sendDataseven()}>Valider</Button>
                          </Box>

                          <Box className = {classes.BoxUpadateContent} >
                                <Button
                                 variant='contained'
                                 component='label'
                                 className = {classes.BoxUpadateContentImg}
                                 onChange={uploadToClientS3}
                                >

                                   <input
                                     type = 'file'

                                   />

                                </Button>

                                <Button
                                 className = {classes.BoxUpadateContentBtn}
                                 onClick={uploadToServerS3}
                                 >Valider</Button>
                          </Box>
                      </Box>
           }

       </Paper>






    </Box>
  )
}

const Session5 = (props) => {
  let imageName1 = './'+props.session5imageOne;

  const classes = redStyles();
  const [opent1, setOpent1] = useState(false)
  const [opent2, setOpent2] = useState(false)
  const [opent3, setOpent3] = useState(false)
  const [opent4, setOpent4] = useState(false)
  const [opent5, setOpent5] = useState(false)
  const [opent6, setOpent6] = useState(false)
  const [opent7, setOpent7] = useState(false)
  const [opent8, setOpent8] = useState(false)

  const [checkValue1, setCheckValue1] = useState(false)
  const [value1, setValue1] = useState(props.session5T1)
  const [checkValue2, setCheckValue2] = useState(false)
  const [value2, setValue2] = useState(props.session5T2)
  const [checkValue3, setCheckValue3] = useState(false)
  const [value3, setValue3] = useState(props.session5T3)
  const [checkValue4, setCheckValue4] = useState(false)
  const [value4, setValue4] = useState(props.session5T4)
  const [checkValue5, setCheckValue5] = useState(false)
  const [value5, setValue5] = useState(props.session5T5)
  const [checkValue6, setCheckValue6] = useState(false)
  const [value6, setValue6] = useState(props.session5T6)

  const [createObjectURLS1, setCreateObjectURLS1] = useState(imageName1)
  const [images1, setImages1] = useState(null)
   const uploadToClientS1 = (event) => {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0])
      const i = event.target.files[0]

      setImages1(i);
      setCreateObjectURLS1(URL.createObjectURL(i));
    }
  };

   const uploadToServerS1 = async (event) => {

    const formData  = new FormData();

    formData.append("file", images1);


        const settings = {
          method: 'POST',
          body: formData
         }

     const response = await fetch("/api/session5imageOne", settings);


     if(response.status == 200){

            alert('Enregistrement effectué avec succès')
     }else {
         alert("Veuillez choisir une image valide")
     }

  };

  const sendData = async (data) => {



          if(value1.length == 0) {
            setCheckValue1(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session5T1:value1,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session5T1`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }




  }

  const sendDataTwo = async (data) => {



          if(value2.length == 0) {
            setCheckValue2(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session5T2:value2,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session5T2`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }




  }

  const sendDataThree = async (data) => {


          if(value3.length == 0) {
            setCheckValue3(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session5T3:value3,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session5T3`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }




  }

  const sendDatafour = async (data) => {



          if(value4.length == 0) {
            setCheckValue4(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session5T4:value4,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session5T4`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }




  }

  const sendDatafive = async (data) => {


          if(value5.length == 0) {
            setCheckValue5(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session5T5:value5,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session5T5`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }




  }

  const sendDatasix = async (data) => {


          if(value6.length == 0) {
            setCheckValue6(true)
            return
          }else {
                const settings = {
                method: 'POST',
                headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                body: JSON.stringify({
                      session5T6:value6,
                  })
                 }



              try {

                const fetchResponse = await fetch(`/api/session5T6`, settings)

                const resp = await fetchResponse.json()


                 if(resp.status == 200){

                        alert('Enregistrement effectué avec succès')

                 }

                  } catch (e) {
                    return e;
                  }
          }




  }

  return(
    <Box className = {classes.sessionContainer}>
       <Typography  > Page > Home > Session 5 </Typography>

       <Box className = {classes.sessionContainerText}> Session 5</Box>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value1}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent1(!opent1)}
               >Modifier</Button>
           </Box>

           {
             opent1 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           error = {checkValue1 == true ? true : false}
                           onChange = {(e) => setValue1(e.target.value)}
                           value= {value1}/>

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendData()}>Valider</Button>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value2}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent2(!opent2)}
               >Modifier</Button>
           </Box>

           {
             opent2 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           error = {checkValue2 == true ? true : false}
                           onChange = {(e) => setValue2(e.target.value)}
                           value= {value2}/>

                         <Button
                          className = {classes.BoxUpadateContentBtn}
                          onClick = {() => sendDataTwo()}>Valider</Button>
                      </Box>
           }
       </Paper>



       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value3}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent3(!opent3)}
               >Modifier</Button>
           </Box>

           {
             opent3 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           error = {checkValue3 == true ? true : false}
                           onChange = {(e) => setValue3(e.target.value)}
                           value= {value3}/>

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDataThree()}>Valider</Button>
                      </Box>
           }
       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value4}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent4(!opent4)}
               >Modifier</Button>
           </Box>

           {
             opent4 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           error = {checkValue4 == true ? true : false}
                           onChange = {(e) => setValue4(e.target.value)}
                           value= {value4}
                           />

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDatafour()}>Valider</Button>
                      </Box>
           }
       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value5}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent5(!opent5)}
               >Modifier</Button>
           </Box>

           {
             opent5 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           error = {checkValue5 == true ? true : false}
                           onChange = {(e) => setValue5(e.target.value)}
                           value= {value5}/>

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDatafive()}>Valider</Button>
                      </Box>
           }
       </Paper>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>{value6}</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent6(!opent6)}
               >Modifier</Button>
           </Box>

           {
             opent6 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           error = {checkValue6 == true ? true : false}
                           onChange = {(e) => setValue6(e.target.value)}
                           value= {value6}
                           />

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDatasix()}>Valider</Button>
                      </Box>
           }
       </Paper>

       <Box className = {classes.sessionContainerText}> Image</Box>

       <Paper className = {classes.paperStyle}>
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>
                 <Box > <img  className = {classes.sessionContainerTextListItemImg} src = {createObjectURLS1}/></Box>
              </Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent8(!opent8)}
               >Modifier</Button>
           </Box>

           {
             opent8 && <Box className = {classes.BoxUpadateContent}>
                         <Button
                          variant='contained'
                          component='label'
                          className = {classes.BoxUpadateContentImg}
                          onChange={uploadToClientS1}



                         >

                            <input
                              type = 'file'

                            />

                         </Button>

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick={uploadToServerS1}>Valider</Button>
                      </Box>
           }
       </Paper>




    </Box>
  )
}

const Session31 = () => {
   const classes = redStyles();
   const [opent1, setOpent1] = useState(false)
   const [opent2, setOpent2] = useState(false)
   const [opent3, setOpent3] = useState(false)
   const [opent4, setOpent4] = useState(false)

   const [checkValue1, setCheckValue1] = useState(false)
   const [value1, setValue1] = useState('')
   const [checkValue2, setCheckValue2] = useState(false)
   const [value2, setValue2] = useState('')
   const [checkValue3, setCheckValue3] = useState(false)
   const [value3, setValue3] = useState('')
   const [checkValue4, setCheckValue4] = useState(false)
   const [value4, setValue4] = useState('')
   const sendData = async (data) => {



           if(value1.length == 0) {
             setCheckValue1(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session31T1:value1,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session31T1`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataTwo = async (data) => {



           if(value2.length == 0) {
             setCheckValue2(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session31T2:value2,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session31T2`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDataThree = async (data) => {


           if(value3.length == 0) {
             setCheckValue3(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session31T3:value3,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session31T3`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

   const sendDatafour = async (data) => {


           if(value4.length == 0) {
             setCheckValue4(true)
             return
           }else {
                 const settings = {
                 method: 'POST',
                 headers: {
                             Accept: 'application/json',
                             'Content-Type': 'application/json',
                         },
                 body: JSON.stringify({
                       session31T4:value4,
                   })
                  }



               try {

                 const fetchResponse = await fetch(`/api/session31T4`, settings)

                 const resp = await fetchResponse.json()


                  if(resp.status == 200){

                         alert('Enregistrement effectué avec succès')

                  }

                   } catch (e) {
                     return e;
                   }
           }




   }

  return(
    <Box className = {classes.sessionContainer}>
       <Typography  > Page > Contact </Typography>

       <Box className = {classes.sessionContainerText}> Contact</Box>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>Prise de Rendez-Vous</Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent1(!opent1)}
               >Modifier</Button>
           </Box>

           {
             opent1 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           error = {checkValue1 == true ? true : false}
                           onChange = {(e) => setValue1(e.target.value)}
                           value= {value1}/>

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendData()}>Valider</Button>
                      </Box>
           }

       </Paper>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>
                 autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur. Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societ
              </Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent2(!opent2)}
               >Modifier</Button>
           </Box>

           {
             opent2 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           error = {checkValue2 == true ? true : false}
                           onChange = {(e) => setValue2(e.target.value)}
                           value= {value2}/>

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDataTwo()}>Valider</Button>
                      </Box>
           }
       </Paper>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>
                 autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur. Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societ
              </Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent3(!opent3)}
               >Modifier</Button>
           </Box>

           {
             opent3 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           error = {checkValue3 == true ? true : false}
                           onChange = {(e) => setValue3(e.target.value)}
                           value= {value3}
                           />

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDataThree()}>Valider</Button>
                      </Box>
           }
       </Paper>

       <Paper className = {classes.paperStyle} >
           <Box className = {classes.sessionContainerTextList}>
              <Box className = {classes.sessionContainerTextListItem}>
                 autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societate generis humani, quam conciliavit ipsa natura, ita contracta res est et adducta in angustum ut omnis caritas aut inter duos aut inter paucos iungeretur. Quanta autem vis amicitiae sit, ex hoc intellegi maxime potest, quod ex infinita societ
              </Box>
              <Button
               className = {classes.sessionContainerTextListItem}
               onClick = {() => setOpent4(!opent4)}
               >Modifier</Button>
           </Box>

           {
             opent4 && <Box className = {classes.BoxUpadateContent}>
                         <TextField
                           className = {classes.BoxUpadateContentTField}
                           id="outlined-basic"
                           label="Entrez votre text"
                           variant="outlined"
                           size="small"
                           multiline
                           style = {{width: '84%'}}
                           error = {checkValue4 == true ? true : false}
                           onChange = {(e) => setValue4(e.target.value)}
                           value= {value4}
                           />

                         <Button
                         className = {classes.BoxUpadateContentBtn}
                         onClick = {() => sendDatafour()}>Valider</Button>
                      </Box>
           }
       </Paper>


    </Box>
  )
}
