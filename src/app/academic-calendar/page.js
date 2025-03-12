export default function page() {
    return (
      <div className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Academic Calendar</h1>
              <p className="text-xl text-blue-700 max-w-2xl mx-auto">Important dates, deadlines, and events for the academic year.</p>
            </div>
            
            {/* Year Selector */}
            <div className="mb-12">
              <div className="bg-white rounded-xl shadow-lg p-6 flex flex-wrap items-center justify-between">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 sm:mb-0">2024-2025 Academic Year</h2>
                <div className="relative">
                  <select className="appearance-none bg-blue-50 border border-blue-200 text-blue-900 py-2 px-4 pr-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option>2024-2025</option>
                    <option>2023-2024</option>
                    <option>2022-2023</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-blue-700">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calendar Quick Nav */}
            <div className="mb-10">
              <div className="flex overflow-x-auto pb-2 gap-3">
                {["Fall Semester", "Winter Break", "Spring Semester", "Summer Sessions"].map((term, index) => (
                  <a 
                    key={index} 
                    href={`#${term.toLowerCase().replace(/\s+/g, '-')}`}
                    className="bg-white px-6 py-3 rounded-lg shadow-md border border-blue-100 hover:bg-blue-50 transition-colors font-medium text-blue-900 whitespace-nowrap"
                  >
                    {term}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Fall Semester */}
            <div id="fall-semester" className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Fall Semester 2024
                  </h2>
                </div>
                <div className="p-6">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider w-40">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider">Event</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { date: "August 25", event: "New Student Move-In Day" },
                          { date: "August 26-28", event: "New Student Orientation" },
                          { date: "August 29", event: "Returning Student Move-In Day" },
                          { date: "September 2", event: "Labor Day (No Classes)" },
                          { date: "September 3", event: "First Day of Classes" },
                          { date: "September 10", event: "Last Day to Add/Drop Classes" },
                          { date: "October 14-15", event: "Fall Break (No Classes)" },
                          { date: "October 25", event: "Midterm Grades Due" },
                          { date: "November 1", event: "Last Day to Withdraw from Classes" },
                          { date: "November 27-29", event: "Thanksgiving Break (No Classes)" },
                          { date: "December 13", event: "Last Day of Classes" },
                          { date: "December 16-20", event: "Final Examinations" },
                          { date: "December 23", event: "Fall Grades Due" }
                        ].map((item, index) => (
                          <tr key={index} className="hover:bg-blue-50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.date}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{item.event}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Winter Break */}
            <div id="winter-break" className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-500 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Winter Break 2024-2025
                  </h2>
                </div>
                <div className="p-6">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider w-40">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider">Event</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { date: "December 21", event: "Winter Break Begins" },
                          { date: "December 24-25", event: "Christmas Holiday (University Closed)" },
                          { date: "December 31-Jan 1", event: "New Year's Holiday (University Closed)" },
                          { date: "January 2", event: "University Offices Reopen" },
                          { date: "January 5", event: "Residence Halls Reopen" },
                          { date: "January 13", event: "Winter Break Ends" }
                        ].map((item, index) => (
                          <tr key={index} className="hover:bg-blue-50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.date}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{item.event}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Spring Semester */}
            <div id="spring-semester" className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-600 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Spring Semester 2025
                  </h2>
                </div>
                <div className="p-6">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider w-40">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider">Event</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { date: "January 14", event: "First Day of Classes" },
                          { date: "January 20", event: "Martin Luther King Jr. Day (No Classes)" },
                          { date: "January 21", event: "Last Day to Add/Drop Classes" },
                          { date: "March 7", event: "Midterm Grades Due" },
                          { date: "March 10-14", event: "Spring Break (No Classes)" },
                          { date: "March 21", event: "Last Day to Withdraw from Classes" },
                          { date: "April 7", event: "Registration for Fall 2025 Begins" },
                          { date: "April 19-20", event: "Easter Break (No Classes)" },
                          { date: "May 2", event: "Last Day of Classes" },
                          { date: "May 5-9", event: "Final Examinations" },
                          { date: "May 12", event: "Spring Grades Due" },
                          { date: "May 17", event: "Commencement Ceremony" }
                        ].map((item, index) => (
                          <tr key={index} className="hover:bg-blue-50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.date}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{item.event}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Summer Sessions */}
            <div id="summer-sessions" className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-blue-500 px-6 py-4">
                  <h2 className="text-2xl font-bold text-white flex items-center">
                    <svg className="w-6 h-6 mr-2 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Summer Sessions 2025
                  </h2>
                </div>
                <div className="p-6">
                  <div className="overflow-hidden">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider w-40">Date</th>
                          <th scope="col" className="px-6 py-3 text-left text-sm font-semibold text-blue-900 uppercase tracking-wider">Event</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {[
                          { date: "May 26", event: "Memorial Day (University Closed)" },
                          { date: "May 27", event: "Summer Session I Begins" },
                          { date: "May 29", event: "Last Day to Add/Drop Summer Session I Classes" },
                          { date: "June 12", event: "Last Day to Withdraw from Summer Session I Classes" },
                          { date: "June 27", event: "Summer Session I Ends" },
                          { date: "July 1", event: "Summer Session I Grades Due" },
                          { date: "July 4", event: "Independence Day (University Closed)" },
                          { date: "July 6", event: "Summer Session II Begins" },
                          { date: "July 8", event: "Last Day to Add/Drop Summer Session II Classes" },
                          { date: "July 22", event: "Last Day to Withdraw from Summer Session II Classes" },
                          { date: "August 8", event: "Summer Session II Ends" },
                          { date: "August 12", event: "Summer Session II Grades Due" }
                        ].map((item, index) => (
                          <tr key={index} className="hover:bg-blue-50 transition">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-900">{item.date}</td>
                            <td className="px-6 py-4 text-sm text-gray-700">{item.event}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Calendar Download */}
            <div className="mb-16">
              <div className="bg-blue-50 rounded-2xl shadow-lg p-8 border border-blue-100">
                <div className="text-center">
                  <h2 className="text-2xl font-bold text-blue-900 mb-4">Download Academic Calendar</h2>
                  <p className="text-blue-700 mb-6 max-w-xl mx-auto">
                    Need the calendar on the go? Download the full academic calendar in your preferred format.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a 
                      href="#" 
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      iCalendar (.ics)
                    </a>
                    <a 
                      href="#" 
                      className="inline-flex items-center bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-300 border border-blue-300 shadow-lg"
                    >
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                      </svg>
                      PDF
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Important Notices */}
            <div className="mb-16">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Important Notices
                </h2>
                
                <div className="space-y-6">
                  <div className="p-5 border-l-4 border-yellow-400 bg-yellow-50 rounded-md">
                    <h3 className="font-semibold text-yellow-800">Schedule Changes</h3>
                    <p className="mt-2 text-yellow-700">
                      All dates are subject to change. Please check the university website regularly for updates.
                    </p>
                  </div>
                  
                  <div className="p-5 border-l-4 border-blue-400 bg-blue-50 rounded-md">
                    <h3 className="font-semibold text-blue-800">Religious Observances</h3>
                    <p className="mt-2 text-blue-700">
                      Students requesting accommodations for religious observances should contact their instructors at least two weeks in advance.
                    </p>
                  </div>
                  
                  <div className="p-5 border-l-4 border-green-400 bg-green-50 rounded-md">
                    <h3 className="font-semibold text-green-800">Exam Policy</h3>
                    <p className="mt-2 text-green-700">
                      Final examinations must be taken at the scheduled time unless prior arrangements have been made with the instructor and approved by the dean.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Future Academic Years */}
            <div>
              <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">Future Academic Years</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 duration-300">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">2025-2026 Academic Year</h3>
                  <p className="text-gray-600 mb-4">Preliminary dates for the 2025-2026 academic year will be posted in Fall 2024.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    <span>Check back later</span>
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 duration-300">
                  <h3 className="text-lg font-semibold text-blue-900 mb-3">Academic Planning Resources</h3>
                  <p className="text-gray-600 mb-4">Access degree planning tools, catalog information, and schedule resources.</p>
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                    <span>View resources</span>
                    <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }