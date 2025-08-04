import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // Removed for artifact compatibility
import PageHelmet from "./Pagehelmet";
import Breadcrumb from "./Breadcrumb";
import { Link } from "react-router-dom";
import { FaUserPlus, FaFileUpload, FaBullhorn, FaMedal } from "react-icons/fa";

const GuideLine = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    setTimeout(() => setAnimationStarted(true), 500);
  }, []);

  const guidelines = [
    {
      title: "TEAM COMPOSITION",
      content:
        "Each team must consist of a maximum of 3 members (Minimum 1 Female participant should be present in each team). All team members must be from the same institution. Participants are allowed to be part of only one team.",
    },
    {
      title: "REGISTRATION",
      content:
        "Registration must be completed through the official website. The registration link will be available on the website. A team has to be identified with a Unique name during the Registration. A single point of contact (Team Leader) must be designated to complete the Registration form. The Final team composition, including all members, must be submitted during registration.",
    },
    {
      title: "PROJECT SCOPE",
      content:
        "Projects must align with the track selected during registration. All submissions must be original and developed exclusively during the Hackathon period. The use of libraries, APIs, or laboratory resources is permitted, but their usage must be clearly disclosed in the submission.",
    },
    {
      title: "PROJECT SUBMISSION GUIDE",
      content:
        "Teams must submit their Complete design and concept through the assigned Registration link. The project proposal must include: PDF and PPT files, and a YouTube video link (set to Private). The Project proposal should contain: First page with logo, Project Title, Team details, Problem Statement, Existing solutions, Team's solution, and Execution. All submissions will undergo Plagiarism and AI-content checks (Turnitin) and must have a similarity score below 20%. The Expert committee will evaluate proposals, and selected teams will be notified via Registered email. Late submissions will not be accepted.",
    },
    {
      title: "CODE OF CONDUCT",
      content:
        "Professionalism: All participants must maintain professionalism and integrity. Harassment-Free Environment: The event has a zero-tolerance policy for harassment, discrimination, or misconduct. Violations will result in immediate disqualification. Original Work: Projects must be the team's original work. Plagiarism leads to disqualification. Dispute Resolution: All disputes will be resolved at the organizers' discretion.",
    },
    {
      title: "GENERAL INFORMATION",
      content:
        "Tracks and Problem Statements have been shared in a separate document via the introduction email. Participants must strictly adhere to the provided Problem statements. Teams working on prototypes may purchase basic components worth up to ₹1,500, reimbursable after the final presentation. Valid GST invoices must be submitted for reimbursement.",
    },
  ];

  const prizes = [
    {
      title: "First Place",
      amount: "₹1,00,000",
    },
    {
      title: "Second Place",
      amount: "₹75,000",
    },
    {
      title: "Third Place",
      amount: "₹50,000",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHelmet pageTitle="Guidelines" />
      <Breadcrumb title="Hackathon Guidelines" />

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="row gx-lg-5 gy-5 flex flex-wrap -mx-4">
            {/* Left Column - Main Content */}
            <div className="col-lg-8 w-full lg:w-2/3 px-4">
              <div className="news-left">
                {/* Timeline Section */}
                <section className="py-4 bg-white rounded pb-6 mb-3">
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-10">
                        <div className="text-center mb-5">
                          <h3 className="display-7 fw-bold text-secondary-emphasis mb-3">
                            Event Timeline
                          </h3>
                          <div
                            className="bg-danger mx-auto mb-4"
                            style={{ width: "100px", height: "4px" }}
                          ></div>
                          <p className="text-muted lead">
                            Important dates and deadlines for the hackathon
                          </p>
                        </div>

                        <div className="row g-4">
                          <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                              <div className="card-body p-4 text-center">
                                <div
                                  className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                  style={{ width: "60px", height: "60px" }}
                                >
                                  <FaUserPlus className="text-white fs-4" />
                                </div>
                                <h6 className="card-title fw-bold text-primary">
                                  Registration Deadline
                                </h6>
                                <h5 className="text-danger fw-bold mb-2">
                                  15-08-2025
                                </h5>
                                <p className="card-text text-muted small">
                                  Last date to register your team for the
                                  hackathon. Don't miss out!
                                </p>
                              </div>
                              <div className="position-absolute top-0 end-0 bg-danger text-white px-2 py-1 rounded-bottom-start">
                                <small className="fw-bold">STEP 1</small>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                              <div className="card-body p-4 text-center">
                                <div
                                  className="bg-success rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                  style={{ width: "60px", height: "60px" }}
                                >
                                  <FaFileUpload className="text-white fs-4" />
                                </div>
                                <h6 className="card-title fw-bold text-success">
                                  Submission Deadline
                                </h6>
                                <h5 className="text-danger fw-bold mb-2">
                                  20-08-2025
                                </h5>
                                <p className="card-text text-muted small">
                                  Final date to submit your project proposal and
                                  documentation.
                                </p>
                              </div>
                              <div className="position-absolute top-0 end-0 bg-success text-white px-2 py-1 rounded-bottom-start">
                                <small className="fw-bold">STEP 2</small>
                              </div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                              <div className="card-body p-4 text-center">
                                <div
                                  className="bg-warning rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                                  style={{ width: "60px", height: "60px" }}
                                >
                                  <FaBullhorn className="text-white fs-4" />
                                </div>
                                <h6 className="card-title fw-bold text-warning">
                                  Results Announcement
                                </h6>
                                <h5 className="text-danger fw-bold mb-2">
                                  24-08-2025
                                </h5>
                                <p className="card-text text-muted small">
                                  Selected teams will be announced and notified
                                  via registered email.
                                </p>
                              </div>
                              <div className="position-absolute top-0 end-0 bg-warning text-white px-2 py-1 rounded-bottom-start">
                                <small className="fw-bold">FINAL</small>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                {/* Event Image Section - Replacing Quick Registration */}
                <div className="news-img mb-4 w-3/4 mx-auto">
                  <img
                    src="assets/images/group/1.jpg"
                    alt="event-image"
                    className="w-100 rounded"
                  />
                </div>

                {/* Event Guidelines Section */}
                <div className="mt-8">
                  <h4 className="news-description text-secondary-emphasis mb-4 fw-bold">
                    Event Guidelines
                  </h4>
                  {guidelines.map((guideline, index) => (
                    <div
                      key={index}
                      className={`mb-4 transition-all ${
                        animationStarted ? "opacity-100" : "opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${index * 100}ms`,
                        transitionDuration: "300ms",
                      }}
                    >
                      <h5 className="h6 text-secondary-emphasis fw-semibold mb-3">
                        {guideline.title}
                      </h5>
                      <div className="text-muted lh-base mb-6">
                        {guideline.content
                          .split(". ")
                          .map((sentence, sentenceIndex) => {
                            const trimmedSentence = sentence.trim();
                            if (trimmedSentence) {
                              return (
                                <div
                                  key={sentenceIndex}
                                  className="d-flex align-items-start mb-2"
                                >
                                  <span className="me-3 mt-1 flex-shrink-0">
                                    •
                                  </span>
                                  <span>
                                    {trimmedSentence}
                                    {sentenceIndex <
                                      guideline.content.split(". ").length -
                                        1 && !trimmedSentence.endsWith(".")
                                      ? "."
                                      : ""}
                                  </span>
                                </div>
                              );
                            }
                            return null;
                          })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="col-lg-4 w-full lg:w-1/3 px-4">
              <div className="news-right space-y-6">
                {/* QR Code Booking Section - Replacing About Organizer */}
                <div className="about-organizer p-6 box-shadow rounded text-center mb-6 bg-white shadow-lg">
                  <div className="organizer-title mb-3">
                    <h6 className="text-lg md:text-xl font-semibold text-blue-900">
                      Scan QR For Registration
                    </h6>
                  </div>
                  <div className="sperator mb-6 w-20 border-bottom border-2 border-pink mx-auto h-1 bg-pink-500"></div>

                  {/* QR Code Image */}
                  <div className="qr-code-image mb-4">
                    <img
                      src="/assets/images/qr-code.png"
                      alt="qr-code"
                      className="mx-auto object-cover rounded-lg shadow-md w-[200px] sm:w-[180px] md:w-[180px] lg:w-full"
                    />
                  </div>

                  {/* OR Text */}
                  <div className="text-center mb-7">
                    <span className="text-gray-600 font-medium text-lg">
                      OR
                    </span>
                  </div>

                  {/* <div className="mb-7 border-bottom border-2 border-grey border-opacity-25 border-bottom-dashed"></div> */}

                  {/* Book Ticket Link */}
                  <div className="mb-2">
                    <a
                      href="https://forms.gle/pzrCueqY2cRBj8AP6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-blue rounded inline-block text-white px-6 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now
                    </a>
                  </div>
                </div>

                {/* Prizes Section*/}
                {/* <div className="prizes p-6 pb-1 mb-6 rounded box-shadow shadow-lg bg-white">
                  <h6 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">
                    Winning Prizes
                  </h6>
                  <div className="w-20 h-1 bg-pink-500 mb-4"></div>
                  {prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="py-1 border-b border-gray-200 border-dashed"
                    >
                      <div className="flex items-center">
                        <div className="relative w-6 h-6 mr-2 text-yellow-500">
                        <FaMedal className="w-full h-full" />
                        <span className="flex justify-center items-center text-xs font-bold text-black">
                          {index + 1}
                        </span>{" "}
                        </div>
                        <span className="font-semibold text-pink-500">
                          {prize.title}:
                        </span>{" "}
                        {prize.amount}
                      </div>
                    </div>
                  ))}
                </div> */}
                {/* Prizes Section*/}
                <div className="prizes p-4 mb-4 rounded shadow bg-white">
                  <h6 className="h5 fw-semibold text-primary mb-3">
                    Winning Prizes
                  </h6>
                  <div
                    className="bg-danger mb-4"
                    style={{ width: "80px", height: "4px" }}
                  ></div>
                  {prizes.map((prize, index) => (
                    <div
                      key={index}
                      className="mb-3 p-3 border rounded-3 position-relative overflow-hidden"
                      style={{
                        background:
                          index === 0
                            ? "linear-gradient(135deg, #ffd700, #ffed4e)"
                            : index === 1
                            ? "linear-gradient(135deg, #c0c0c0, #e8e8e8)"
                            : "linear-gradient(135deg, #cd7f32, #daa520)",
                        border:
                          "2px solid " +
                          (index === 0
                            ? "#ffd700"
                            : index === 1
                            ? "#c0c0c0"
                            : "#cd7f32"),
                      }}
                    >
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <div className="me-3 position-relative">
                            <FaMedal
                              className="fs-2"
                              style={{
                                color:
                                  index === 0
                                    ? "#b8860b"
                                    : index === 1
                                    ? "#708090"
                                    : "#8b4513",
                              }}
                            />
                            <span
                              className="position-absolute top-50 start-50 translate-middle fw-bold text-white"
                              style={{ fontSize: "12px" }}
                            >
                              {index + 1}
                            </span>
                          </div>
                          <div>
                            <h6 className="mb-0 fw-bold text-dark">
                              {prize.title}
                            </h6>
                            <small className="text-muted">Winner</small>
                          </div>
                        </div>
                        <div className="text-end">
                          <h4 className="mb-0 fw-bold text-success">
                            {prize.amount}
                          </h4>
                          <small className="text-muted">Prize Money</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Categories */}
                {/* <div className="catagories p-6 pb-1 mb-6 rounded box-shadow mb-2 shadow-lg bg-white">
                  <h6 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">
                    Event Categories
                  </h6>
                  <div className="w-20 h-1 bg-pink-500 mb-4"></div>
                  <ul className="space-y-3">
                    {[
                      "Coding Competition",
                      "Innovation Track",
                      "AI/ML Challenge",
                      "Web Development",
                      "Mobile App Dev",
                      "Blockchain Track",
                    ].map((category, index) => (
                      <li
                        key={index}
                        className="py-2 border-b border-gray-200 border-dashed"
                      >
                        <a
                          href="#"
                          className="text-black transition hover:text-pink-500"
                        >
                          {category}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div> */}

                {/* Event Organizer Section */}
                <div className="rounded-lg text-center p-6 pb-4 mt-3 rounded box-shadow shadow-lg bg-white">
                  <h6 className="font-semibold mb-3 text-black">
                    Contact Details
                  </h6>
                  <div className="sperator mb-4 md:mb-6 w-20 border-bottom border-2 border-pink mx-auto h-1 bg-pink-500"></div>
                  <p className="text-sm leading-relaxed text-black">
                    Dr. P. Saranraj
                    <br />
                    +91 9994146964
                    <br />
                    techinnovationfest@shctpt.edu
                  </p>
                  {/* Event Address */}
                  <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 md:p-6 pb-0 rounded-lg text-center mt-6">
                    <h6 className="font-semibold mb-3 text-black">
                      Event Address
                    </h6>
                    <div className="sperator mb-4 md:mb-6 w-20 border-bottom border-2 border-pink mx-auto h-1 bg-pink-500"></div>
                    <p className="text-sm leading-relaxed text-black">
                      Sacred Heart College
                      <br />
                      Tirupattur-635 601, Tirupattur District, Tamil Nadu,
                      India.
                    </p>
                  </div>
                </div>

                {/* Social Media Links */}
                {/* <div className="social-media-links pb-5">
                  <h6 className="text-lg md:text-xl font-semibold text-blue-900 mb-3">
                    Social Media
                  </h6>
                  <div className="w-20 h-1 bg-pink-500 mb-4"></div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      {
                        name: "Facebook",
                        icon: "facebook-official",
                        color: "bg-blue-600",
                      },
                      {
                        name: "Twitter",
                        icon: "twitter",
                        color: "bg-blue-400",
                      },
                      {
                        name: "WhatsApp",
                        icon: "whatsapp",
                        color: "bg-green-500",
                      },
                      {
                        name: "LinkedIn",
                        icon: "linkedin-square",
                        color: "bg-blue-700",
                      },
                    ].map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="rounded-lg p-3 text-sm text-black font-medium flex items-center hover:bg-gray-100 transition-colors duration-200"
                      >
                        <i className={`fa fa-${social.icon} mr-2`}></i>
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 text-white text-center py-8">
        <p className="text-gray-300">
          Ready to innovate? Join us for an unforgettable coding experience!
        </p>
      </footer> */}
    </div>
  );
};

export default GuideLine;
