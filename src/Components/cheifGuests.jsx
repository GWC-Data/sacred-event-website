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
    {
      name: "Narasimhan",
      role: "Chairman, RASI Groups",
      image: "data:image/jpeg;base64,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",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Santhosam",
      role: "Founder and Chancellor of Vellore Institute of Technology",
      image: "data:image/jpeg;base64,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",
      socials: {
        facebook: "#",
        twitter: "#",
        google: "#",
        instagram: "#",
      },
    },
    {
      name: "Elangovan",
      role: "Founder and Chancellor of Vellore Institute of Technology",
      image: "data:image/jpeg;base64,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",
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
                    Innovation AI Fest 2025 inspires the next generation of
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
            <div className="row justify-content-center">
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
