import React from "react";
import CountUpBox from "../Components/CountUpBox";
import TestimonialSlider from "../Components/TestimonialSlider ";
import Gallery from "../Components/Gallery";
import { Link } from "react-router-dom";
import Countdown from "../Components/Countdown";
import CheifGuestSection from "../Components/cheifGuests";
import EventSchedules from "../Components/EventsSchedules";

function Home() {
  return (
    <div>
      {/*!-- Bannner section starts --*/}
      <section className="banner position-relative pb-0">
        <div className="overlay"></div>
        <div className="container">
          <div className="inner-banner position-relative text-white">
            <div className="row">
              {/* Left Column */}
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="banner-left text-center pb-lg-5 p-md-0">
                  <div className="banner-image">
                    <img
                      src="assets/images/bannerImages/75.png"
                      alt="banner-image"
                      className="w-50"
                    />
                    <br />
                  </div>
                  <div className="countdown">
                    <div
                      id="countdown"
                      className="countdown-inner d-flex w-100 bg-white p-2 rounded-5 justify-content-center box-shadow position-relative z-2"
                    >
                      <Countdown />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="banner-right ms-2 text-center text-lg-start pb-8">
                  <div className="banner-title pb-3">
                    <h4 className="text-white pb-3">
                      <span className="pink"> PLATINUM JUBILEE </span>{" "}
                      <span className="">CELEBRATION</span>
                    </h4>
                    <h2 className="text-white">
                      SCIENCE & TECHNOLOGY{" "}
                      <span className="pink">INNOVATION AI FEST 2025</span>
                    </h2>
                  </div>
                  <div className="banner-event-info pb-3">
                    <ul className="m-0 ps-0 d-sm-flex justify-content-center justify-content-lg-start list-unstyled">
                      <li className="pe-2 border-end border-1 border-lightgrey">
                        <i className="fa fa-calendar-o pe-1"></i> 13 SEPT 2025
                      </li>
                      <li className="ps-2">
                        <i className="fa fa-map-marker pe-1"></i> SACRED HEART
                        COLLEGE, TIRUPATTUR
                      </li>
                    </ul>
                  </div>
                  <div className="event-discription">
                    <p className="pb-4 m-0">
                      Discover cutting-edge AI innovations, connect with
                      industry experts, and explore the future of technology at
                      Sacred Heart College's 75th Jubilee celebration. Proudly
                      powered by GWC DATA.AI
                    </p>

                    {/* Powered By Logos */}
                    <div className="row g-2">
                      <div className="powered-by p-2 d-flex align-items-center mt-3 gap-3 col-12 col-md-6">
                        <h4>
                          <span className="text-white fw-semibold">
                            Powered by:
                          </span>
                        </h4>
                        <div
                          className="bg-white p-2 rounded d-inline-flex align-items-center"
                          style={{ height: "50px" }}
                        >
                          <img
                            src="https://gwcdata.ai/assets/Logo-zBt8xU73.svg"
                            alt="GWC DATA.AI Logo"
                            className="powered-logo"
                            style={{ height: "100%", objectFit: "contain" }}
                          />
                        </div>
                      </div>
                      <div className="powered-by p-2 d-flex align-items-center mt-3 gap-3 col-12 col-md-6">
                        <h4>
                          <span className="text-white fw-semibold">
                            Association With:
                          </span>
                        </h4>
                        <div
                          className="bg-white p-2 rounded d-inline-flex align-items-center"
                          style={{ height: "50px" }}
                        >
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLwwJFUz91ATiDWH8DT3NcDt3uZ_tOXZwR5w&s"
                            alt="GWC DATA.AI Logo"
                            className="powered-logo"
                            style={{ height: "100%", objectFit: "contain" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="banner-button mt-4">
                      <div className="row text-center">
                        <div className="col-lg-12 col-md-12">
                          <Link to="/" className="btn me-3 my-1 w-50">
                            REGISTER NOW
                          </Link>
                        </div>
                        {/* <div className="col-lg-6 col-md-6">
                          <Link to="/Schedule" className="btn btn2 my-1 w-100">
                            VIEW SCHEDULE
                          </Link>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Wave */}
        <div className="wave overflow-hidden position-absolute w-100 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 100"
            preserveAspectRatio="none"
            className="d-block position-relative"
          >
            <path
              className="elementor-shape-fill"
              d="M790.5,93.1c-59.3-5.3-116.8-18-192.6-50c-29.6-12.7-76.9-31-100.5-35.9c-23.6-4.9-52.6-7.8-75.5-5.3
        c-10.2,1.1-22.6,1.4-50.1,7.4c-27.2,6.3-58.2,16.6-79.4,24.7c-41.3,15.9-94.9,21.9-134,22.6C72,58.2,0,25.8,0,25.8V100h1000V65.3
        c0,0-51.5,19.4-106.2,25.7C839.5,97,814.1,95.2,790.5,93.1z"
            ></path>
          </svg>
        </div>
      </section>

      {/*--Banner Section end--*/}

      {/*--Overview Section start--*/}
      <section className="overview pb-0">
        <div className="container">
          <div className="inner-overview pb-10 position-relative border-dashed-bottom-2">
            <div className="row">
              {/* Left Section - Overview Text */}
              <div className="col-lg-6">
                <div className="overview-left text-center text-lg-start">
                  <div className="overview-title pb-4">
                    <p className="mb-1 pink">OVERVIEW</p>
                    <h2 className="mb-2">
                      CELEBRATING 75 YEARS OF
                      <br />
                      <span className="pink">IMPACT & INNOVATION</span>
                    </h2>
                    <p>
                      Join us for the <strong>Innovation AI Fest 2025</strong>,
                      as Sacred Heart College, Tirupattur, celebrates its
                      Platinum Jubilee. Jointly organized by{" "}
                      <strong>Sacred Heart College (Autonomous)</strong> and{" "}
                      <strong>Annamalai Foundation</strong>. This milestone
                      event will showcase groundbreaking innovations, foster
                      industry-academia collaboration, and empower minds for a
                      transformative future.
                    </p>
                    <p className="mb-2">
                      Powered by <strong>GWC DATA.AI</strong> and associated by{" "}
                      <strong>Vellore Institute of Technology</strong>, the fest
                      brings together experts, students, and pioneers in science
                      and technology.
                    </p>
                  </div>

                  {/* Event Info Boxes */}
                  <div className="overview-event-info pb-6 g-4 text-start position-absolute">
                    <div className="row justify-content-around">
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-map-marker text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="location-info">
                              <h5 className="mb-1">WHERE</h5>
                              <small>
                                Sacred Heart College, Tirupattur, Tamil Nadu
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <a>
                          <div className="event-info-box align-items-center d-flex p-4 rounded bg-white box-shadow my-2">
                            <div className="event-info-icon text-center">
                              <i className="fa fa-calendar-o text-white bg-pink rounded-circle me-3"></i>
                            </div>
                            <div className="time-info">
                              <h5 className="mb-1">WHEN</h5>
                              <small>
                                Saturday, September 13, 2025
                                <br />
                                09:00 AM – 04:00 PM
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section - Images */}
              <div className="col-lg-6">
                <div className="overview-img">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 p-0">
                      <div className="container-img-left mb-2">
                        <div className="img-left-1 float-end w-lg-80">
                          <img
                            className="mb-2 w-100 rounded"
                            src="assets/images/group/1.jpg"
                            alt="group-image"
                          />
                        </div>
                        <div className="img-left-2">
                          <img
                            src="assets/images/group/2.jpg"
                            alt="group-image"
                            className="w-100 rounded"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                      <div className="container-img-right w-lg-75">
                        <img
                          src="assets/images/group/3.jpg"
                          alt="group-image"
                          className="w-100 rounded"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="conference">
        <div className="container">
          <div className="conference-inner text-center">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="conference-left ">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 px-2 pt-2">
                      <div className="event-benifit-list-left mb-4">
                        <div className="benifit-list-box py-7 px-4 rounded mb-4 box-shadow bg-white">
                          <div className="list-box-icon">
                            <i
                              className="fa fa-university pink mb-3"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div className="list-box-body">
                            <h5 className="mb-2">A Historic Milestone</h5>
                            <p className="mb-2 w-75 m-auto">
                              We proudly welcome you to this Platinum Jubilee
                              celebration, honoring 75 years of academic
                              excellence, leadership, and societal contribution.
                            </p>
                            {/* <div className="box-btn">
                              <Link to="/Eventdetail" className="p-0 pink">
                                Learn More
                                <i className="fa fa-long-arrow-right ms-2"></i>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                        <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                          <div className="list-box-icon">
                            <i
                              className="fa fa-lightbulb-o pink mb-3"
                              aria-hidden="true"
                            ></i>
                          </div>
                          <div className="list-box-body">
                            <h5 className="mb-2">Theme and Vision</h5>
                            <p className="mb-2 w-75 m-auto">
                              With the theme "Igniting Young Minds," the fest
                              unites students, researchers, and experts to
                              inspire innovation and future-focused
                              collaboration.
                            </p>
                            {/* <div className="box-btn">
                              <Link to="/Eventdetail" className="p-0 pink">
                                Learn More
                                <i className="fa fa-long-arrow-right ms-2"></i>
                              </Link>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 px-2">
                      <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                        <div className="list-box-icon">
                          <i
                            className="fa fa-users pink mb-3"
                            aria-hidden="true"
                          ></i>
                        </div>
                        <div className="list-box-body">
                          <h5 className="mb-2">A Call to Collaborate</h5>
                          <p className="mb-2 w-75 m-auto">
                            This event bridges academia and industry,
                            encouraging global partnerships to shape a
                            sustainable, inclusive, and knowledge-driven future
                            together.
                          </p>
                          {/* <div className="box-btn">
                            <Link to="/Eventdetail" className="p-0 pink">
                              Learn More
                              <i className="fa fa-long-arrow-right ms-2"></i>
                            </Link>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="event-benifit-list-right text-lg-start">
                  <div className="overview-title pb-6">
                    <p className="mb-1 pink">WHY ATTEND </p>
                    <h2 className="mb-2">
                      What you’ll discover at{" "}
                      <span className="pink">Event</span>
                    </h2>
                  </div>
                  <div className="overview-info">
                    <ul class="list-group">
                      <li class="list-group-item">
                        ✔️ 150+ organizations, 50+ keynote speakers and global
                        experts
                      </li>
                      <li class="list-group-item">
                        ✔️ 15,000+ students expected from across Tamil Nadu
                      </li>
                      <li class="list-group-item">
                        ✔️ 50+ stalls showcasing emerging tech, AI, and startups
                      </li>
                      <li class="list-group-item">
                        ✔️ Workshops, hackathons, research paper presentations,
                        and product showcases
                      </li>
                      <li class="list-group-item">
                        ✔️ Campus placement drives and career guidance sessions
                      </li>
                      <li class="list-group-item">
                        ✔️ A melting pot of academia, industry, and
                        innovation—where future-ready students meet
                        forward-looking industries for mutual growth
                      </li>
                    </ul>
                    <div className="overview-btn mt-4">
                      <Link
                        // to="/Eventdetail"
                        className="btn"
                      >
                        Join Event
                        <i className="fa fa-long-arrow-right ms-4"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--Overview Section end--*/}

      {/*--Features Section start--*/}
      <section className="feature text-white position-relative z-0 start-0 py-6">
        <div className="overlay z-n1 text-center"></div>
        <div className="my-3 text-center">
          <h2 className="text-white">ONE DAY. ONE LEGACY.</h2>
          <h2>ONE Vision For the Future.</h2>
        </div>
        <div className="container mt-6">
          <div className="feature-inner">
            <div className="counter text-center border-bottom border-white border-opacity-25">
              <div className="inner-counter mb-7">
                <div className="row">
                  {/* <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={75} label="Years of Excellence" />
                    </div>
                  </div> */}
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={15000} label="Attendees" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={50} label="Speakers" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-end border-white border-opacity-25">
                      <CountUpBox end={150} label="Organizations" />
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-3 p-2">
                    <div className="counter-box p-2 border-opacity-25">
                      <CountUpBox end={50} label="Exhibitors" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-lists pt-8">
              <h2 className="text-center text-white">Tracks at Innovate 25</h2>
              <div className="row g-4 mt-6">
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded text bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">TECH TALKS</h5>
                      </div>
                      <div className="feature-box-icon mb-4 col-span-6">
                        <i className="fa fa-arrow-down text-white bg-pink rounded-circle text-center"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded  bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">HACKATHON</h5>
                      </div>
                      <div className="feature-box-icon mb-4 col-span-6">
                        <i className="fa fa-arrow-down text-white bg-pink rounded-circle text-center"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">STARTUP PITCH</h5>
                      </div>
                      <div className="feature-box-icon mb-4 col-span-6">
                        <i className="fa fa-arrow-down text-white bg-pink rounded-circle text-center"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">EXPO</h5>
                      </div>
                      <div className="feature-box-icon mb-4 col-span-6">
                        <i className="fa fa-arrow-down text-white bg-pink rounded-circle text-center"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">NETWORK LUNCH</h5>
                      </div>
                      <div className="feature-box-icon mb-4 col-span-6">
                        <i className="fa fa-arrow-down text-white bg-pink rounded-circle text-center"></i>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="feature-box py-7 px-6 rounded bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">ALUMNI CONNECT</h5>
                      </div>
                      <div className="feature-box-icon mb-4 col-span-6">
                        <i className="fa fa-arrow-down text-white bg-pink rounded-circle text-center"></i>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Features Section end--*/}

      <section className="conference">
        <div className="container">
          <div className="conference-inner text-center">
            <div className="row gx-lg-5 align-items-center">
              <div className="col-lg-6 order-2 order-lg-1">
                <div className="conference-left ">
                  <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6 px-2 pt-2">
                      <div className="event-benifit-list-left mb-4">
                        <div className="benifit-list-box py-7 px-4 rounded mb-4 box-shadow bg-white">
                          {/* <div className="list-box-icon">
                            <i
                              className="fa fa-users pink mb-3"
                              aria-hidden="true"
                            ></i>
                          </div> */}
                          <div className="list-box-body">
                            {/* <h5 className="mb-2">Event Conference</h5> */}
                            <img
                              src="https://shctpt.edu/assets/img/logo/logo.png"
                              alt="Logo"
                              className="w-100"
                            />
                            <div className="box-btn">
                              {/* <Link to="/Eventdetail" className="p-0 pink">
                                Learn More
                                <i className="fa fa-long-arrow-right ms-2"></i>
                              </Link> */}
                            </div>
                          </div>
                        </div>
                        <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                          {/* <div className="list-box-icon">
                            <i
                              className="fa fa-globe pink mb-3"
                              aria-hidden="true"
                            ></i>
                          </div> */}
                          <div className="list-box-body">
                            {/* <h5 className="mb-2">Culture Leadership</h5> */}
                            <img
                              src="/assets/images/logo/annamalai.png"
                              alt="Logo"
                              style={{ width: "42%" }}
                              className=""
                            />
                            <div className="box-btn">
                              {/* <Link to="/Eventdetail" className="p-0 pink">
                                Learn More
                                <i className="fa fa-long-arrow-right ms-2"></i>
                              </Link> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 px-2">
                      <div className="benifit-list-box py-7 px-4 rounded box-shadow bg-white">
                        {/* <div className="list-box-icon">
                          <i
                            className="fa fa-bar-chart pink mb-3"
                            aria-hidden="true"
                          ></i>
                        </div> */}
                        <div className="list-box-body">
                          {/* <h5 className="mb-2">Digital Marketing</h5> */}
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJvofK6zZPeSuCofBJY8ItX7uxyJKMHQpUiw&s"
                            alt="Logo"
                            className="w-100"
                          />
                          <div className="box-btn">
                            {/* <Link to="/Eventdetail" className="p-0 pink">
                              Learn More
                              <i className="fa fa-long-arrow-right ms-2"></i>
                            </Link> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2">
                <div className="event-benifit-list-right text-lg-start">
                  <div className="overview-title pb-6">
                    <p className="mb-1">ABOUT</p>
                    <h2 className="mb-2">
                      <span className="pink">
                        Annamalai Foundation USA & Annamalai Trust, India
                      </span>
                    </h2>
                  </div>
                  <div className="overview-info">
                    <p>
                      Annamalai Foundation is a global nonprofit dedicated to
                      uplifting talented students—particularly from government
                      schools in India—through access to STEM education,
                      international academic collaborations, mentorship, and
                      innovation-driven programs.
                    </p>
                    <ul class="list-group">
                      <li class="list-group-item">
                        ✔️ Partnerships with U.S. universities, Sessions with
                        ISRO and NASA scientists, Industrial Specialists, SME's
                        experts
                      </li>
                      <li class="list-group-item">
                        ✔️ STEM labs and incubation centers and ISRO outreach
                        for rural students
                      </li>
                      <li class="list-group-item">
                        ✔️ Career mentoring from global experts
                      </li>
                    </ul>
                    {/* <div className="overview-btn mt-4">
                                <Link to="/Eventdetail" className="btn">Join Event<i className="fa fa-long-arrow-right ms-4"></i></Link>
                            </div>       */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Conference Section end--*/}

      <section className="next-sponser position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="next-sponser-inner w-lg-80 w-md-95 mx-auto text-center position-relative text-white">
            <div className="next-sponser-title">
              <h5 className="text-white mb-1">WHY?</h5>
            </div>
            <div className="next-sponser-info mt-8">
              <div className="row g-4">
                <div className="col-lg-6 d-flex">
                  <div className="feature-box py-7 px-6 rounded text bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">
                          Why Sacred Heart College?
                        </h5>
                        <p>
                          Ranked 47th by NIRF among 40,000+ institutions in
                          India, Sacred Heart College is home to 5,000+
                          students, of which over 48% are first-generation
                          graduates. With 17 undergraduate and 15 postgraduate
                          programs, the college stands as a model of academic
                          equity and excellence.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6 d-flex">
                  <div className="feature-box py-7 px-6 rounded  bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">Why Tirupattur?</h5>
                        <p>
                          Tirupattur, a rapidly growing Tier-4 city surrounded
                          by 150+ villages, holds immense untapped potential.
                          Many students here are first-generation learners with
                          exceptional talent. This Fest aims to provide them
                          exposure to cutting-edge science, technology, and
                          career possibilities
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--Ticketbook Section start--*/}
      {/* <section className="feature text-white position-relative z-0 start-0 py-6">
        <div className="overlay z-n1 text-center"></div>
        <div className="container mt-6">
          <div className="feature-inner">
            <div className="feature-lists">
              <h2 className="text-center text-white pb-4">WHY?</h2>
              <div className="row g-4">
                <div className="col-lg-6">
                  <div className="feature-box py-7 px-6 rounded text bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">
                          Why Sacred Heart College?
                        </h5>
                        <p>
                          Ranked 47th by NIRF among 40,000+ institutions in
                          India, Sacred Heart College is home to 5,000+
                          students, of which over 48% are first-generation
                          graduates. With 17 undergraduate and 15 postgraduate
                          programs, the college stands as a model of academic
                          equity and excellence.
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="feature-box py-7 px-6 rounded  bg-black bg-opacity-25">
                    <a className="d-flex col-span-12 justify-content-between align-items-center">
                      <div className="feature-box-info col-span-6">
                        <h5 className="text-white mb-2">Why Tirupattur?</h5>
                        <p>
                          Tirupattur, a rapidly growing Tier-4 city surrounded
                          by 150+ villages, holds immense untapped potential.
                          Many students here are first-generation learners with
                          exceptional talent. This Fest aims to provide them
                          exposure to cutting-edge science, technology, and
                          career possibilities
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/*--Cheif Guests Section start--*/}
      <CheifGuestSection />
      {/*--Cheif Guests Section end--*/}

      <section className="feature text-white position-relative z-0 start-0 py-6 my-8">
        <div className="overlay z-n1 text-center"></div>
        <div className="container mt-6">
          <div className="feature-inner">
            <div className="feature-lists">
              <h2 className="text-center text-white pb-4">
                Why Should you Attend?
              </h2>
              <div className="row g-4">
                {/* Column 1 */}
                <div className="col-lg-4 d-flex ">
                  <div className="feature-box py-5 px-4 rounded bg-black bg-opacity-25 w-100 h-100">
                    <div className="feature-box-info">
                      <h5 className="text-white mb-3">Students</h5>
                      <ul className="list-unstyled text-white">
                        <li className="mt-2 ms-4">
                          -Celebrate your institution’s Platinum Jubilee with
                          pride and participation
                        </li>
                        <li className="mt-2 ms-4">
                          -Join hands-on workshops on AI, Robotics, and Emerging
                          Tech
                        </li>
                        <li className="mt-2 ms-4">
                          -Present your projects and ideas to gain recognition
                          and feedback
                        </li>
                        <li className="mt-2 ms-4">
                          -Compete in hackathons and science competitions
                        </li>
                        <li className="mt-2 ms-4">
                          -Connect with industry experts for internships and
                          career insights
                        </li>
                        <li className="mt-2 ms-4">
                          -Enjoy cultural events and meet like-minded peers from
                          other institutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="col-lg-4 d-flex">
                  <div className="feature-box py-5 px-4 rounded bg-black bg-opacity-25 w-100 h-100">
                    <div className="feature-box-info">
                      <h5 className="text-white mb-3">
                        Industry Professionals & Alumni
                      </h5>
                      <ul className="list-unstyled text-white">
                        <li className="mt-2 ms-4">
                          -Discover student-led innovations and talent ready for
                          industry engagement
                        </li>
                        <li className="mt-2 ms-4">
                          -Participate in talks, panels, and fireside chats to
                          share insights and stories
                        </li>
                        <li className="mt-2 ms-4">
                          -Build connections with educators, researchers, and
                          fellow alumni
                        </li>
                        <li className="mt-2 ms-4">
                          -Contribute to Sacred Heart’s legacy by supporting or
                          sponsoring impactful segments
                        </li>
                        <li className="mt-2 ms-4">
                          -Relive memories and celebrate the 75-year journey of
                          your alma mater
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="col-lg-4 d-flex">
                  <div className="feature-box py-5 px-4 rounded bg-black bg-opacity-25 w-100 h-100">
                    <div className="feature-box-info">
                      <h5 className="text-white mb-3">
                        Educators & Researchers
                      </h5>
                      <ul className="list-unstyled text-white">
                        <li className="mt-2 ms-4">
                          -Attend keynotes and panel discussions from national
                          and international thought leaders
                        </li>
                        <li className="mt-2 ms-4">
                          -Inspire young minds through mentorship and guidance
                          opportunities
                        </li>
                        <li className="mt-2 ms-4">
                          -Engage in faculty-industry roundtables on research,
                          NEP 2020, and innovation
                        </li>
                        <li className="mt-2 ms-4">
                          -Explore collaborations for interdisciplinary research
                          and funding
                        </li>
                        <li className="mt-2 ms-4">
                          -Nominate and showcase your department’s innovations
                          on a prestigious platform
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--Speakers Section Start--*/}
      <section className="speakers">
        <div className="container">
          <div className="speaker-inner">
            <div className="speaker-title text-center p-2">
              <div className="row align-items-center ">
                <div className="col-lg-6">
                  <div className="title-content  text-lg-start mb-2">
                    <p className="mb-1 pink">EVENT SPEAKERS</p>
                    <h2 className="mb-1">
                      MEET OUR <span className="pink">SPEAKERS</span>
                    </h2>
                    <p className="m-0">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                {/* <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Speakerlist" className="btn my-2">
                      VIEW MORE SPEAKERS
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="sepaker-list text-center text-white">
              <div className="row">
                <div className=" col-lg-3 col-md-6 p-2">
                  <div className="speaker-box  position-relative overflow-hidden text-white">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/1.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/2.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/3.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 p-2">
                  <div className="speaker-box position-relative overflow-hidden">
                    <img
                      className="speaker-image rounded w-100"
                      src="assets/images/speakers/4.jpg"
                      alt="speaker-image"
                    />
                    <div className="box-content position-absolute bottom-0 z-1">
                      <h6 className="speaker-title d-block text-white pb-1">
                        <Link to="/Speakerdetail">GERARDO AMBROSE</Link>
                      </h6>
                      <span className="speaker-post d-block pb-2">
                        Marketing Expert
                      </span>
                      <ul className="social-link pb-2 ps-0 d-flex gap-2 position-relative justify-content-center">
                        {["facebook", "twitter", "google", "instagram"].map(
                          (icon, i) => (
                            <li key={i} className="d-inline-block">
                              <a href="#" className="rounded d-block">
                                <i className={`fa fa-${icon}`}></i>
                              </a>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*--Speakers Section end--*/}

      {/*--Ticketbook Section start--*/}
      <section className="ticket position-relative">
        <div className="overlay"></div>
        <div className="container">
          <div className="ticket-inner w-lg-75 mx-auto text-center position-relative text-white">
            <div className="ticket-title">
              <h5 className="text-white mb-1">BE OUR GUEST</h5>
              <h1 className="text-white mb-2">
                PLATINUM JUBILEE CELEBRATION{" "}
                <span className="pink">
                  SCIENCE & TECHNOLOGY INNOVATION AI FEST 2025
                </span>
              </h1>
            </div>
            <div className="ticket-info">
              <p>
                Join us on <strong>Saturday, 13th September 2025</strong> from{" "}
                <strong>09:00 AM to 04:00 PM</strong> at
                <strong> Sacred Heart College, Tirupattur</strong> for a
                transformative event showcasing cutting-edge innovations, expert
                talks, and future-defining technologies — organized by SHC &
                Annamalai Foundation, USA.
              </p>
              <p className="mb-4">
                Proudly <strong>powered by GWC DATA.AI</strong> — because{" "}
                <em>Solution Matters</em>.
              </p>
              <div className="ticket-button">
                <Link to="/" className="btn">
                  REGISTER NOW
                </Link>
              </div>
              <div className="pt-3 small">
                <p>
                  Contact:{" "}
                  <a href="tel:+918056286482" className="text-white">
                    +91 80562 86482
                  </a>
                </p>
                <p>
                  More info:{" "}
                  <a
                    href="https://www.shctpt.edu"
                    target="_blank"
                    className="text-white"
                  >
                    www.shctpt.edu
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--Ticketbook Section end--*/}

      {/*--Schedules Section start--*/}
      <EventSchedules />
      {/* <section className="schedules">
        <div className="container">
          <div className="schedule-inner">
            <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
              <p className="mb-1 pink">OUR SCHEDULES</p>
              <h2 className="mb-1">
                FOLLOW <span className="pink">EVENT</span> SCHEDULES
              </h2>
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="schedule-list-outer">
              <div className="schedule-list-top mb-7">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">1ST DAY</h4>
                      <h6 className="mb-2">APRIL 23, 2024</h6>
                      <p>
                        William Mathew Theater
                        <br />
                        2390 NW 2nd Ave, Miami, FL 33127
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list  text-center text-sm-start">
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              REGISTRATION & BREAKFAST
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image ">
                            <img
                              src="assets/images/team/1.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Eventdetail" className="pink">
                                JESUS HOLLAND
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-white border-lightgrey border border-2 rounded px-6 py-4">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              SPEED: MARKETING MASTER!
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/2.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Eventdetail" className="pink">
                                NELSON KETY
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="schedule-title-bottom">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center position-relative text-sm-start py-6 ps-2 z-1">
                      <h4 className=" pink mb-2">2ND DAY</h4>
                      <h6 className="mb-2">APRIL 24, 2024</h6>
                      <p>
                        William Mathew Theater
                        <br />
                        2390 NW 2nd Ave, Miami, FL 33127
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list text-center text-sm-start">
                      <div className=" schedule-list-box bg-lightgrey   border border-white border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              REGISTRATION & BREAKFAST
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/3.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0">
                              <Link to="/Eventdetail" className="pink">
                                PEELRS HELM
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                      <div className=" schedule-list-box bg-white border-lightgrey border border-2 rounded px-6 py-4 mb-5">
                        <div className="schedule-box-title">
                          <h5 className="mb-2">
                            <Link to="/Eventdetail" className="black">
                              EXPLORATIONS OF NEW APPROACHES
                            </Link>
                          </h5>
                        </div>
                        <div className="schedule-box-info">
                          <p className="mb-2">
                            <small>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit. Ut elit tellus, luctus nec ullamcorper
                              mattis, pulvinar dapibus leo, luctus nec
                              ullamcorper mattis, pulvinar dapibus leo.
                            </small>
                          </p>
                          <ul className="mb-2 p-0">
                            <li className="d-inline">
                              <i
                                className="fa fa-clock-o pink me-2"
                                aria-hidden="true"
                              ></i>
                              <small>08:30 - 09:30 AM</small>
                            </li>
                            <li className="d-inline">
                              <i
                                className="fa fa-thumb-tack pink mx-2"
                                aria-hidden="true"
                              ></i>
                              <small>Exploration Hall</small>
                            </li>
                          </ul>
                        </div>
                        <div className="schedule-box-bio d-md-flex">
                          <div className="schedule-bio-image">
                            <img
                              src="assets/images/team/1.jpg"
                              alt="team-image"
                              className="me-2 rounded-circle"
                            />
                          </div>
                          <div className="schedule-bio-info">
                            <p className="mt-1 mb-0 pink">
                              <Link to="/Eventdetail" className="pink">
                                JESUS HOLLAND
                              </Link>
                            </p>
                            <small>Host & Speaker</small>
                          </div>
                        </div>
                      </div>
                      <div className="partner-button mt-6">
                        <Link to="/Eventlists" className="btn">
                          VIEW MORE DETAILS
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Schedules Section end--*/}

      {/*--Pricing Section start--*/}
      {/* <section className="price bg-lightgrey">
        <div className="container">
          <div className="price-inner text-center">
            <div className="price-title mb-7 w-lg-60 m-auto">
              <p className="mb-1 pink">PRICING TABLE</p>
              <h2 className="mb-1">
                EXPLORE FLEXIBLE <span className="pink">PRICING</span> PLANS
              </h2>
              <p className="m-0">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="price-options g-2 pb-6">
              <div className="row">
                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box">
                    <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                      <img
                        src="assets/images/pattern/1.png"
                        alt="pattern"
                        className="w-100 pattern position-absolute rounded-top"
                      />
                      <div className="ticket-title">
                        <h4 className="pt-6  mb-1">BASIC TICKET</h4>
                        <p>Stander Package</p>
                      </div>
                      <div className="ticket-price bg-white py-6">
                        <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                          <span className="me-1 mb-0 currency">$</span>
                          <span className="me-1 m-0 dollor">19</span>
                          <span className="me-1 mb-0 cents">99</span>
                        </div>
                        <p className="m-0">Person</p>
                      </div>
                      <div className="benifit-list bg-white px-5">
                        <ul className="m-auto p-0 list-unstyled">
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Second Balcony Seat</small>
                            </p>
                          </li>
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Snack & software</small>
                            </p>
                          </li>
                          <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                            <p className="my-1">
                              <small>Certificates</small>
                            </p>
                          </li>
                          <li className="pt-2 border border-0 text-capitalize lh-1">
                            <p className="my-1">
                              <small>Private access</small>
                            </p>
                          </li>
                        </ul>
                      </div>
                      <div className="ticket-button  m-auto p-6">
                        <Link to="/Pricing" className="btn">
                          PURCHASE
                        </Link>
                        <p className="mt-4">
                          <small>
                            *Please read our term and condition before order
                            ticket
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box-inner bg-white position-relative rounded-bottom-5">
                    <img
                      src="assets/images/pattern/2.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />
                    <div className="ticket-title py-6 bg-pink text-white ">
                      <h4 className="text-white  mb-1">SILVER TICKET</h4>
                      <p>Pro Package</p>
                    </div>
                    <div className="ticket-price bg-white py-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start fw-bold">
                        <span className="me-1 mb-0 currency pink">$</span>
                        <span className="me-1 m-0 dollor pink">39</span>
                        <span className="me-1 mb-0 cents pink">99</span>
                      </div>
                      <p className="m-0">Person</p>
                    </div>
                    <div className="benifit-list bg-white">
                      <ul className=" m-auto p-0 list-unstyled">
                        <li className="pb-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Second Balcony Seat</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Snack & software</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Certificates</small>
                          </p>
                        </li>
                        <li className="py-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Private access</small>
                          </p>
                        </li>
                        <li className="pt-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Printed material</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="partner-button  m-auto p-6">
                      <Link to="/Pricing" className="btn">
                        PURCHASE
                      </Link>
                      <p className="mt-4">
                        <small>
                          *Please read our term and condition before order
                          ticket
                        </small>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-lg-4 col-md-6">
                  <div className="ticket-box-inner  bg-white position-relative rounded-bottom-5">
                    <img
                      src="assets/images/pattern/1.png"
                      alt="pattern"
                      className="w-100 pattern position-absolute rounded-top"
                    />
                    <div className="ticket-title">
                      <h4 className="pt-6 mb-1">GOLDEN TICKET</h4>
                      <p>Enterprise Package</p>
                    </div>
                    <div className="ticket-price bg-white py-6">
                      <div className="ticket-price-inner d-flex justify-content-center align-items-start black fw-bold">
                        <span className="me-1 mb-0 currency">$</span>
                        <span className="me-1 m-0 dollor">199</span>
                        <span className="me-1 mb-0 cents">99</span>
                      </div>
                      <p className="m-0">Person</p>
                    </div>
                    <div className="benifit-list bg-white px-5">
                      <ul className=" m-auto p-0 list-unstyled">
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Second Balcony Seat</small>
                          </p>
                        </li>
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Snack & software</small>
                          </p>
                        </li>
                        <li className="py-2 text-capitalize lh-1  border-dashed-bottom-1">
                          <p className="my-1">
                            <small>Certificates</small>
                          </p>
                        </li>
                        <li className="pt-2 border border-0 text-capitalize lh-1">
                          <p className="my-1">
                            <small>Private access</small>
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="partner-button  m-auto p-5">
                      <Link to="/Pricing" className="btn">
                        PURCHASE
                      </Link>
                      <p className="mt-4">
                        <small>
                          *Please read our term and condition before order
                          ticket
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="m-0">
              All prices exclude 25% VAT. For more details, view our{" "}
              <a href="" className="pink">
                Terms & Policy
              </a>
            </p>
          </div>
        </div>
      </section> */}
      {/*--Pricing Section end--*/}

      {/*--Gallery Section end--*/}
      {/* <section className="gallery">
        <div className="container">
          <div className="galler-inner">
            <div className="section-title text-center">
              <div className="row align-items-center ">
                <div className="col-lg-6 pb-2">
                  <div className="title-content  text-lg-start">
                    <p className="mb-1 pink">EVENT GALLERY</p>
                    <h2 className="mb-1">
                      WAS AN AMAGING <span className="pink">GALLERY</span>
                    </h2>
                    <p className="m-0">
                      Excepteur sint occaecat cupidatat non proident, sunt in
                      culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="speaker-button text-lg-end">
                    <Link to="/Ourgallery" className="btn">
                      VIEW MORE SHOTS
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Gallery />
          </div>
        </div>
      </section> */}
      {/*--Gallery Section end--*/}

      {/*--Testimonials Section start--*/}
      {/* <section className="testimonial bg-lightgrey">
        <div className="container">
          <div className="section-title w-lg-60 m-auto text-center pb-5">
            <p className="mb-1 pink">GUEST EXPERIENCES</p>
            <h2 className="mb-1">
              WHAT PEOPLE SAY ABOUT{" "}
              <span className="pink">SHC INNOVATION AI FEST</span>
            </h2>
            <p className="m-0">
              Hear from distinguished guests, participants, and innovators who
              experienced the energy, collaboration, and inspiration at Sacred
              Heart College’s 75th Jubilee and Tech Innovation Summit.
            </p>
          </div>
          <TestimonialSlider />
        </div>
      </section> */}

      {/*--Testimonials Section end--*/}

      {/*--FAQ Section start--*/}
      <section className="faq pb-0 overflow-visible d-block position-relative z-1 pb-10">
        <div className="overlay bg-blue opacity-25 z-n1"></div>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-lg-6 px-4 mb-2">
                <div className="faq-general">
                  <div className="section-title pb-3 text-center text-lg-start">
                    <p className="mb-1 pink">EVENT HIGHLIGHTS</p>
                    <h2 className="mb-2 text-white">
                      PLATINUM JUBILEE <span className="pink">CELEBRATION</span>
                    </h2>
                    <p className="text-white">
                      Join us in celebrating 75 years of Sacred Heart College,
                      Tirupattur — a landmark event featuring innovation,
                      collaboration, and inspiration.
                    </p>
                  </div>
                  <div className="faq-accordion p-4 mb-5 bg-white rounded">
                    <div
                      className="accordion accordion-faq"
                      id="accordionFlushExample"
                    >
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseOne"
                            aria-expanded="false"
                            aria-controls="flush-collapseOne"
                          >
                            WHAT IS THE MAIN EVENT?
                          </button>
                        </p>
                        <div
                          id="flush-collapseOne"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            The Science & Technology Innovation AI Fest 2025 is
                            the core event, celebrating innovation under the
                            theme "Empowering Minds & Transforming Lives".
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseTwo"
                            aria-expanded="false"
                            aria-controls="flush-collapseTwo"
                          >
                            WHEN AND WHERE IS IT HELD?
                          </button>
                        </p>
                        <div
                          id="flush-collapseTwo"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Saturday, 13th September 2025
                            <br />
                            09:00 AM to 04:00 PM
                            <br />
                            Venue: Sacred Heart College, Tirupattur
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <p className="accordion-header p-4">
                          <button
                            className="accordion-button collapsed fw-semibold p-0"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#flush-collapseThree"
                            aria-expanded="false"
                            aria-controls="flush-collapseThree"
                          >
                            WHO CAN ATTEND?
                          </button>
                        </p>
                        <div
                          id="flush-collapseThree"
                          className="accordion-collapse collapse"
                          data-bs-parent="#accordionFlushExample"
                        >
                          <div className="accordion-body bg-lightgrey p-6">
                            Open to students, faculty, researchers, alumni, tech
                            professionals, and innovation enthusiasts from all
                            walks of life.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 align-self-center px-4">
                <div className="faq-form bg-white rounded shadow-lg p-6 mb-mi">
                  <div className="form-title mb-4">
                    <p className="mb-1 pink">REGISTRATION</p>
                    <h2 className="mb-2">
                      BE OUR <span className="pink">GUEST</span>
                    </h2>
                    <p className="m-0">
                      Secure your seat for the SHC Summit – a platform to
                      discover, connect, and be inspired by technology leaders
                      and innovators.
                    </p>
                  </div>
                  <div className="form-content justify-content-between">
                    <form>
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="mb-5"
                      />
                      <div className="row justify-content-around">
                        <div className="col-lg-6 col-md-6">
                          <div className="phone-no">
                            <input
                              type="tel"
                              placeholder="Phone No."
                              className="mb-5"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="emai">
                            <input
                              type="email"
                              placeholder="Email Address"
                              className="mb-5"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <textarea
                        placeholder="Questions or special requests?"
                        rows="4"
                        className="mb-5"
                      ></textarea>
                      <button className="btn mb-5" id="sub-btn">
                        REGISTER NOW
                      </button>
                    </form>
                    <small>
                      *For more details, call +91 80562 86482 or visit
                      www.shctpt.edu
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--FAQ Section end--*/}

      {/*--Direction Section start--*/}
      <section className="direction pb-0">
        <div className="container">
          <div className="section-title text-center pb-2 w-lg-60 m-auto">
            <p className="mb-1 pink">REACH US</p>
            <h2 className="mb-1">
              GET DIRECTION TO THE <span className="pink">SHC SUMMIT</span>
            </h2>
            <p className="mb-0">
              Join us at Sacred Heart College, Tirupattur for the Platinum
              Jubilee Celebration featuring the Science & Technology Innovation
              Fest 2025.
            </p>
          </div>
          <div className="direction-content">
            <div className="direction-info">
              <div className="row">
                <div className="col-lg-5 col-md-5 px-1">
                  <div className="p-6 d-flex text-white w-100 h-100 rounded bg-pink">
                    <div className="justify-content-center align-self-center ms-6">
                      <h5 className="text-white pb-2">EVENT VENUE:</h5>
                      <p className="pb-5 m-0">
                        Sacred Heart College, Tirupattur
                      </p>
                      <h5 className="text-white pb-2">ADDRESS:</h5>
                      <p className="pb-5 m-0">
                        SHC Campus, Tirupattur – 635601, Tamil Nadu, India
                      </p>
                      <h5 className="text-white pb-2">RECEPTION INFO:</h5>
                      <p className="pb-5 m-0">
                        Booking & Info: +91 80562 86482
                      </p>
                      <a
                        href="https://maps.google.com/?q=Sacred+Heart+College+Tirupattur"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Get Directions
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 px-1 py-2">
                  <iframe
                    height="400"
                    className="rounded w-100"
                    src="https://maps.google.com/maps?q=Sacred%20Heart%20College%20Tirupattur&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="location-gallery">
              <div id="selector" className="row pt-1 justify-content-center">
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/4.jpg"
                >
                  <a>
                    <img
                      src="assets/images/thumbnail/4.jpg"
                      className="w-100 rounded"
                      alt="Tech exhibition at SHC"
                    />
                  </a>
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/7.jpg"
                >
                  <a>
                    <img
                      src="assets/images/thumbnail/7.jpg"
                      className="w-100 rounded"
                      alt="Industry expert panel at SHC"
                    />
                  </a>
                </div>
                <div
                  className="item col-lg-4 col-md-6 p-1"
                  data-src="images/group/1.jpg"
                >
                  <a>
                    <img
                      src="assets/images/thumbnail/1.jpg"
                      className="w-100 rounded"
                      alt="Innovation showcase at SHC"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*--Direction Section end--*/}

      {/*--Blog Section start--*/}
      {/* <section className="blog">
        <div className="container">
          <div className="blog-inner">
            <div className="row align-items-center">
              <div className="col-lg-6  ">
                <div className="blog-title text-center text-lg-start p-2">
                  <p className="mb-1 pink">RECENT NEWS</p>
                  <h2 className="mb-1">
                    READ MY <span className="pink">NEWS </span>TO KNOW MORE
                  </h2>
                  <p className="mb-0">
                    Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="col-lg-6  p-2">
                <div className="blog-button text-center text-lg-end">
                  <Link to="/Blogsingle" className="btn">
                    VIEW MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="blog-content">
              <div className="row">
                <div className=" col-lg-4 p-4 pb-0">
                  <div className="blog-box border border-1 rounded pb-2 text-center ">
                    <Link to="/Blogsingle">
                      <img
                        className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                        src="assets/images/group/6.jpg"
                        alt="blog-img"
                      />
                    </Link>
                    <h5 className="p-4">
                      <Link to="/Blogsingle" className="black">
                        THE TOP MUSIC FESTIVAL IN NEW YORK CITY
                      </Link>
                    </h5>
                    <p className="p-4 pt-0 m-0 border-bottom">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </small>
                    </p>
                    <div className="pt-2">
                      <span className="px-4  border-end ">April 3, 2023 </span>
                      <span className="px-4">No Comments </span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4  p-4 pb-0">
                  <div className="blog-box border border-1 rounded pb-2 text-center">
                    <Link to="/Blogsingle">
                      <img
                        className="blog-img rounded w-100 rounded-bottom-0 h-auto"
                        src="assets/images/group/7.jpg"
                        alt="blog-img"
                      />
                    </Link>
                    <h5 className="p-4">
                      <Link to="/Blogsingle" className="black">
                        LIVE INTERVIEWS FROM CONFERENCE
                      </Link>
                    </h5>
                    <p className="p-4 pt-0 m-0 border-bottom">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </small>
                    </p>
                    <div className="pt-2">
                      <span className="px-4  border-end ">April 3, 2023 </span>
                      <span className="px-4">No Comments </span>
                    </div>
                  </div>
                </div>
                <div className=" col-lg-4 p-4 pb-0 ">
                  <div className="blog-box border border-1 rounded pb-2 text-center">
                    <Link to="/Blogsingle">
                      <img
                        className="blog-img rounded rounded-bottom-0 w-100 h-auto"
                        src="assets/images/group/4.jpg"
                        alt="blog-img"
                      />
                    </Link>
                    <h5 className="p-4">
                      <Link to="/Blogsingle" className="black">
                        REGISTRATION FOR OPENING WORKSHOP
                      </Link>
                    </h5>
                    <p className="p-4 pt-0 m-0 border-bottom">
                      <small>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do
                      </small>
                    </p>
                    <div className="pt-2">
                      <span className="px-4  border-end ">April 3, 2023 </span>
                      <span className="px-4">No Comments </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/*--Blog Section end--*/}
    </div>
  );
}

export default Home;
