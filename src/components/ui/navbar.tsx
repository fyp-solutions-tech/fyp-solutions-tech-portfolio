import Link from "next/link"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo">FYP<span>Solutions</span></div>

            <ul className="nav-links">
                <li>Home</li>
                <li>Services</li>
                <li>About</li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>Contact</li>
            </ul>

            <button className="hire-btn">Hire Us</button>
        </nav>
    )
}

export default Navbar