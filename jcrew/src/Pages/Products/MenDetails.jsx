import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Landing/Navbar";
import "./Product.css";

const MenDetails = (props) => {
  const params = useParams();
  const [size, setSize] = useState("");
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  console.log(params);

  useEffect(() => {
    axios({
      url: `https://my-jcrew-api.herokuapp.com/mensWears/${params.id}`,
      method: "GET",
    }).then((r) => {
      console.log(r);
      setData(r.data);
    });
  }, [params.id]);

  console.log(data);

  const addtocart = () => {
    if (size) {
      var object = { ...data, size: size, count: count };
      axios
        .post("https://my-jcrew-api.herokuapp.com/cart", object)
        .then((r) => {
          alert("product added to cart successfully");
        })
        .catch((err) => {
          alert("Error");
        });
    } else {
      alert("please select size");
    }
  };
  return (
    <div>
      <Navbar />
      <p className="div2">Have a question ? We can help.*</p>
      <div className="maindiv">
        <hr/>
      <div className="women-details-img">
        <img className="images" src={data.img_url} alt="men" />
      </div>
      <div className="women-category1">
        <h5>{data.price} USD</h5>
        <div>
          select sizes
          {data?.size?.map((e) => {
            return (
              <button key={e} onClick={() => setSize(e)}>
                {e}
              </button>
            );
          })}
        </div>
        <select onChange={(e) => setCount(e.target.value)}>
          {[1, 2, 3, 4, 5].map((e) => {
            return (
              <option key={e} value={e}>
                Quantity : {e}
              </option>
            );
          })}
        </select>
        <div className="Add-to-cart-div">
          <button className="add-to-cart" onClick={addtocart}>
            Add to Bag
          </button>
          <button className="add-to-wish">Add to Wishlist</button>
        </div>
        <div className="Add-to-cart-div2">
          <p className="p1">Fit Predictor</p>
          <p className="p2"> Calculate your size</p>
        </div>
        <p className="p3">Model is 6ft 1" and wear size L. SIZE GUIDE</p>
        <p className="p4">India : Free shipping on orders over $500 USD</p>
      </div>
    </div>
    </div>
  );
};

export default MenDetails;
