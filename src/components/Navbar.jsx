const Navbar = () => {
  return (
    <div className="navbar" >
        <h1>Let'<span style={{ color: "blue" }}>s</span> Play</h1>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <button>Get Started</button>
    </div>
  )
}

export default Navbar