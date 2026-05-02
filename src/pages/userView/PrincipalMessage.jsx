import React from "react";
import PrincipalImage from "../../assets/PrincipalImage.jpeg";

const PrincipalMessage = () => {
  return (
    <section className="bg-white py-16 px-5 sm:px-10 lg:px-24">
      {/* Title */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl font-serif text-[#142A5D] tracking-wide">
          Principal's Message
        </h1>
        <div className="w-16 h-[2px] bg-[#EBAB09] mx-auto mt-4"></div>
      </div>

      {/* Main Layout */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
        {/* Image Section */}
        <div className="w-full lg:w-[32%]">
          <img
            src={PrincipalImage}
            alt="Principal"
            className="w-full h-90 object-cover rounded-md"
          />

          <div className="mt-4 text-left">
            <p className="font-semibold text-[#142A5D] text-lg">
              Dr. Kavita Sharma
            </p>
            <p className="text-sm text-gray-500">(In-Charge Principal)</p>
            <p className="text-sm text-gray-500 mt-1">vpmdgcol@yahoo.co.in</p>
          </div>
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-[68%]">
          <p className="text-gray-700 leading-relaxed mb-5 text-[15.5px]">
            It is both an honour and a privilege to extend my warmest welcome to
            all students, esteemed parents, respected faculty members, and
            valued well-wishers as you acquaint yourselves with the
            distinguished legacy of VPM's R.Z. Shah College of Arts, Science and
            Commerce.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            I am deeply proud to lead an institution that stands as a beacon of
            academic excellence, personal enrichment, and community engagement.
            Guided by a visionary and selfless management, our college has
            consistently demonstrated an unwavering commitment to holistic
            development and meaningful growth.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            At VPMs R.Z. Shah College, we believe that education transcends the
            mere accumulation of knowledge. It is a transformative journey — one
            that cultivates critical thinking, nurtures ethical values, and
            equips individuals to navigate the complexities of an ever-evolving
            global landscape.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            Our dedicated faculty bring subject expertise along with a deep
            commitment to mentoring students. Beyond academics, we promote
            holistic development through cultural activities, sports,
            student-led clubs, and outreach initiatives such as NSS, CWDC, and
            Extension work.
          </p>

          <p className="text-gray-700 leading-relaxed mb-5">
            A committed, vibrant, and supportive management along with dedicated
            teachers and cooperative parents together create a truly
            student-centric institution. Through collaboration, we are confident
            in achieving greater milestones for our students.
          </p>

          <p className="text-gray-700 leading-relaxed">
            As we look ahead, we remain steadfast in our mission to nurture
            competent professionals, responsible citizens, and compassionate
            individuals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalMessage;
