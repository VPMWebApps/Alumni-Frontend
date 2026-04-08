import React from 'react'



function Member() {
    const gallery=[
        {url:'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title:'Alper Kamu', role:'Ui Developer', about:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'},
        {url:'https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:'Alper Kamu', role:'Ui Developer', about:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'},
        {url:'https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:'Alper Kamu', role:'Ui Developer', about:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'},
        {url:'https://images.pexels.com/photos/5905444/pexels-photo-5905444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:'Alper Kamu', role:'Ui Developer', about:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'},
        {url:'https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:'Alper Kamu', role:'Ui Developer', about:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'},
        {url:'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',title:'Alper Kamu', role:'Ui Developer', about:'DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.'},
    ]
  return (
    <>
    <div className='container mx-auto mb-20 px-5'>
    <h1 className="text-6xl font-bold text-blue-700 text-center mb-8 underline underline-offset-8 ">
          ALUMNI MEMBER
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
          <div className='mt-4 mb-4 '>
          <h1 className='text-2xl font-semibold text-center text-blue-700'>{event.title}</h1>
          <p className='text-center'>{event.role}</p>
          <p className=''>{event.about}</p>
          </div>
        </div>
      ))}
    </div>
    </div>

    {/* testimonial */}
    <section className="text-gray-400 bg-blue-700 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-white mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p className="leading-relaxed text-lg text-white">'Knowledge Is Power, information is liberating and education is the premise of progress in every society and in every family'.</p>
      <span className="inline-block h-1 w-10 rounded bg-white mt-8 mb-6"></span>
      <h2 className="text-white font-medium title-font tracking-wider text-sm">Dr. Barkha Shamnani</h2>
      <p className="text-gray-500">(In-Charge Principal)</p>
    </div>
  </div>
</section>
    </>
  )
}

export default Member