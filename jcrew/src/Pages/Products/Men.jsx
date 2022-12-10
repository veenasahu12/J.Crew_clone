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
      .get("https://api.jsonbin.io/v3/b/63943ddbc5b3a64f1bc7f7cb")
      .then(({ data }) => {
        // console.log(data);
        setData(data);
      });
  }, [setData]);

  const handleSort = (e) => {
    // console.log(e.target.value);
    if (e.target.value === "Low" || e.target.value === "High") {
      let data2 = data?.record?.sort((a, b) => {
        if (e.target.value === "Low") {
          return Number(a.price) - Number(b.price);
        } else if (e.target.value === "High") {
          return b.price - a.price;
        }
      });
      // console.log(data2)
      setData([...data2]);
    } else if (e.target.value === "TOP RATED") {
      let data2 = data?.record?.filter((a) => {
        //   console.log(a.top_rated,e.target.value)
        return a.top_rated === e.target.value;
      });
      setData([...data2]);
    } else if (e.target.value === "NEW") {
      let data2 = data.filter((a) => {
        // console.log(a.new,e.target.value)
        return a.new === e.target.value;
      });
      setData([...data2]);
    }
  };

  return (
    <div>
      <Navbar />
      <p className="div2">Have a question ? We can help.*</p>

      <h2>SHOP ALL MEN'S CLOTHING</h2>

      <h6>Shop by Size & Fit</h6>

      <div className="size">
        <button value="xxs" className="sizebtn">
          XXS
        </button>
        <button value="xs" className="sizebtn">
          XS
        </button>
        <button value="s" className="sizebtn">
          S
        </button>
        <button value="m" className="sizebtn">
          M
        </button>
        <button value="l" className="sizebtn">
          L
        </button>
        <button value="xl" className="sizebtn">
          XL
        </button>
        <button value="xxl" className="sizebtn">
          XXL
        </button>
        <button value="xxxl" className="sizebtn">
          XXXL
        </button>
      </div>

      <div className="product-menu-dropdown-div">
        <select className="filter">
          <option value="Show Filter">Show Filter</option>
          <option value="Hide Filter">Hide Filter</option>
        </select>

        <select className="filter" onChange={handleSort}>
          <option value="Featured">Featured</option>
          <option value="Low">Price: Low - High</option>
          <option value="High">Price: High - Low</option>
          <option value="TOP RATED">TOP RATED</option>
          <option value="NEW">New Arrival</option>
        </select>
      </div>
      <div className="mapping-data">
        {data?.record?.map((e) => {
          return (
            <Link key={e.id} className="data-item" to={`${e.id}`}>
              <img src={e.img_url} className="image" alt="missing" />
              <h6>{e.name}</h6>
              <h6>{e.new}</h6>
              <h6>{e.top_rated}</h6>
              <h6>INR {e.price}</h6>
              <button>Add to Details</button>
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
