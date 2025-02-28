import React, { useState } from "react";

function Events() {
  const [showForm, setShowForm] = useState(false);
  const [events, setEvents] = useState([
    {
      date: "05",
      day: "Mon",
      month: "Dec",
      title: "Fever Pitch",
      location: "Mulund",
      time: "4:00 PM",
    },
  ]);

  const [formData, setFormData] = useState({
    date: "",
    day: "",
    month: "",
    title: "",
    location: "",
    time: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.date || !formData.day || !formData.month || !formData.title || !formData.location || !formData.time) {
      alert("All fields are required!");
      return;
    }

    setEvents([...events, formData]); // Add new event
    setFormData({ date: "", day: "", month: "", title: "", location: "", time: "" }); // Reset form
    setShowForm(false); // Hide form after submission
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
        </div>
      </main>


    {/* News */}
    <div className="mx-auto mb-20">
        <h1 className="text-6xl font-bold text-blue-700 text-center mb-8 underline underline-offset-8">
          ALUMNI EVENTS
        </h1>

        {/* events list */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 px-5 ">
          {Events.map((event, index) => (
            <div
              key={index}
              className="border p-6 flex text-center shadow-2xl hover:shadow-blue-800 rounded-lg"
            >
              {/* Date Section */}
              <div className="mb-4">
                <p className="text-blue-600 text-5xl font-bold">{event.date}</p>
                <p className="text-blue-600">{event.day}</p>
                <p className="text-gray-500">{event.month}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">{event.title}</p>
                <p className="text-gray-600 flex items-center justify-center mb-2">{event.time}</p>
                <p className="text-gray-600 flex items-center justify-center">{event.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Form Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mx-4"
        >
          {showForm ? "Cancel" : "Add Event"}
        </button>

        {/* Event Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
            <input
              type="text"
              name="date"
              placeholder="Date (e.g., 05)"
              className="w-full p-2 mb-2 border rounded"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="day"
              placeholder="Day (e.g., Mon)"
              className="w-full p-2 mb-2 border rounded"
              value={formData.day}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="month"
              placeholder="Month (e.g., Dec)"
              className="w-full p-2 mb-2 border rounded"
              value={formData.month}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              className="w-full p-2 mb-2 border rounded"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              className="w-full p-2 mb-2 border rounded"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="time"
              placeholder="Time (e.g., 4:00 PM)"
              className="w-full p-2 mb-2 border rounded"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded w-full">
              Submit Event
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default Events;
