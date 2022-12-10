import React , { useEffect , useState } from "react";
import axios from "axios";
import Navbar from "../Landing/Navbar";
import Footer from "../Landing/Footer";
import { Link } from "react-router-dom";

const kids = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.jsonbin.io/v3/b/63941e99962da34f538bfa9e")
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

export default kids;
