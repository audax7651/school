import Image from 'next/image';
import Link from 'next/link';

export default function Academics() {
  const programs = [
    {
      level: 'Elementary School',
      grades: 'Grades K-5',
      description: 'Our elementary program focuses on building strong foundations in core subjects while nurturing creativity and curiosity.',
      subjects: ['Mathematics', 'Language Arts', 'Science', 'Social Studies', 'Art', 'Physical Education']
    },
    {
      level: 'Middle School',
      grades: 'Grades 6-8',
      description: 'Middle school students engage in challenging coursework that prepares them for high school while developing critical thinking skills.',
      subjects: ['Advanced Mathematics', 'Literature', 'Laboratory Science', 'World History', 'Foreign Languages', 'Technology']
    },
    {
      level: 'High School',
      grades: 'Grades 9-12',
      description: 'Our high school program offers rigorous academic preparation for college with diverse course offerings and AP classes.',
      subjects: ['AP Courses', 'College Prep', 'STEM Programs', 'Humanities', 'Arts & Music', 'Athletics']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">Academics</h1>
          <p className="mt-4 text-xl text-center max-w-3xl mx-auto">
            Providing comprehensive education programs that challenge and inspire students at every level.
          </p>
        </div>
      </section>

      {/* Academic Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Academic Programs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.level} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{program.level}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{program.grades}</p>
                  <p className="text-gray-600 mb-6">{program.description}</p>
                  <h4 className="font-semibold mb-2">Core Subjects:</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {program.subjects.map((subject) => (
                      <li key={subject}>{subject}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Approach Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Curriculum Approach</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Our curriculum is designed to challenge students while providing the support they need to succeed. We combine traditional academic rigor with innovative teaching methods to create an engaging learning environment.
                </p>
                <p className="text-gray-600">
                  We emphasize:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Critical thinking and problem-solving skills</li>
                  <li>Project-based learning opportunities</li>
                  <li>Integration of technology in education</li>
                  <li>Collaborative learning environments</li>
                  <li>Individual attention and support</li>
                </ul>
              </div>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/curriculum.jpg"
                alt="Students learning"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Special Programs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Special Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">STEM Program</h3>
              <p className="text-gray-600 text-center">Advanced courses in Science, Technology, Engineering, and Mathematics.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Language Immersion</h3>
              <p className="text-gray-600 text-center">Intensive foreign language programs with native-speaking teachers.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center">Arts & Music</h3>
              <p className="text-gray-600 text-center">Comprehensive visual and performing arts programs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn More?</h2>
          <p className="text-xl mb-8">Schedule a visit to see our academic programs in action.</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold transition-colors inline-block"
          >
            Schedule a Visit
          </Link>
        </div>
      </section>
    </div>
  );
} 