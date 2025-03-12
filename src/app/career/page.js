"use client";
import { useState, useEffect } from "react";

export default function CareersPage() {
  const [jobOpenings, setJobOpenings] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Expanded mock data with various job types
    const fetchedJobs = [
      { 
        title: "Assistant Professor - Computer Science", 
        location: "Main Campus", 
        type: "Faculty", 
        department: "Computer Science",
        description: "Teach undergraduate and graduate courses in computer science, conduct research, and mentor students.",
        postedDate: "March 5, 2025"
      },
      { 
        title: "Administrative Officer", 
        location: "City Campus", 
        type: "Administrative", 
        department: "Student Affairs",
        description: "Coordinate administrative functions, manage office operations, and support student services.",
        postedDate: "February 28, 2025"
      },
      { 
        title: "Lab Technician - Physics", 
        location: "Main Campus", 
        type: "Staff", 
        department: "Physics",
        description: "Maintain laboratory equipment, prepare materials for experiments, and assist with research projects.",
        postedDate: "March 2, 2025"
      },
      { 
        title: "Research Associate - Biology", 
        location: "Research Center", 
        type: "Research", 
        department: "Biology",
        description: "Conduct experiments, analyze data, and contribute to ongoing research projects in molecular biology.",
        postedDate: "March 8, 2025"
      },
      { 
        title: "Student Advisor", 
        location: "Online/Remote", 
        type: "Administrative", 
        department: "Academic Affairs",
        description: "Provide academic guidance to students, assist with course selection, and support student success initiatives.",
        postedDate: "March 4, 2025"
      },
    ];
    setJobOpenings(fetchedJobs);
  }, []);

  // Filter jobs based on category and search term
  const filteredJobs = jobOpenings.filter(job => {
    const matchesCategory = selectedCategory === "All" || job.type === selectedCategory;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Get unique job types for filter buttons
  const jobTypes = ["All", ...new Set(jobOpenings.map(job => job.type))];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
      {/* Hero Section */}
      <div className="bg-gray-300 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Career Opportunities</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Join our team and contribute to a world-class learning environment.
            Discover your next career move with us.
          </p>
          
          {/* Search Bar */}
          <div className="mt-10 max-w-xl mx-auto">
            <div className="relative rounded-full shadow-md">
              <input
                type="text"
                className="w-full py-4 pl-6 pr-12 text-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Search positions, departments, or locations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-4">
                <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Filter Buttons */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedCategory(type)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === type
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-blue-600 hover:bg-blue-50 border border-blue-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        {/* Job Count */}
        <div className="mb-6 text-gray-600">
          Showing {filteredJobs.length} of {jobOpenings.length} opportunities
        </div>
        
        {/* Job Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-4px] group"
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-semibold text-blue-800 group-hover:text-blue-600 transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-gray-600 mt-1">{job.department} • {job.location}</p>
                  </div>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full">
                    {job.type}
                  </span>
                </div>
                
                <p className="mt-4 text-gray-700">
                  {job.description}
                </p>
                
                <div className="mt-6 flex justify-between items-center">
                  <span className="text-sm text-gray-500">Posted: {job.postedDate}</span>
                  <button className="bg-blue-600 text-white px-6 py-2 cursor-pointer rounded-lg font-medium transition-all duration-300 hover:bg-blue-700 hover:shadow-md transform group-hover:scale-105">
                    Apply Now
                  </button>
                </div>
              </div>
              
              <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </div>
          ))}
        </div>
        
        {/* No Results Message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="text-xl font-medium text-gray-900 mb-1">No positions found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            <button 
              onClick={() => {setSearchTerm(""); setSelectedCategory("All");}}
              className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
            >
              Reset filters
            </button>
          </div>
        )}
        
        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inclusive Environment</h3>
              <p className="text-gray-600">Join a diverse community that values different perspectives and experiences.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellent Benefits</h3>
              <p className="text-gray-600">Comprehensive health coverage, retirement plans, and generous time off policies.</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-4 transition-all duration-300 hover:bg-blue-50 rounded-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growth Opportunities</h3>
              <p className="text-gray-600">Professional development programs and clear pathways for career advancement.</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/3 p-8 md:p-12 text-white">
              <h2 className="text-3xl font-bold mb-4">Don't see the right position?</h2>
              <p className="text-blue-100 mb-6">
                Join our talent community to stay updated on new opportunities
                that match your skills and interests.
              </p>
              <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-blue-50 hover:shadow-lg">
                Join Talent Network
              </button>
            </div>
            <div className="md:w-1/3 bg-blue-800 p-8 md:p-12 text-white">
              <h3 className="text-xl font-semibold mb-4">Contact Recruitment</h3>
              <p className="text-blue-200 mb-2">
                Have questions about our hiring process?
              </p>
              <a href="mailto:careers@university.edu" className="text-white hover:text-blue-200 font-medium underline">
                careers@university.edu
              </a>
              <p className="mt-4 text-blue-200 mb-2">Phone:</p>
              <a href="tel:+15551234567" className="text-white hover:text-blue-200 font-medium">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}