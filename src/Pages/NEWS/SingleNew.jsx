import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./News.scss";
import { Helmet } from "react-helmet";

export default function SingleNew() {
  const { id } = useParams();
  const [product, setproduct] = useState({});
  const language = localStorage.getItem("lang");  
 
  useEffect(() => {
    console.log("Test ");
    axios
      .get(
        `https://shipping.somee.com/api/Website/GetNewsById?Id=${id}&lang=${language}`,
        {
          params: {
            populate: "*",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setproduct(res.data);
      });
  }, []);

  return (
    <div className="container news"    dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Helmet>
      <title>News- amazonmarin shipping company</title>
      <link rel="canonical" href="https://sysar.online/" />
      </Helmet>
      <div className="newspage col-12">
        <hr />
        <a className="newslink" href="#">
          {product.title}
        </a>
        <div className="mainnewssection">
        
          <div className="newscontent col-8">
            <h1 className="newsh">
             {product.title}
            </h1>
            <div className="newsline"></div>
            <span className="newspan">{product.date}</span>
          </div>
          <div>
            <img id="newsimg" src={product.photoPath}
            />
          </div>
          <div  className="col-8">
            <b className="newstexts1">
            <div className="text-center"  dangerouslySetInnerHTML={{ __html: product.description }} />
            </b>
          </div>
        </div>
      </div>
    </div>
  );
}
