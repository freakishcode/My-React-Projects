import { useState } from "react";
// CSS
import "./RootLayout.css";

// REACT ROUTER LINKS
import { Link, NavLink, Outlet } from "react-router-dom";

// REACT ICON FOR TOGGLER AND CANCEL BUTTON
import {
  FaBars,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

function RootLayout() {
  // STATE TO TOGGLE SIDE BAR ICONS
  const [Toggler, setToggler] = useState(false);

  const ShowNavBar = () => setToggler(!Toggler);

  return (
    <>
      <header>
        <nav className='Navigation'>
          {/* Text nav header */}
          <Link to='/' className='Nav-logo'>
            <h1 className='Text-logo'>Daily Times</h1>
          </Link>

          {/* Navigation: NOTE both Route path and link must be the same for it to work  */}
          <ul className={Toggler ? "open-NavBar " : null}>
            <li>
              <NavLink to='/' onClick={ShowNavBar}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to='About' onClick={ShowNavBar}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='Help' onClick={ShowNavBar}>
                Help
              </NavLink>
            </li>
          </ul>

          {/* Social Media Link */}
          <ul>
            <li>
              <Link to='/'>
                <FaFacebook className='Facebook' />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaTwitter className='Twitter' />
              </Link>
            </li>
            <li>
              <Link to='/'>
                <FaInstagram className='Instagram' />
              </Link>
            </li>
          </ul>

          {/* TOGGLER ICON BUTTON*/}
          <button className='nav-btn' onClick={ShowNavBar}>
            {Toggler ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Component to return back back to parent for nested route only*/}
      </header>

      <main>
        {/* TO DISPLAY WHAT'S INSIDE THE LINKS OR NavLINKS */}
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
