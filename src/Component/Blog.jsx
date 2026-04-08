import React from "react";

function Blog() {
  // Events List
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
  // News

  const news = [
    {
      img: "https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "League of Her Own",
      text1: "from VPM",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://images.pexels.com/photos/8197557/pexels-photo-8197557.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "League of Her Own",
      text1: "from VPM",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "https://images.pexels.com/photos/7092337/pexels-photo-7092337.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "League of Her Own",
      text1: "from VPM",
      text2:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <>
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
        <div className="flex justify-center">
          <a href="/Events">
            <p className=" bg-blue-600 text-white py-2 px-6 rounded-lg  hover:bg-blue-700">
              View all Events
            </p>
          </a>
        </div>
      </div>

      {/* News */}
      <div className="container mx-auto mb-20">
        <h1 className="text-6xl font-bold text-blue-700 text-center underline underline-offset-8">
          STORIES
        </h1>
        <p className="text-xl text-gray-800 text-center mt-4">
          News, views, and perspectives from the VPM community.
        </p>

        <div className="grid md:grid-cols-3 mt-10 gap-4">
          {news.map((news, index) => (
            <div
              key={index}
              className="border p-6 flex text-center shadow-2xl hover:shadow-blue-800 rounded-lg flex-col"
            >
              <img
                src={news.img}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg  "
              ></img>
              
              <a href="/News">
                <h1 className="mt-4 text-3xl font-semibold hover:underline decoration-blue-700 underline-offset-8">
                  {news.title}
                </h1>
              </a>
             
              <p className="text-2xl italic">{news.text1}</p>
              <p className="mt-4 text-xl text-gray-700 text-justify">
                {news.text2}
              </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <a href="/News">
            <p className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
              Read More Stories
            </p>
          </a>
        </div>
      </div>
    </>
  );
}

export default Blog;
