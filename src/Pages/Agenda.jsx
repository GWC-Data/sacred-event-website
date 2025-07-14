import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import PageHelmet from "../Components/Pagehelmet";

function Agenda() {
  return (
    <div>
      <PageHelmet pageTitle="Agenda" />
      <Breadcrumb title="Agenda" />

      {/*--Speakers Section Start--*/}
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
                <div className="col-lg-4 d-flex">
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
    </div>
  );
}

export default Agenda;
