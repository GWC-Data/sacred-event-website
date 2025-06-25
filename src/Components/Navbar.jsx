import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className="collapse navbar-collapse justify-content-center" id="bs-example-navbar-collapse-1">
        <ul className="navbar-nav align-items-center" id="responsive-menu">

          <li className="nav-item">
            <Link to="/" className="nav-link px-2 my-4 py-0 text-white">Home</Link>
          </li>

          <li className="nav-item">
            <Link to="/About" className="nav-link px-2 my-4 py-0 text-white">About</Link>
          </li>

          {/* Dropdown example: use button for toggler */}
          <li className="nav-item dropdown">
            <a href=''
              className="nav-link dropdown-toggle px-2 my-4 py-0 text-white"
              id="speakerDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Speaker
            </a>
            <ul className="dropdown-menu bg-lightgrey p-0 rounded" aria-labelledby="speakerDropdown">
              <li>
                <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Speakerlists">
                  Speakers List
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Speakerdetail">
                  Speakers Details
                </Link>
              </li>
            </ul>
          </li>

          {/* Repeat the same pattern for other dropdowns */}

          <li className="nav-item dropdown">
            <a href=''
              className="nav-link dropdown-toggle px-2 my-4 py-0 text-white"
              id="scheduleDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Schedule
            </a>
            <ul className="dropdown-menu bg-lightgrey p-0 rounded" aria-labelledby="scheduleDropdown">
              <li>
                <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Eventlists">
                  Event List
                </Link>
              </li>
              <li>
                <Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Eventdetail">
                  Event Details
                </Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a href=''
              className="dropdown-toggle nav-link px-2 my-4 py-0 text-white"
              id="pagesDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Pages</a>
            <ul className="dropdown-menu bg-lightgrey p-0 rounded" aria-labelledby="pagesDropdown">
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Sponsers">Sponsors</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Ourgallery">Gallery</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Pricing">Pricing</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Faq">Faq</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Testimonials">Testimonials</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Productlists">Product List</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Productsingle">Product Single</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Error">404 Error</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Searchresult">Search Result</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Comingsoon">Coming Soon</Link></li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <a href=''
              className="nav-link dropdown-toggle px-2 my-4 py-0 text-white"
              id="newsDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              News
            </a>
            <ul className="dropdown-menu bg-lightgrey p-0 rounded" aria-labelledby="newsDropdown">
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Bloglists">News List</Link></li>
              <li><Link className="dropdown-item py-3 px-6 text-capitalize black border-0" to="/Blogsingle">News Single</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link to="/Contact" className="nav-link px-2 my-4 py-0 text-white">Contact</Link>
          </li>

        </ul>
      </div>
    </div>
  );
};

export default Navbar;
