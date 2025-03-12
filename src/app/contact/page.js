export default function ContactPage() {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Get in Touch</h1>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">We're here to answer your questions and connect you with the right resources for your journey.</p>
          </div>
          
          {/* Contact Form and Info Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Form Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8 transform transition hover:scale-105 duration-300">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
                </svg>
                Contact Us
              </h2>
              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="(555) 123-4567"
                  />
                </div>
                
                <div>
                  <label htmlFor="inquiry" className="block text-sm font-medium text-gray-700 mb-1">Inquiry Type</label>
                  <div className="relative">
                    <select
                      id="inquiry"
                      name="inquiry"
                      className="appearance-none w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    >
                      <option value="">Please Select</option>
                      <option value="admission">Admissions Information</option>
                      <option value="financial">Financial Aid</option>
                      <option value="housing">Housing</option>
                      <option value="academic">Academic Programs</option>
                      <option value="visit">Campus Visit</option>
                      <option value="other">Other</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-700">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                    placeholder="How can we help you today?"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 transform hover:-translate-y-1 shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
            
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 transform transition hover:scale-105 duration-300">
                <h2 className="text-2xl font-bold text-blue-900 mb-4 flex items-center">
                  <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  Find Us
                </h2>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-900">Main Campus</h3>
                    <address className="not-italic mt-1 text-gray-600">
                      123 University Avenue<br />
                      Collegetown, ST 12345<br />
                      United States
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">General Inquiries</h3>
                      <p className="mt-1 text-gray-600">
                        Phone: <a href="tel:5551234567" className="text-blue-600 hover:underline">(555) 123-4567</a><br />
                        Email: <a href="mailto:info@universitycollege.edu" className="text-blue-600 hover:underline">info@universitycollege.edu</a>
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Admissions Office</h3>
                      <p className="mt-1 text-gray-600">
                        Phone: <a href="tel:5551234568" className="text-blue-600 hover:underline">(555) 123-4568</a><br />
                        Email: <a href="mailto:admissions@universitycollege.edu" className="text-blue-600 hover:underline">admissions@universitycollege.edu</a><br />
                        Hours: Monday-Friday, 9am-5pm
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 transform transition hover:scale-105 duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-900">Financial Aid Office</h3>
                      <p className="mt-1 text-gray-600">
                        Phone: <a href="tel:5551234569" className="text-blue-600 hover:underline">(555) 123-4569</a><br />
                        Email: <a href="mailto:finaid@universitycollege.edu" className="text-blue-600 hover:underline">finaid@universitycollege.edu</a><br />
                        Hours: Monday-Friday, 9am-5pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Campus Map Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
              Campus Map
            </h2>
            <div className="bg-blue-50 p-4 rounded-xl shadow-inner">
              <div className="bg-gray-200 h-64 lg:h-96 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Interactive Campus Map</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a 
                href="#" 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                <span>View Full Campus Map</span>
                <svg className="ml-2 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Department Directory */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              Department Directory
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "College of Arts & Sciences", phone: "(555) 123-4570", email: "arts-sciences@universitycollege.edu" },
                { name: "College of Business", phone: "(555) 123-4571", email: "business@universitycollege.edu" },
                { name: "College of Engineering", phone: "(555) 123-4572", email: "engineering@universitycollege.edu" },
                { name: "College of Health Sciences", phone: "(555) 123-4573", email: "health@universitycollege.edu" },
                { name: "Student Affairs", phone: "(555) 123-4574", email: "studentaffairs@universitycollege.edu" },
                { name: "Housing & Residence Life", phone: "(555) 123-4575", email: "housing@universitycollege.edu" }
              ].map((dept, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg transform transition hover:scale-105 duration-300 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-900">{dept.name}</h3>
                  <p className="mt-3 text-gray-600">
                    <a href={`tel:${dept.phone.replace(/\D/g, '')}`} className="flex items-center mb-1 hover:text-blue-700">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      {dept.phone}
                    </a>
                    <a href={`mailto:${dept.email}`} className="flex items-center hover:text-blue-700">
                      <svg className="w-4 h-4 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      {dept.email}
                    </a>
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Campus Visit Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              Visit Our Campus
            </h2>
            
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-semibold mb-4">Schedule a Tour</h3>
                  <p className="mb-6">
                    Experience University College firsthand by scheduling a campus tour. Our student 
                    ambassadors will show you around and answer your questions about life at our institution.
                  </p>
                  <div className="mb-6 space-y-2">
                    <p className="font-semibold">Available Tour Times:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Monday - Friday: 10am, 1pm, 3pm</li>
                      <li>Saturday: 10am, 12pm</li>
                      <li>Sunday: Closed</li>
                    </ul>
                  </div>
                  <a 
                    href="#" 
                    className="inline-block bg-white text-blue-700 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg transform hover:-translate-y-1"
                  >
                    Book a Tour
                  </a>
                </div>
                <div className="bg-gray-200 h-full min-h-64 flex items-center justify-center">
                  <p className="text-gray-600">Campus Tour Image</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-blue-900 mb-8 text-center flex items-center justify-center">
              <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-5">
              {[
                {
                  question: "When is the application deadline?",
                  answer: "Early Decision applications are due November 1, and Regular Decision applications are due January 15. Transfer application deadlines are March 1 for fall enrollment and October 1 for spring enrollment."
                },
                {
                  question: "How can I request official transcripts?",
                  answer: "Current students and alumni can request official transcripts through the Registrar's Office online portal or by submitting a form in person at the Registrar's Office."
                },
                {
                  question: "Is on-campus housing guaranteed?",
                  answer: "On-campus housing is guaranteed for all first-year and second-year students. Upperclassmen can participate in the housing lottery for available spaces."
                },
                {
                  question: "How do I apply for financial aid?",
                  answer: "To apply for financial aid, complete the FAFSA (Free Application for Federal Student Aid) as early as possible after October 1. Our school code is 001234."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition hover:scale-105 duration-300">
                  <div className="border-l-4 border-blue-500">
                    <div className="p-6">
                      <h3 className="font-semibold text-lg text-blue-900 mb-3">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-blue-50 p-8 rounded-2xl shadow-lg border border-blue-100">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Ready to Connect?</h2>
            <p className="text-blue-700 mb-6 max-w-xl mx-auto">
              We look forward to hearing from you! For immediate assistance, 
              please call our main line at (555) 123-4567.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="tel:5551234567" 
                className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Call Us
              </a>
              <a 
                href="mailto:info@universitycollege.edu" 
                className="inline-flex items-center bg-white hover:bg-gray-50 text-blue-600 font-medium py-3 px-6 rounded-lg transition duration-300 border border-blue-300 shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}