import { navLinks } from "../../constants";

export default function Navbar() {
    return (
        <header className="navbar backdrop-blur-md bg-black/30 border-b border-white-50/10">
            <div className="inner">
                <a className="logo" href="#hero">Martynas Juška</a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li key={name} className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline"></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">
                        <span>Contact me</span>
                    </div>
                </a>
            </div>
        </header>
    )
}