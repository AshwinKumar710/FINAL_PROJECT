import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const events = [
    { id: 1, title: "Event 1", date: "2025-01-01" },
    { id: 2, title: "Event 2", date: "2025-02-01" },
  ];

  return (
    <div>
      <h2>Upcoming Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              {event.title} - {event.date}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;