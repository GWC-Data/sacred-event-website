import React, { useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Search from "../Components/Search";

const Header = () => {
  const [isContactVisible, setIsContactVisible] = useState(false);

  return (
    <header className="main_header_area position-absolute w-100 site-header">
      {/* Top bar with social and contact info */}
      {/* <div className="header-content text-white d-none d-lg-block">
        <div className="container">
          <div className="header-content-inner py-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="social-links">
                  Social links commented out as in original
                </div>
              </div>

              <div className="col-lg-6">
                <div className="header-event-info text-end">
                  <ul className="m-0 p-0 d-flex flex-wrap justify-content-end">
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline-flex align-items-center">
                      <i className="fa fa-phone pe-1"></i>
                      <small>+33 877 554 332</small>
                    </li>
                    <li className="px-2 border-end border-lightgrey border-opacity-50 d-inline-flex align-items-center">
                      <i className="fa fa-envelope-o pe-1"></i>
                      <small>Sacredheart@website.com</small>
                    </li>
                    <li className="px-2 d-inline-flex align-items-center">
                      <i className="fa fa-clock-o pe-1"></i>
                      <small>Mon - Fri: 9:00 - 18:30</small>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="header_menu" id="header_menu">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-2 w-100">
            <div className="row w-100 align-items-center">
              {/* Logo - Responsive sizing */}
              <div className="col-6 col-md-4 col-lg-2">
                <div className="navbar-brand m-0">
                  <img
                    src="https://shctpt.edu/assets/img/logo/logo.png"
                    alt="Logo"
                    className="img-fluid"
                    style={{ maxHeight: "60px", width: "auto" }}
                  />
                </div>
              </div>

              {/* Navigation - Hide on small screens, show on medium+ */}
              <div className="col-12 col-lg-7 order-3 order-lg-2">
                <Navbar />
              </div>

              {/* Action buttons - Responsive layout */}
              <div className="col-6 col-md-8 col-lg-3 order-2 order-lg-3">
                <div className="d-flex justify-content-end align-items-center">
                  {/* Desktop buttons */}
                  <div className="d-none d-lg-flex gap-2">
                    <Link
                      to="/"
                      className="btn btn3 text-nowrap"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <i className="fa fa-ticket me-1"></i>
                      Book Your Pass
                    </Link>
                    <Link
                      to="/Guideline"
                      className="btn btn3 text-nowrap"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <i className="fa fa-lock me-1"></i>
                      Hackthon Registration
                    </Link>
                  </div>

                  {/* Tablet buttons */}
                  <div className="d-none d-md-flex d-lg-none gap-1">
                    <Link
                      to="/Booknow"
                      className="btn btn3"
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.375rem 0.75rem",
                      }}
                    >
                      <i className="fa fa-ticket me-1"></i>
                      Book Pass
                    </Link>
                    <Link
                      to="/Guideline"
                      className="btn btn3"
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.375rem 0.75rem",
                      }}
                    >
                      <i className="fa fa-lock me-1"></i>
                      Hackthon Registration
                    </Link>
                  </div>

                  {/* Mobile dropdown button */}
                  <div className="d-md-none dropdown">
                    <button
                      className="btn btn3 dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize: "0.75rem" }}
                    >
                      Menu
                      <i className="ms-1 fa fa-bars me-1"></i>
                    </button>
                    <ul className="dropdown-menu dropdown-menu-end">
                      <li>
                        <Link className="dropdown-item" to="/">
                          <i className="fa fa-home me-2"></i>
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/">
                          <i className="fa fa-question me-2"></i>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Booknow">
                          <i className="fa fa-ticket me-2"></i>
                          Book Your Pass
                        </Link>
                      </li>
                      <li>
                        <Link className="dropdown-item" to="/Guideline">
                          <i className="fa fa-lock me-2"></i>
                          Hackathon Registration
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Search Overlay */}
    </header>
  );
};

export default Header;
