import Link from 'next/link';

export default function Library() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold mb-4">University Library</h1>
            <p className="text-xl">Your gateway to knowledge and academic resources</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Quick Links and Hours Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2">
              <div className="bg-gray-100 rounded-lg p-6 shadow-lg h-full">
                <h2 className="text-2xl font-semibold mb-6">Welcome to the University Library</h2>
                <p className="mb-4">The University College Library houses over 2 million volumes and provides access to thousands of electronic resources. Our six-story facility offers study spaces, research assistance, technology labs, and special collections.</p>
                <p className="mb-4">Whether you're conducting research, studying for exams, or looking for a quiet place to work, our library staff is here to support your academic journey.</p>
                <div className="mt-6">
                  <h3 className="text-xl font-medium mb-3">Quick Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <Link href="#" className="bg-white p-3 rounded shadow hover:bg-gray-50 flex items-center">
                      <span className="bg-blue-700 text-white p-1 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                      </span>
                      Search Catalog
                    </Link>
                    <Link href="#" className="bg-white p-3 rounded shadow hover:bg-gray-50 flex items-center">
                      <span className="bg-blue-700 text-white p-1 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </span>
                      Reserve a Room
                    </Link>
                    <Link href="#" className="bg-white p-3 rounded shadow hover:bg-gray-50 flex items-center">
                      <span className="bg-blue-700 text-white p-1 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </span>
                      Course Reserves
                    </Link>
                    <Link href="#" className="bg-white p-3 rounded shadow hover:bg-gray-50 flex items-center">
                      <span className="bg-blue-700 text-white p-1 rounded mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      Ask a Librarian
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Library Hours</h2>
              <div className="divide-y divide-gray-300">
                <div className="py-3 flex justify-between">
                  <span className="font-medium">Monday - Thursday</span>
                  <span>7:00 AM - 12:00 AM</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="font-medium">Friday</span>
                  <span>7:00 AM - 10:00 PM</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>9:00 AM - 8:00 PM</span>
                </div>
                <div className="py-3 flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>10:00 AM - 12:00 AM</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-300">
                <h3 className="font-medium text-lg mb-2">Special Hours</h3>
                <p className="text-gray-700 mb-2">Hours may vary during holidays and exam periods.</p>
                <Link href="#" className="text-blue-700 hover:underline">View full schedule</Link>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-300">
                <h3 className="font-medium text-lg mb-2">Contact</h3>
                <p className="mb-1">(555) 123-4568</p>
                <p className="mb-3">library@universitycollege.edu</p>
                <Link href="#" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Library Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Research Support</h3>
                  <p className="text-gray-600 mb-4">Our subject-specialist librarians can help with in-depth research, citation management, and literature reviews.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Schedule a consultation</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Technology & Equipment</h3>
                  <p className="text-gray-600 mb-4">Borrow laptops, cameras, recording equipment, and access specialized software in our computer labs.</p>
                  <Link href="#" className="text-blue-700 hover:underline">View available equipment</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Printing & Scanning</h3>
                  <p className="text-gray-600 mb-4">Access printing, scanning, and copying services on every floor. Print from your own device or our computers.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Learn about printing</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Interlibrary Loan</h3>
                  <p className="text-gray-600 mb-4">Request materials from other libraries when they're not available in our collection.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Make a request</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Study Spaces</h3>
                  <p className="text-gray-600 mb-4">Individual and group study rooms, quiet zones, and collaborative work areas throughout the library.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Reserve a study room</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-700 h-2"></div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-3">Digital Scholarship</h3>
                  <p className="text-gray-600 mb-4">Support for digital projects, data visualization, and computational research methods.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Explore digital services</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Collections Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold mb-6">Our Collections</h2>
            <div className="bg-gray-100 rounded-lg p-6 shadow">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-medium mb-3">Main Collection</h3>
                  <p className="mb-4">Browse our extensive collection of books, journals, and multimedia resources across all academic disciplines.</p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      2+ million print volumes
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      100,000+ e-books
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-700 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      50,000+ electronic journals
                    </li>
                  </ul>
                  <Link href="#" className="text-blue-700 hover:underline">Search the catalog</Link>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">Special Collections</h3>
                  <p className="mb-4">Explore our rare books, manuscripts, and archival materials that document the history of the university and beyond.</p>
                  <div className="space-y-3 mb-4">
                    <div>
                      <h4 className="font-medium">University Archives</h4>
                      <p className="text-gray-600">Historical records and photographs from the university's founding to present day.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Rare Book Collection</h4>
                      <p className="text-gray-600">First editions, incunabula, and other rare published materials.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Manuscript Collections</h4>
                      <p className="text-gray-600">Personal papers and records of notable figures and organizations.</p>
                    </div>
                  </div>
                  <Link href="#" className="text-blue-700 hover:underline">Explore special collections</Link>
                </div>
              </div>
            </div>
          </div>

          {/* Events and Workshops Section */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">Events & Workshops</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm inline-block mb-3">Workshop</div>
                  <h3 className="text-xl font-medium mb-2">Research Tools for First-Year Students</h3>
                  <p className="text-gray-500 mb-3">March 15, 2025 • 2:00 PM - 3:30 PM</p>
                  <p className="text-gray-600 mb-4">Learn the basics of library research, citation management, and academic integrity.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Register</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm inline-block mb-3">Exhibition</div>
                  <h3 className="text-xl font-medium mb-2">Treasures from the Archives</h3>
                  <p className="text-gray-500 mb-3">February - April 2025 • Main Floor Gallery</p>
                  <p className="text-gray-600 mb-4">A showcase of rare and historical items from our special collections.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Learn more</Link>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm inline-block mb-3">Lecture</div>
                  <h3 className="text-xl font-medium mb-2">Author Talk: Dr. Jane Smith</h3>
                  <p className="text-gray-500 mb-3">March 22, 2025 • 4:00 PM - 5:30 PM</p>
                  <p className="text-gray-600 mb-4">Award-winning author discusses her latest book on climate science.</p>
                  <Link href="#" className="text-blue-700 hover:underline">Register</Link>
                </div>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link href="#" className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800">
                View All Events
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}