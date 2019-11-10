import React from 'react';

import make from '../../assets/img/curso-make.png'
import cilios from '../../assets/img/cilio-3d.png'
import sobrancelha from '../../assets/img/design-sobrancelha.png'
import './style.css'

import Fab from '@material-ui/core/Fab';
import ShareIcon from '@material-ui/icons/Share';

import { Grid, Typography, CardMedia, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    course:{
        padding: 50,
        '& h6':{
            transition: '0.5s',
        },
     
    },
    cxCourse: {
        borderBottom: '2px solid rgba(0,0,0,0.1)',
        transition: 'all 800ms ease',

        '&:hover':{
            boxShadow: '0px 38px 46px rgba(0,0,0,0.1)',
            background: '#fce4ec',
            borderBottom: '2px solid #e91e63',
        },
        '&:hover button':{
            transform: 'translateX(0)',
            opacity: 1,
            visibility: 'visible',
        },
        '&:hover h6':{
            color: '#e91e63'
        }
    },
    cxDados:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 20
    },
    media: {
      height: 300,
    },
    button:{
        borderRadius: 0,
        position: 'relative',
        margin: '20px 0 0',
        display: 'inline-block',
        transition: '0.5s',
        transform: 'translateX(-40px)',
        opacity: 0,
        visibility: 'hidden',
        
    },
    espaco:{
        marginTop: 15
    }
});

  

export default function Course(){
    const classes = useStyles();
   
    return (
        <div className={classes.course}>
            <Grid container alignContent="center" spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h5" align="center" >
                        NOSSOS CURSOS
                    </Typography>
                </Grid>

                <Grid item md={4} sm={6} className={classes.cxCourse}>
                    <CardMedia
                        className={classes.media}
                        image={make}
                        title="Exemplo maquiagem iniciante"
                    />

                    <div className={classes.cxDados}>
                        <h1 align="center">#1_</h1>

                        <Typography variant="subtitle2">
                            MAQUIAGEM INICIANTE
                        </Typography>

                        <Typography align="justify" variant="body2" color="textSecondary" className={classes.espaco}> 
                            Este curso tem o objetivo de iniciar pessoas que nunca tiveram contado
                            com o mundo da maquiagem aprenderem o básico/iniciante.
                        </Typography>

                            <Button variant="contained" color="secondary" className={classes.button}>
                                Saiba Mais
                            </Button>

                        <div align="right">
                            <Fab size="small" align="right" color="secondary" aria-label="add" className={classes.margin}>
                                <ShareIcon />
                            </Fab>
                        </div>   
                    </div>
                </Grid>

                <Grid item md={4} sm={6} className={classes.cxCourse}>
                    <CardMedia
                        className={classes.media}
                        image={cilios}
                        title="Exemplo extensão de cílios"
                    />
                    <div className={classes.cxDados}>
                        <h1 align="center">#2_</h1>
                        <Typography variant="subtitle2">
                            EXTENSÃO DE CÍLIOS
                        </Typography>
                        
                        <Typography variant="body2" align="justify" color="textSecondary" className={classes.espaco}>
                            Este curso tem o objetivo de iniciar pessoas que nunca tiveram 
                            contado com o mundo da maquiagem aprenderem o básico/iniciante.
                        </Typography>
                        
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Saiba Mais
                        </Button>

                        <div align="right">
                            <Fab size="small" align="right" color="secondary" aria-label="add" className={classes.margin}>
                                <ShareIcon />
                            </Fab>
                        </div>
                    </div>
                </Grid>

                <Grid item md={4} sm={6} className={classes.cxCourse} >
                    <CardMedia
                        className={classes.media}
                        image={sobrancelha}
                        title="Exemplo design de sobrancelhas"
                    />
                    <div className={classes.cxDados}>
                        <h1 align="center">#3_</h1>

                        <Typography variant="subtitle2">
                            DESIGN DE SOBRANCELHAS
                        </Typography>
                        
                        <Typography variant="body2" align="justify" color="textSecondary" className={classes.espaco}>
                            Este curso tem o objetivo de iniciar pessoas que nunca tiveram 
                            contado com o mundo da maquiagem aprenderem o básico/iniciante.
                        </Typography>
                        <Button variant="contained" color="secondary" className={classes.button}>
                            Saiba Mais
                        </Button>
                        <div align="right">
                            <Fab size="small" align="right" color="secondary" aria-label="add" className={classes.margin}>
                                <ShareIcon />
                            </Fab>
                        </div>
                    </div>
                </Grid>
            </Grid>
            
        </div>
    )
}