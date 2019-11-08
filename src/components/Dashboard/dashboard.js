import React from 'react'
import './style.css'
import {Link} from '@material-ui/core'


export default function Dashboard(){
    return (
		
		<header className="menu">
			<div className="main_nav">
					<ul >
						<li>
							<Link href="#" color="inherit" underline="none">
								Cursos
							</Link>
						</li>
						<li>
							<Link href="#about" color="inherit" underline="none">
								Sobre
							</Link>
						</li>
						<li>
							<Link href="#" color="inherit" underline="none">
								Serviços
							</Link>
						</li>
					
						<li>
							<Link href="#" color="inherit" underline="none">
								Contato
							</Link>
						</li>
						<li>
							<div className="logo-nome">
								JJ Studio
							</div>
							<div className="logo-sub">
								MAKE UP
							</div>
						</li>
					</ul>
			</div>
		</header>
    )
}