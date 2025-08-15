import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import Pagehelmet from "../Components/Pagehelmet";
import SponsersSection from "../Components/SponsersSection";

function Sponsers() {
  return (
    <div>
      <Pagehelmet pageTitle="Our Sponsers" />
      <Breadcrumb title="Our Sponsers" />
      <SponsersSection />
    </div>
  );
}

export default Sponsers;
