const Page = () => {
    return (
        <main className="min-h-screen text-gray-50 bg-[#0f0f0f] ">

            {/* Hero Section with Background Image */}
            <section
                className="relative h-[60vh] flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        <u>About Us</u>
                    </h1>

                    <div className="flex items-center justify-center gap-2 text-xl">
                        <span className="text-gray-300 font-semibold"><a href="Home">Home</a></span>
                        <span className="text-gray-400 font">{">"}</span>
                        <span className="text-orange-500 font-semibold"><a href="aboutus.tsx">About Us</a></span>
                    </div>
                </div>
            </section>


            {/* Hero Section */}
            <section className="bg-[#0f0f0f] text-white py-20 px-6">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-orange-500 text-4xl md:text-5xl font-bold mb-6">
                        FYP Solutions
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        Turning innovative ideas into impactful digital realities through
                        professional Final Year Project development and modern IT solutions.
                    </p>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-[#0f0f0f] text-[#aaa] py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-orange-500 text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="mb-4 leading-relaxed">
                            FYP Solutions specializes in Final Year Project (FYP) development,
                            web applications, software systems, and research-driven IT services.
                        </p>
                        <p className="leading-relaxed">
                            Because your project is more than an assignment. It represents
                            your skills, ambition, and future career path.
                        </p>
                    </div>

                    <div className="bg-orange-500 text-[#ffffff] shadow-lg rounded-2xl p-8">
                        <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                        <p className="leading-relaxed">
                            To deliver high-quality, research-based, and fully functional
                            technology solutions that empower students and businesses to
                            succeed in today’s competitive digital landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 px-6 bg-[#0f0f0f] text-[#aaa]">
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
                            Advanced Machine Learning and AI-based project development including
                            data analysis, predictive modeling, intelligent systems, and real-world
                            problem-solving using Python, TensorFlow, and modern ML frameworks.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-[#0f0f0f] py-16 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
                    <div className="bg-orange-500 text-[#ffffff] rounded-2xl shadow-lg p-8">
                        <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
                        <ul className="space-y-3">
                            <li>✔ Professional and research-driven approach</li>
                            <li>✔ On-time project delivery</li>
                            <li>✔ 100% original and customized solutions</li>
                            <li>✔ Affordable pricing</li>
                            <li>✔ Ongoing support and clear communication</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-[#ffffff] text-3xl font-bold mb-6">Our Vision</h2>
                        <p className="leading-relaxed text-[#aaa]">
                            To become a trusted name in academic project development and
                            innovative digital solutions across Pakistan and beyond.
                        </p>
                    </div>
                </div>
            </section>

        </main>
    )
}
export default Page