import "../styles/university.scss";
import { useState } from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpeg";
import img3 from "../assets/images/3.jpeg";
import img4 from "../assets/images/4.jpg";
import img6 from "../assets/images/6.jpeg";
import img7 from "../assets/images/7.jpeg";
import img8 from "../assets/images/8.jpeg";
import img9 from "../assets/images/9.jpeg";

export const OurUniversity = () => {
  const [img, setImg] = useState([
    { text: "", img: img1 },
    { text: "", img: img2 },
    { text: "", img: img3 },
    { text: "", img: img4 },
    { text: "Our Portfolio", img: "" },
    { text: "", img: img6 },
    { text: "", img: img7 },
    { text: "", img: img8 },
    { text: "", img: img9 },
  ]);

  return (
    <div className="container mb-3">
      <div className="row">
        {img.map((itom, index) => {
          return (
            <div className="col-12 col-sm-4" key={index}>
              <div className="itom">
                {itom.text === "" ? <img src={itom.img} alt="" /> : <h2>{itom.text}</h2>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
