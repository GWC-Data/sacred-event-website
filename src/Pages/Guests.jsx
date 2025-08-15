import React from "react";
import ChiefGuestSection from "../Components/cheifGuests";
import PageHelmet from "../Components/Pagehelmet";
import Breadcrumb from "../Components/Breadcrumb";

const Guests = () => {
  return (
    <div>
      <PageHelmet pageTitle="Our Guests" />
      <Breadcrumb title="Our Guests" />
      <ChiefGuestSection />
    </div>
  );
};

export default Guests;
