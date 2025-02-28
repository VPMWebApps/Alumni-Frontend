import React, { useState } from 'react';

function Events() {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', location: '' });
  const [selectedEventIndex, setSelectedEventIndex] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [editEvent, setEditEvent] = useState({ title: '', date: '', time: '', location: '' });

  const formatTime = (time) => {
    const [hour, minute] = time.split(':');
    const hourInt = parseInt(hour, 10);
    const ampm = hourInt >= 12 ? 'PM' : 'AM';
    const formattedHour = hourInt % 12 || 12;
    return `${formattedHour}:${minute} ${ampm}`;
  };

  const handleAddEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location) {
      alert("Please fill in all fields before adding an event.");
      return;
    }

    setEvents([...events, { ...newEvent, time: formatTime(newEvent.time) }]);
    setNewEvent({ title: '', date: '', time: '', location: '' });
    setShowModal(false);
  };


  const handleEditEvent = () => {
    const updatedEvents = [...events];
    updatedEvents[selectedEventIndex] = { ...editEvent, time: formatTime(editEvent.time) };
    setEvents(updatedEvents);
    setEditModal(false);
    setSelectedEventIndex(null);
  };

  const handleDeleteEvent = () => {
    setEvents(events.filter((_, index) => index !== selectedEventIndex));
    setSelectedEventIndex(null);
  };

  return (
    <>
      <main className="p-4 mt-16">
        <div className="relative mb-8">
          <img
            src="https://blog.coupondunia.in/wp-content/uploads/2014/07/college-fest.jpg"
            alt="Classroom"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent">
            <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white p-4 md:p-6 shadow-2xl shadow-blue-800 rounded-lg max-w-full md:max-w-lg">
              <h2 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 text-blue-800">Events</h2>
              <p className="text-gray-700 text-lg md:text-2xl italic mb-2 md:mb-4">
                Keep connected to the VPM community and learn the latest updates about the University or your school or college.
              </p>
            </div>
          </div>
        </div>
      </main>

      <div className="mx-auto mb-20 text-center">
        <h1 className="text-6xl font-bold text-blue-700 mb-8 underline underline-offset-8">ALUMNI EVENTS</h1>
        <button
          className="bg-blue-700 text-white px-4 py-2 rounded-3xl shadow-md hover:bg-blue-900 transition"
          onClick={() => setShowModal(true)}
        >
          Add Event
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event, index) => {
          const dateObj = new Date(event.date);
          const day = dateObj.getDate();
          const month = dateObj.toLocaleString('default', { month: 'short' });
          const weekday = dateObj.toLocaleString('default', { weekday: 'long' });

          return (
            <div key={index} className={`bg-white p-4 rounded-lg shadow-md border-l-4 flex w-full max-w-2xl ${selectedEventIndex === index ? 'border-red-500' : 'border-blue-700'}`}>
              <div className="text-center bg-blue-700 text-white px-6 py-6 rounded-full">
                <span className="block text-5xl font-bold">{day}</span>
                <span className="block text-lg uppercase">{month}</span>
                <span className="block text-md">{weekday}</span>
              </div>
              <div className="ml-4 flex flex-col justify-center space-y-2">
                <h3 className="text-xl font-bold text-blue-700">{event.title}</h3>
                <p className="text-gray-600 flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="Time" className="w-5 h-5 mr-2" />
                  {event.time}
                </p>
                <p className="text-gray-600 flex items-center">
                  <img src="https://cdn-icons-png.flaticon.com/512/684/684908.png" alt="Location" className="w-5 h-5 mr-2" />
                  {event.location}
                </p>
                <button
                  className="mt-2 px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  onClick={() => setSelectedEventIndex(index)}
                >
                  Select
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selectedEventIndex !== null && (
        <div className="mt-6 text-center">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-md mx-2" onClick={() => {
            setEditEvent(events[selectedEventIndex]);
            setEditModal(true);
          }}>
            Edit Event
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md mx-2" onClick={handleDeleteEvent}>
            Delete Event
          </button>
          <button className="bg-gray-500 text-white px-4 py-2 rounded-md mx-2" onClick={() => setSelectedEventIndex(null)}>
            Cancel Selection
          </button>
        </div>
      )}

      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Add New Event</h2>
            <input type="text" placeholder="Event Title" className="w-full p-2 mb-2 border rounded-3xl" value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
            <input type="date" className="w-25 p-2 mb-2 border rounded-3xl" value={newEvent.date} onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })} />
            <input type="time" className="w-25 p-2 mb-2 border rounded-3xl" value={newEvent.time} onChange={(e) => setNewEvent({ ...newEvent, time: e.target.value })} />
            <input type="text" placeholder="Location" className="w-full p-2 mb-4 border rounded-3xl" value={newEvent.location} onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })} />
            <button className="bg-blue-700 text-white px-4 py-2 rounded-3xl w-30 mr-3" onClick={handleAddEvent}>Add</button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-3xl w-30 mt-2" onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}



      {editModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Edit Event</h2>
            <input
              type="text"
              placeholder="Event Title"
              className="w-full p-2 mb-2 border rounded-3xl"
              value={editEvent.title}
              onChange={(e) => setEditEvent({ ...editEvent, title: e.target.value })}
            />
            <input
              type="date"
              className="w-30 p-2 mb-2 border rounded-3xl"
              value={editEvent.date}
              onChange={(e) => setEditEvent({ ...editEvent, date: e.target.value })}
            />
            <input
              type="time"
              className="w-30 p-2 mb-2 border rounded-3xl"
              value={editEvent.time}
              onChange={(e) => setEditEvent({ ...editEvent, time: e.target.value })}
            />
            <input
              type="text"
              placeholder="Location"
              className="w-50 p-2 mb-4 border rounded-3xl"
              value={editEvent.location}
              onChange={(e) => setEditEvent({ ...editEvent, location: e.target.value })}
            />
            <button
              className="bg-blue-700 text-white px-4 py-2 rounded-3xl w-30 mr-3"
              onClick={handleEditEvent}
            >
              Save Changes
            </button>
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded-3xl w-30 mt-2"
              onClick={() => setEditModal(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

    </>
  );
}

export default Events;
