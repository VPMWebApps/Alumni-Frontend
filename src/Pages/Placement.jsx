import React, { useState } from 'react';

function Placement () {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [placements, setPlacements] = useState([
      {
        id: 1,
        referredByName: "Sarah Johnson",
        referredByCompany: "TechVision Inc.",
        spocName: "Michael Chen",
        spocDesignation: "Talent Acquisition Manager",
        spocEmail: "michael.chen@techvision.com",
        spocWhatsapp: "+1 (555) 123-4567",
        spocPhone: "+1 (555) 987-6543",
        createdAt: "2025-01-15"
      },
      {
        id: 2,
        referredByName: "Raj Patel",
        referredByCompany: "Innovative Solutions",
        spocName: "Anita Sharma",
        spocDesignation: "HR Director",
        spocEmail: "anita.s@innovativesol.com",
        spocWhatsapp: "+91 98765 43210",
        spocPhone: "+91 98765 43211",
        createdAt: "2025-02-03"
      },
      {
        id: 3,
        referredByName: "Carlos Mendez",
        referredByCompany: "Global Connects",
        spocName: "Elena Rodriguez",
        spocDesignation: "Recruitment Specialist",
        spocEmail: "e.rodriguez@globalconnects.net",
        spocWhatsapp: "+34 612 345 678",
        spocPhone: "+34 612 345 679",
        createdAt: "2025-01-28"
      }
    ]);
  
    const toggleForm = () => {
      setIsFormOpen(!isFormOpen);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      // Get form data
      const formData = new FormData(e.target);
      const newPlacement = {
        id: placements.length + 1,
        referredByName: formData.get('referredByName'),
        referredByCompany: formData.get('referredByCompany'),
        spocName: formData.get('spocName'),
        spocDesignation: formData.get('spocDesignation'),
        spocEmail: formData.get('spocEmail'),
        spocWhatsapp: formData.get('spocWhatsapp'),
        spocPhone: formData.get('spocPhone'),
        createdAt: new Date().toISOString().split('T')[0]
      };
      
      // Add new placement to list
      setPlacements([...placements, newPlacement]);
      
      // Show success message
      alert('Placement network details saved successfully!');
      
      // Close form
      toggleForm();
    };
  return (
    <>
    <div className="min-h-screen bg-gray-50 py-8 px-4 mt-20 mb-4">
      <div className="max-w-6xl mx-auto">
        {!isFormOpen ? (
          <div className="py-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-blue-700 underline underline-blue-700">PLACEMENT NETWORK</h1>
              <button
                onClick={toggleForm}
                className="px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-200 flex items-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                </svg>
                Add Network
              </button>
            </div>
            
            {/* Placement Network Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {placements.map((placement) => (
                <div key={placement.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-semibold text-blue-700">{placement.spocName}</h3>
                      <p className="text-sm text-blue-700">{placement.spocDesignation}</p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-gray-500 hover:text-blue-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                      </button>
                      <button className="text-gray-500 hover:text-red-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                      </svg>
                      <span className="text-sm text-gray-600">{placement.referredByCompany}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                      <span className="text-sm text-gray-600">Referred by: {placement.referredByName}</span>
                    </div>
                    <div className="flex items-center mb-3">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-sm text-gray-600">{placement.spocEmail}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span className="text-sm text-gray-600">{placement.spocPhone}</span>
                    </div>
                    <div className="mt-4 text-xs text-gray-400 text-right">Added: {placement.createdAt}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-bold text-gray-800">Add Placement Network</h1>
              <button
                onClick={toggleForm}
                className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-300 rounded-md"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              {/* Referral Information Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">Referral Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="referredByName" className="block text-sm font-medium text-gray-700 mb-1">
                      Referred By (Name)
                    </label>
                    <input
                      type="text"
                      id="referredByName"
                      name="referredByName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="referredByCompany" className="block text-sm font-medium text-gray-700 mb-1">
                      Referring Company
                    </label>
                    <input
                      type="text"
                      id="referredByCompany"
                      name="referredByCompany"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* SPOC Details Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">SPOC Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="spocName" className="block text-sm font-medium text-gray-700 mb-1">
                      SPOC Name
                    </label>
                    <input
                      type="text"
                      id="spocName"
                      name="spocName"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="spocDesignation" className="block text-sm font-medium text-gray-700 mb-1">
                      Designation
                    </label>
                    <input
                      type="text"
                      id="spocDesignation"
                      name="spocDesignation"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-700 mb-4 pb-2 border-b">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="spocEmail" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="spocEmail"
                      name="spocEmail"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="spocWhatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      id="spocWhatsapp"
                      name="spocWhatsapp"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="spocPhone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="spocPhone"
                      name="spocPhone"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={toggleForm}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  Save Network Details
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
         
    </>
  )
}

export default Placement