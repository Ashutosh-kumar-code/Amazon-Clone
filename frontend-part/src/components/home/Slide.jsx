import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "react-multi-carousel/lib/styles.css";
import {Divider} from "@mui/material";
import {Product} from './Product'
import './slide.css'
import { NavLink } from "react-router-dom";



const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
     
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
     
    }
  };



export default function Slide({title,products}){

    return(
        <div className="product_view">
        <div className="two_section">
           <h3>{title}</h3><br />
           <button type="button" variant="primary">View all</button>
          
        </div>
         <Carousel
         
         responsive={responsive}
         infinite={true}
         dragable={false}
         swipeable={true}
         showDots={false}
         centerMode={true}
         autoPlay={true}
         autoPlaySpeed={4000}
         keyBoardControl={true}
         removeArrowOnDeviceType={["tablet" ,"mobile"]}
         dotListClass="custom-dot-list-style"
         itemClass="carousel-item-padding-40-px"
         containerClass="carousel-container"
         >

          {

              Product.map((e)=>{
                return(
                  <NavLink to={`/getproductsone/${e.id}`}>
                  <div className="product_iteam">
                  <div className="product_image">
                    <img src={e.url} alt="productiteam" />
                  </div>
                  <p className="product_name">{e.title.shortTitle}</p>
                  <p className="product_offer">{e.discount}</p> 
                  <p className="product_explore">{e.tagline}</p>
                  </div>
                  </NavLink>
                )
              })



          }
         </Carousel>
        
        </div>
    );
}