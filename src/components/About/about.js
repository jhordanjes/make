import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import imgJaque from '../../assets/img/jaqueline.png'
import './style.css'

const useStyles = makeStyles({
    about:{
        background: "linear-gradient(to right, #f8bbd0, #ffcdd2) ",
        transition: "all 800ms ease",
    },
    containerAbout:{
        marginBottom: -4,
    },
    sobreText:{
        paddingTop: 20,
    },
    image:{
        height: 600,
        width: "100%"
    },
    textSobre:{
        paddingTop: 100,
        paddingLeft: 80,
        paddingRight: 80,
        '@media (max-width:600px)': {
            paddingTop: 50,
            paddingBottom: 30,
            paddingLeft: 30,
            paddingRight: 30,
        },
        '@media (min-width:610px) and (max-width:1090px)': {
            paddingTop: 20,
            paddingBottom: 20
        }
    }
})

export default function About(){
    const classes = useStyles();

    return(
        <div className={classes.about} id="about">
            <Grid container>
                <Grid item md={6} sm={12} className={classes.containerAbout}>
                    <img src={imgJaque} alt="Select img" className={classes.image}/>
                </Grid>
                
                <Grid item md={6} sm={12}>
                    <div className={classes.textSobre}>
                        <Typography variant="h4" className="title">
                            Conheça Jaquelique Michiles,
                        </Typography>
                        <Typography variant="body2" className={classes.sobreText} align="justify">
                            É maquiadora profissional premiada nacionalmente e 
                            começou a gostar desse mundo ainda criança, ao ver a mãe – também maquiadora 
                            e designer de sobrancelhas – trabalhar com uma infinidade de sombras, cores, 
                            batons e pincéis. Trocou a faculdade de Design de Produto pelo Curso de Estética
                            e Cosmética e passou a dedicar-se à maquiagem, tendo sua formação inicial no 
                            SENAC-RS e no Instituto  .
                        </Typography>

                        <Typography variant="body2" className={classes.sobreText} align="justify">
                            Trocou a faculdade de Design de Produto pelo Curso de Estética
                            e Cosmética e passou a dedicar-se à maquiagem, tendo sua formação inicial no 
                            SENAC-RS e no Instituto Embelleze. Continuou aprimorando sua técnica com cursos 
                            no exterior (Make Up Forever Academy, Atelier Make-up Paris, Kryolan Argentina) e 
                            com profissionais renomados (Samer Khouzami).
                        </Typography>
                    </div>
                    
                </Grid>
            </Grid>
        </div>
    )
}