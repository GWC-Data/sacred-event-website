import React from "react";

const EventSchedules = () => {
  // JSON data for the schedules
  const schedulesData = {
    title: {
      subtitle: "OUR SCHEDULES",
      mainTitle: "SCIENCE & TECHNOLOGY INNOVATION FEST 2025",
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
            location: "Main Auditorium",
            speaker: {
              name: "Rev. Dr. John Xavier",
              role: "Principal, SHC Tirupattur",
              image: "https://ui-avatars.com/api/?name=John+Xavier&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          {
            id: 2,
            title: "KEYNOTE: FUTURE OF AI IN INDIA",
            description:
              "Dive into the transformative power of AI with an inspiring talk by a top AI thought leader from GWC DATA.AI.",
            time: "10:00 AM - 11:00 AM",
            location: "Innovation Hall",
            speaker: {
              name: "Dr. Meera Rajan",
              role: "Chief Data Scientist, GWC DATA.AI",
              image: "https://ui-avatars.com/api/?name=Meera+Rajan&background=random&size=300",
            },
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 3,
            title: "STUDENT INNOVATION EXPO",
            description:
              "Discover groundbreaking student-led projects in science, engineering, and technology. Network and get inspired!",
            time: "11:15 AM - 01:00 PM",
            location: "Tech Pavilion",
            speaker: {
              name: "Panel of Judges",
              role: "Industry & Academic Experts",
              image: "https://ui-avatars.com/api/?name=Panel+of+Judges&background=random&size=300",
            },
            backgroundColor: "bg-lightgrey",
          },
          // {
          //   id: 4,
          //   title: "LUNCH BREAK",
          //   description:
          //     "Enjoy a curated South Indian lunch and networking session with fellow attendees and guest speakers.",
          //   time: "01:00 PM - 02:00 PM",
          //   location: "Campus Cafeteria",
          //   speaker: {
          //     name: "—",
          //     role: "—",
          //     image: "",
          //   },
          //   backgroundColor: "bg-white border-lightgrey",
          // },
          {
            id: 5,
            title: "PANEL DISCUSSION: TECH FOR SOCIAL GOOD",
            description:
              "A diverse panel discusses how innovation is transforming education, environment, and society at large.",
            time: "02:00 PM - 03:00 PM",
            location: "Main Stage",
            speaker: {
              name: "Dr. Kiran Bedi & Panelists",
              role: "Guest of Honour & Former IPS",
              image: "https://ui-avatars.com/api/?name=Kiran+Bedi&background=random&size=300",
            },
            backgroundColor: "bg-white border-lightgrey",
          },
          {
            id: 6,
            title: "VALEDICTORY & AWARDS",
            description:
              "Conclude the fest by honoring outstanding innovations and contributors to the success of the Jubilee event.",
            time: "03:00 PM - 04:00 PM",
            location: "Main Auditorium",
            speaker: {
              name: "Fr. A. Maria Joseph",
              role: "Vice Principal, SHC",
              image: "https://ui-avatars.com/api/?name=Maria+Joseph&background=random&size=300",
            },
            backgroundColor: " bg-lightgrey",
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
                            <p className="mb-2">
                              <small>{event.description}</small>
                            </p>
                            <ul className="mb-2 p-0">
                              <li className="d-inline">
                                <i
                                  className="fa fa-clock-o pink me-2"
                                  aria-hidden="true"
                                ></i>
                                <small>{event.time}</small>
                              </li>
                              <li className="d-inline">
                                <i
                                  className="fa fa-thumb-tack pink mx-2"
                                  aria-hidden="true"
                                ></i>
                                <small>{event.location}</small>
                              </li>
                            </ul>
                          </div>

                          {/* Speaker Bio */}
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
                              <p className="mt-1 mb-0">
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
                              <small>{event.speaker.role}</small>
                            </div>
                          </div>
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
