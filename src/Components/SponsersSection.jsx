const SponsersSection = () => {
  return (
    <>
      <section className="partners">
        <div className="container">
          <div className="partner-inner">
            <div className="partner-title text-center pb-6 w-lg-60 m-auto">
              <h2 className="mb-1">
                <span className="pink">Our</span> Sponsers
              </h2>
              <p className="m-0">
                We thank our sponsors for their generous support and commitment
                to making this event a success.
              </p>
            </div>
            <div className="partner-img pb-6">
              <div className="row row-cols-1 row-cols-lg-3 row-cols-md-4">
                {/* <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/Anna Found.jpg`}
                      style={{
                        width: "100px",
                        height: "100px",
                        objectFit: "contain",
                      }}
                      alt="Annamalai Foundation"
                    />
                  </div>
                </div> */}
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/gwc-data-dot-ai-logo.webp`}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      alt="GWC Data.AI"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/download.jpg`}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      alt="NoblQ"
                    />
                  </div>
                </div>
                <div className="col p-0 border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/VIT Logo.jpg`}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      alt="VIT Logo"
                    />
                  </div>
                </div>
                {/* <div className="col p-0 border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/logo.jpg`}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "contain",
                      }}
                      alt="Annamalai Trust"
                    />
                  </div>
                </div> */}
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/Jugl.jpg`}
                      style={{
                        width: "120px",
                        height: "120px",
                        objectFit: "contain",
                      }}
                      alt="jugl"
                    />
                  </div>
                </div>
                <div className="col p-0 border-end border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/Prabhu Precise.jpg`}
                      style={{
                        width: "150px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      alt="Precision"
                    />
                  </div>
                </div>
                <div className="col p-0 border-top border-sm-0">
                  <div className="p-2 partner-img-box text-center ">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/images/sponsers/Words Logo.jpg`}
                      style={{
                        width: "250px",
                        height: "150px",
                        objectFit: "contain",
                      }}
                      alt="ArogyaNow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SponsersSection;
