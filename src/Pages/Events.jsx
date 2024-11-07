import React from 'react'


function Events() {
        
    const Events = [
        {
          date: "05",
          day: "Mon",
          month: "Dec",
          title: "Fever Pitch",
          location: "Mulund",
          time: "4:00 PM",
        },
        {
          date: "05",
          day: "Mon",
          month: "Dec",
          title: "Fever Pitch",
          location: "Mulund",
          time: "4:00 PM",
        },
        {
          date: "05",
          day: "Mon",
          month: "Dec",
          title: "Fever Pitch",
          location: "Mulund",
          time: "4:00 PM",
        },
        {
          date: "05",
          day: "Mon",
          month: "Dec",
          title: "Fever Pitch",
          location: "Mulund",
          time: "4:00 PM",
        },
        {
          date: "05",
          day: "Mon",
          month: "Dec",
          title: "Fever Pitch",
          location: "Mulund",
          time: "4:00 PM",
        },
      ];

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
        <h2 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 text-blue-800">
          Events
        </h2>
        <p className="text-gray-700 text-lg md:text-2xl italic mb-2 md:mb-4">
          Keep connected to the VPM community and learn the latest updates
          about the University or your school or college.
        </p>
      </div>
    </div>
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

              {/* Event Info */}
              <div>
                <p className="text-lg font-semibold text-gray-800 mb-2">
                  {event.title}
                </p>
                {event.time && (
                  <p className="text-gray-600 flex items-center justify-center mb-2">
                    <span className="material-icons text-blue-600 mr-2">
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
                          d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    {event.time}
                  </p>
                )}
                <p className="text-gray-600 flex items-center justify-center">
                  <span className="material-icons text-blue-600 mr-2">
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
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>
                  </span>
                  {event.location}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </>
  )
}

export default Events