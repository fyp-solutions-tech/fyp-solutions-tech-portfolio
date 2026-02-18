import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="px-6 lg:px-20 py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-gray-400 mb-3">
              Professional Development Services
            </p>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              Final Year <br />
              <span className="text-orange-500">Project Solutions</span>
            </h1>

            <p className="mt-6 text-gray-300 max-w-xl mx-auto lg:mx-0">
              We design and develop high-quality Final Year Projects in Web
              Development, Mobile Applications, AI Systems, and Software
              Engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <button className="btn bg-orange-500 border-none hover:bg-orange-600">
                Get Your Project
              </button>

              <button className="btn btn-outline border-gray-500 text-white">
                Download Portfolio
              </button>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start gap-10 mt-12 flex-wrap">
              <div>
                <h2 className="text-orange-500 text-2xl font-bold">50+</h2>
                <p className="text-gray-400 text-sm">Projects Completed</p>
              </div>

              <div>
                <h2 className="text-orange-500 text-2xl font-bold">30+</h2>
                <p className="text-gray-400 text-sm">Happy Clients</p>
              </div>

              <div>
                <h2 className="text-orange-500 text-2xl font-bold">5+</h2>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-base-200 overflow-hidden shadow-lg">
              <Image
                src="/image.png"
                width={300}
                height={300}
                alt="Team Member"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Web Development</h2>
              <p>MERN stack & modern responsive websites.</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">Mobile Apps</h2>
              <p>React Native Android & iOS applications.</p>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">AI Projects</h2>
              <p>Machine learning & intelligent systems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="px-6 lg:px-20 py-16 bg-base-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-orange-500 mb-6">
            About FYP Solutions
          </h2>
          <p className="text-gray-300">
            We are dedicated to helping students complete professional and
            industry-standard Final Year Projects with complete documentation,
            source code, and deployment guidance.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="px-6 lg:px-20 py-16">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Contact Us
        </h2>

        <div className="max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Your Name"
            className="input input-bordered w-full mb-4 bg-base-200"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full mb-4 bg-base-200"
          />
          <textarea
            placeholder="Your Message"
            className="textarea textarea-bordered w-full mb-4 bg-base-200"
          ></textarea>
          <button className="btn bg-orange-500 border-none hover:bg-orange-600 w-full">
            Send Message
          </button>
        </div>
      </section>
    </main>
  );
}
