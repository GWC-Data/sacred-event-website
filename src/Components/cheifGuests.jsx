import React from "react";
import { Link } from "react-router-dom";
const ChiefGuestSection = () => {
  const chiefGuests = [
    {
      name: "M.Balasubramaniyam",
      role: "CEO,Stratinfinity inc",
      image: "/assets/images/cheifGuests/1.png",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Naveen Kumar",
      role: "CEO & Founder, GWC Data.Ai",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQEOZbLYAaWybA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653068198985?e=1756339200&v=beta&t=jp4QAQn2Og4FmiH8-URZug-TdQcDPFUtI9rrTipAlk4",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Ma Subramanian",
      role: "Minister for Health and Family Welfare of Tamil Nadu",
      image: "/assets/images/cheifGuests/2.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Anbil Mahesh Poyyamozhi",
      role: "Minister for School Education of Tamil Nadu",
      image: "/assets/images/cheifGuests/3.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Mayilsamy Annadurai",
      role: "Indian Aerospace Engineer and Former Director of ISRO",
      image: "/assets/images/cheifGuests/4.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Viswanathan",
      role: "Founder and Chancellor of Vellore Institute of Technology",
      image: "/assets/images/cheifGuests/5.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
  ];

  return (
    <section className="speakers">
      <div className="container">
        <div className="speaker-inner">
          <div className="speaker-title text-center p-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="title-content text-lg-start mb-2">
                  <p className="mb-1 pink">Cheif Guest</p>
                  <h2 className="mb-1">
                    MEET OUR <span className="pink">Cheif Guests</span>
                  </h2>
                  <p className="m-0">
                    Our esteemed Chief Guests are trailblazers in their fields,
                    bringing with them a wealth of experience, innovation, and
                    leadership. Their presence at the Science & Technology
                    Innovation Fest 2025 inspires the next generation of
                    thinkers, creators, and changemakers.
                  </p>
                </div>
              </div>
              {/* <div className="col-lg-6">
                <div className="speaker-button text-lg-end">
                  <Link to="/Speakerlist" className="btn my-2">
                    VIEW MORE Cheif Guest
                  </Link>
                </div>
              </div> */}
            </div>
          </div>

          <div className="sepaker-list text-center text-white">
            <div className="row">
              {chiefGuests.map((guest, index) => (
                <div key={index} className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src={guest.image}
                      alt="speaker"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">{guest.name}</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        {guest.role}
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {Object.entries(guest.socials).map(
                          ([platform, url]) => (
                            <li key={platform} className="d-inline-block">
                              <a href={url} className="rounded d-block">
                                <i className={`fa fa-${platform}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChiefGuestSection;
