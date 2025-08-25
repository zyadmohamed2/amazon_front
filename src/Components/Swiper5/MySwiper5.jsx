import React from 'react'
import Slider from "react-slick";
import"./index5.scss"
import { useState,useEffect } from 'react';
import axios from 'axios';


export default function MySwiper5() {

   const [data,setData]=useState([]);
   const language = localStorage.getItem("lang");  

   useEffect(() => {
    axios
      .get(`https://shipping.somee.com/api/Website/GetAdvisories?lang=${language}`, {
        params: {
          populate: "*",
        },
      })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
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
      <Slider {...settings}>
        {
               data.map((element) => (
                <div key={element.id}>
                <div className="slide11">
                 <span className='span22'>{element.date}</span>
                 <h6>{element.title}</h6>
                 <p className='h7'>
                   {element.description}
                 </p>
                </div>
                 </div>
               ))
        }
      </Slider>
      </div>
    </div>
  )
}
