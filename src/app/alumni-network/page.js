import Link from 'next/link';

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Alumni Network</h1>
            <p className="text-xl">Stay connected with University College alumni worldwide</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Alumni Success Stories</h2>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                      <h3 className="text-xl font-medium mb-2">John Doe - CEO, TechCorp</h3>
                      <p className="text-gray-600">Graduated in 2010, now leading innovations in the tech industry.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Alumni Benefits</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium text-lg">Career Support</h3>
                  <p className="text-gray-600">Access exclusive job opportunities and career mentoring.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Networking Events</h3>
                  <p className="text-gray-600">Join alumni meetups and professional events worldwide.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Continued Learning</h3>
                  <p className="text-gray-600">Exclusive courses and resources for lifelong learning.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
            <p className="mb-4">Reconnect with old friends, mentor students, and stay engaged with our community.</p>
            <Link href="#" className="inline-block bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 text-lg font-medium">
              Join the Alumni Network
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
