import React, {  useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';

import {   CardActionArea, Fade, Grid } from "@material-ui/core";


import '../../css/game1.css'

const useStyles = makeStyles((theme) => ({
    root: {
     
      maxWidth: "60%",
      maxHeight: "100%",
      left: "20%",
      position: "relative"
    },
   
    media: {
      height: 0,
      width: '100%',
      paddingTop: "50.25%"
      
    },
  
    
    
   
}));

  

function Game1() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);
    const [dato1, setDato1] = React.useState({});
    const [contador, setContador] = React.useState(0);
  //  const [verificar, setVerificar] = React.useState([]);
    
    let img = [

      {id: 1, name: "Perro", photo: "../../../images/gameDnD/perro.jpg" },
      {id: 2, name: "Gato", photo: "../../../images/gameDnD/abc1.jpg" },
      {id: 3, name: "Conejo", photo: "../../../images/gameDnD/logo.jpg" },
      {id: 4, name: "Gallina", photo: "../../../images/gameDnD/abc3.jpg" },
      {id: 5, name: "Caballo", photo: "../../../images/gameDnD/abc4.jpg" },
      {id: 6, name: "Perro", photo: "../../../images/gameDnD/circulo.jpg" },
      {id: 7, name: "Gato", photo: "../../../images/gameDnD/curvas.jpg" },
      {id: 8, name: "Conejo", photo: "../../../images/gameDnD/espiral.jpg" },
      {id: 9, name: "Gallina", photo: "../../../images/gameDnD/logo2.jpg" },
      {id: 10, name: "Caballo", photo: "../../../images/gameDnD/curvas2.jpg" }
    ];

    function generateRandomInt(){
      return Math.floor((Math.random() * (10-0)) +0);
  }
  let numeros = Number(generateRandomInt()) 
  
  let prueba = img[numeros];
 
  let data = [
    {id: 1, name: "Perro" },
    {id: 2, name: "Conejo" },
    {id: 3, name: "Gato" },
    {id: 4, name: "Gallina" },
    {id: 5, name: "Caballo" },
  ]
  const botones = () =>{

    var data2 = [];
    let aleatorio = data.map(item => {
    
      let random = data[Math.floor(Math.random() * data.length)]
      
      if(!data2.includes(random))
      {
         data2.push(random)
           
      }
    })
    data2.push(dato1)
    return data2;

  }

  let btnR = botones();

  //let random = img[Math.floor(Math.random() * img.length)]
  
    useEffect(() => {
      setDato1(prueba)
     // console.log(data)
    //  console.log(btnR)
    
     
      return () => {
        setDato1({})

      }
    }, [])

    console.log(data)
    //console.log(btnR)

  // const verificar = data2.filter(item => (item.name === dato1.name))
   

    const handleChange = (dato) => {
      //setChecked((prev) => !prev);
    // let imagenes = Object.values(img).find(item => item.name === dato)
      //console.log(imagenes)
      /*let aleatorio2 = data.map(item => {
    
        let random = data[Math.floor(Math.random() * data.length)]
        
        if(!data2.includes(random))
        {
          data2.push(random)
    
        }
      })*/
      if(dato === dato1.name)
      {
        alert("Coincide")
        prueba = img[numeros];
        setDato1(prueba)
        btnR = botones()
        console.log(btnR)
      //  setVerificar(btnR)
       // data2=[];
        setContador(contador+1);
       // console.log(data2)
        console.log(contador)
       // console.log(verificar)
        if(contador == 5) 
        {
          alert("Fin del Juego")
          setContador(0);
       //   data2=[];
        //  setVerificar(data2)
        }
      }else {
        alert("no coincide")
      }
     

    };

   

  return (
    <div style={{ backgroundColor: "red", height: 659 }}>
    <Grid container >

            <Grid xs={12} sm={12}>
                <Grid className="perro" >
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image={dato1.photo}
                        />
                    </Card>
                </Grid>        
            </Grid>
           
    </Grid>
    <Grid className="opciones">
    <Grid  container>
    <Grid   sm={2}>
    </Grid>
    <Grid  xs={12} sm={8}>
    <Grid container>
    {Object.values(btnR).map(item => (
        <Grid xs={12} sm={4}>
          
            <Grid className="cards">
            <CardActionArea  onClick={() => handleChange(item.name)} >
            <Card className={classes.root1}>
                  <Card className="name2" >
                      <h2>{item.name}</h2>
                      
                  </Card>
            </Card>
            </CardActionArea>
        </Grid>

        </Grid>
        ))}
    
  </Grid>    
    </Grid>
    <Grid  sm={2}>
    </Grid>
</Grid>
    </Grid>
  
    </div> 

  );
}

export default Game1;