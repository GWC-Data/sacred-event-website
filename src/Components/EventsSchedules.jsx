import React from "react";

// const EventSchedules = () => {
//   // JSON data for the schedules
//   const schedulesData = {
//     title: {
//       subtitle: "OUR SCHEDULES",
//       mainTitle: "SCIENCE & TECHNOLOGY AI INNOVATION AI FEST 2025",
//       description:
//         "Explore a day of innovation, inspiration, and collaboration at Sacred Heart College’s Platinum Jubilee Celebration. Join visionaries, creators, and industry leaders shaping the future of science and technology.",
//     },
//     days: [
//       {
//         id: 1,
//         dayTitle: "EVENT DAY",
//         date: "SEPTEMBER 13, 2025",
//         venue: {
//           name: "Sacred Heart College",
//           address: "Tirupattur, Tamil Nadu, India",
//         },
//         events: [
//           {
//             id: 1,
//             title: "REGISTRATION & INAUGURATION",
//             description:
//               "Kickstart the celebration with a warm welcome, guest registration, and ceremonial lighting by our dignitaries.",
//             time: "09:00 AM - 10:00 AM",
//             location: "Main Auditorium",
//             speaker: {
//               name: "Rev. Dr. John Xavier",
//               role: "Principal, SHC Tirupattur",
//               image: "https://ui-avatars.com/api/?name=John+Xavier&background=random&size=300",
//             },
//             backgroundColor: "bg-lightgrey",
//           },
//           {
//             id: 2,
//             title: "KEYNOTE: FUTURE OF AI IN INDIA",
//             description:
//               "Dive into the transformative power of AI with an inspiring talk by a top AI thought leader from GWC DATA.AI.",
//             time: "10:00 AM - 11:00 AM",
//             location: "Innovation Hall",
//             speaker: {
//               name: "Dr. Meera Rajan",
//               role: "Chief Data Scientist, GWC DATA.AI",
//               image: "https://ui-avatars.com/api/?name=Meera+Rajan&background=random&size=300",
//             },
//             backgroundColor: "bg-white border-lightgrey",
//           },
//           {
//             id: 3,
//             title: "STUDENT INNOVATION EXPO",
//             description:
//               "Discover groundbreaking student-led projects in science, engineering, and technology. Network and get inspired!",
//             time: "11:15 AM - 01:00 PM",
//             location: "Tech Pavilion",
//             speaker: {
//               name: "Panel of Judges",
//               role: "Industry & Academic Experts",
//               image: "https://ui-avatars.com/api/?name=Panel+of+Judges&background=random&size=300",
//             },
//             backgroundColor: "bg-lightgrey",
//           },
//           // {
//           //   id: 4,
//           //   title: "LUNCH BREAK",
//           //   description:
//           //     "Enjoy a curated South Indian lunch and networking session with fellow attendees and guest speakers.",
//           //   time: "01:00 PM - 02:00 PM",
//           //   location: "Campus Cafeteria",
//           //   speaker: {
//           //     name: "—",
//           //     role: "—",
//           //     image: "",
//           //   },
//           //   backgroundColor: "bg-white border-lightgrey",
//           // },
//           {
//             id: 5,
//             title: "PANEL DISCUSSION: TECH FOR SOCIAL GOOD",
//             description:
//               "A diverse panel discusses how innovation is transforming education, environment, and society at large.",
//             time: "02:00 PM - 03:00 PM",
//             location: "Main Stage",
//             speaker: {
//               name: "Dr. Kiran Bedi & Panelists",
//               role: "Guest of Honour & Former IPS",
//               image: "https://ui-avatars.com/api/?name=Kiran+Bedi&background=random&size=300",
//             },
//             backgroundColor: "bg-white border-lightgrey",
//           },
//           {
//             id: 6,
//             title: "VALEDICTORY & AWARDS",
//             description:
//               "Conclude the fest by honoring outstanding innovations and contributors to the success of the Jubilee event.",
//             time: "03:00 PM - 04:00 PM",
//             location: "Main Auditorium",
//             speaker: {
//               name: "Fr. A. Maria Joseph",
//               role: "Vice Principal, SHC",
//               image: "https://ui-avatars.com/api/?name=Maria+Joseph&background=random&size=300",
//             },
//             backgroundColor: " bg-lightgrey",
//           },
//         ],
//         showMoreButton: false,
//       },
//     ],
//   };

//   const handleEventClick = (eventTitle) => {
//     // Handle navigation to event details
//     console.log(`Navigate to event: ${eventTitle}`);
//   };

//   const handleSpeakerClick = (speakerName) => {
//     // Handle navigation to speaker details
//     console.log(`Navigate to speaker: ${speakerName}`);
//   };

//   const handleViewMoreDetails = () => {
//     // Handle navigation to event lists
//     console.log("Navigate to event lists");
//   };

//   return (
//     <section className="schedules">
//       <div className="container">
//         <div className="schedule-inner">
//           {/* Schedule Title */}
//           <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
//             <p className="mb-1 pink">{schedulesData.title.subtitle}</p>
//             <h2 className="mb-1">
//               {schedulesData.title.mainTitle.split(" EVENT ")[0]}{" "}
//               <span className="pink">EVENT</span>{" "}
//               {schedulesData.title.mainTitle.split(" EVENT ")[1]}
//             </h2>
//             <p className="m-0">{schedulesData.title.description}</p>
//           </div>

//           {/* Schedule List */}
//           <div className="schedule-list-outer">
//             {schedulesData.days.map((day, dayIndex) => (
//               <div
//                 key={day.id}
//                 className={
//                   dayIndex === schedulesData.days.length - 1
//                     ? "schedule-title-bottom"
//                     : "schedule-list-top mb-7"
//                 }
//               >
//                 <div className="row align-items-center">
//                   {/* Day Information */}
//                   <div className="col-lg-3 col-md-4">
//                     <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
//                       <h4 className="pink mb-2">{day.dayTitle}</h4>
//                       <h6 className="mb-2">{day.date}</h6>
//                       <p>
//                         {day.venue.name}
//                         <br />
//                         {day.venue.address}
//                       </p>
//                     </div>
//                   </div>

//                   {/* Events List */}
//                   <div className="col-lg-9 col-md-8">
//                     <div className="schedule-list text-center text-sm-start">
//                       {day.events.map((event, eventIndex) => (
//                         <div
//                           key={event.id}
//                           className={`schedule-list-box ${
//                             event.backgroundColor
//                           } border border-white border-2 rounded px-6 py-4 ${
//                             eventIndex < day.events.length - 1
//                               ? "mb-5"
//                               : day.showMoreButton
//                               ? "mb-5"
//                               : ""
//                           }`}
//                         >
//                           {/* Event Title */}
//                           <div className="schedule-box-title">
//                             <h5 className="mb-2">
//                               <button
//                                 onClick={() => handleEventClick(event.title)}
//                                 className="black bg-transparent border-0 p-0 text-decoration-none"
//                                 style={{ cursor: "pointer" }}
//                               >
//                                 {event.title}
//                               </button>
//                             </h5>
//                           </div>

//                           {/* Event Info */}
//                           <div className="schedule-box-info">
//                             <p className="mb-2">
//                               <small>{event.description}</small>
//                             </p>
//                             <ul className="mb-2 p-0">
//                               <li className="d-inline">
//                                 <i
//                                   className="fa fa-clock-o pink me-2"
//                                   aria-hidden="true"
//                                 ></i>
//                                 <small>{event.time}</small>
//                               </li>
//                               <li className="d-inline">
//                                 <i
//                                   className="fa fa-thumb-tack pink mx-2"
//                                   aria-hidden="true"
//                                 ></i>
//                                 <small>{event.location}</small>
//                               </li>
//                             </ul>
//                           </div>

//                           {/* Speaker Bio */}
//                           <div className="schedule-box-bio d-md-flex">
//                             <div className="schedule-bio-image">
//                               <img
//                                 src={event.speaker.image}
//                                 alt="team-image"
//                                 className="me-2 rounded-circle"
//                                 style={{
//                                   width: "50px",
//                                   height: "50px",
//                                   objectFit: "cover",
//                                 }}
//                               />
//                             </div>
//                             <div className="schedule-bio-info">
//                               <p className="mt-1 mb-0">
//                                 <button
//                                   onClick={() =>
//                                     handleSpeakerClick(event.speaker.name)
//                                   }
//                                   className="pink bg-transparent border-0 p-0 text-decoration-none"
//                                   style={{ cursor: "pointer" }}
//                                 >
//                                   {event.speaker.name}
//                                 </button>
//                               </p>
//                               <small>{event.speaker.role}</small>
//                             </div>
//                           </div>
//                         </div>
//                       ))}

//                       {/* View More Button */}
//                       {day.showMoreButton && (
//                         <div className="partner-button mt-6">
//                           <button
//                             onClick={handleViewMoreDetails}
//                             className="btn"
//                           >
//                             VIEW MORE DETAILS
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
const EventSchedules = () => {
  // JSON data for the schedules
  const schedulesData = {
    title: {
      subtitle: "OUR SCHEDULES",
      mainTitle: "SCIENCE & TECHNOLOGY AI INNOVATION AI FEST 2025",
      description:
        "Explore a day of innovation, inspiration, and collaboration at Sacred Heart College’s Platinum Jubilee Celebration. Join visionaries, creators, and industry leaders shaping the future of science and technology.",
    },
    days: [
      {
        id: 1,
        dayTitle: "EVENT DAY",
        date: "SEPTEMBER 13, 2025",
        venue: {
          name: "Sacred Heart College",
          address: "Tirupattur, Tamil Nadu, India",
        },
        events: [
          {
            id: 1,
            title: "REGISTRATION",
            description:
              "Registration for school students, college students, and external participants by Annamalai Foundation and Sacred Heart College.",
            targetGroup:
              "School Students, College Students, and External Participants",
            time: "08:00 AM",
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 2,
            title: "BOOTH INAUGURATION",
            description:
              "Physics and Chemistry booth inauguration by Dr. V. G. Santhosam and Mr. Nalla Thambi, MLA.",
            targetGroup: "PHYSICS & CHEMISTRY",
            time: "08:30 AM - 09:00 AM",
            speakers: [
              {
                name: "DR. V. G. SANTHOSAM",
                image:
                  "https://ui-avatars.com/api/?name=Dr+V+G+Santhosam&background=random&size=300",
              },
              {
                name: "MR. NALLA THAMBI, MLA",
                image:
                  "https://ui-avatars.com/api/?name=Nalla+Thambi&background=random&size=300",
              },
            ],
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 3,
            title: "INAUGURATION",
            description:
              "Official inauguration ceremony by Dr. Mylswamy Annadurai, Dr. M. Krishnan, Dr. Bala M S & Principal, Faculty Members for Sacred Heart College students and guests from other colleges.",
            targetGroup:
              "SACRED HEART COLLEGE - SHIFT I & II (II UG + II PG), GUESTS, OTHER COLLEGES",
            time: "09:00 AM - 10:00 AM",
            speakers: [
              {
                name: "DR. MYLSWAMY ANNADURAI",
                image:
                  "https://ui-avatars.com/api/?name=Dr+Mylswamy+Annadurai&background=random&size=300",
              },
              {
                name: "DR. M. KRISHNAN",
                image:
                  "https://ui-avatars.com/api/?name=Dr+M+Krishnan&background=random&size=300",
              },
              {
                name: "DR. BALA M S",
                image:
                  "https://ui-avatars.com/api/?name=Dr+Bala+M+S&background=random&size=300",
              },
            ],
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 4,
            title: "KEYNOTE 1",
            description:
              "From Tradition to Transformation - The Role of Liberal Arts in the Age of Artificial Intelligence by Dr. M. Krishnan, VC, Central University (Govt. of India), Tiruvarur.",
            targetGroup:
              "SACRED HEART COLLEGE - SHIFT I & II (IIUG + II PG), GUESTS, OTHER COLLEGES",
            time: "10:00 AM - 10:20 AM",
            speaker: {
              name: "Dr. M. Krishnan",
              image:
                "https://ui-avatars.com/api/?name=Dr+M+Krishnan&background=random&size=300",
            },

            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 5,
            title: "KEYNOTE 2",
            description:
              "Space, Science & Youth: Moonshots of Tomorrow by Dr. Mylswamy Annadurai (Former ISRO Scientist - 'Moon Man of India') for Sacred Heart College students and guests from other colleges.",
            targetGroup:
              "SACRED HEART COLLEGE - SHIFT I & II(IIUG + II PG), GUESTS, OTHER COLLEGES",
            time: "10:20 AM - 10:40 AM",
            speakers: [
              {
                name: "Dr. Mylswamy Annadurai",
                image:
                  "https://ui-avatars.com/api/?name=Dr+Mylswamy+Annadurai&background=random&size=300",
              },
            ],
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 6,
            title: "KEYNOTE 3",
            description:
              "Innovation and entrepreneurship insights by Mr. Narasimman, Ex MP, RAASI Groups President, and India Solar Association leader.",
            targetGroup:
              "SACRED HEART COLLEGE - SHIFT I & II (IIUG + II PG), GUESTS, OTHER COLLEGES",
            time: "10:40 AM - 11:00 AM",
            speakers: [
              {
                name: "Mr. Narasimman, EX MP",
                image:
                  "https://ui-avatars.com/api/?name=Mr+Narasimman&background=random&size=300",
              },
            ],
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 7,
            title: "BREAK",
            time: "11:00 AM - 11:15 AM",
            targetGroup: "BREAK",
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 8,
            title:
              "THE NEXT WAVE IT INDUSTRY GROWTH & INDUSTRY ACADEMIA COLLABORATION",
            description:
              "Panel discussion on IT industry growth and academia collaboration with tech leaders, corporate innovators, and academic liaisons.",
            targetGroup:
              "Tech leaders, corporate innovators, academic liaisons, MCA(I), DS(III), CS(III UG),S-I&II BCA III MSc(CS), EXTERNAL 100)",
            time: "11:15 AM - 12:00 PM",
            speakers: [
              {
                name: "Dr. BALA M.S. (GCC Leader)",
                image:
                  "https://ui-avatars.com/api/?name=Dr+Bala+M+S&background=random&size=300",
              },
              {
                name: "S. Karmegam IAS",
                role: "Former Director, Collegiate Education",
                image:
                  "https://ui-avatars.com/api/?name=S+Karmegam+IAS&background=random&size=300",
              },
              {
                name: "Smt. Sulochana, COE",
                role: "Central University (Govt of India)",
                image:
                  "https://ui-avatars.com/api/?name=Smt+Sulochana&background=random&size=300",
              },
              {
                name: "Dr. Kurinji Vendhan",
                role: "Director, Tamil University, Tanjore",
                image:
                  "https://ui-avatars.com/api/?name=Dr+Kurinji+Vendhan&background=random&size=300",
              },
              {
                name: "Shri. Neelagaantan Govindasamy",
                role: "Academician, Consultant & Environmentalist (Former CIPET, Govt of India)",
                image:
                  "https://ui-avatars.com/api/?name=Shri+Neelagaantan&background=random&size=300",
              },
            ],
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 9,
            title: "ADDRESSING THE YOUNG",
            description:
              "Inspirational session for school students and alumni by Dr. Mylswamy Annadurai (Former ISRO Scientist - 'Moon Man of India').",
            targetGroup: "SCHOOL STUDENT'S ALUMNI",
            time: "12:00 PM - 01:00 PM",
            speaker: {
              name: "DR. MYLSWAMY ANNADURAI",
              role: "Former ISRO Scientist - 'Moon Man of India'",
              image:
                "https://ui-avatars.com/api/?name=Dr+Mylswamy+Annadurai&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 10,
            title: "LUNCH",
            time: "01:00 PM - 02:00 PM",
            targetGroup: "LUNCH",
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 11,
            title: "HAPPINESS AT WORKPLACE",
            description:
              "Session on workplace happiness and well-being for I and II years of Shift I students.",
            targetGroup: "I AND II YEARS OF SHIFT I",
            time: "02:00 PM - 02:30 PM",
            speaker: {
              name: "MR. MIKE MURALI",
              image:
                "https://ui-avatars.com/api/?name=Mr+Mike+Murali&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 12,
            title: "GOVT ADOPTING TECHNOLOGY",
            description:
              "Panel discussion on government technology adoption with moderator Mr. Mike Murali and distinguished government officials.",
            targetGroup: "I AND II YEARS OF SHIFT I",
            time: "02:30 PM - 03:00 PM",
            speakers: [
              {
                name: "MR. MIKE MURALI",
                image:
                  "https://ui-avatars.com/api/?name=Mr+Mike+Murali&background=random&size=300",
              },
              {
                name: "Hon. NALLTHAMBI, MLA",
                image:
                  "https://ui-avatars.com/api/?name=Nallthambi+MLA&background=random&size=300",
              },
              {
                name: "Tmt. K. Sivasoundaravalli, I.A.S",
                image:
                  "https://ui-avatars.com/api/?name=K+Sivasoundaravalli&background=random&size=300",
              },
              {
                name: "Tmt.V.Shyamala Devi, SP",
                image:
                  "https://ui-avatars.com/api/?name=V+Shyamala+Devi&background=random&size=300",
              },
              {
                name: "Mr. Naveen Kumar, CEO, GWC Data AI",
                image:
                  "https://ui-avatars.com/api/?name=Naveen+Kumar&background=random&size=300",
              },
            ],
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 13,
            title:
              "Aerospace Engineering: Designing for the Skies: How Aerospace Inspires Innovation",
            description:
              "Specialized session on aerospace engineering and innovation for Physics, Mathematics, and Chemistry students.",
            targetGroup:
              "PHYSICS (S I&II) + MATHEMATICS(III) AND CHEMISTRY(III)",
            time: "03:00 PM - 03:30 PM",
            speaker: {
              name: "Prof. R. R. Elangovan",
              role: "Ex-ISRO Scientist",
              image:
                "https://ui-avatars.com/api/?name=Prof+R+R+Elangovan&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 14,
            title: "PANEL",
            description:
              "Panel discussion with industry leaders and academic experts for I and II years of Shift I students.",
            targetGroup: "I AND II YEARS OF SHIFT I",
            time: "03:30 PM - 04:00 PM",
            speakers: [
              {
                name: "MR. BALA M S CEO",
                image:
                  "https://ui-avatars.com/api/?name=Mr+Bala+M+S&background=random&size=300",
              },
              {
                name: "MR. RAM, STARINFINITY",
                image:
                  "https://ui-avatars.com/api/?name=Mr+Ram&background=random&size=300",
              },
              {
                name: "MRS. GOMATHY PERIYATHIRUVEDI",
                image:
                  "https://ui-avatars.com/api/?name=Mrs+Gomathy&background=random&size=300",
              },
              {
                name: "MR. SRINIVAS GOPAL",
                image:
                  "https://ui-avatars.com/api/?name=Mr+Srinivas+Gopal&background=random&size=300",
              },
            ],
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 15,
            title: "GUEST SPEECH",
            description:
              "Special guest speech by Hon. Ma. Subramanian, Minister for Health & Family Welfare of Tamil Nadu for I and II years of Shift I students.",
            targetGroup: "I AND II YEARS OF SHIFT I",
            time: "04:00 PM - 04:30 PM",
            speaker: {
              name: "HON. MA. SUBRAMANIAN",
              role: "Minister for Health & Family Welfare of Tamil Nadu",
              image:
                "https://ui-avatars.com/api/?name=Hon+Ma+Subramanian&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 16,
            title: "VALEDICTION, Awards & Valedictory Ceremony",
            description:
              "Closing ceremony with awards and valedictory for dignitaries, special invitees and Sacred Heart College Shift 2 students.",
            targetGroup:
              "DIGNITARIES, SPECIAL INVITEES AND SACRED HEART COLLEGE SHIFT 2",
            time: "04:00 PM - 05:00 PM",
            backgroundColor: "bg-white border-lightgrey",
          },
        ],
        showMoreButton: false,
      },
    ],
  };

  const handleEventClick = (eventTitle) => {
    // Handle navigation to event details
    console.log(`Navigate to event: ${eventTitle}`);
  };

  const handleSpeakerClick = (speakerName) => {
    // Handle navigation to speaker details
    console.log(`Navigate to speaker: ${speakerName}`);
  };

  const handleViewMoreDetails = () => {
    // Handle navigation to event lists
    console.log("Navigate to event lists");
  };

  return (
    <section className="schedules">
      <div className="container">
        <div className="schedule-inner">
          {/* Schedule Title */}
          <div className="schedule-title text-center mb-6 w-lg-60 mx-auto">
            <p className="mb-1 pink">{schedulesData.title.subtitle}</p>
            <h2 className="mb-1">
              {schedulesData.title.mainTitle.split(" EVENT ")[0]}{" "}
              <span className="pink">EVENT</span>{" "}
              {schedulesData.title.mainTitle.split(" EVENT ")[1]}
            </h2>
            <p className="m-0">{schedulesData.title.description}</p>
          </div>

          {/* Schedule List */}
          <div className="schedule-list-outer">
            {schedulesData.days.map((day, dayIndex) => (
              <div
                key={day.id}
                className={
                  dayIndex === schedulesData.days.length - 1
                    ? "schedule-title-bottom"
                    : "schedule-list-top mb-7"
                }
              >
                <div className="row align-items-center">
                  {/* Day Information */}
                  <div className="col-lg-3 col-md-4">
                    <div className="schedule-day text-center text-sm-start py-6 position-relative ps-2 z-1">
                      <h4 className="pink mb-2">{day.dayTitle}</h4>
                      <h6 className="mb-2">{day.date}</h6>
                      <p>
                        {day.venue.name}
                        <br />
                        {day.venue.address}
                      </p>
                    </div>
                  </div>

                  {/* Events List */}
                  <div className="col-lg-9 col-md-8">
                    <div className="schedule-list text-center text-sm-start">
                      {day.events.map((event, eventIndex) => (
                        <div
                          key={event.id}
                          className={`schedule-list-box ${
                            event.backgroundColor
                          } border border-white border-2 rounded px-6 py-4 ${
                            eventIndex < day.events.length - 1
                              ? "mb-5"
                              : day.showMoreButton
                              ? "mb-5"
                              : ""
                          }`}
                        >
                          {/* Event Title */}
                          <div className="schedule-box-title">
                            <h5 className="mb-2">
                              <button
                                onClick={() => handleEventClick(event.title)}
                                className="black bg-transparent border-0 p-0 text-decoration-none"
                                style={{ cursor: "pointer" }}
                              >
                                {event.title}
                              </button>
                            </h5>
                          </div>

                          {/* Event Info */}
                          <div className="schedule-box-info">
                            {/* Event Description */}
                            {event.description && (
                              <p className="mb-2">
                                <small>{event.description}</small>
                              </p>
                            )}
                            {/* Target Group */}
                            {event.targetGroup && (
                              <p className="mb-2">
                                <small className="text-muted">
                                  {event.targetGroup}
                                </small>
                              </p>
                            )}
                            <ul className="mb-2 p-0">
                              <li className="d-inline">
                                <i
                                  className="fa fa-clock-o pink me-2"
                                  aria-hidden="true"
                                ></i>
                                <small>{event.time}</small>
                              </li>
                              {event.location && (
                                <li className="d-inline">
                                  <i
                                    className="fa fa-thumb-tack pink mx-2"
                                    aria-hidden="true"
                                  ></i>
                                  <small>{event.location}</small>
                                </li>
                              )}
                            </ul>
                          </div>

                          {/* Speaker Bio */}
                          {/* Speaker Bio - Updated to display speakers as comma-separated list */}
                          {(event.speaker || event.speakers) && (
                            <div className="schedule-box-bio">
                              <div className="schedule-bio-info">
                                <p className="mt-1 mb-0">
                                  {/* Handle single speaker */}
                                  {event.speaker && (
                                    <button
                                      className="pink bg-transparent border-0 p-0 text-decoration-none"
                                      style={{ cursor: "pointer" }}
                                    >
                                      {event.speaker.name}
                                    </button>
                                  )}

                                  {/* Handle multiple speakers */}
                                  {event.speakers &&
                                    event.speakers.map(
                                      (speaker, speakerIndex) => (
                                        <span key={speakerIndex}>
                                          <button
                                            className="pink bg-transparent border-0 p-0 text-decoration-none"
                                            style={{ cursor: "pointer" }}
                                          >
                                            {speaker.name}
                                          </button>
                                          {speakerIndex <
                                            event.speakers.length - 1 && ", "}
                                        </span>
                                      )
                                    )}
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      ))}

                      {/* View More Button */}
                      {day.showMoreButton && (
                        <div className="partner-button mt-6">
                          <button
                            onClick={handleViewMoreDetails}
                            className="btn"
                          >
                            VIEW MORE DETAILS
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedules;
