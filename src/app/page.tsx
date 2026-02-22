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
          <div className="flex-1 flex justify-center ">
            <div className="hidden md:block md:size-150">
              <Image
                src="/showcase_img.png"
                width={1000}
                height={1000}
                alt="Team Member"
                className=" object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6">
        <div className="relative z-10 text-center px-6 mb-15">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our Professional Services
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto ">
            Web Development, Machine Learning Solutions, and Professional IT
            Consultancy
          </p>
        </div>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Web Development */}
          <div className="bg-orange-500 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">
              Web Development Services
            </h2>
            <p className="mb-4 leading-relaxed">
              We design and develop modern, scalable, and SEO-optimized websites
              using technologies like React.js and Node.js.
            </p>
            <ul className="space-y-2 text-sm">
              <li>✔ Responsive Website Development</li>
              <li>✔ Custom Web Applications</li>
              <li>✔ SEO-Friendly Architecture</li>
              <li>✔ Backend & Database Integration</li>
              <li>✔ Performance Optimization</li>
            </ul>
          </div>

          {/* Machine Learning */}
          <div className="bg-orange-500 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">
              Machine Learning Solutions
            </h2>
            <p className="mb-4 leading-relaxed">
              We develop intelligent systems powered by data, including
              predictive models and AI-based solutions.
            </p>
            <ul className="space-y-2 text-sm">
              <li>✔ Predictive Modeling</li>
              <li>✔ Data Analysis & Visualization</li>
              <li>✔ AI-Based Academic Projects</li>
              <li>✔ Image & Text Classification</li>
              <li>✔ Automation Solutions</li>
            </ul>
          </div>

          {/* Consultancy */}
          <div className="bg-orange-500 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
            <h2 className="text-2xl font-bold text-white mb-4">
              Professional IT Consultancy
            </h2>
            <p className="mb-4 leading-relaxed">
              Strategic guidance to help you select the right technology stack
              and build scalable, cost-effective solutions.
            </p>
            <ul className="space-y-2 text-sm">
              <li>✔ Technology Selection</li>
              <li>✔ System Architecture Planning</li>
              <li>✔ Project Feasibility Analysis</li>
              <li>✔ Academic Project Guidance</li>
              <li>✔ Digital Transformation Strategy</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-[] text-white py-5 px-2   bg-base-100 ">
        <div className="max-w-6xl mx-auto text-center ">
          <h1 className="text-orange-500 text-4xl md:text-5xl font-bold mb-2">
            About Us
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Turning innovative ideas into impactful digital realities through
            professional Final Year Project development and modern IT solutions.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6  bg-base-100  text-[#aaa]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-[#ffffff] text-3xl font-bold mb-4">What We Do</h2>
          <p className="max-w-2xl mx-auto ">
            Comprehensive development services tailored for academic and
            business success.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-orange-500 text-[#ffffff] rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Final Year Project Development
            </h3>
            <p className="leading-relaxed">
              Complete FYP solutions including research documentation,
              development, deployment guidance, and presentation preparation.
            </p>
          </div>

          <div className="bg-orange-500 text-[#ffffff] rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Web Development Services
            </h3>
            <p className="leading-relaxed">
              Responsive, fast-loading, and SEO-optimized websites built using
              modern technologies like React.js.
            </p>
          </div>

          <div className="bg-orange-500 text-[#ffffff] rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-3">
              Machine Learning Solutions
            </h3>
            <p className="leading-relaxed">
              Advanced Machine Learning and AI-based project development
              including data analysis, predictive modeling, intelligent systems,
              and real-world problem-solving using Python, TensorFlow, and
              modern ML frameworks.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-16">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

                {/* Left Section */}
                <div className="space-y-8">
                    <div>
                        <h1 className="text-orange-500  text-4xl md:text-5xl font-extrabold leading-tight">
                            Let&apos;s Build Something Great Together
                        </h1>
                        <p className="mt-4 text-lg text-base-content/70 max-w-lg">
                            Have a project in mind? Whether it&apos;s web development, machine learning,
                            or professional consultancy, FYP Solutions is ready to help you turn
                            ideas into scalable digital solutions.
                        </p>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="card bg-base-100 shadow-2xl rounded-3xl p-10 border border-zinc-700">
                    <h2 className="text-3xl font-bold mb-6 text-center">
                        Contact Us
                    </h2>

                    <form className="space-y-7">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text mb-2">First Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="input input-bordered w-full focus:input-primary"
                                    required
                                />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text mb-2">Last Name</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="input input-bordered w-full focus:input-primary"
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text mb-2">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Enter Your E-mail"
                                className="input input-bordered w-full focus:input-primary"
                                required
                            />
                        </div>

                        <div className="form-control w-full m-0 p-0">
                            <label className="label">
                                <div className="label-text mb-2">Message</div>
                            </label>

                        </div>
                        <div>
                            {/* <input type="text" placeholder="Type here" className="input w-full h-30" /> */}
                            <textarea className="textarea w-full h-30" placeholder="Type Here" required></textarea>
                        </div>
                        <button className="btn btn-primary bg-orange-500  w-full text-lg text-bold rounded-lg border-none shadow-lg hover:scale-[1.02] transition-transform duration-200">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
      </section>
    </main>
  );
}
