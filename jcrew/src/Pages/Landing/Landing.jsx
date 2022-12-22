import React from "react";
import Navbar from "./Navbar";
import "./Landing.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Landing = (props) => {
  return (
    <div className="landing">
      <Navbar />
      <p className="div2">Have a question ? We can help.*</p>
      <div className="div3">
        <div className="container">
          <img
            src="https://www.jcrew.com/s7-img-facade/BI650_NA6434_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
            width="103%"
            height="700px"
            alt=""
          />
          <div className="center">
            <h1 style={{ fontSize: 70, fontStyle: "italic" }}>
              Your Dress Destination
            </h1>
            <h4 style={{ marginTop: 20, fontSize: 22 }}>
              Find your perfect print, shade and silhouette for summer.
            </h4>
            <h5
              style={{
                marginTop: 20,
                textDecoration: "underline",
                fontSize: 18,
              }}
            >
              Shop new Dresses
            </h5>
          </div>
        </div>
        <img
          src="https://www.jcrew.com/brand_creative/2022/202206-Jun/w_dresses/2022jun_0524_w_dresses_img5.jpg"
          width="100%"
          height="700px"
          alt=""
        />
      </div>
      <div className="MainPage_SubTop">
        <div className="SubTop_1">
          <div>
            <h1 style={{ fontSize: 40 }}>Swim for every body</h1>
            <h3 style={{ fontSize: 20, fontWeight: 400 }}>
              In sizes XXS-3X and 0-24, plus long-torso styles
            </h3>
            <h4 style={{ textDecoration: "underline" }}>Find your fit</h4>
          </div>
        </div>
        <div className="SubTop_2">
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 400 }}>Pant Spotlight</h3>
            <h1 style={{ fontSize: 40 }}>The Astrid wide-leg chino</h1>
            <h4 style={{ textDecoration: "underline" }}>Shop now</h4>
          </div>
        </div>
        <div className="SubTop_3">
          <div>
            <h1 style={{ fontSize: 40, fontWeight: 600 }}>
              The new must-haves for summer
            </h1>
            <h4 style={{ textDecoration: "underline" }}>Find your fit</h4>
          </div>
        </div>
        <div className="SubTop_4">
          <div>
            <h1 style={{ fontSize: 40 }}>The linen shop is open</h1>
            <h4 style={{ textDecoration: "underline" }}>Lighten up</h4>
          </div>
        </div>
        <div className="SubTop_5">
          <div>
            <h1 style={{ fontSize: 40 }}>
              It's a busiest wedding season ever...
            </h1>
            <h4 style={{ textDecoration: "underline" }}>
              Outfit every dress code
            </h4>
          </div>
        </div>
        <div className="SubTop_6">
          <div>
            <h3 style={{ fontSize: 20, fontWeight: 400 }}>Meet the</h3>
            <h1 style={{ fontSize: 40 }}>Cotton-linen beach sweater</h1>
            <h4 style={{ textDecoration: "underline" }}>Shop 5 shades</h4>
          </div>
        </div>
      </div>
      <div className="div4">
        <h1>Shop New Arrivals</h1>
        <h3 style={{ border: "1px solid black", padding: "1%" ,fontSize: 20 }}>
          <Link to="./women">Shop Women</Link>
        </h3>
        <h3 style={{ border: "1px solid black", padding: "1%",fontSize: 20 }}>
          <Link to="./men">Shop Men</Link>
        </h3>
        <h3 style={{ border: "1px solid black", padding: "1%",fontSize: 20 }}>
          <Link to="./women">Shop Girls</Link>
        </h3>
        <h3 style={{ border: "1px solid black", padding: "1%",fontSize: 20 }}>
          <Link to="./men">Shop Boys</Link>
        </h3>
      </div>
      <div className="mainMid">
        <div className="headlineHed">
          <img
            className="headImg"
            src="https://www.jcrew.com/brand_creative/2022/202204-Apr/logo_jcrew_collective_20220315_blk.png?imformat=generic"
            alt=""
          />
          <div className="headDes">
            Meet our creative community
            <i className="fa-solid fa-arrow-right-long"></i>
          </div>
        </div>

        <div className="mainMidImg">
          <div className="mainMidImgWrap">
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img7.jpg"
              alt=""
            />
            <h2 className="mainMidH1">1 piece, 2 ways</h2>
            <h2 className="mainMidH2">
              How I wear my Astrid chinos with Jen Azoulay
            </h2>
            <div className="mainSpan">Copy these outfits</div>
          </div>
          <div className="mainMidImgWrap">
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img8.jpg"
              alt=""
            />
            <h2 className="mainMidH1">What to wear next</h2>
            <h2 className="mainMidH2">
              The next Dress code with Beverly Nguyen
            </h2>
            <div className="mainSpan">Find her everyday picks</div>
          </div>
          <div className="mainMidImgWrap">
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May2/2022may_0503_hp_w_img9.jpg"
              alt=""
            />
            <h2 className="mainMidH1">The new arrivals edit</h2>
            <h2 className="mainMidH2">
              Instant classics with Alison Bornstein
            </h2>
            <div className="mainSpan">Shop her timeless style</div>
          </div>
        </div>

        <span
          style={{
            marginLeft: 161.6,
            fontSize: 54.4,
            fontWeight: "400",
          }}
        >
          More Stories
        </span>
        <div className="mainMidBottom">
          <div>
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img11.jpg"
              alt=""
            />
            <h2 className="innerHead">The edit: sunny outlook</h2>
            <span className="innerSpan">Shop the color story</span>
          </div>
          <div>
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img12.jpg"
              alt=""
            />
            <h2 className="innerHead">Most wanted the Candiz rope tote</h2>
            <span className="innerSpan">See why we're obsessed</span>
          </div>
          <div>
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img13_new.jpg"
              alt=""
            />
            <h2 className="innerHead">The edit: block-print paradise</h2>
            <span className="innerSpan">Shop the print focus</span>
          </div>
          <div>
            <img
              src="https://www.jcrew.com/brand_creative/homepage2022/05-May/2022may_0426_hp_w_img14.jpg"
              alt=""
            />
            <h2 className="innerHead">Design Try-ons: The April Collection</h2>
            <span className="innerSpan">Shop the video</span>
          </div>
        </div>
      </div>

      <div className="mainAboveFooter">
        <h2 style={{ fontSize: 36, fontWeight: 400 }}>More you need to see</h2>
        <div className="aboveFooterImgWrap">
          <div className="aboveFooterInner">
            <img
              src="https://www.jcrew.com/s7-img-facade/BH290_BL8486_m?wid=416"
              alt=""
            />
            <div>
              <h5>Shop Women's Dresses & Jumpsuits</h5>
            </div>
          </div>
          <div className="aboveFooterInner">
            <img
              src="https://www.jcrew.com/s7-img-facade/AY671_BK0001?wid=416"
              alt=""
            />
            <div>
              <h5>Shop Women's Shirts & Tops</h5>
            </div>
          </div>
          <div className="aboveFooterInner">
            <img
              src="https://www.jcrew.com/s7-img-facade/BG652_SU8788_m?wid=416"
              alt=""
            />
            <div>
              <h5>Shop Women's Sweaters</h5>
            </div>
          </div>
          <div className="aboveFooterInner">
            <img
              src="https://www.jcrew.com/s7-img-facade/AW770_OR5787_m?wid=416"
              alt=""
            />
            <div>
              <h5>Shop Women's The Tees Shop</h5>
            </div>
          </div>
          <div className="aboveFooterInner">
            <img
              src="https://www.jcrew.com/s7-img-facade/BL371_BL8133_m?wid=416"
              alt=""
            />
            <div>
              <h5>Shop Women's Sweatshirts & Sweatpants</h5>
            </div>
          </div>
          <div className="aboveFooterInner">
            <img
              src="https://www.jcrew.com/s7-img-facade/BC108_BL8133_m?wid=416"
              alt=""
            />
            <div>
              <h5>Shop Women's Swimwear</h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Landing;
