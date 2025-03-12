import Link from 'next/link';


export default function CampusMap() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">Campus Map</h1>
            <p className="text-xl">Find your way around University College</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                {/* This would be replaced with an actual map component or embedded map */}
                <div className="aspect-w-16 aspect-h-9 bg-gray-300 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-600 text-center px-4">
                      Interactive campus map would be displayed here.<br />
                      For implementation, consider using Leaflet, Google Maps API, or a custom SVG map.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h2 className="text-2xl font-semibold mb-4">Map Legend</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-blue-600 rounded mr-2"></div>
                    <span>Academic Buildings</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-600 rounded mr-2"></div>
                    <span>Residence Halls</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-yellow-600 rounded mr-2"></div>
                    <span>Dining Facilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-red-600 rounded mr-2"></div>
                    <span>Athletic Facilities</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-purple-600 rounded mr-2"></div>
                    <span>Administration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-600 rounded mr-2"></div>
                    <span>Parking</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Campus Landmarks</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium text-lg">Main Administration Building</h3>
                  <p className="text-gray-600">Located at the center of campus, houses administration offices and main reception.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">University Library</h3>
                  <p className="text-gray-600">Our six-story library with over 2 million volumes and study spaces.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Science Complex</h3>
                  <p className="text-gray-600">Houses science departments with state-of-the-art laboratories.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Student Center</h3>
                  <p className="text-gray-600">Includes dining, recreation facilities, and student organization offices.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Athletics Center</h3>
                  <p className="text-gray-600">Featuring gymnasium, pool, and fitness center.</p>
                </li>
              </ul>

              <div className="mt-6 pt-6 border-t border-gray-300">
                <h3 className="font-medium text-lg mb-2">Need Directions?</h3>
                <p className="mb-4">Visit the Welcome Center in the Main Administration Building or call our campus information line.</p>
                <Link href="#" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Download Printable Map
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Getting to Campus</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-2">By Car</h3>
                <p className="mb-2">From Highway 101: Take exit 25 and follow signs for University College. Visitor parking is available in Lots A and B.</p>
                <p>GPS Address: 123 University Avenue, College Town, CT 06520</p>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Public Transportation</h3>
                <p className="mb-2">Bus Routes 10, 15, and 22 stop at the main campus entrance.</p>
                <p>The College Town train station is a 10-minute walk from campus.</p>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-4">Accessibility</h2>
            <p className="mb-4">All campus buildings are wheelchair accessible. Accessible parking spaces are available in all parking lots.</p>
            <p>For specific accessibility information or to request assistance, please contact our Accessibility Services Office at (555) 123-4569.</p>
          </div>
        </div>
      </main>


    </div>
  );
}