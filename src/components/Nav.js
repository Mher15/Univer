import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpg";
import "../styles/nav.scss";

export const Nav = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };
  const cloasModal = () => {
    setModal(!modal);
  };

  return (
    <div className="container-fluid navBar">
      <div className="container">
        <div className="row">
          <nav className="d-flex align-items-center justify-content-between">
            <div className="logo_section">
              <Link to="/" className="logo">
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="modalOpen" onClick={toggle}>
              <div className="line"></div>
            </div>
          </nav>
        </div>
      </div>
      <div className="row">
        <div
          className="modal_menu"
          style={{ display: modal ? "block" : "none" }}
        >
          <div className="menu">
            <div className="cloas_modal" onClick={cloasModal}></div>
            <div className="menu_list">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/univers">Univers</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
