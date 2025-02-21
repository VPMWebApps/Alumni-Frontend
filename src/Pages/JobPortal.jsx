import React from "react";

function JobPortal() {
  const joblist = [
    { title: "Maths Teacher", salary: "3,60,000", experience: "3-5 Years" },
    { title: "Maths Teacher", salary: "3,60,000", experience: "3-5 Years" },
    { title: "Maths Teacher", salary: "3,60,000", experience: "3-5 Years" },
    { title: "Maths Teacher", salary: "3,60,000", experience: "3-5 Years" },
    { title: "Maths Teacher", salary: "3,60,000", experience: "3-5 Years" },
  ];

  return (
    <div className="bg-gray-50 py-12 mt-16">
      {/* Section Heading */}
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-800 underline underline-offset-8">
          Career Resources
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore opportunities and resources to advance your career.
        </p>
      </div> */}

      {/* Job Listings */}
      <div className="max-w-7xl mx-auto mb-12 px-10">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 underline underline-offset-8">
          Job Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Job Cards */}
          {joblist.map((list) => (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold">{list.title}</h3>
              <p className="mt-2 text-gray-600">VPM RZ SHAH COLLEGE</p>
              <div className="flex gap-2 mt-4 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                  />
                </svg>
                <p className="text-gray-600">{list.salary}</p>
              </div>
              <div className="flex mt-4 mb-4 gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>

                <p className="text-gray-600">
                  {list.experience} Experience
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

     

      {/* Success Stories */}
      {/* <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-8 mb-6 ">
          Alumni Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">
              "I found my dream job through the alumni portal. The resources
              were incredibly helpful!"
            </p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-gray-700">John Doe</h4>
              <p className="text-gray-500">Class of 2020</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default JobPortal;
