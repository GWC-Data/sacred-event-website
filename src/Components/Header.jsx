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
          <nav className="navbar navbar-expand-lg py-3 w-100">
            <div className="row w-100 align-items-center gx-3">
              {/* Logo - Responsive sizing */}
              <div className="col-6 col-md-4 col-lg-3">
                <div className="navbar-brand d-flex justify-content-start justify-content-md-center align-items-center m-0 gap-2 gap-md-3">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo/annamalai.png`}
                    alt="Logo"
                    className="img-fluid"
                    style={{ maxHeight: "60px", width: "auto" }}
                  />
                  <img
                    src="https://shctpt.edu/assets/img/logo/logo.png"
                    alt="Logo"
                    className="img-fluid"
                    style={{ maxHeight: "60px", width: "auto" }}
                  />
                </div>
              </div>

              {/* Navigation - Hide on small screens, show on medium+ */}
              <div className="col-7 col-lg-6 order-3 order-lg-2 mt-3 mt-lg-0">
                <div className="d-flex justify-content-center">
                  <Navbar />
                </div>
              </div>

              {/* Action buttons - Responsive layout */}
              <div className="col-6 col-md-8 col-lg-3 order-2 order-lg-3">
                <div className="d-flex justify-content-end align-items-center h-100">
                  {/* Desktop buttons */}
                  <div className="d-none d-lg-flex">
                    <Link
                      to="/shcaifest/HackathonRegistration"
                      className="btn btn3 text-nowrap px-3 py-2"
                      style={{ fontSize: "0.85rem" }}
                    >
                      <i className="fa fa-lock me-2"></i>
                      Hackathon Registration
                    </Link>
                  </div>

                  {/* Tablet buttons */}
                  <div className="d-none d-md-flex d-lg-none">
                    <Link
                      to="/shcaifest/HackathonRegistration"
                      className="btn btn3 text-nowrap"
                      style={{
                        fontSize: "0.8rem",
                        padding: "0.5rem 1rem",
                      }}
                    >
                      <i className="fa fa-lock me-1"></i>
                      Hackathon
                    </Link>
                  </div>

                  {/* Mobile dropdown button */}
                  <div className="d-md-none dropdown">
                    <button
                      className="btn btn3 dropdown-toggle px-3 py-2"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <i className="fa fa-bars me-2"></i>
                      Menu
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end shadow-sm"
                      style={{ minWidth: "200px" }}
                    >
                      <li>
                        <Link className="dropdown-item py-2" to="/shcaifest/">
                          <i className="fa fa-home me-3"></i>
                          Home
                        </Link>
                      </li>
                      {/* <li>
                        <hr className="dropdown-divider" />
                      </li> */}
                      <li>
                        <Link
                          className="dropdown-item py-2"
                          to="/shcaifest/About"
                        >
                          <i className="fa fa-question me-3"></i>
                          About
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item py-2"
                          to="/shcaifest/Agenda"
                        >
                          <i className="fa fa-ticket me-3"></i>
                          Agenda
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item py-2"
                          to="/shcaifest/Guests"
                        >
                          <i className="fa fa-calendar me-3"></i>
                          Guests
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="dropdown-item py-2"
                          to="/shcaifest/Sponsers"
                        >
                          <i className="fa fa-users me-3"></i>
                          Sponsors
                        </Link>
                      </li>
                      {/* <li>
                        <hr className="dropdown-divider" />
                      </li> */}
                      <li>
                        <Link
                          className="dropdown-item py-2 fw-bold"
                          to="/shcaifest/HackathonRegistration"
                        >
                          <i className="fa fa-lock me-3"></i>
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
