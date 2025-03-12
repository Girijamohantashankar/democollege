import Link from 'next/link';

export default function SupportServices() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Support Services</h1>
            <p className="text-xl">Helping students succeed in academics and life</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Student Support Services</h2>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-medium mb-2">Academic Advising</h3>
                    <p className="text-gray-600">Get personalized guidance to plan your academic journey.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-medium mb-2">Counseling Services</h3>
                    <p className="text-gray-600">Confidential mental health support for students.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                    <h3 className="text-xl font-medium mb-2">Career Services</h3>
                    <p className="text-gray-600">Resume building, internships, and job placement assistance.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Health & Wellness</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium text-lg">Medical Clinic</h3>
                  <p className="text-gray-600">On-campus medical support for students.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Disability Services</h3>
                  <p className="text-gray-600">Assistance for students with disabilities to ensure equal access.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Student Wellness Programs</h3>
                  <p className="text-gray-600">Workshops, fitness programs, and mental health resources.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
            <p className="mb-4">Need help? Reach out to our student support team for assistance.</p>
            <Link href="#" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg font-medium">
              Get Support
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
