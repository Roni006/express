import React from 'react'

const Discovery = () => {
  return (
    <><div>
      {/* BG Image Section */}
      <div
        className="w-full h-[300px] bg-cover bg-center rounded-b-xl"
        style={{ backgroundImage: "url('https://source.unsplash.com/1600x900/?nature')" }}
      >
        <div className="w-full h-full bg-black/40 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white">
            Discovery
          </h1>
        </div>
      </div>
      <div className="container max-w-[1120px] mx-auto px-[15px]">
        <div className="min-h-screen w-full"> 

          {/* Services Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Services</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-bold">Service One</h3>
                <p className="text-gray-600 mt-2">
                  Basic short description about service.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-bold">Service Two</h3>
                <p className="text-gray-600 mt-2">
                  Basic short description about service.
                </p>
              </div>

              <div className="bg-white shadow-md rounded-lg p-4">
                <h3 className="text-lg font-bold">Service Three</h3>
                <p className="text-gray-600 mt-2">
                  Basic short description about service.
                </p>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Gallery</h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

              <img
                src="https://picsum.photos/id/1015/400/400"
                className="rounded-lg object-cover"
                alt="dummy 1"
              />

              <img
                src="https://picsum.photos/id/1025/400/400"
                className="rounded-lg object-cover"
                alt="dummy 2"
              />

              <img
                src="https://picsum.photos/id/1035/400/400"
                className="rounded-lg object-cover"
                alt="dummy 3"
              />

              <img
                src="https://picsum.photos/id/1045/400/400"
                className="rounded-lg object-cover"
                alt="dummy 4"
              />

              <img
                src="https://picsum.photos/id/1050/400/400"
                className="rounded-lg object-cover"
                alt="dummy 5"
              />

              <img
                src="https://picsum.photos/id/1060/400/400"
                className="rounded-lg object-cover"
                alt="dummy 6"
              />

              <img
                src="https://picsum.photos/id/1070/400/400"
                className="rounded-lg object-cover"
                alt="dummy 7"
              />

              <img
                src="https://picsum.photos/id/1080/400/400"
                className="rounded-lg object-cover"
                alt="dummy 8"
              />

            </div>
          </div>

        </div>
      </div>
    </div>
      

    </>

  )
}

export default Discovery