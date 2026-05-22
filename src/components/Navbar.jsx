function Navbar() {

  return (

    <nav className="fixed top-0 left-0 w-full bg-[#0b1120]/80 backdrop-blur-md border-b border-zinc-800 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* LOGO */}

        <h1 className="text-3xl font-bold text-cyan-400">

          Portfolio.

        </h1>

        {/* NAV LINKS */}

        <ul className="flex gap-10 text-lg font-medium">

          <li>
            <a
              href="#home"
              className="hover:text-cyan-400 transition-all"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-cyan-400 transition-all"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-cyan-400 transition-all"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#portfolio"
              className="hover:text-cyan-400 transition-all"
            >
              Portfolio
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-cyan-400 transition-all"
            >
              Contact
            </a>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;