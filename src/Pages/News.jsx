import React, { useState } from "react";

function News() {
  const [showForm, setShowForm] = useState(false);
  const [blogs, setBlogs] = useState([
    {
      category: "CATEGORY",
      date: "12 Jun 2019",
      title: "Bitters hashtag waistcoat fashion axe chia unicorn",
      description:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.",
    },
    {
      category: "CATEGORY",
      date: "12 Jun 2019",
      title: "Meditation bushwick direct trade taxidermy shaman",
      description:
        "Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole.",
    },
  ]);

  const [formData, setFormData] = useState({
    category: "",
    date: "",
    title: "",
    description: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.category || !formData.date || !formData.title || !formData.description) {
      alert("All fields are required");
      return;
    }

    setBlogs([...blogs, formData]); // Add new event
    setFormData({ category: "", date: "", title: "", description: "" }); // Reset form
    setShowForm(false); // Hide form after submission
  };

  return (
    <>
      <main className="p-4 mt-16">
        {/* Hero Section */}
        <div className="relative mb-8">
          <img
            src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg"
            alt="Classroom"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
      </main>

      {/* News Section */}
      <div className="bg-white text-black p-10 min-h-screen">
        {blogs.map((blog, index) => (
          <div key={index} className="mb-10 border-b border-gray-700 pb-6">
            <div className="text-sm text-black mb-1">{blog.category}</div>
            <div className="text-sm text-black mb-3">{blog.date}</div>
            <h2 className="text-2xl font-bold text-blue-700 mb-3">{blog.title}</h2>
            <p className="mb-3">{blog.description}</p>
          </div>
        ))}

        {/* Toggle Form Button */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          {showForm ? "Cancel" : "Add News"}
        </button>

        {/* News Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded">
            <input
              type="text"
              name="category"
              placeholder="Category"
              className="w-full p-2 mb-2 border rounded"
              value={formData.category}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              className="w-full p-2 mb-2 border rounded"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="w-full p-2 mb-2 border rounded"
              value={formData.title}
              onChange={handleChange}
              required
            />
            <textarea
              name="description"
              placeholder="Description"
              className="w-full p-2 mb-2 border rounded"
              value={formData.description}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
}

export default News;
