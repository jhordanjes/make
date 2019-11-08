import React from 'react'
import {Typography} from '@material-ui/core'

import './style.css'

export default function Banner(){
    return(
        <div className="banner">
            <div className="banner-text">
                <Typography variant="h2">
                    Bem-vindo à
                </Typography>
                <Typography variant="h3">
                    <strong>JJ Studio</strong> Make Up,
                </Typography>
                <Typography variant="h2">
                    sua futura maquiadora.
                </Typography>
            </div>
        </div>
    )
}