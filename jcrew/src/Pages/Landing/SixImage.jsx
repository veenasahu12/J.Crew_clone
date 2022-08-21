import React from 'react'
import "./Landing.css"

const product = [
{
    id:1,
    img:"https://www.jcrew.com/brand_creative/2022/202205-May/w_swim/2022may_0519_w_swim_img1.jpg" ,
},
{
    id:2,
    img:"https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0614_flyouts_w_img3.jpg"
},
{
    id:3,
    img:"https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0614_flyouts_w_img2.jpg"
},
{
    id:4,
    img:"https://www.jcrew.com/brand_creative/2022/202206-Jun/flyout/2022jun_0614_flyouts_w_img4.jpg"
},
{
    id:5,
    img:"https://www.jcrew.com/s7-img-facade/BF342_BL7133_d1?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=540&hei=540"
},
{
    id:6,
    img:"https://www.jcrew.com/s7-img-facade/BJ071_EE1982?fmt=jpeg&qlt=90,0&resMode=sharp&op_usm=.1,0,0,0&crop=0,0,0,0&wid=480&hei=480"
}]
const SixImage = (props) => {
    return (
        <div className='siximage'>
            {product.map((e)=> {
                return <div key={e.id}>
                <img className='imgtag' src={e.img} alt=''/>
             </div>
            })}
        </div>
    )
}

export default SixImage

