import React from 'react'

function Alumni() {
    const spotlight = [
        {img:'https://randomuser.me/api/portraits/men/1.jpg', title:'John Doe', text:'CEO at TechCorp' ,text2:'Class of 2010', btn:"Connect on LinkedIn" },
        {img:'https://randomuser.me/api/portraits/men/1.jpg', title:'John Doe', text:'CEO at TechCorp' ,text2:'Class of 2010', btn:"Connect on LinkedIn" },
        {img:'https://randomuser.me/api/portraits/men/1.jpg', title:'John Doe', text:'CEO at TechCorp' ,text2:'Class of 2010', btn:"Connect on LinkedIn" },
    ]

    const mentors = [
      {
        name: "John Doe",
        position: "Senior Developer at TechCo",
        image: "https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=300",
        linkedin: "https://www.linkedin.com/in/johndoe", // Replace with actual profile link
      },
      {
        name: "Jane Smith",
        position: "Product Manager at StartUp",
        image: "https://images.pexels.com/photos/7092613/pexels-photo-7092613.jpeg?auto=compress&cs=tinysrgb&w=600",
        linkedin: "https://www.linkedin.com/in/janesmith", // Replace with actual profile link
      },
    ];
  return (
    <>
    <div className="max-w-7xl px-10 mt-36 mb-10 ">
        <h2 className="text-2xl font-semibold text-blue-800 underline underline-offset-8  mb-6">ALUMNI DIRECTORY</h2>

        {/* Search and Filter */}
        <div className="flex justify-between items-center mb-6">
          <input
            type="text"
            placeholder="Search by name..."
            className="px-4 py-2 border border-gray-300 rounded-md w-full md:w-1/3"
          />
          <div className="ml-4">
            <select className="px-4 py-2 border border-gray-300 rounded-md">
              <option value="">Filter by Department</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business">Business</option>
              <option value="Engineering">Engineering</option>
            </select>
          </div>
        </div>
        </div>

    <div className=' py-10  text-center'>
        {/* <h1 className='text-4xl font-semibold  text-blue-800 underline underline-offset-8'>Our Alumni</h1>
        <p className='mt-4 '>Meet our accomplished alumni from various fields.</p> */}
    </div>
    
    
    <div className='max-w-7xl px-10 mb-12'>
    <h1 className="text-2xl font-semibold text-blue-800 mb-6 underline underline-offset-8">ALUMNI SPOTLIGHT</h1>
    <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-8 '>

    {spotlight.map((event, index)=>(
        <div className='bg-white rounded-lg shadow-2xl hover:shadow-blue-800 p-6'>
            <img src={event.img} className="rounded-full w-32 h-32 mx-auto mb-4"></img>
            <h1 className="text-xl font-semibold">{event.title}</h1>
            <p className='mt-2 '>{event.text}</p>
            <p className='mt-2 '>{event.text2}</p>
            <a href='https://www.linkedin.com/login/in'><p className="mt-1 px-4 py-2 bg-blue-600 text-white rounded-md">{event.btn}</p></a>
        </div>
    ))}
    </div>
    </div>

       {/* Mentorship */}
       <div className="max-w-7xl mx-auto mb-12 px-10">
      <h2 className="text-2xl font-semibold text-blue-800 mb-6 underline underline-offset-8 text-center">
        FIND A MENTOR
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mentors.map((mentor, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
            <img
              src={mentor.image}
              alt={mentor.name}
              className="w-24 h-24 rounded-full object-cover object-center mb-4"
            />
            <h3 className="text-xl font-semibold">{mentor.name}</h3>
            <p className="mt-2 text-gray-600">{mentor.position}</p>
            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
              onClick={() => window.open(mentor.linkedin, "_blank")}
            >
              View LinkedIn
            </button>
          </div>
        ))}
      </div>
    </div>
            
    </>
  )
}

export default Alumni