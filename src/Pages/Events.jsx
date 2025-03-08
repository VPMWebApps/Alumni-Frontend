import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { GetAuthReq, PostAuthReq } from "../Services/ApiService";
import toast from 'react-hot-toast';

function Events() {
  const [showForm, setShowForm] = useState(false);
  const token = useSelector((state) => state.accessToken.token); 
  const userRole = useSelector((state) => state.auth.user?.role); 
  // const userRole = "student"
  const [events, setEvents] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventDate: "",
    alumniWelcome: true,
  });

  // Fetch events from API
  const fetchEvent = async() => {
    console.log(userRole);
    try {
      const res = await GetAuthReq('/events/get-event', token);
      const data = res.data.events;
      setEvents(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchEvent();
  }, [token, userRole]);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!formData.title || !formData.description || !formData.eventDate) {
      alert("All fields are required!");
      return;
    }

    try {
      const res = await PostAuthReq('/events/create-event', formData, token); // Adjust endpoint if necessary
      toast.success("Event created successfully");
      setEvents([...events, res.data.event]); // Add new event to state
      setFormData({ title: "", description: "", eventDate: "", alumniWelcome: true });
      setShowForm(false);
    } catch (error) {
      toast.error("Failed to create event");
      console.log(error);
    }
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

      {/* Events Section */}
      <div className="mx-auto mb-20">
        <h1 className="text-6xl font-bold text-blue-700 text-center mb-8 underline underline-offset-8">
          ALUMNI EVENTS
        </h1>

        {/* Events List */}
        <div className="grid md:grid-cols-3 gap-6 mb-8 px-5">
          {events.map((event, index) => (
            <div key={index} className="border p-6 flex text-center shadow-2xl hover:shadow-blue-800 rounded-lg">
              <div className="mb-4">
                <p className="text-blue-600 text-5xl font-bold">{new Date(event.eventDate).getDate()}</p>
                <p className="text-blue-600">{new Date(event.eventDate).toLocaleString('en-US', { weekday: 'short' })}</p>
                <p className="text-gray-500">{new Date(event.eventDate).toLocaleString('en-US', { month: 'short' })}</p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">{event.title}</p>
                <p className="text-gray-600 mb-2">{event.description}</p>
                <p className="text-gray-600">{new Date(event.eventDate).toLocaleTimeString()}</p>
                <p className="text-gray-600">{event.alumniWelcome ? 'Alumni Welcome' : 'Alumni Not Welcome'}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally render the Add Event button if the role is 'admin' */}
        {userRole === 'admin' && (
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mx-4"
          >
            {showForm ? "Cancel" : "Add Event"}
          </button>
        )}

        {/* Event Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              className="w-full p-2 mb-2 border rounded"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Event Description"
              className="w-full p-2 mb-2 border rounded"
              value={formData.description}
              onChange={handleChange}
              required
            />
            <input
              type="datetime-local"
              name="eventDate"
              className="w-full p-2 mb-2 border rounded"
              value={formData.eventDate}
              onChange={handleChange}
              required
            />
            <label htmlFor="alumniWelcome" className="block text-sm font-medium text-gray-900">
              Alumni Welcome:
            </label>
            <select
              name="alumniWelcome"
              value={formData.alumniWelcome}
              onChange={handleChange}
              className="w-full p-2 mb-2 border rounded"
            >
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </select>
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
