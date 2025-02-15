import React from 'react';

function Gurudakshina() {
  const [selectedStream, setSelectedStream] = React.useState('');

  const streamTeachers = {
    engineering: [
      { id: 1, name: 'Dr. Sharma', subject: 'Computer Science', image: 'https://images.pexels.com/photos/4342401/pexels-photo-4342401.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 2, name: 'Prof. Patel', subject: 'Electronics', image: 'https://images.pexels.com/photos/8197557/pexels-photo-8197557.jpeg?auto=compress&cs=tinysrgb&w=600' },
      { id: 3, name: 'Dr. Verma', subject: 'Mechanical', image: 'https://images.pexels.com/photos/7092337/pexels-photo-7092337.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ],
    commerce: [
      { id: 4, name: 'Prof. Desai', subject: 'Accounting', image: 'https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 5, name: 'Dr. Shah', subject: 'Economics', image: 'https://images.pexels.com/photos/734168/pexels-photo-734168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 6, name: 'Prof. Mehta', subject: 'Business Studies', image: 'https://images.pexels.com/photos/935943/pexels-photo-935943.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ],
    arts: [
      { id: 7, name: 'Dr. Kumar', subject: 'Literature', image: 'https://images.pexels.com/photos/5905444/pexels-photo-5905444.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 8, name: 'Prof. Singh', subject: 'History', image: 'https://images.pexels.com/photos/3184642/pexels-photo-3184642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
      { id: 9, name: 'Dr. Gupta', subject: 'Psychology', image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    ],
  };

  const handleDonation = (teacherId, teacherName) => {
    alert(`Processing donation for ${teacherName}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-20 mb-12">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">GURUDAKSHINA PORTAL</h1>

        {/* Dropdown */}
        <div className="max-w-xs mx-auto mb-6">
          <select
            className="w-full p-2 border border-gray-300 rounded-md"
            value={selectedStream}
            onChange={(e) => setSelectedStream(e.target.value)}
          >
            <option value="" disabled>
              Select your stream
            </option>
            <option value="engineering">Engineering</option>
            <option value="commerce">Commerce</option>
            <option value="arts">Arts</option>
          </select>
        </div>

        {/* Teachers List */}
        {selectedStream && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {streamTeachers[selectedStream].map((teacher) => (
              <div key={teacher.id} className="bg-gray-50 shadow rounded-lg overflow-hidden">
                <div className="p-4 space-y-4 text-center">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="w-24 h-24 rounded-full mx-auto"
                  />
                  <h3 className="text-lg font-semibold">{teacher.name}</h3>
                  <p className="text-gray-600">{teacher.subject}</p>
                  <button
                    onClick={() => handleDonation(teacher.id, teacher.name)}
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
                  >
                    Donate
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Gurudakshina;
