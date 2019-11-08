import React from 'react'

//AliceCarousel
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import item2 from '../../assets/img/slide2.jpg'
import item3 from '../../assets/img/slide3.jpg'
import makeProfi from '../../assets/img/banner.png'
import banner from '../../assets/img/fundo.png'
import "./style.css"



export default function Carousel(){

  
    return (
        <div className="carousel">
            <AliceCarousel
           
        
            
            mouseDragEnabled={true}
            buttonsDisabled={true}
            
            autoPlayInterval={2000}
            
            autoPlayActionDisabled={true}
        
        >
            <div className="item"> <img src={banner} alt=""/> </div>
            <div className="item"> <img src={makeProfi} alt=""/> </div>
            <div className="item"> <img src={item2} alt=""/> </div>
            <div className="item"> <img src={item3} alt=""/> </div>

            </AliceCarousel>
        </div>
        
    )
}