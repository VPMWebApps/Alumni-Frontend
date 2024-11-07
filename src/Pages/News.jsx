import React from 'react'

function News() {
    const blogs = [
        {
          category: 'CATEGORY',
          date: '12 Jun 2019',
          title: 'Bitters hashtag waistcoat fashion axe chia unicorn',
          description:
            'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
          link: '#',
        },
        {
          category: 'CATEGORY',
          date: '12 Jun 2019',
          title: 'Meditation bushwick direct trade taxidermy shaman',
          description:
            'Glossier echo park pug, church-key sartorial biodiesel vexillologist pop-up snackwave ramps cornhole. Marfa 3 wolf moon party messenger bag selfies, poke vaporware kombucha lumbersexual pork belly polaroid hoodie portland craft beer.',
          link: '#',
        },
      ];
  return (
    <>
      <main className="p-4 mt-16">
  {/* Hero Section */}
  <div className="relative mb-8">
    <img
      src="https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      alt="Classroom"
      className="w-full h-64 md:h-96 object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent">
      <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white p-4 md:p-6 shadow-2xl shadow-blue-800 rounded-lg max-w-full md:max-w-lg">
        <h2 className="text-3xl md:text-6xl font-bold mb-2 md:mb-4 text-blue-800">
          NEWS
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

    <div className="bg-white  text-black p-10 min-h-screen">
      {blogs.map((blog, index) => (
        <div key={index} className="mb-10 border-b border-gray-700 pb-6 ">
          <div className="text-sm text-black mb-1">
            {blog.category}
          </div>
          <div className="text-sm text-black mb-3">{blog.date}</div>
          <div>
          <h2 className="text-2xl font-bold text-blue-700 mb-3">
            {blog.title}
          </h2>
          <p className="mb-3">{blog.description}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  )
}

export default News