import React from 'react'
import './style.css'

import  { Typography, CardMedia, makeStyles } from '@material-ui/core'

import img1 from '../../assets/img/design-henna.png'
import img2 from '../../assets/img/curso-make.png'

const useStyles = makeStyles({
  cxservices:{
    padding: 8,
    '&:hover':{
      boxShadow: '0px 0px 46px rgba(0,0,0,0.4)',
      padding: 0,
    },
    
  },
  cxdados: {
    paddingTop: 29,
    paddingBottom: 29,
    background: 'linear-gradient(to bottom right, #d1c4e9, #f8bbd0)',
    marginTop: '-15px',
  },
  media:{
    height: 360,
  },
})

export default function Services(){
  const classes = useStyles();
  
    return(
        <div className={classes.cxservices}>
            <CardMedia
                className={classes.media}
                image={img1}
                title="Maquiagem Profissional"
            />

            <div className={classes.cxdados}>
                <Typography variant="body1" align="center" color="textPrimary">
                  Maquiagem Profissional
                </Typography>
                <Typography variant="subtitle1" align="center" color="textPrimary">
                  R$ 60,00
                </Typography>
              </div>                   
        </div>   
    )
}