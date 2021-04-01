import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import {   CardActionArea, Fade, Grid } from "@material-ui/core";
import Paper from '@material-ui/core/Paper';
import Slide from '@material-ui/core/Slide';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import '../../css/game1.css'

const useStyles = makeStyles((theme) => ({
    root: {
     
      maxWidth: "100%",
      maxHeight: "100%",
      
    },
    root1: {
     
      maxWidth: "100%",
      maxHeight: "100%",
      
    },
  
    media: {
      height: 0,
      width: '100%',
      paddingTop: "70.25%"
      
    },
    media2: {
        height: 0,
        width: '100%',
        paddingTop: "70.25%",
        
      },
   
      media4: {
        height: 0,
        width: '100%',
        paddingTop: "50.25%", 
        background: "red",
       
      },

    
    
   
}));

  

function Game1() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
      setChecked((prev) => !prev);
      
    };

  return (
    <div>
    <Grid container >

            <Grid xs={12} sm={6}>
                <Grid className="perro" >
                    <Card className={classes.root}>
                        <CardMedia
                            className={classes.media}
                            image="../../../images/gameDnD/perro.jpg"
                        />
                    </Card>
                </Grid>        
            </Grid>
            <Grid xs={12} sm={6}>
               <Grid className="perro" >
                  <Card className={classes.root}>
                  <Fade in={checked} unmountOnExit >
                      <CardMedia
                          className={classes.media}
                          image="../../../images/gameDnD/perro.jpg"
                      />
                  </Fade>
                  </Card>
                </Grid>  
                <br/>
                <br/>
            
            </Grid>
 
    </Grid>
    <Grid className="opciones">
    <Grid  container>
    <Grid   sm={2}>
    </Grid>
    <Grid  xs={12} sm={8}>
    <Grid container>
        <Grid xs={12} sm={4}>
          
            <Grid className="cards">
                <CardActionArea  onClick={handleChange} >
                <Card className={classes.root1}>
                      <Card className="name2" >
                          <h2>PERRO</h2>
                      </Card>
                </Card>
                </CardActionArea>
            </Grid>
        </Grid>
        <Grid xs={12} sm={4}>
              <Grid className="cards">
              <CardActionArea onClick={handleChange}  >
                  <Card className={classes.root1}>
                      <Card className="name2" >
                         <h2>PERRO</h2>
                      </Card>
                  </Card>
              </CardActionArea>
              </Grid>
        </Grid>
        <Grid xs={12} sm={4}>
          <Grid className="cards">
          <CardActionArea onClick={handleChange}  >
              <Card className={classes.root1}>
                  <Card className="name2" >
                    <h2>PERRO</h2>
                  </Card>
              </Card>
          </CardActionArea>
          </Grid>
        </Grid>
      
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