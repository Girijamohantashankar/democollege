"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

// Import faculty images
import faculty1 from "../assets/faculty1.jpeg";
import faculty2 from "../assets/faculty2.jpeg";  
import faculty3 from "../assets/faculty3.webp";
import faculty4 from "../assets/faculty5.avif";
import faculty5 from "../assets/Michael-Williams.jpg";
import faculty6 from "../assets/1722612574465.jpeg";

export default function FacultyPage() {
    const [facultyMembers, setFacultyMembers] = useState([]);

    useEffect(() => {
        const fetchedFaculty = [
            { name: "Dr. Sarah Johnson", department: "Computer Science", position: "Professor", image: faculty1 },
            { name: "Dr. Mark Smith", department: "Physics", position: "Associate Professor", image: faculty2 },
            { name: "Dr. Emily Davis", department: "Mathematics", position: "Assistant Professor", image: faculty3 },
            { name: "Dr. John Williams", department: "Business Management", position: "HOD", image: faculty4 },
            { name: "Dr. Anna Brown", department: "Chemistry", position: "Senior Lecturer", image: faculty5 },
            { name: "Dr. Michael Lee", department: "Biology", position: "Research Head", image: faculty6 },
        ];
        setFacultyMembers(fetchedFaculty);
    }, []);

    return (
        <div className="py-12 bg-gray-100 text-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-bold text-center mb-8">Meet Our Faculty</h2>
                <p className="text-center text-lg text-gray-600 mb-6">
                    Our distinguished faculty members bring knowledge and experience to inspire students.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {facultyMembers.length > 0 ? (
                        facultyMembers.map((faculty, index) => (
                            <div
                                key={index}
                                className="bg-white p-6 rounded-xl shadow-lg text-center transition duration-300 hover:scale-105 hover:shadow-2xl"
                            >
                                {/* Faculty Image */}
                                <div className="relative w-32 h-32 mx-auto mb-4">
                                    <Image
                                        src={faculty.image}
                                        alt={faculty.name}
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>

                                <h3 className="text-2xl font-semibold text-blue-700">{faculty.name}</h3>
                                <p className="text-gray-600">{faculty.position}</p>
                                <p className="text-blue-500 font-medium">{faculty.department}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center text-gray-600">No faculty members available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
