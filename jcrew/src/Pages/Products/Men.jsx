import React from 'react'
import axios from "axios"
import  {useState, useEffect}  from 'react'
import Navbar from '../Landing/Navbar'
import "./Product.css"

const Men = (props) => {

    const [data,setData] = useState([])
    useEffect (()=>{
        axios.get("https://my-jcrew-api.herokuapp.com/mensWears")
        .then(({data})=>{
            console.log(data);
           setData(data)
        })
    },[setData])

    return (
        <div>
             <Navbar /> 
           <p className='div2'>Have a question ? We can help.*</p>
           <div className='mapping-data'>
           {data?.map((e)=>
                        {return (
                        <div key={e.id} className="data-item">
                            <img src={e.img_url} className="image" alt="missing"/>
                            <h6>{e.name}</h6>
                            <h6>{e.new}</h6>
                            <h6>{e.top_rated}</h6>
                            <h6>$ {e.price}</h6>
                            </div>
                            )}
                    )}
                
           </div>
        </div>
    )
}

export default Men
