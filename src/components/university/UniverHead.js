import { Nav } from "../Nav";
import { UniverItom } from "./UniverItom";
import "../../styles/header.scss"
import "../../styles/univerioms.scss"
import header_img from "../../assets/images/header_imgjpg";
import { Search } from "../Search";


export const HeaUniverHeadder = () => {
  return (
    <header>
      <Nav />
      <div className="container-fluid header">
        <div className="row">
          <div className="header_main">
            <div className="header_img_head">
              <img src={header_img} alt="diplomayin" />
            </div>
            <div className="cardSection container">
              <div>
                <Search />
              </div>
              <UniverItom />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
