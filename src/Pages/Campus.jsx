import React from 'react'

function Campus() {
  return (
   <>
   
   <div className="bg-gray-50 mt-16">
      {/* Hero Section */}
      <div className="relative">
  {/* Image */}
  <img 
    src='https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    className="w-full h-64 sm:h-80 md:h-screen object-cover"
    alt="Campus Life"
  />
  
  {/* Text Content */}
  <div className='absolute bottom-2 left-2 bg-white px-4 py-3 rounded-lg shadow-2xl shadow-blue-800 sm:bottom-5 sm:left-5 md:bottom-10 md:left-10'>
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-800">Explore Campus Life</h1>
    <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg">Experience the vibrant and dynamic life on our campus.</p>
  </div>
</div>


      {/* Highlights Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold  mb-6 text-blue-800 underline decoration-blue-800 ">Campus Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {/* Highlight Cards */}
          <div className="bg-white rounded-lg shadow-2xl hover:shadow-blue-800 p-6 text-center">
            <h3 className="text-xl font-semibold">Student Clubs & Activities</h3>
            <p className="mt-4 text-gray-600">Join a wide variety of student organizations and clubs to enrich your campus experience.</p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl hover:shadow-blue-800 p-6 text-center">
            <h3 className="text-xl font-semibold">Sports & Fitness</h3>
            <p className="mt-4 text-gray-600">Participate in intramural sports, fitness programs, and other athletic activities.</p>
          </div>
          <div className="bg-white rounded-lg shadow-2xl hover:shadow-blue-800 p-6 text-center">
            <h3 className="text-xl font-semibold">Cultural Events</h3>
            <p className="mt-4 text-gray-600">Attend diverse cultural events, festivals, and celebrations on campus.</p>
          </div>
        </div>
      </div>

      {/* Image Gallery Section */}
      

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 px-4 py-4">
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/5553108/pexels-photo-5553108.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/5247137/pexels-photo-5247137.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/8688582/pexels-photo-8688582.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/15686444/pexels-photo-15686444/free-photo-of-people-in-golf-course.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/8980778/pexels-photo-8980778.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/6147275/pexels-photo-6147275.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/3184644/pexels-photo-3184644.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/3808057/pexels-photo-3808057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""></img>
        </div>
    </div>
    <div class="grid gap-4">
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/3184163/pexels-photo-3184163.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1007066/pexels-photo-1007066.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
        <div>
            <img class="h-auto max-w-full rounded-lg" src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""></img>
        </div>
    </div>
</div>


      {/* Student Testimonials */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-blue-800 mb-6 underline decoration-blue-800 ">Student Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">"My experience at the campus has been incredible! The community is supportive, and the events are always fun."</p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-800">John Doe</h4>
              <p className="text-gray-500">Class of 2022</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">"From clubs to sports, there are so many ways to get involved and make lasting memories."</p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-800">Jane Smith</h4>
              <p className="text-gray-500">Class of 2021</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <p className="text-gray-600">"I loved the campus life and the many opportunities to connect with students and faculty."</p>
            <div className="mt-4">
              <h4 className="text-xl font-semibold text-blue-800">Alex Johnson</h4>
              <p className="text-gray-500">Class of 2023</p>
            </div>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default Campus