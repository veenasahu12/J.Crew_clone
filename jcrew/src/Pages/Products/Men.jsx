import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Landing/Navbar";
import "./Product.css";
import Footer from "../Landing/Footer";
import { Link } from "react-router-dom";

const Men = (props) => {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/63930d276a51bc4f704b1fcf")
      .then(({ data }) => {
        // console.log(data);
        setData(data);
      });
  }, [setData]);

  return (
    <div>
      <Navbar />
      <p className="div2">Have a question ? We can help.*</p>
      <div className="mapping-data">
        {data?.record?.map((e) => {
          return (
            <Link key={e.id} className="data-item" to={`${e.id}`}>
              <img src={e.img_url} className="image" alt="missing" />
              <h6>{e.name}</h6>
              <h6>{e.new}</h6>
              <h6>{e.top_rated}</h6>
              <h6>INR {e.price}</h6>
            </Link>
          );
        })}
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Men;
