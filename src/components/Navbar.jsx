import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Let'<span style={{ color: "#00ffcc" }}>s</span> Play</h1>

      <button
        className="nav-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`hamburger ${menuOpen ? "open" : ""}`} />
      </button>

      <ul className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
        <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        <li className="nav-cta-mobile">
          <button onClick={() => setMenuOpen(false)}>Get Started</button>
        </li>
      </ul>

      <button className="nav-cta-desktop">Get Started</button>
    </nav>
  );
};

export default Navbar;