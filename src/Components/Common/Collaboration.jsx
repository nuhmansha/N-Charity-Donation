import React from 'react'

 function Collaboration() {
  return (
    <div className="mt-20 bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4 animate-fadeIn">
            Givest is The Non Profitable Organization
          </h2>
          <p className="mb-6 animate-fadeIn">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.
          </p>
          <p className="mb-8 animate-fadeIn">
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry orem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown.Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an
            unknown.
          </p>
          <div className="flex flex-col md:flex-row items-center animate-fadeIn">
            <p className="mr-4 mb-4 md:mb-0">Need your simple</p>
            <p className="mr-4">help for save children.</p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Donate Now
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 1"
            className="rounded-lg transition-transform duration-300 hover:scale-105 animate-fadeIn"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 2"
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 3"
            className="rounded-lg transition-transform duration-300 hover:scale-105"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="Image 4"
            className="rounded-lg transition-transform duration-300 hover:scale-105 animate-fadeIn"
          />
        </div>
      </div>
    </div>
  </div>
  )
}
export default Collaboration
