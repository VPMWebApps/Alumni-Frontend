import React from "react";

function Member() {
  const gallery = [
    {
      url: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alper Kamu",
      role: "Ui Developer",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      url: "https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alper Kamu",
      role: "Ui Developer",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      url: "https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alper Kamu",
      role: "Ui Developer",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      url: "https://images.pexels.com/photos/5905444/pexels-photo-5905444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alper Kamu",
      role: "Ui Developer",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      url: "https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alper Kamu",
      role: "Ui Developer",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
    {
      url: "https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Alper Kamu",
      role: "Ui Developer",
      about:
        "DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.",
    },
  ];
  return (
    <>
      <div className="container mx-auto mb-20 px-5">
        <h1 className="text-6xl font-bold text-blue-700 text-center mb-8 underline underline-offset-8 ">
          MEMBERS
        </h1>
        {/* Image */}
        <div className="grid md:grid-cols-3 gap-4 mt-10 ">
          {gallery.map((event, index) => (
            <div key={index}>
              <img
                src={event.url}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg  " // Ensures the image fits within the specified size
              />
              <div className="mt-4 mb-4 ">
                <h1 className="text-2xl font-semibold text-center text-blue-700">
                  {event.title}
                </h1>
                <p className="text-center">{event.role}</p>
                <p className="">{event.about}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* footer */}
      <footer className="text-gray-600 bg-blue-700 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="ml-3 text-xl">VPM RZ SHAH COLLEGE</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2025
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a
              href="https://www.facebook.com/people/VPMS-R-Z-Shah-College-of-Arts-Science-and-Commerce/100093023985874/"
              target="_blank"
              className="text-white"
            >
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5 text-white"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z">
                  {" "}
                </path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/vpm.rz.shah.official/?igshid=12kqynist6tsl"
              target="_blank"
              className="ml-3 text-white"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a
              href="https://www.youtube.com/@vpmstudio7604"
              className="ml-3 text-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 71 71"
                fill="none"
               
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M56.5615 18.2428C58.8115 18.8504 60.58 20.6234 61.1778 22.8708C62.2654 26.9495 62.2654 35.4647 62.2654 35.4647C62.2654 35.4647 62.2654 43.98 61.1778 48.0586C60.5717 50.3144 58.8032 52.0873 56.5615 52.6866C52.4932 53.7771 36.1703 53.7771 36.1703 53.7771C36.1703 53.7771 19.8557 53.7771 15.7791 52.6866C13.5291 52.079 11.7606 50.306 11.1628 48.0586C10.0752 43.98 10.0752 35.4647 10.0752 35.4647C10.0752 35.4647 10.0752 26.9495 11.1628 22.8708C11.7689 20.615 13.5374 18.8421 15.7791 18.2428C19.8557 17.1523 36.1703 17.1523 36.1703 17.1523C36.1703 17.1523 52.4932 17.1523 56.5615 18.2428ZM44.5142 35.4647L30.9561 43.314V27.6154L44.5142 35.4647Z"
                  fill="white"
                />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Member;
