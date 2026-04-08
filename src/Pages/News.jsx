import React, { useState } from 'react';

function News() {
  const [newsList, setNewsList] = useState([]);
  const [newNews, setNewNews] = useState({ category: '', title: '', description: '', date: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isSelectMode, setIsSelectMode] = useState(false);
  const [selectedNews, setSelectedNews] = useState([]);

  const openModal = (edit = false) => {
    setIsModalOpen(true);
    setIsEditMode(edit);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
    setNewNews({ category: '', title: '', description: '', date: '' });
    setIsEditMode(false);
  };
  
  const handleChange = (e) => {
    setNewNews({ ...newNews, [e.target.name]: e.target.value });
  };
  
  const handleAddNews = () => {
    if (newNews.category && newNews.title && newNews.description && newNews.date) {
      if (isEditMode) {
        setNewsList(newsList.map(news => news.id === selectedNews[0] ? { ...newNews, id: news.id } : news));
      } else {
        setNewsList([...newsList, { ...newNews, id: Date.now() }]);
      }
      closeModal();
    } else {
      alert("Please fill all fields before adding.");
    }
  };
  
  const toggleSelectMode = () => {
    if (!isSelectMode && newsList.length === 0) {
      alert("No news available! Please add news first.");
      return;
    }
    setIsSelectMode(!isSelectMode);
    setSelectedNews([]);
  };
  
  const handleSelect = (id) => {
    setSelectedNews((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };
  
  const handleDelete = () => {
    setNewsList(newsList.filter((news) => !selectedNews.includes(news.id)));
    setSelectedNews([]);
  };
  
  const handleEdit = () => {
    if (selectedNews.length === 1) {
      const newsToEdit = newsList.find(news => news.id === selectedNews[0]);
      setNewNews(newsToEdit);
      openModal(true);
    } else {
      alert("Please select exactly one news item to edit.");
    }
  };
  
  return (
    <>
      <main className="p-4 mt-16">
        <div className="relative mb-8">
          <img
            src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg"
            alt="Classroom"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent">
            <div className="absolute bottom-4 left-4 bg-white p-4 shadow-2xl shadow-blue-800 rounded-lg">
              <h2 className="text-4xl font-bold mb-2 text-blue-800">NEWS</h2>
              <p className="text-gray-700 text-2xl italic">Stay updated with the latest news and announcements.</p>
            </div>
          </div>
        </div>
      </main>

      <div className="p-6 bg-white min-h-screen">
        <h3 className="text-6xl font-bold  text-blue-700  underline mb-12 text-center ">NEWS LISTS</h3>
        <button onClick={() => openModal()} className="bg-blue-700 text-white px-8 py-2 rounded-3xl text-2xl font-semibold">
          Add
        </button>
        <button onClick={toggleSelectMode} className="bg-slate-500 ml-5 text-white px-5 py-2 rounded-3xl text-2xl font-semibold">
          {isSelectMode ? "Cancel Select" : "Select"}
        </button>

        {isSelectMode && (
          <div className="mt-4 flex gap-4">
            <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded-3xl font-semibold" disabled={selectedNews.length === 0}>Delete</button>
            <button onClick={handleEdit} className="bg-blue-500 text-white px-4 py-2 rounded-3xl text-lg  font-semibold" disabled={selectedNews.length !== 1}>Edit</button>
          </div>
        )}

        <div className="mt-6">
          {newsList.map((news) => (
            <div key={news.id} className="mb-4 p-4 bg-white shadow rounded-lg flex items-center">
              {isSelectMode && (
                <input
                  type="checkbox"
                  className="mr-4"
                  checked={selectedNews.includes(news.id)}
                  onChange={() => handleSelect(news.id)}
                />
              )}
              <div>
                <div className="text-sm text-gray-700">{news.category}</div>
                <div className="text-sm text-gray-500">{news.date}</div>
                <h2 className="text-2xl font-bold text-blue-700 mt-2">{news.title}</h2>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-106">
            <h3 className="text-xl font-bold mb-4">{isEditMode ? "Edit News" : "Add News"}</h3>
            <input type="text" name="category" placeholder="Category" value={newNews.category} onChange={handleChange} className="w-full p-3 mb-2 border rounded-3xl" />
            <input type="text" name="title" placeholder="Title" value={newNews.title} onChange={handleChange} className="w-full p-3 mb-2 border rounded-3xl" />
            <textarea name="description" placeholder="Description" value={newNews.description} onChange={handleChange} className="w-full p-3 mb-2 border rounded-3xl" rows={10} />
            <input type="date" name="date" value={newNews.date} onChange={handleChange} className="w-30 p-3 mb-8 border rounded-3xl" />
            <div className="flex justify-end gap-2">
              <button onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded-3xl">Cancel</button>
              <button onClick={handleAddNews} className="bg-blue-700 text-white px-4 py-2 rounded-3xl">{isEditMode ? "Update" : "Save"}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default News;
