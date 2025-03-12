export default function NewsEventsSection() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Campus Events & News</h2>
          <p className="mt-4 text-lg text-gray-600">Stay updated with the latest happenings around our campus.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* News Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-700 pl-4 transition duration-300 ease-in-out hover:bg-blue-50 hover:shadow-md p-3 rounded-r">
                <span className="text-sm text-gray-500">March 5, 2025</span>
                <h4 className="text-xl font-semibold text-gray-900 mt-1">New Research Center Opening</h4>
                <p className="text-gray-600 mt-2">The university is proud to announce the opening of our new Advanced Research Center focusing on sustainable technologies.</p>
              </div>
              <div className="border-l-4 border-blue-700 pl-4 transition duration-300 ease-in-out hover:bg-blue-50 hover:shadow-md p-3 rounded-r">
                <span className="text-sm text-gray-500">February 20, 2025</span>
                <h4 className="text-xl font-semibold text-gray-900 mt-1">Student Team Wins National Competition</h4>
                <p className="text-gray-600 mt-2">Our engineering students secured first place in the National Robotics Competition with their innovative design.</p>
              </div>
              <div className="border-l-4 border-blue-700 pl-4 transition duration-300 ease-in-out hover:bg-blue-50 hover:shadow-md p-3 rounded-r">
                <span className="text-sm text-gray-500">February 12, 2025</span>
                <h4 className="text-xl font-semibold text-gray-900 mt-1">New Scholarship Program Announced</h4>
                <p className="text-gray-600 mt-2">Applications are now open for our new merit-based scholarship program for incoming freshmen.</p>
              </div>
            </div>
          </div>

          {/* Events Column */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h3>
            <div className="space-y-6">
              <div className="flex transition duration-300 ease-in-out hover:shadow-lg p-2 rounded hover:bg-blue-50">
                <div className="bg-blue-700 text-white rounded-lg p-3 text-center w-16 h-16 flex flex-col justify-center hover:bg-blue-800 transition duration-300">
                  <span className="text-sm font-bold">MAR</span>
                  <span className="text-xl font-bold">15</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Spring Open House</h4>
                  <p className="text-gray-600 mt-1">9:00 AM - 3:00 PM | Main Campus</p>
                </div>
              </div>
              <div className="flex transition duration-300 ease-in-out hover:shadow-lg p-2 rounded hover:bg-blue-50">
                <div className="bg-blue-700 text-white rounded-lg p-3 text-center w-16 h-16 flex flex-col justify-center hover:bg-blue-800 transition duration-300">
                  <span className="text-sm font-bold">MAR</span>
                  <span className="text-xl font-bold">22</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">Alumni Networking Event</h4>
                  <p className="text-gray-600 mt-1">6:00 PM - 8:00 PM | Student Center</p>
                </div>
              </div>
              <div className="flex transition duration-300 ease-in-out hover:shadow-lg p-2 rounded hover:bg-blue-50">
                <div className="bg-blue-700 text-white rounded-lg p-3 text-center w-16 h-16 flex flex-col justify-center hover:bg-blue-800 transition duration-300">
                  <span className="text-sm font-bold">APR</span>
                  <span className="text-xl font-bold">05</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-xl font-semibold text-gray-900">International Cultural Festival</h4>
                  <p className="text-gray-600 mt-1">11:00 AM - 7:00 PM | Campus Quad</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}