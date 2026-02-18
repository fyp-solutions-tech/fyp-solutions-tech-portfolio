const Page = () => {
    return (
        <main className="min-h-screen bg-linear-to-br from-base-200 via-base-100 to-base-200 flex items-center justify-center px-6 py-20">
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
        </main>
    )
}

export default Page