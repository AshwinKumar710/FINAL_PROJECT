import React from "react";
import { useParams } from "react-router-dom";

const Eventdetails = () => {
  const { id } = useParams();


  return (
    <div>
      <h2>Event Details (ID: {id})</h2>
      <p>Details about the selected event.</p>
    </div>
  );
};

export default Eventdetails;