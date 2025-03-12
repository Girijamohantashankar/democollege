export default function AdmissionsPage() {
  return (
    <div className="bg-white py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Admissions</h1>
            <p className="text-xl text-gray-600">Your journey to becoming part of our community starts here.</p>
          </div>

          <div className="prose prose-lg prose-blue mx-auto">
            <h2>Application Process</h2>
            <p>
              We believe in a holistic admissions process that considers academic achievement,
              personal qualities, extracurricular involvement, and potential for growth. Our goal
              is to build a diverse community of talented individuals who will contribute to and
              benefit from our educational environment.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold text-gray-900">Application Timeline</h3>
              <div className="mt-4 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">1</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Early Decision: November 1</h4>
                    <p className="text-gray-600">Decision notification by December 15</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">2</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Regular Decision: January 15</h4>
                    <p className="text-gray-600">Decision notification by March 31</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">3</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Transfer Students: March 1 (Fall) / October 1 (Spring)</h4>
                    <p className="text-gray-600">Decision notification within 4-6 weeks</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">4</span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium">Graduate Programs: Varies by program</h4>
                    <p className="text-gray-600">See specific program pages for deadlines</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-gray-900 mt-10">Undergraduate Admissions</h2>
            <p className="text-lg text-gray-700 mt-4">
              First-year applicants should submit the following materials through our online application portal:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li><strong>Completed application form</strong></li>
              <li>Official high school transcripts</li>
              <li>SAT or ACT scores <span className="text-gray-500">(optional for 2025-2026 academic year)</span></li>
              <li>Two letters of recommendation</li>
              <li>Personal essay</li>
              <li>Application fee: <strong>$60</strong> <span className="text-gray-500">(fee waivers available)</span></li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mt-10">Transfer Admissions</h2>
            <p className="text-lg text-gray-700 mt-4">
              Students transferring from other institutions should submit:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li><strong>Completed application form</strong></li>
              <li>Official transcripts from all colleges attended</li>
              <li>Official high school transcripts</li>
              <li>One letter of recommendation</li>
              <li>Statement of purpose</li>
              <li>Application fee: <strong>$60</strong> <span className="text-gray-500">(fee waivers available)</span></li>
            </ul>

            <h2 className="text-3xl font-semibold text-gray-900 mt-10">Graduate Admissions</h2>
            <p className="text-lg text-gray-700 mt-4">
              Requirements for graduate programs vary by department. Generally, applicants should submit:
            </p>

            <ul className="list-disc list-inside text-gray-700 space-y-2 mt-4">
              <li><strong>Completed application form</strong></li>
              <li>Official transcripts from all undergraduate institutions</li>
              <li>GRE or GMAT scores <span className="text-gray-500">(requirements vary by program)</span></li>
              <li>Three letters of recommendation</li>
              <li>Statement of purpose</li>
              <li>Resume or CV</li>
              <li>Application fee: <strong>$75</strong> <span className="text-gray-500">(fee waivers available)</span></li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 my-8">
              <h3 className="text-xl font-semibold text-blue-800">International Students</h3>
              <p className="mt-2 text-blue-700">
                We welcome students from around the world. In addition to the standard application
                requirements, international students must submit:
              </p>
              <ul className="mt-4 text-blue-700">
                <li>TOEFL, IELTS, or Duolingo English Test scores</li>
                <li>Financial documentation for visa purposes</li>
                <li>Credential evaluation for non-U.S. academic records</li>
              </ul>
            </div>

            <h2>Tuition and Financial Aid</h2>
            <p>
              We are committed to making education accessible through a variety of financial aid options:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">2025-2026 Tuition</h3>
                <ul className="mt-4 space-y-2">
                  <li><strong>Undergraduate:</strong> $45,000 per year</li>
                  <li><strong>Graduate:</strong> $52,000 per year</li>
                  <li><strong>Room and Board:</strong> $14,500 per year</li>
                  <li><strong>Books and Supplies:</strong> Approximately $1,200 per year</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900">Financial Aid Options</h3>
                <ul className="mt-4 space-y-2">
                  <li>Merit-based scholarships</li>
                  <li>Need-based grants</li>
                  <li>Federal and state aid</li>
                  <li>Work-study opportunities</li>
                  <li>Payment plans</li>
                  <li>Student loans</li>
                </ul>
              </div>
            </div>

            <p>
              Over 70% of our students receive some form of financial assistance. Our financial
              aid team is dedicated to helping you navigate the process and find the best options
              for your situation.
            </p>

            <div className="my-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900">Visit Our Campus</h3>
              <p className="mt-2">
                The best way to experience University College is to visit our campus. We offer:
              </p>
              <ul className="mt-4">
                <li>Campus tours (Monday-Friday at 10am and 2pm, select Saturdays)</li>
                <li>Information sessions with admissions counselors</li>
                <li>Opportunities to sit in on classes</li>
                <li>Meetings with faculty and current students</li>
                <li>Virtual tours for those unable to visit in person</li>
              </ul>
              <div className="mt-6">
                <a
                  href="#"
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition duration-300"
                >
                  Schedule a Visit
                </a>
              </div>
            </div>

            <h2>Contact Admissions</h2>
            <p>
              Our admissions team is here to help you through every step of the application process.
              Please don't hesitate to reach out with any questions.
            </p>
            <ul>
              <li><strong>Email:</strong> admissions@universitycollege.edu</li>
              <li><strong>Phone:</strong> (555) 123-4567</li>
              <li><strong>Office Hours:</strong> Monday-Friday, 9am-5pm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}