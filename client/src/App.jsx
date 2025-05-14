import React from 'react';
import Navbar from './components/Navbar';
import EventList from './components/EventList';
import './App.css';

const mockEvents = [
  { _id: '1', name: 'Football Tournament', date: '2025-05-20', description: 'Inter-college football event.' },
  { _id: '2', name: 'Cricket League', date: '2025-05-25', description: 'University level cricket matches.' }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Upcoming Sports Events</h2>
        <EventList events={mockEvents} />
      </main>
    </div>
  );
}

export default App;
