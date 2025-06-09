import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-cyan-400">
        <div className="absolute inset-0 bg-black/90 z-10" />
        <div className="absolute inset-0">
          <Image
            src="/hero-image.jpg"
            alt="School building"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to the South Side</h1>
          <p className="text-xl mb-8">Empowering minds, home of the brave new world, inspiring the new generation and building tomorrow's leader.</p>
          <Link 
            href="/admissions"
            className="bg-blue-600 hover:bg-blue-700 text-cyan px-8 py-3 rounded-md text-lg font-semibold transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cyan-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence in Education</h3>
              <p className="text-gray-600">Providing high-quality education with experienced faculty and modern facilities.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Strong Community</h3>
              <p className="text-gray-600">Building lasting relationships between students, teachers, and parents.</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovative Learning</h3>
              <p className="text-gray-600">Embracing technology and modern teaching methods for better learning outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News & Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-cyan-400 rounded-lg shadow-md overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/news-${item}.jpg`}
                    alt={`News ${item}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">School Event Title</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <Link href="/news" className="text-blue-600 hover:text-blue-700 font-medium">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join Our School?</h2>
          <p className="text-xl mb-8">Take the first step towards a bright future with us.</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-md text-lg font-semibold transition-colors inline-block"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}
