import React from "react";
import { Link } from "react-router-dom";

const ChiefGuestSection = () => {
     const chiefGuests = [
        {
          name: "Dr. A. P. J. Abdul Kalam",
          role: "Former President of India & Aerospace Scientist",
          image: "https://ui-avatars.com/api/?name=A+P+J+Kalam&background=random&size=300",
          socials: {
            facebook: "#",
            twitter: "#",
            google: "#",
            instagram: "#"
          }
        },
        {
          name: "Dr. Tessy Thomas",
          role: "Missile Woman of India, DRDO",
          image: "https://ui-avatars.com/api/?name=Tessy+Thomas&background=random&size=300",
          socials: {
            facebook: "#",
            twitter: "#",
            google: "#",
            instagram: "#"
          }
        },
        {
          name: "Narayana Murthy",
          role: "Founder, Infosys",
          image: "https://ui-avatars.com/api/?name=Narayana+Murthy&background=random&size=300",
          socials: {
            facebook: "#",
            twitter: "#",
            google: "#",
            instagram: "#"
          }
        },
        {
          name: "Dr. Kiran Bedi",
          role: "Social Reformer & Former IPS Officer",
          image: "https://ui-avatars.com/api/?name=Kiran+Bedi&background=random&size=300",
          socials: {
            facebook: "#",
            twitter: "#",
            google: "#",
            instagram: "#"
          }
        }
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
                    MEET OUR <span className="pink">Cheif Guets</span>
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
              <div className="col-lg-6">
                <div className="speaker-button text-lg-end">
                  <Link to="/Speakerlist" className="btn my-2">
                    VIEW MORE Cheif Guest
                  </Link>
                </div>
              </div>
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
