import React from 'react'
import './style.css'

import  { Typography, CardMedia, makeStyles } from '@material-ui/core'

import makeProfi from '../../assets/img/design-henna.png'

const useStyles = makeStyles({
  cxservices:{
    padding: 8,
    '&:hover':{
      boxShadow: '0px 0px 46px rgba(0,0,0,0.4)',
      padding: 0,
    }
  }
})

export default function Services(){
  const classes = useStyles();
  
    return(
        <div className={classes.cxservices}>
            <CardMedia
                className="media"
                image={makeProfi}
                title="Maquiagem Profissional"
            />

            <div className="cxDados">
                <Typography variant="body1" align="center" color="textPrimary">
                  Maquiagem Profissional
                </Typography>
                <Typography variant="subtitle2" align="center" color="textPrimary">
                  R$ 60,00
                </Typography>
              </div>                   
        </div>   
    )
}