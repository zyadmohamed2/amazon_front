import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "./index1.scss"


export default function MySwiper1() {

    const [backgroundImage, setBackgroundImage] = useState("");
    const language = localStorage.getItem("lang");  

    const [solutions,setSolutions]=useState([]);

    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    useEffect(() => {
        axios
          .get(`https://shipping.somee.com/api/Website/GetSolutions/?lang=${language}`, {
            params: {
              populate: "*",
            },
          })
          .then((res) => {
            console.log(res.data);
            setSolutions(res.data);
          });
      }, []);





  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css" 
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <div className="slider-container">
      <Slider {...settings}  className='slider1'  style={{ backgroundImage:`url(${backgroundImage})`}} >
        {
          solutions.map((solution) => (
         <div key={solution.id}>
          <div className="main44"  onMouseOver={() => {setBackgroundImage(solution.photoPath)}}  >
          <img className='img33' src={solution.icon}   />
          <h3 className='title33'>{solution.title}</h3>
          </div>
          </div>
        ))

        }
      </Slider>
    </div>

    </div>
  )
}
