import Link from 'next/link';

export default function page() {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <div className="bg-blue-900 text-white py-16 lg:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h1 className="text-4xl font-bold mb-4">Faculty Directory</h1>
                        <p className="text-xl">Meet the distinguished faculty members of University College</p>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-lg p-6">
                                <h2 className="text-2xl font-semibold mb-4">Faculty Members</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {[1, 2, 3, 4, 5, 6].map((id) => (
                                        <div key={id} className="bg-white p-4 rounded-lg shadow">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
                                                <div>
                                                    <h3 className="text-lg font-medium">Dr. John Doe</h3>
                                                    <p className="text-gray-600">Professor of Computer Science</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-100 p-6 rounded-lg shadow">
                            <h2 className="text-2xl font-semibold mb-4">Faculty Departments</h2>
                            <ul className="space-y-4">
                                <li>
                                    <h3 className="font-medium text-lg">School of Engineering</h3>
                                    <p className="text-gray-600">Leading research and innovation in engineering fields.</p>
                                </li>
                                <li>
                                    <h3 className="font-medium text-lg">College of Arts & Sciences</h3>
                                    <p className="text-gray-600">Home to diverse disciplines including humanities and social sciences.</p>
                                </li>
                                <li>
                                    <h3 className="font-medium text-lg">School of Business</h3>
                                    <p className="text-gray-600">Developing future business leaders with world-class programs.</p>
                                </li>
                                <li>
                                    <h3 className="font-medium text-lg">Medical Sciences</h3>
                                    <p className="text-gray-600">Advancing health and medicine through education and research.</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4">Contact Faculty</h2>
                        <p className="mb-4">For inquiries, please visit the faculty offices or email us at faculty@universitycollege.edu</p>
                        <Link href="#" className="inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
                            View Full Directory
                        </Link>
                    </div>
                </div>
            </main>
        </div>
    );
}
