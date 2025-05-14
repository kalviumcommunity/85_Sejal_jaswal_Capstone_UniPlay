import React from 'react';
import EventCard from './EventCard';

const EventList = ({ events }) => {
  return (
    <div className="grid gap-4 mt-4">
      {events.map(event => (
        <EventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default EventList;
