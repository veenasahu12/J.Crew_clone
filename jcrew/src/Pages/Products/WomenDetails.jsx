import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import "./Product.css";

const WomenDetails = (props) => {
  const params = useParams();
  const [size, setSize] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  useEffect(() => {
    axios({
      url: `https://api.jsonbin.io/v3/b/63943cf7962da34f538c0a20`,
      method: "GET",
    }).then((r) => {
      // console.log(r);
      let find = r?.data?.record?.find((e) => e.id == params.id);
      // console.log(find)
      setData(find);
    });
  },[setData , params.id]);

  const addtocart = () => {
    if (size) {
      var object = { ...data, size: size, count: count };
      const getItem = JSON.parse(localStorage.getItem("dataKey")) || [];
      console.log(getItem);
      getItem.push(object);
      localStorage.setItem("dataKey", JSON.stringify(getItem));
      // console.log(items);
      alert("product added to cart successfully");
    } else {
      alert("please select size");
    }
  };
  return (
    <div>
      <Navbar />
      <p className="div2">Have a question ? We can help.*</p>
      <div className="maindiv">
        <hr />
        <div className="women-details-img">
          <img className="image" src={data.img_url} alt="women" />
        </div>
        <div className="women-category1">
          <h3>Product Name : {data.name}</h3>
          <h5>Price : {data.price} USD</h5>
          <div >
            select sizes :  
             {data?.size?.map((e) => {
              return (
                <button key={e} onClick={() => setSize(e)}>
                  {e}
                </button>
              );
            })}
          </div>
          <br />
          <select className="selectbtn" onChange={(e) => setCount(e.target.value)}>
            {[1, 2, 3, 4, 5].map((e) => {
              return (
                <option key={e} value={e}>
                  Quantity : {e}
                </option>
              );
            })}
          </select>
          <br />
          <br />
          <div className="Add-to-cart-div">
            <button className="selectbtn" onClick={addtocart}>
              Add to Bag
            </button>
            <button className="selectbtn">Add to Wishlist</button>
          </div>
          <div className="Add-to-cart-div2">
            <p className="p1">Fit Predictor</p>
            <p className="p2"> Calculate your size</p>
          </div>
          <p className="p3">Model is 6ft 1" and wear size L. SIZE GUIDE</p>
          <p className="p4">India : Free shipping on orders over $500 USD</p>
        </div>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default WomenDetails;
