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
            title: "REGISTRATION & INAUGURATION",
            description:
              "Kickstart the celebration with a warm welcome, guest registration, and ceremonial lighting by our dignitaries.",
            time: "09:00 AM - 10:00 AM",
            location: "Kamarajar Arangam",
            backgroundColor: "bg-lightgrey",
          },
          // {
          //   id: 2,
          //   title: "KEYNOTE",
          //   description:
          //     "Dive into the transformative power of AI with an inspiring talk by a top AI thought leader from GWC DATA.AI.",
          //   time: "11:30 AM - 01:00 PM",
          //   location: "Kamarajar Arangam",
          //   speaker: {
          //     name: "Padmasri MAYILSAMY ANNADURAI",
          //     image:
          //       "https://ui-avatars.com/api/?name=MAYILSAMY+ANNADURAI&background=random&size=300",
          //   },
          //   backgroundColor: "bg-white border-lightgrey",
          // },
          {
            id: 2,
            title: "KEYNOTE SESSIONS",
            description:
              "Innovation in Indian Education & Space Science by industry leaders from VIT Group and former ISRO scientist.",
            time: "10:00 AM - 10:40 AM",
            location: "Main Auditorium",
            speaker: {
              name: "Dr. G. Viswanathan & Dr. Mylswamy Annadurai",
              image:
                "https://ui-avatars.com/api/?name=Dr+Viswanathan&background=random&size=300",
            },
            backgroundColor: "bg-white border-lightgrey",
          },
          // {
          //   id: 3,
          //   title: "START UP PITCH",
          //   time: "02:00 PM - 03:00 PM",
          //   location: "Pope Francis Hall",
          //   backgroundColor: "bg-lightgrey",
          // },
          {
            id: 3,
            title: "PANEL DISCUSSION",
            description:
              "The Next Wave: IT Industry Growth & Industry-Academia Collaboration moderated by global tech leaders.",
            time: "10:40 AM - 11:20 AM",
            location: "Main Auditorium",
            speaker: {
              name: "Dr. Bala M.S.",
              image:
                "https://ui-avatars.com/api/?name=Bala+MS&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          // {
          //   id: 4,
          //   title: "INNOVATION EXPO",
          //   time: "08.30 AM - 04.30 PM",
          //   location: "College Ground",
          //   backgroundColor: "bg-white border-lightgrey",
          // },
          {
            id: 4,
            title: "FIRESIDE CHAT",
            description:
              "The Entrepreneurial Mindset – Fail Fast, Learn Faster with young AI innovators and startup founders.",
            time: "11:20 AM - 12:00 PM",
            location: "Innovation Hall",
            backgroundColor: "bg-white border-lightgrey",
          },
          // {
          //   id: 5,
          //   title: "VALEDICTORY AND AWARDS",
          //   time: "05:00 PM",
          //   location: "Kamarajar Arangam",
          //   backgroundColor: " bg-lightgrey",
          // },
          {
            id: 5,
            title: "TRANSITION BREAK + NETWORKING COFFEE",
            time: "12:00 PM - 12.30 PM",
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 6,
            title: "PARALLEL SESSIONS",
            description:
              "Industry 5.0 Career Pathways, AI Workshop, Aerospace Innovation & Life Science Commercialization across multiple halls.",
            time: "12:30 PM - 02:00 PM",
            location: "Halls A, B, C & D",
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 7,
            title: "TECH EXPO & NETWORKING",
            description:
              "AI Startups, Innovation Booths, Alumni Connect Lounge & Faculty-Industry Roundtables with networking lunch.",
            time: "02:00 PM - 03:00 PM",
            location: "College Ground",
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 8,
            title: "RESEARCH & NEP 2020 DISCUSSION",
            description:
              "Panel on New Education Policy's impact on research and interdisciplinary education with policy advocates.",
            time: "03:00 PM - 03:40 PM",
            location: "Main Auditorium",
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 9,
            title: "FIRESIDE CHAT: LESSONS BEYOND THE LAB",
            description:
              "A conversation on turning research into real-world solutions. Learn how innovation, collaboration, and community relevance are key to meaningful scientific progress.",
            time: "03:40 PM - 04:20 PM",
            location: "Innovation Hall",
            speaker: {
              name: "Global STEM Leader",
              image:
                "https://ui-avatars.com/api/?name=Global+STEM+Leader&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 10,
            title: "CLOSING REMARKS",
            description:
              "Reflections on a day of ideas, energy, and inspiration. This session thanks all collaborators, revisits key insights, and invites continued engagement beyond the event.",
            time: "04:20 PM - 04:40 PM",
            location: "Main Auditorium",
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 11,
            title: "AWARDS & VALEDICTORY",
            description:
              "Best Innovation Awards, Hackathon Winners, Alumni Honors & Faculty Recognition with closing ceremony.",
            time: "04:40 PM - 06:00 PM",
            location: "Main Auditorium",
            backgroundColor: "bg-lightgrey",
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
                          {event.speaker && (
                            <div className="schedule-box-bio d-md-flex">
                              <div className="schedule-bio-image">
                                <img
                                  src={event.speaker.image}
                                  alt="team-image"
                                  className="me-2 rounded-circle"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                    objectFit: "cover",
                                  }}
                                />
                              </div>
                              <div className="schedule-bio-info">
                                <p className="mt-3 mb-0">
                                  <button
                                    onClick={() =>
                                      handleSpeakerClick(event.speaker.name)
                                    }
                                    className="pink bg-transparent border-0 p-0 text-decoration-none"
                                    style={{ cursor: "pointer" }}
                                  >
                                    {event.speaker.name}
                                  </button>
                                </p>
                                {/* <small>{event.speaker.role}</small> */}
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
