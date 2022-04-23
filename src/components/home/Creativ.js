import "../../styles/creativ.scss";
import wave from "../../assets/images/wave.png";
import user from "../../assets/images/user.jpg";

export const Creativ = () => {
  return (
    <div className="creativ">
      <div className="img_left"></div>
      <div className="thiking">
          <div className="row h-100">
              <div className="col-12 col-sm-6 p-0">
                  <img src={user} alt="user" className="w-100 h-100" />
              </div>
              <div className="col-12 col-sm-6 creativeCol">
                  <h1>Creative Thinking</h1>
                  <p>Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.</p>
                  <p>Images from</p>
                  <button>Learn More</button>
              </div>
          </div>
      </div>
      <div className="img_right">
        <div className="wave">
          <img src={wave} alt="wave" />
        </div>
      </div>
    </div>
  );
};
