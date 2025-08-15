import React, { useState, useEffect, useRef } from "react";
import PageHelmet from "./Pagehelmet";
import Breadcrumb from "./Breadcrumb";
import { FaUserPlus, FaFileUpload, FaBullhorn, FaMedal } from "react-icons/fa";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";

// Set PDF.js worker source
GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  GlobalWorkerOptions.version || "3.11.174"
}/pdf.worker.min.js`;

const GuideLine = () => {
  const [pageWidth, setPageWidth] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [pageImage, setPageImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const canvasRef = useRef(null);
  const pageCache = useRef({});
  const renderTaskRef = useRef(null);

  useEffect(() => {
    const updatePageWidth = () => {
      const containerWidth =
        window.innerWidth > 800 ? 400 : window.innerWidth * 0.9;
      setPageWidth(containerWidth);
    };
    updatePageWidth();
    window.addEventListener("resize", updatePageWidth);
    return () => window.removeEventListener("resize", updatePageWidth);
  }, []);

  useEffect(() => {
    const loadPDF = async () => {
      try {
        const loadingTask = getDocument(
          `${process.env.PUBLIC_URL}/assets/pdf/file.pdf`
        );
        const pdfDoc = await loadingTask.promise;
        setPdf(pdfDoc);
        setTotalPages(pdfDoc.numPages);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    };

    loadPDF();
  }, []);

  useEffect(() => {
    if (pdf && canvasRef.current) {
      renderPage(pdf, currentPage);
    }
    return () => {
      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }
    };
  }, [pdf, currentPage]);

  const renderPage = async (pdfDoc, pageNum) => {
    if (pageCache.current[pageNum]) {
      setPageImage(pageCache.current[pageNum]);
      return;
    }

    try {
      const page = await pdfDoc.getPage(pageNum);
      const container = document.querySelector(".news-description");
      const containerWidth = container ? container.offsetWidth : pageWidth;
      const viewport = page.getViewport({ scale: 0.8 });
      const scale = containerWidth / viewport.width;
      const scaledViewport = page.getViewport({ scale });

      const canvas = canvasRef.current;
      if (!canvas) {
        console.error("Canvas element is not available");
        return;
      }
      const context = canvas.getContext("2d");
      canvas.width = scaledViewport.width;
      canvas.height = scaledViewport.height;

      const rotation = page.rotate;
      context.save();
      if (rotation === 180) {
        context.translate(canvas.width, canvas.height);
        context.rotate(Math.PI);
      } else if (rotation === 90) {
        context.translate(canvas.width, 0);
        context.rotate((90 * Math.PI) / 180);
        [canvas.width, canvas.height] = [canvas.height, canvas.width];
      } else if (rotation === 270) {
        context.translate(0, canvas.height);
        context.rotate((-90 * Math.PI) / 180);
        [canvas.width, canvas.height] = [canvas.height, canvas.width];
      }

      if (renderTaskRef.current) {
        renderTaskRef.current.cancel();
        renderTaskRef.current = null;
      }

      renderTaskRef.current = page.render({
        canvasContext: context,
        viewport: scaledViewport,
      });

      await renderTaskRef.current.promise;

      const imageData = canvas.toDataURL("image/png");
      pageCache.current[pageNum] = imageData;
      setPageImage(imageData);
      renderTaskRef.current = null;
      context.restore();
    } catch (error) {
      if (error.name === "RenderingCancelledException") {
        console.log("Render cancelled for page", pageNum);
      } else {
        console.error("Error rendering page:", error);
      }
    }
  };

  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  const handleNextPage = debounce(() => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }, 300);

  const handlePrevPage = debounce(() => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }, 300);

  const prizes = [
    { title: "First Place", amount: "₹1,00,000" },
    { title: "Second Place", amount: "₹75,000" },
    { title: "Third Place", amount: "₹50,000" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHelmet pageTitle="Guidelines" />
      <Breadcrumb title="Hackathon Guidelines" />
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="row gx-lg-5 gy-5 flex flex-wrap -mx-4">
            <div className="col-lg-8 w-full lg:w-2/3 px-4">
              <div className="news-left">
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
                          {[
                            [
                              "Registration Deadline",
                              "17-08-2025",
                              FaUserPlus,
                              "primary",
                              "STEP 1",
                            ],
                            [
                              "Submission Deadline",
                              "20-08-2025",
                              FaFileUpload,
                              "success",
                              "STEP 2",
                            ],
                            [
                              "Results Announcement",
                              "24-08-2025",
                              FaBullhorn,
                              "warning",
                              "FINAL",
                            ],
                          ].map(([title, date, Icon, color, step], idx) => (
                            <div key={idx} className="col-md-4">
                              <div className="card h-100 border-0 shadow-sm position-relative overflow-hidden">
                                <div className="card-body p-4 text-center">
                                  <div
                                    className={`bg-${color} rounded-circle d-inline-flex align-items-center justify-content-center mb-3`}
                                    style={{ width: "60px", height: "60px" }}
                                  >
                                    <Icon className="text-white fs-4" />
                                  </div>
                                  <h6
                                    className={`card-title fw-bold text-${color}`}
                                  >
                                    {title}
                                  </h6>
                                  <h5 className="text-danger fw-bold mb-2">
                                    {date}
                                  </h5>
                                  <p className="card-text text-muted small">
                                    {idx === 0
                                      ? "Last date to register your team for the hackathon. Don't miss out!"
                                      : idx === 1
                                      ? "Final date to submit your project proposal and documentation."
                                      : "Selected teams will be announced and notified via registered email."}
                                  </p>
                                </div>
                                <div
                                  className={`position-absolute top-0 end-0 bg-${color} text-white px-2 py-1 rounded-bottom-start`}
                                >
                                  <small className="fw-bold">{step}</small>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Event Image */}
                <div className="news-img mb-4 w-3/4 mx-auto">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/images/group/1.jpg`}
                    alt="event-image"
                    className="w-100 rounded"
                  />
                </div>

                {/* Guidelines + PDF Viewer */}
                <div className="mt-8">
                  <h4 className="news-description text-secondary-emphasis mb-4 fw-bold">
                    Event Guidelines
                  </h4>
                  <div className=" mt-6 bg-white p-6 rounded-lg shadow-lg">
                    <div className="flex justify-center">
                      <div className="w-full max-w-md">
                        {/* Hidden canvas for rendering */}
                        <canvas ref={canvasRef} style={{ display: "none" }} />
                        {pageImage ? (
                          <img
                            src={pageImage}
                            alt={`Page ${currentPage}`}
                            className="w-full h-auto rounded-lg shadow-md"
                            style={{ maxWidth: "100%", objectFit: "contain" }}
                          />
                        ) : (
                          <p className="text-center text-muted">
                            Loading PDF...
                          </p>
                        )}
                        <div
                          className="flex justify-between mt-4 "
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                          }}
                        >
                          <button
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                            className="btn   text-white px-2 py-1  disabled:bg-gray-300"
                          >
                            Previous
                          </button>
                          <span className="text-muted">
                            Page {currentPage} of {totalPages}
                          </span>
                          <button
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                            className=" btn  text-white px-2 py-1  disabled:bg-gray-300"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted text-center mt-4">
                      Navigate through the brochure to explore detailed event
                      guidelines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-lg-4 w-full lg:w-1/3 px-4">
              <div className="news-right space-y-6">
                {/* QR Code */}
                <div className="about-organizer p-6 box-shadow rounded text-center mb-6 bg-white shadow-lg">
                  <h6 className="text-lg md:text-xl font-semibold pb-2">
                    Scan QR For Registration
                  </h6>
                  <div className="sperator mb-5 w-20 border-bottom border-2 border-pink mx-auto h-1 bg-pink-500"></div>
                  <div className="qr-code-image mb-4">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/qr-code.png`}
                      alt="qr-code"
                      className="mx-auto object-cover rounded-lg shadow-md w-[200px] sm:w-[180px] md:w-[180px] lg:w-full"
                    />
                  </div>
                  <div className="text-center mb-5">
                    <span className="text-gray-600 font-medium text-lg">
                      OR
                    </span>
                  </div>
                  <div className="mb-2">
                    <a
                      href="https://forms.gle/pzrCueqY2cRBj8AP6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn bg-blue-500 rounded inline-block text-white px-6 py-3 rounded-lg font-semibold hover:bg-gradient-to-r hover:from-pink-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105"
                    >
                      Register Now
                    </a>
                  </div>
                </div>

                {/* Prizes */}
                <div className="prizes p-4 mb-4 rounded shadow bg-white">
                  <h6 className="text-lg md:text-xl font-semibold text-center pb-2">
                    Prizes
                  </h6>
                  <div className="sperator mb-6 w-20 border-bottom border-2 border-pink mx-auto h-1 bg-pink-500"></div>
                  {/* <h6 className="h5 fw-semibold text-primary mb-3">Prizes</h6>
                  <div
                    className="bg-danger mb-4"
                    style={{ width: "80px", height: "4px" }}
                  ></div> */}
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
                  <div className="text-center mt-4">
                    <p className="mb-2 text-muted small">Sponsored by</p>
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/Prabhu Precise.jpg`}
                      alt="Prabhu Precise Sponsor"
                      className="img-fluid"
                      style={{ maxHeight: "60px", objectFit: "contain" }}
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="catagories p-6 pb-1 mb-6 rounded box-shadow mb-2 shadow-lg bg-white">
                  <h6 className="font-semibold mb-3 text-black">Themes</h6>
                  <div className="sperator mb-4 md:mb-6 w-20 border-bottom border-2 border-pink h-1 bg-pink-500"></div>
                  <ul className="space-y-3">
                    {[
                      "Management",
                      "Agriculture",
                      "Technology",
                      "Industries",
                      "Social Problems",
                    ].map((category, index) => (
                      <li
                        key={index}
                        className="py-2 border-b border-gray-200 border-dashed"
                      >
                        <div className="text-black transition hover:text-pink-500">
                          {category}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Details */}
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
              </div>
            </div>
            {/* End Right Column */}
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuideLine;
