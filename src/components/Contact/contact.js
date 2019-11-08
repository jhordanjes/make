import React from 'react';

import LocationOnIcon from '@material-ui/icons/LocationOn';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

import { Grid, Typography, Button, TextField, makeStyles, Link } from "@material-ui/core";

import './style.css'

const useStyles = makeStyles({
    contact:{
        background: "#d1c4e9 ",
        padding: 50
    },
    button:{
        marginTop: 10,
        borderRadius: 0
    },
    figu:{
        marginLeft: 20
    },
    espaco:{
        marginTop: 10,
    },
}) 


export default function Contact(){
    const classes = useStyles();
    return(
        <footer className={classes.contact}> 
            <Grid container spacing={5}>

                <Grid item md={4} className="cx-footer">
                    <Typography variant="body2"> <LocationOnIcon fontSize="inherit" /> Descubra a diferença de ser um cliente JJ Studio e deixe os resultados te surpreender.</Typography>
                    <Typography variant="body2" className={classes.espaco}> <EmailIcon fontSize="inherit" /> jhordanjes@gmail.com</Typography>
                    <Typography variant="body2" className={classes.espaco}> <PhoneIcon fontSize="inherit" /> (92) 98410-9787</Typography>
                </Grid>
                
                <Grid item md={4} className="cx-footer">
                    <Typography variant="body2"> Assine nosso newsletter para saber de notícias e de nossas promoções.</Typography>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Seu melhor email"
                        fullWidth
                        color="secondary"
                    />
                    <Button variant="contained" color="secondary" className={classes.button}>
                        Assinar
                    </Button>
                </Grid>

                <Grid item md={4}>
                    <Grid container alignItems="center">
                        <Grid item md={3}>
                            <Link href="#" color="inherit" underline="none"> 
                                <WhatsAppIcon fontSize="large" className={classes.figu} />
                            </Link>
                            
                        </Grid>
                        <Grid item md={3}>
                            <Link href="#" color="inherit" underline="none">
                                <FacebookIcon fontSize="large" className={classes.figu} />
                            </Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link href="#" color="inherit" underline="none">
                                <TwitterIcon fontSize="large" className={classes.figu} />
                            </Link>
                        </Grid>
                        <Grid item md={3}>
                            <Link href="#" color="inherit" underline="none">
                                <InstagramIcon fontSize="large" className={classes.figu} align="center" />
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}