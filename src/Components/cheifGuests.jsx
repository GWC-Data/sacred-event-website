import React from "react";
import { Link } from "react-router-dom";
const ChiefGuestSection = () => {
  const chiefGuests = [
    // {
    //   name: "Ma Subramanian",
    //   role: "Minister for Health and Family Welfare of Tamil Nadu",
    //   image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture1.png`,
    //   socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    // },
    // {
    //   name: "Anbil Mahesh Poyyamozhi",
    //   role: "Minister for School Education of Tamil Nadu",
    //   image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture2.png`,
    //   socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    // },
    {
      name: "Viswanathan",
      role: "Founder and Chancellor of Vellore Institute of Technology",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture3.png`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Mayilsamy Annadurai",
      role: "Indian Aerospace Engineer and Former Director of ISRO",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture4.png`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "M. Krishnan",
      role: "Vice Chancellor, Central University, Thiruvarur",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "M.Balasubramaniyam",
      role: "CEO, Stratinfinity Inc",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture7.png`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Narasimhan",
      role: "Chairman, RASI Groups",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture5.png`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Santhosam",
      role: "VGP Groups, Chennai",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture6.png`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Elangovan",
      role: "EX. ISRO Scientist",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/Picture8.png`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Don Bosco Lourdhusamy",
      role: "Chairman, Sacred Heart College(Autonomous)",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "John Alexander",
      role: "Vice Chairman, Sacred Heart College(Autonomous)",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "D. Maria Antony Raj",
      role: "Principal, Sacred Heart College (Autonomous)",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Praveen peter",
      role: "Rector & Secretary, Sacred Heart College (Autonomous)",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Venu Ranganathan",
      role: "Director Of Export Compliance and Emerging Technology, Microsoft, USA.",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "V.R.S. Sampath",
      role: "Founder - World Tamils Economic Foundation",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "C. Narasimhan",
      role: "Chairman, RASI Groups",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "M. Gunasekaran",
      role: "Editor-in-Chief, Sun TV Network",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "S. Karmegam, IAS",
      role: "Former Director of Collegiate Education",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "M.N. Raja",
      role: "Managing Director at Sharanss group",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Mr. Naveen Kumar",
      role: "CEO, GWC Data AI, Alumni, Sacred Heart College(Autonornous)",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Neelagaantan Govindasamy",
      role: "Academician, Consultant & Environmentalist, Former CIPET (Govt. of India)",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Perumal Annamalai",
      role: "President, Annamalai Foundation, USA & Social Entrepreneur, USA",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Prabhu Bala",
      role: "Executive Director, Precision Equipments",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Balasakthikumar vittalrangan",
      role: "Director, Annamalai Foundation, USA & Social Entrepreneur, USA",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Vivek Raja",
      role: "Research Scholar, Dr. MGR University Chennai World Records Adiudicator Trustee Raindropss Charity Foundation",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
    {
      name: "Nimal Raghavan",
      role: "Environmental activist, President, Mega Foundation",
      image: `${process.env.PUBLIC_URL}/assets/images/cheifGuests/temp-user-image.jpg`,
      socials: { facebook: "#", twitter: "#", google: "#", instagram: "#" },
    },
  ];

  return (
    <section className="speakers pb-0">
      <div className="container">
        <div className="speaker-inner">
          <div className="speaker-title  p-2">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="title-content text-lg-start mb-2">
                  <p className="mb-1 pink">Cheif Guest</p>
                  <h2 className="mb-1">
                    MEET OUR{" "}
                    <span className="pink">
                      Cheif Guests <span className="text-black">&</span>{" "}
                      Speakers
                    </span>
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
                <div
                  key={index}
                  className="col-6 col-lg-3 col-md-6 col-sm-6 p-2"
                >
                  <div className="speaker-box position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src={guest.image}
                      alt="speaker"
                    />
                    <div className="box-content position-absolute bottom-0 ps-1 pe-1 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        {guest.name}
                      </h6>
                      <span className="speaker-post ps-3 pe-3 d-block">
                        {guest.role}
                      </span>
                      {/* <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {Object.entries(guest.socials).map(
                          ([platform, url]) => (
                            <li key={platform} className="d-inline-block">
                              <a href={url} className="rounded d-block">
                                <i className={`fa fa-${platform}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul> */}
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
