import React from "react";
import Blog from "./Blog";
import Member from "./Member";
import vid1 from '../Assets/vid2.mp4'

function Header() {
  

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
      </div>
      </main>

  {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-5 px-5 py-10 mb-20">

  <div className="flex justify-center">
    <img
      src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="About us image"
      className="w-full  object-cover rounded-lg"  
    />
  </div>


  <div className="flex flex-col px-5">
    <p className="text-blue-600 text-3xl md:text-4xl font-bold mb-5 md:mb-10 text-center md:text-left">
      VPM Alumni
    </p>
    <p className="font-serif text-justify text-sm md:text-base">
    <span className="text-blue-700">VPM</span> has been committed to connect and create a dedicated and committed community of The <span className="text-blue-700">VPM - Alumni</span> to support the institution — in form of resources, donations and guest lecturers in its quest to become a premier Institution.
    </p>
  </div>
</div> */}

<Blog />
<Member />
    </>
  );
}
export default Header;
