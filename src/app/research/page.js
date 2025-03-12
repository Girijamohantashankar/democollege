import Link from 'next/link';

export default function page() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="bg-blue-900 text-white py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Research & Innovation</h1>
            <p className="text-xl">Explore groundbreaking research at University College</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Ongoing Research Projects</h2>
                <div className="space-y-6">
                  {[1, 2, 3, 4].map((id) => (
                    <div key={id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition">
                      <h3 className="text-xl font-medium mb-2">AI in Healthcare</h3>
                      <p className="text-gray-600">Exploring how artificial intelligence is transforming medical diagnostics.</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Research Departments</h2>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium text-lg">Biomedical Research</h3>
                  <p className="text-gray-600">Advancing medicine through cutting-edge discoveries.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Environmental Studies</h3>
                  <p className="text-gray-600">Addressing global environmental challenges.</p>
                </li>
                <li>
                  <h3 className="font-medium text-lg">Data Science & AI</h3>
                  <p className="text-gray-600">Leading innovations in artificial intelligence and big data.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Join Our Research Community</h2>
            <p className="mb-4">Collaborate with experts and make an impact in your field.</p>
            <Link href="#" className="inline-block bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 text-lg font-medium">
              Learn More
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
