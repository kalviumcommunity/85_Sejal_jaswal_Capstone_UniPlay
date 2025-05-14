import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="border rounded p-4 shadow bg-white">
      <h2 className="text-xl font-bold">{event.name}</h2>
      <p className="text-gray-600">Date: {event.date}</p>
      <p className="text-sm text-gray-500">{event.description}</p>
    </div>
  );
};

export default EventCard;
