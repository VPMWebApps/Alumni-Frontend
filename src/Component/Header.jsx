import React from "react";
import Blog from "./Blog";
import Member from "./Member";
import vid1 from '../Assets/vid2.mp4'
import { useSelector } from "react-redux";
function Header() {
  
  const user = useSelector((state:RootState) => state.auth.user)

  return (
    <>
      {/* Main Content */}
      <main className="p-4 mt-16">
        {/* Hero Section */}
        <div className="relative mb-8">
        <video
      className="object-cover object-center w-full md:h-screen sm:"
      autoPlay
      loop
      muted
    >
      <source src={vid1} type="video/mp4" />
    </video>
          <div className="absolute bottom-4 left-4 bg-white p-4 shadow-md">
            <h2 className="font-bold mb-2">EXPLORE ALUMNI MEMBER</h2>
            <button className="bg-blue-600 text-black px-4 py-2 rounded hover:bg-blue-500">
              EXPLORE NOW
            </button>
          </div>
        </div>
      </main>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 mb-20">
  {/* Image Section */}
  <div className="flex justify-center">
    <img
      src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="About us image"
      className="w-full  object-cover rounded-lg"  // Ensures the image scales well
    />
  </div>

  {/* Text Section */}
  <div className="flex flex-col px-5">
    <p className="text-blue-600 text-3xl md:text-4xl font-bold mb-5 md:mb-10 text-center md:text-left">
      VPM Alumni
    </p>
    <p className="font-serif text-justify text-sm md:text-base">
    <span className="text-blue-700">VPM</span> has been committed to connect and create a dedicated and committed community of The <span className="text-blue-700">VPM - Alumni</span> to support the institution — in form of resources, donations and guest lecturers in its quest to become a premier Institution.
    </p>
  </div>
</div>

<Blog />
<Member />
    </>
  );
}
export default Header;
