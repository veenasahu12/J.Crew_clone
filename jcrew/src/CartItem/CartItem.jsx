import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "../Pages/Landing/Navbar";
import { useNavigate } from "react-router-dom";
import "./CartItem.css";
import Footer from '../Pages/Landing/Footer'

const CartItem = (props) => {
  const [data, setData] = useState();
  const navigate= useNavigate()

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    const data = JSON.parse(localStorage.getItem('dataKey'));
    // console.log(data)
    setData(data);
  };

  const totalPrice = JSON.parse(localStorage.getItem('dataKey'));
  // console.log("totalPrice",totalPrice)
  const total = totalPrice.reduce((a, c) => a + Number(c.count) * Number(c.price), 0);
  // console.log(total,"total")

  const remove = (id) => {
        const deleteitem = JSON.parse(localStorage.getItem('dataKey'));
        const filteritem = deleteitem.filter(a=>a.id != id)
        localStorage.setItem('dataKey', JSON.stringify(filteritem));
        setData(filteritem);
        alert("Item Removed successfully");
        getdata();
  };

  const handleProceedCheckout=()=>{
    alert("Procceding to checkout")
    navigate("/checkout");
}

  return (
    <div>
      <Navbar />
      <p className="div2">Have a question ? We can help.*</p>
      <div className="maindiv">
        <div className="box1">
          <div className="main-cart-div">
            <div>
              <h1>SHOPPING BAG</h1>
              <hr />
            </div>
            {data?.length === 0 ? (
              <div className="emptybag">Your shopping bag is empty .</div>
            ) : (
              <div className="item-add">
                {data?.map((e) => {
                  return (
                    <div key={e.id} className="datas-item">
                      <img src={e.img_url} className="imagetag" alt="missing" />
                      <div className="item-desc">
                        <h6>{e.name}</h6>
                        <h6>{e.new}</h6>
                        <h6>{e.top_rated}</h6>
                        <h6>SIZE : {e.size}</h6>
                      </div>
                      <div className="itemcount">
                        <h6>Qty : {e.count}</h6>
                        <h6>PRICE : INR {e.price}</h6>
                      </div>
                      <div className="btns">
                        <button onClick={() => remove(e.id)}>Remove</button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="box2">
          <h6>Item Subtotal :  ${total}</h6>
          <h5>Estimated Total : ${total}</h5>
          <p className="ptag">Shipping calculated In Checkout</p>

          <button className="checkoutbtn" onClick={handleProceedCheckout}  >CHECK OUT NOW</button>
          <br />
          <br />
          <p className="ptag">
            By clicking ‘Check Out Now’, you will be redirected to the
            eShopWorld checkout page where payment will be taken and your order
            fulfilled by eShopWorld, J.Crew's preferred partner for
            international sales.
          </p>

          <hr />
          <h5>Add Promo</h5>
          <input placeholder="Promo" />
          <button>APPLY</button>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default CartItem;
