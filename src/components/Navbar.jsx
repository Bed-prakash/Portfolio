import { NavLink } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

const navLinkClass = ({ isActive }) =>
  isActive
    ? 'relative text-blue-500 font-semibold after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-full after:bg-blue-500 after:transition-all after:duration-500'
    : 'relative hover:text-blue-400 after:content-[""] after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-blue-400 after:transition-all after:duration-500 transition duration-300'

  return (
    <nav className='bg-black text-white shadow-md sticky top-0 z-50'>

      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>

        <div className='flex justify-between items-center h-16'>

          {/* Logo */}
          <h1 className='text-xl sm:text-2xl font-bold'>
            Bedprakash Portfolio
          </h1>

          {/* Desktop Menu */}
          <div className='hidden md:flex items-center gap-8 text-lg'>

            <NavLink to='/' className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to='/about' className={navLinkClass}>
              About
            </NavLink>

            <NavLink to='/projects' className={navLinkClass}>
              Projects
            </NavLink>

            <NavLink to='/contact' className={navLinkClass}>
              Contact
            </NavLink>

          </div>

          {/* Mobile Button */}
          <button
            className='md:hidden text-white text-3xl'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (

          <div className='md:hidden flex flex-col gap-5 py-5 text-center bg-black text-lg'>

            <NavLink
              to='/'
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Home
            </NavLink>

            <NavLink
              to='/about'
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              About
            </NavLink>

            <NavLink
              to='/projects'
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Projects
            </NavLink>

            <NavLink
              to='/contact'
              onClick={() => setMenuOpen(false)}
              className={navLinkClass}
            >
              Contact
            </NavLink>

          </div>

        )}

      </div>

    </nav>
  )
}

export default Navbar