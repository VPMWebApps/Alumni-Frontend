import { React, useState } from "react";
import JobApplicationForm from "./JobApplicationForm";
import jobs from "../Constants/alumnijob";

function Alumnijob() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchInput.toLowerCase()) ||
      job.location.toLowerCase().includes(searchInput.toLowerCase()) ||
      job.Company.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <>
      <div className="max-w-7xl mx-auto mt-32 mb-12 px-10">
        <h1 className="text-4xl font-bold text-blue-800 underline underline-offset-8 text-center">
          ALUMNI JOB BOARD
        </h1>

        {/* Search Bar */}
        <div className="container mx-auto mt-10">
          <form className="flex items-center max-w-lg mx-auto">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-gray-50 border border-black text-black text-sm rounded-lg block w-full ps-10 p-2.5 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Jobs..."
              />
              <button
                type="button"
                className="absolute inset-y-0 end-0 flex items-center pe-3"
              >
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 16 20"
                ></svg>
              </button>
            </div>
            <button
              type="button"
              className="inline-flex w-56 items-center gap-4 py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-800 rounded-lg border border-blue-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-800 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              POST A JOB
            </button>
          </form>
        </div>

        {/* Post Job Form */}
        {isOpen && (
          <form className="space-y-4 mt-4 p-4 border rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-4">
                  Job Title
                </label>
                <input
                  type="text"
                  placeholder="Enter job title"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-4">
                  Company Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Company name"
                  required
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-5">Categories</label>
              <button
                type="button"
                className="border border-black rounded-lg w-full h-12"
                onClick={() => setIsMenu(!isMenu)}
              >
                Select Categories
              </button>
              {isMenu && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full dark:bg-gray-700">
                  <ul className="py-4 px-4 text-sm text-gray-500 dark:text-gray-200">
                    <li>Software Engineering</li>
                    <li>Product Management</li>
                    <li>Design</li>
                    <li>Marketing</li>
                    <li>Sales</li>
                    <li>Finance</li>
                    <li>Healthcare</li>
                    <li>Education</li>
                    <li>Other</li>
                  </ul>
                </div>
              )}
            </div>
            <div>
              <label className="font-medium text-sm mb-5 block">Location</label>
              <input
                type="text"
                placeholder="City, State"
                required
                className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-800 mb-5"
              />
              <button 
                type="submit"
                className="bg-blue-800 text-white border rounded-lg w-full h-12"
              >
                Submit the job post
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Jobs List */}
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job, index) => (
          <div
            key={index}
            className="mb-10 border-b-4 rounded-lg border-blue-800"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:justify-between px-4 mt-4">
              <p className="text-2xl md:text-4xl font-semibold">{job.title}</p>
              <p className="text-gray-500 text-sm md:text-lg mt-2 md:mt-0">
                {job.location}
              </p>
            </div>

            {/* Company and Date Section */}
            <div className="px-4 flex flex-col md:flex-row md:justify-between mt-4">
              <p className="text-sm md:text-lg text-gray-500">{job.Company}</p>
            </div>

            <div className="px-4 flex justify-between items-center">
              <p className="text-gray-500 text-sm md:text-lg mt-2 md:mt-0">
                {job.date}
              </p>
              <button
                type="button"
                className="mt-4 bg-blue-800 text-white py-2 px-4 w-full md:w-56 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  setSelectedJob(job);
                  setShowApplicationForm(true);
                }}
              >
                Apply Now
              </button>
            </div>

            {/* Description Section */}
            <div className="px-4 mt-6 mb-6">
              <p className="text-base md:text-xl text-gray-700">
                {job.description}
              </p>
            </div>

            {/* Alumni Member */}
            <div className="px-4 mt-6 mb-6">
              <p className="text-sm md:text-base text-gray-500">{job.alumni}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-4xl font-semibold text-gray-500">
          No jobs found :(
        </p>
      )}

      {/* Job Application Form Modal */}
      {showApplicationForm && (
        <JobApplicationForm
          isOpen={showApplicationForm}
          onClose={() => setShowApplicationForm(false)}
          jobTitle={selectedJob?.title}
          company={selectedJob?.Company}
        />
      )}
    </>
  );
}

export default Alumnijob;