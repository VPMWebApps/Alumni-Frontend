import React from 'react'

function Companieslist() {
    const companies = [
    {
        id: 1,
        name: 'Tata Consultancy Services',
        location: 'Nariman Point',
        industry: 'Information Technology',
        description: 'Leading IT services and consulting company',
        logo: 'https://imgs.search.brave.com/tzarYYIIzXhUojmdi5iPvEsVSE0U1oXMS_JTUzUf25o/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80NS00/NTg3NDFfdHJhbnNw/YXJlbnQtdGNzLWxv/Z28tcG5nLXRhdGEt/Y29uc3VsdGFuY3kt/c2VydmljZXMtbG9n/by5wbmc',
      },
      {
        id: 2,
        name: 'Reliance Industries',
        location: 'Bandra Kurla Complex',
        industry: 'Conglomerate',
        description: 'Major player in energy, retail, and telecommunications',
        logo: 'https://companieslogo.com/img/orig/RELIANCE.NS_BIG-fca2fa88.png?t=1720244493',
      },
      {
        id: 3,
        name: 'State Bank of India',
        location: 'Fort',
        industry: 'Banking',
        description: 'Largest public sector bank in India',
        logo: 'https://imgs.search.brave.com/8T9OxuKvmEJ9-IoTYNJZlbcNyy8CozOTVH2YunEiW0M/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MWZjMDAwNzNjZjBl/NzAwMDQyMjIwNjku/cG5n',
      },
      {
        id: 4,
        name: 'HDFC Bank',
        location: 'Lower Parel',
        industry: 'Banking & Finance',
        description: 'Leading private sector bank in India',
        logo: 'https://imgs.search.brave.com/mee6pTh1jFQl2GWR9f8qshSS-GWslw-qlcfPjIfPX-g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MjdiYWQ4YThkNjU5/ODE5YjExMDg1MDMu/cG5n',
      },
    ];
  return (
    <>
    <div className="w-full mx-auto p-6 mt-20">
      <div className="bg-white shadow rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-800">MAJOR COMPANIES IN MUMBAI</h1>
        <div className="grid grid-cols-1 gap-6">
          {companies.map((company) => (
            <div
              key={company.id}
              className="bg-gray-50 shadow-md rounded-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col md:flex-row gap-6">
                <img
                  src={company.logo}
                  alt={`${company.name} logo`}
                  className="w-32 h-32 object-contain mx-auto md:mx-0"
                />
                <div className="space-y-2">
                  <h2 className="text-2xl font-semibold">{company.name}</h2>
                  <p className="text-gray-600">
                    <strong>Location:</strong> {company.location}
                  </p>
                  <p className="text-gray-600">
                    <strong>Industry:</strong> {company.industry}
                  </p>
                  <p className="text-gray-700">{company.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default Companieslist