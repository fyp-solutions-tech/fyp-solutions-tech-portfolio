




const Page = () => {
    return (
        <main className="min-h-screen text-gray-50 bg-[#0f0f0f]">

            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center text-white"
                style={{
                    backgroundImage: "url(/Employees.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 text-center px-6">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 ">
                       <u>Services</u>
                    </h1>

                    <div className="flex items-center justify-center gap-2 p-10 text-xl">
                        <span className="text-gray-300 font-semibold"><a href="Home">Home</a></span>
                        <span className="text-gray-400 font-bold">{">"}</span>
                        <span className="text-orange-500 font-semibold"><a href="services.tsx">Services</a></span>
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
                        Web Development, Machine Learning Solutions, and Professional IT Consultancy
                    </p>
                </div>
                <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

                    {/* Web Development */}
                    <div className="bg-orange-500 rounded-2xl shadow-lg p-8 hover:scale-105 transition-transform duration-300">
                        <h2 className="text-2xl font-bold text-white mb-4">
                            Web Development Services
                        </h2>
                        <p className="mb-4 leading-relaxed">
                            We design and develop modern, scalable, and SEO-optimized websites using technologies like React.js and Node.js.
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
                            We develop intelligent systems powered by data, including predictive models and AI-based solutions.
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
                            Strategic guidance to help you select the right technology stack and build scalable, cost-effective solutions.
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

            {/* Why Choose Us */}
            <section className="py-16 px-6 ">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Why Choose FYP Solutions?
                    </h2>
                    <p className="leading-relaxed mb-6">
                        We combine research-driven methodologies, industry-standard practices, and client-focused development to deliver impactful technology solutions across Pakistan.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>✔ On-Time Delivery</div>
                        <div>✔ Affordable Pricing</div>
                        <div>✔ Customized Solutions</div>
                        <div>✔ Dedicated Support</div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Let&apos;s Build Something Exceptional
                </h2>
                <p className="max-w-2xl mx-auto mb-8">
                    Whether you need a professional website, an AI-powered solution, or expert consultancy, FYP Solutions is ready to transform your ideas into powerful digital products.
                </p>
                <button className="bg-orange-500 text-white px-8 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform duration-300">
                    Contact Us
                </button>
            </section>

        </main>
    )
}
export default Page