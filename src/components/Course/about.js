import React from 'react'
import {Grid, Typography, makeStyles} from '@material-ui/core'

import Location from '@material-ui/icons/RoomOutlined';
import Clock from '@material-ui/icons/QueryBuilderOutlined';
import make from '../../assets/img/cilio-3d.png'
const UseStyles = makeStyles({
    readmore:{
        padding: 50,
        '& h5, h6' :{
            fontWeight: 'bold',
            textTransform: 'uppercase',
            paddingBottom: 20
        },
    },
    description:{
        background: '#fce4ec',
        '& ul':{
            listStyleType: 'circle',
            marginLeft: '-20px'
        },
    },
})


export default function Readmore(){
    const classes = UseStyles();
    return(
        <div>          
            <Grid container className={classes.readmore}>
                <Grid item md={12}>
                    <Typography variant="h5">
                        Curso de AutoMaquiagem
                    </Typography>
                
                    <Typography variant="body2">
                        <Location fontSize="inherit" /> Maués - Maués, AM
                    </Typography>
                    <Typography variant="body2">
                        <Clock fontSize="inherit"/> 27 de julho de 2019, 09h - 29 de julho de 2019, 19h
                    </Typography>
                </Grid>
            </Grid>
            <div className={classes.description}>
                <Grid container className={classes.readmore}> 
                    <Grid item md={8}>
                        <Typography variant="h6" color="textSecondary">
                            Descrição do Curso
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Sobre</strong>
                        </Typography>
                        <Typography variant="body2" color="textSecondary" align="justify">
                            O Curso é voltado para a capacitação dos profissionais que atuam com 
                            o embelezamento do olhar através da técnica mais atual de Micropigmentação: 
                            Microblanding. Uma técnica milenar que utiliza o tebori, uma caneta com 
                            Microlâminas na ponta, permitindo que os fios desenhados fiquem bem mais 
                            finos que a micropigmentação comum.
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Inscreva-se</strong>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                        Você ira aprender:
                        <ul>
                            <li>Escolher os pincéis e montar seu kit de maquiagem</li>
                            <li>Fazer a pele perfeita e escolher o tom certo da base</li>
                            <li>Contorno, iluminação e aplicação correta do batom</li>
                            <li>Colocar cílios postiços ou deixar seus cílios longos e volumosos</li>
                            <li>Maquiagem para o Dia e para à Noite (Clássica, Intensa e Festiva).</li>
                        </ul>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>Investimento</strong>
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            <strong>R$ 149,99</strong> por pessoa
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            *Aceitamos todas as formas de pagamento.
                        </Typography>
                    </Grid>
                </Grid>
                
            </div>
        </div>
    )
}