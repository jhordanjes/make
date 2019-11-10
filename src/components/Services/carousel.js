import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

//material io
import  { Grid, Typography, makeStyles} from '@material-ui/core'

import './style.css'
import Services from './services'

const useStyles = makeStyles({
  services:{
   
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
    paddingBottom: 20,
    '@media (max-width:600px)': {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 30,
      paddingBottom: 30,
    },
  }
})


export default function Slide () {
  const classes = useStyles();
  const id = [1, 2, 3, 4, 5];
  const responsive = {
    0: {
      items: 2
    },
    600: {
      items: 3
    },
    1024: {
      items: 4
    }
  };

  const item = id.map((service => <Services key={id} />))

  return (
    <div className={classes.services}>
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          CONHEÇA NOSSOS SERVIÇOS
        </Typography>
        <Typography variant="subtitle2" color="textSecondary" align="center">
          ARRASTE PARA O LADO PARA VISUALIZAR MAIS.
        </Typography>
      </Grid>
      
      <AliceCarousel
          startIndex = {1}
          fadeOutAnimation={true}
          mouseDragEnabled={true}
          playButtonEnabled={false}
          responsive={responsive}
          autoPlayInterval={2000}
          autoPlayDirection="rtl"
          autoPlayActionDisabled={true}
          buttonsDisabled={true}
          items={item}
        >
        </AliceCarousel>
      </div>
  )
}