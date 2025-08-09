import React from "react";
import Breadcrumb from "../Components/Breadcrumb";
import PageHelmet from "../Components/Pagehelmet";
import EventSchedules from "../Components/EventsSchedules";

function Agenda() {
  return (
    <div>
      <PageHelmet pageTitle="OUR SCHEDULES" />
      <Breadcrumb title="OUR SCHEDULES" />
      <EventSchedules />
    </div>
  );
}

export default Agenda;
