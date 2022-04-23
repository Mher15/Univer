import { Nav } from "./Nav";
import "../styles/header.scss";
import header_img from "../assets/images/header_imgjpg";

export const Header = () => {
  return (
    <header>
      <Nav />
      <div className="container-fluid header">
        <div className="row">
          <div className="header_main">
            <div className="header_img_head">
              <img src={header_img} alt="diplomayin" />
            </div>
            <div className="header_img_end">
              <div className="header_end_mission">
                <div>
                  <h2 className="mb-4">Digital Art & Design Studio</h2>
                  <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim</p>
                </div>
                <div>
                <h2>Our Mission</h2>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
              </div>
              <div className="text-center">
                <span>Image from</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
