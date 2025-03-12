export default function CampusLifePage() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section with Animation */}
          <div className="text-center mb-16 transition-all duration-500 hover:scale-105">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Campus Life</h1>
            <div className="h-1 w-24 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">Experience a vibrant community beyond the classroom.</p>
          </div>

          <div className="prose prose-lg prose-blue mx-auto">
            <p className="lead text-lg font-medium text-blue-800">
              At University College, we believe that learning extends far beyond the classroom.
              Our campus offers a rich variety of experiences that complement your academic journey
              and help you develop as a whole person.
            </p>

            {/* Housing and Dining Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Housing and Dining</h2>
              <p className="mb-8">
                Our residential campus is home to over 3,000 students who live in a variety of
                housing options designed to meet different needs and preferences.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-700 text-white p-4">
                    <h3 className="text-xl font-semibold">Residence Halls</h3>
                  </div>
                  <div className="p-6">
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>First-Year Communities:</strong> Traditional-style residence halls specifically designed to help new students transition to college life</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Upperclassman Housing:</strong> Suite and apartment-style options with more independence</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Special Interest Communities:</strong> Themed housing based on academic interests, languages, and lifestyles</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Graduate Housing:</strong> Dedicated buildings for graduate students</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-700 text-white p-4">
                    <h3 className="text-xl font-semibold">Dining Options</h3>
                  </div>
                  <div className="p-6">
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Main Dining Hall:</strong> All-you-care-to-eat facility with diverse options</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Campus Center Food Court:</strong> Quick-service options including national brands</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>University Café:</strong> Coffee shop with light meals and snacks</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Market Square:</strong> Grocery-style store with grab-and-go items</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span><strong>Food Trucks:</strong> Rotating selection of local vendors</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                Our dining services prioritize sustainable practices, locally-sourced ingredients,
                and accommodations for various dietary needs, including vegetarian, vegan,
                gluten-free, and allergy-friendly options.
              </p>
            </div>

            {/* Student Organizations Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Student Organizations</h2>
              <p className="mb-8">
                With over 200 student organizations, you'll find endless opportunities to pursue your
                passions, develop leadership skills, and build lifelong friendships.
              </p>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                {["Academic & Professional", "Cultural & Identity", "Arts & Media"].map((category, idx) => (
                  <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-blue-50">
                    <div className="bg-blue-600 text-white p-4">
                      <h3 className="text-xl font-semibold">{category}</h3>
                    </div>
                    <div className="p-6">
                      <ul className="mt-4 space-y-2">
                        {[
                          idx === 0 ? ["Pre-law Society", "Business Leaders Association", "Engineering Club", "Future Healthcare Professionals", "Debate Team"] :
                          idx === 1 ? ["Black Student Alliance", "Asian Cultural Association", "Hispanic Student Organization", "International Student Association", "LGBTQ+ Alliance"] :
                          ["Student Newspaper", "Photography Club", "University Choir", "Theater Group", "Film Society"]
                        ].map((item, i) => (
                          <li key={i} className="transition-colors duration-200 hover:text-blue-700">{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Athletics and Recreation Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Athletics and Recreation</h2>
              <p className="mb-8">
                We offer a comprehensive athletics program that includes varsity sports, intramural
                leagues, and recreational activities for students of all skill levels.
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-800 text-white p-4">
                    <h3 className="text-xl font-semibold">Varsity Athletics</h3>
                  </div>
                  <div className="p-6">
                    <p className="mt-2">
                      Our NCAA Division II teams compete in the following sports:
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                      <div>
                        <h4 className="font-medium text-blue-800">Men's</h4>
                        <ul className="mt-2 space-y-1">
                          {["Basketball", "Soccer", "Baseball", "Swimming", "Track & Field"].map((sport, i) => (
                            <li key={i} className="transition-colors duration-200 hover:text-blue-600">{sport}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-blue-800">Women's</h4>
                        <ul className="mt-2 space-y-1">
                          {["Basketball", "Soccer", "Volleyball", "Swimming", "Track & Field"].map((sport, i) => (
                            <li key={i} className="transition-colors duration-200 hover:text-blue-600">{sport}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-blue-800 text-white p-4">
                    <h3 className="text-xl font-semibold">Recreation</h3>
                  </div>
                  <div className="p-6">
                    <ul className="mt-4 space-y-3">
                      {[
                        {title: "Intramural Sports", desc: "Basketball, flag football, soccer, volleyball, and more"},
                        {title: "Fitness Center", desc: "State-of-the-art equipment, group fitness classes, and personal training"},
                        {title: "Aquatics Center", desc: "Olympic-sized pool and diving well"},
                        {title: "Outdoor Adventures", desc: "Hiking, kayaking, rock climbing, and camping trips"},
                        {title: "Club Sports", desc: "Rugby, ultimate frisbee, cycling, and more"}
                      ].map((item, i) => (
                        <li key={i} className="flex items-start group">
                          <span className="text-blue-600 mr-2 group-hover:text-blue-800">•</span>
                          <span className="group-hover:text-blue-800"><strong>{item.title}:</strong> {item.desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Health and Wellness Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Health and Wellness</h2>
              <p className="mb-8">
                We are committed to supporting your physical and mental wellbeing throughout your time at University College.
              </p>

              <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:bg-blue-50 my-8">
                <div className="bg-green-600 text-white p-4">
                  <h3 className="text-xl font-semibold">Student Health Services</h3>
                </div>
                <div className="p-6">
                  <ul className="mt-4 space-y-3">
                    {[
                      {title: "Health Center", desc: "Primary care, immunizations, lab services, and women's health"},
                      {title: "Counseling Services", desc: "Individual therapy, group sessions, crisis intervention, and psychiatric services"},
                      {title: "Wellness Programs", desc: "Stress management, nutrition counseling, sleep education, and mindfulness training"},
                      {title: "Disability Services", desc: "Accommodations and support for students with disabilities"}
                    ].map((item, i) => (
                      <li key={i} className="flex items-start transition-transform duration-200 hover:translate-x-2">
                        <span className="text-green-600 mr-2">•</span>
                        <span><strong>{item.title}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Campus Traditions Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Campus Traditions</h2>
              <p className="mb-6">
                Throughout the academic year, we celebrate a variety of traditions that bring our community together:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
                {[
                  {name: "Welcome Week", desc: "A week-long celebration to kick off the fall semester"},
                  {name: "Homecoming", desc: "Annual festivities including a parade, football game, and alumni events"},
                  {name: "Winter Festival", desc: "Holiday celebrations and stress-relief activities before finals"},
                  {name: "Spring Carnival", desc: "Outdoor festival featuring food, games, and performances"},
                  {name: "Senior Week", desc: "Special events for graduating students before commencement"}
                ].map((event, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow transition-all duration-300 hover:shadow-lg hover:bg-blue-50">
                    <h3 className="font-bold text-lg text-blue-800">{event.name}</h3>
                    <p className="text-gray-700">{event.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Student Support Services Section */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-xl my-12 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">Student Support Services</h3>
              <p className="mb-6">
                We offer comprehensive support to help you succeed academically and personally:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {title: "Academic Advising", desc: "Personalized guidance for course selection and academic planning"},
                  {title: "Career Services", desc: "Resume workshops, interview preparation, internship placement, and job fairs"},
                  {title: "Tutoring Center", desc: "Free peer tutoring for most courses"},
                  {title: "Writing Center", desc: "One-on-one assistance with papers and writing assignments"},
                  {title: "International Student Services", desc: "Support for visa issues, cultural adjustment, and more"},
                  {title: "Financial Aid Office", desc: "Assistance with scholarships, grants, and financial planning"}
                ].map((service, i) => (
                  <div key={i} className="flex items-start p-3 rounded-lg transition-colors duration-200 hover:bg-blue-600">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span><strong>{service.title}:</strong> {service.desc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campus Safety Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Campus Safety</h2>
              <p className="mb-6">
                The safety and security of our campus community is our highest priority. Our comprehensive
                safety measures include:
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                {[
                  "24/7 campus police department with certified officers",
                  "Emergency notification system for timely alerts",
                  "Blue light emergency phones throughout campus",
                  "Safe ride program during evening hours",
                  "Card access security for all residence halls",
                  "Safety escort service available upon request",
                  "Regular safety awareness programs and training",
                  "Continuous surveillance of campus grounds"
                ].map((item, i) => (
                  <div key={i} className="flex items-center p-3 bg-white rounded-lg shadow-sm transition-all duration-200 hover:bg-green-50 hover:shadow">
                    <svg className="w-5 h-5 text-green-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Area Section */}
            <div className="my-12">
              <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-200 pb-2 mb-8">Local Area</h2>
              <p className="mb-8">
                University College is located in a vibrant community with plenty to offer beyond our campus borders:
              </p>

              <div className="grid md:grid-cols-2 gap-8 my-8">
                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-purple-700 text-white p-4">
                    <h3 className="text-xl font-semibold">Nearby Attractions</h3>
                  </div>
                  <div className="p-6">
                    <ul className="mt-4 space-y-3">
                      {[
                        "Downtown shopping and dining district (15 min walk)",
                        "Arts and cultural district with museums and galleries",
                        "Regional park with hiking and biking trails",
                        "Local farmers market (weekends)",
                        "Concert venues and theaters"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center group">
                          <svg className="w-5 h-5 text-purple-500 mr-2 transition-transform duration-200 group-hover:scale-125" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                          </svg>
                          <span className="group-hover:text-purple-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <div className="bg-purple-700 text-white p-4">
                    <h3 className="text-xl font-semibold">Transportation</h3>
                  </div>
                  <div className="p-6">
                    <ul className="mt-4 space-y-3">
                      {[
                        "Free campus shuttle service to popular destinations",
                        "Public transportation stops on campus",
                        "Bike-friendly campus with rental program",
                        "Airport shuttle service during breaks",
                        "Zipcar and other car-sharing options available"
                      ].map((item, i) => (
                        <li key={i} className="flex items-center group">
                          <svg className="w-5 h-5 text-purple-500 mr-2 transition-transform duration-200 group-hover:rotate-12" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                            <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1h3a1 1 0 001-1v-3.5a1 1 0 00-.1-.44L13.38 6.53a1 1 0 00-.84-.53H10V4a1 1 0 00-1-1H3zM14 10.5v2h-3v-3h2.62l.38.94z" />
                          </svg>
                          <span className="group-hover:text-purple-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call-to-Action Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 rounded-xl shadow-xl my-12 transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
              <h3 className="text-2xl font-bold mb-4">Experience Campus Life</h3>
              <p className="mb-6">
                The best way to understand what makes our campus community special is to experience
                it for yourself. We invite you to schedule a visit to tour our facilities, meet current
                students, and get a feel for life at University College.
              </p>
              <div className="mt-6">
                <a
                  href="/contact"
                  className="inline-block bg-white text-blue-700 font-medium py-3 px-8 rounded-full shadow-md transition-all duration-300 hover:bg-yellow-50 hover:shadow-lg hover:scale-105"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}