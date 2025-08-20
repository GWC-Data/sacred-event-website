// import React from "react";
// import BackToTop from "../Components/Backtotop";

// function Footer() {
//   const socialLinks = [
//     {
//       icon: "linkedin",
//       url: "https://www.linkedin.com/in/annamalai-foundation-b0a30b374/",
//     },
//     {
//       icon: "facebook",
//       url: "https://www.facebook.com/people/Annamalai-Foundation/61567348864633/",
//     },
//     {
//       icon: "youtube-play",
//       url: "https://www.youtube.com/@AnnamalaiFoundation",
//     },
//   ];

//   const quickLinks = [
//     { label: "About Us", url: "/about" },
//     { label: "Events", url: "/events" },
//     { label: "Programs", url: "/programs" },
//     { label: "Contact", url: "/contact" },
//   ];

//   return (
//     <div>
//       {/*--Subscribe Section start--*/}
//       {/* <section className="subscribe py-4">
//         <div className="container">
//           <div className="subscribe-content">
//             <div className="row">
//               <div className="col-lg-6 align-self-center ">
//                 <div className="sub-left text-center text-lg-start py-2">
//                   <h4 className="text-white ">
//                     DON'T MISS OUR FUTURE UPDATES! GET SUBSCRIBED TODAY!
//                   </h4>
//                 </div>
//               </div>
//               <div className="col-lg-6">
//                 <div className="sub-right py-2">
//                   <p className="text-white mb-4 text-center text-lg-start">
//                     {" "}
//                     Excepteur sint occaecat cupidatat non proident, sunt in
//                     culpa qui officia deserunt mollit anim id est laborum.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section> */}
//       {/*--Subscribe Section end--*/}

//       {/*--Footer Section start--*/}
//       <footer className="pt-9 text-center text-white position-relative z-1">
//         <div className="overlay z-n1 start-0"></div>
//         <div className="container">
//           <div className="footer-content w-lg-50 m-auto">
//             <div className="footer-disciption border-bottom border-white border-opacity-25 m-auto mb-6">
//               <p className=" mb-6">
//                 ANNAMALAI FOUNDATION , USA &<br /> Sacred Heart College
//                 (Autonomous)
//               </p>
//               <div className="w-100 d-flex justify-content-center mb-5">
//                 <div>
//                   <img
//                     src={`${process.env.PUBLIC_URL}/assets/images/logo/annamalaiIcon.jpg`}
//                     alt="banner-image"
//                     className="w-20"
//                   />
//                 </div>
//                 {/* <div>
//                   <img
//                     src="https://shctpt.edu/assets/img/logo/logo.png"
//                     alt="Logo"
//                     className="img-fluid w-50"
//                     // style={{ maxHeight: "60px", width: "auto" }}
//                   />
//                 </div> */}
//               </div>
//               <div className="footer-socials pb-6">
//                 <ul className="m-0 p-0 d-flex gap-2 justify-content-center">
//                   {socialLinks.map((item, i) => (
//                     <li key={i} className="d-inline">
//                       <a
//                         href={item.url}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="d-inline-block rounded-circle bg-white bg-opacity-25"
//                       >
//                         <i className={`fa fa-${item.icon}`}></i>
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//             {/* <div className="footer-menu pb-9">
//               <ul className="p-0 m-0">
//                 <li className="d-inline mx-2">
//                   <Link to="/About">
//                     <small>About Event</small>
//                   </Link>
//                 </li>
//                 <li className="d-inline mx-2">
//                   <Link to="/Speakerlists">
//                     <small>Speakers</small>
//                   </Link>
//                 </li>
//                 <li className="d-inline mx-2">
//                   <Link to="/Eventlists">
//                     <small>Schedule</small>
//                   </Link>
//                 </li>
//                 <li className="d-inline mx-2">
//                   <Link to="/Pricing">
//                     <small>Ticket Pricing</small>
//                   </Link>
//                 </li>
//                 <li className="d-inline mx-2">
//                   <Link to="/Contact">
//                     <small>Contact Us</small>
//                   </Link>
//                 </li>
//               </ul>
//             </div> */}
//           </div>
//           {/* <div className="copyright pb-6 pt-1">
//             <small>
//               Copyright {new Date().getFullYear()} Eventen. All Rights Reserved
//               Copyright
//             </small>
//           </div> */}
//         </div>
//       </footer>
//       {/*--Footer Section end--*/}

//       {/*--Bacl-to-top Button start--*/}
//       <BackToTop />
//       {/*--Bacl-to-top Button end--*/}
//     </div>
//   );
// }

// export default Footer;
import React from "react";
import BackToTop from "../Components/Backtotop";
import { Link } from "react-router-dom";

function Footer() {
  const socialLinks = [
    {
      icon: "linkedin",
      url: "https://www.linkedin.com/in/annamalai-foundation-b0a30b374/",
    },
    {
      icon: "facebook",
      url: "https://www.facebook.com/people/Annamalai-Foundation/61567348864633/",
    },
    {
      icon: "youtube-play",
      url: "https://www.youtube.com/@AnnamalaiFoundation",
    },
  ];

  const quickLinks = [
    { label: "Home", url: "/" },
    { label: "About Us", url: "/About" },
    { label: "Agenda", url: "/Agenda" },
    { label: "Guests", url: "/Guests" },
    { label: "Sponsers", url: "/Sponsers" },
  ];

  return (
    <div>
      {/*--Footer Section start--*/}
      <footer className="pt-9 pb-6 text-white position-relative z-1">
        <div className="overlay z-n1 start-0"></div>
        <div className="container">
          <div className="row g-4 justify-content-center">
            {/* Organization Info */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-about text-center">
                <div className="footer-logo mb-4">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/logo/annamalaiIcon.jpg`}
                    alt="Annamalai Foundation Logo"
                    className="img-fluid mb-3"
                    style={{ maxHeight: "80px", width: "auto" }}
                  />
                  <h5 className="text-white mb-0">Annamalai Foundation</h5>
                  <small className="text-white-50">USA & India</small>
                </div>
                <p className="text-white-50 mb-4">
                  Empowering rural talent through education, innovation, and
                  global collaboration. Bridging rural potential with
                  world-class opportunities in STEM.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-links text-center">
                <h6 className="text-white mb-4">Quick Links</h6>
                <ul className="list-unstyled">
                  {quickLinks.map((link, index) => (
                    <li key={index} className="mb-2">
                      <Link
                        to={link.url}
                        className="text-white-50 text-decoration-none hover-text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Partners & Social */}
            <div className="col-lg-4 col-md-6">
              <div className="footer-partners text-center">
                {/* <h6 className="text-white mb-4">Our Partners</h6>
                <div className="partner-logo mb-4">
                  <img
                    src="https://shctpt.edu/assets/img/logo/logo.png"
                    alt="Sacred Heart College Logo"
                    className="img-fluid mb-3"
                    style={{ maxHeight: "60px", width: "auto" }}
                  />
                  <p className="text-white-50 small mb-0">
                    Sacred Heart College (Autonomous)
                  </p>
                </div> */}

                <h6 className="text-white mb-3">Follow Us</h6>
                <div className="footer-socials">
                  <div className="d-flex gap-2 justify-content-center">
                    {socialLinks.map((item, i) => (
                      <a
                        key={i}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="d-inline-flex align-items-center justify-content-center rounded-circle bg-white bg-opacity-25 text-white text-decoration-none"
                        style={{ width: "40px", height: "40px" }}
                      >
                        <i className={`fa fa-${item.icon}`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="row mt-5 pt-4 border-top border-white border-opacity-25">
            <div className="col-12 col-lg-6 mb-3 mb-lg-0">
              <p className="mb-0 text-white-50 small text-center text-lg-start">
                © {new Date().getFullYear()} Annamalai Foundation. All rights
                reserved.
              </p>
            </div>
            <div className="col-12 col-lg-6">
              <div className="footer-bottom-links text-center text-lg-end">
                <a
                  href="/privacy"
                  className="text-white-50 text-decoration-none small me-3 d-block d-sm-inline mb-2 mb-sm-0"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-white-50 text-decoration-none small me-3 d-block d-sm-inline mb-2 mb-sm-0"
                >
                  Terms of Service
                </a>
                <a
                  href="https://annamalai-foundation.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-decoration-none small fw-bold d-block d-sm-inline"
                >
                  Visit Website <i className="fa fa-external-link ms-1"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Extra spacing for back-to-top button on mobile */}
          <div className="d-block d-lg-none" style={{ height: "80px" }}></div>
        </div>
      </footer>
      {/*--Footer Section end--*/}

      {/*--Back-to-top Button start--*/}
      <BackToTop />
      {/*--Back-to-top Button end--*/}
    </div>
  );
}

export default Footer;
