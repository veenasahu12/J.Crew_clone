import React from 'react'
import Navbar from './Navbar'
import "./Landing.css"
import SixImage from './SixImage'
import Articles from './Articles'



const Landing = (props) => {
    return (
        
        <div className='landing'>
            <Navbar />
            <p className='div2'>Have a question ? We can help.*</p>
            <div className='div3'>
            <img src="https://www.jcrew.com/s7-img-facade/BI650_NA6434_d4?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540" width="100%" height="700px" alt="" />
            <img src='https://www.jcrew.com/brand_creative/2022/202206-Jun/w_dresses/2022jun_0524_w_dresses_img5.jpg' width="100%" height="700px" alt=''/>
            </div>
            <SixImage/>
            <div className='div4'>
             <h1>Shop New Arrivals</h1>
             <h3 style={{border:"1px solid black",padding:"1%"}}>Shop Women</h3>
             <h3 style={{border:"1px solid black",padding:"1%"}}>Shop Men</h3>
             <h3 style={{border:"1px solid black",padding:"1%"}}>Shop Girls</h3>
             <h3 style={{border:"1px solid black",padding:"1%"}}>Shop Boys</h3>
            </div>
            <Articles/>
            
        </div>
    )
}

export default Landing


