// REACT ROUTER LINKS
import { Link, Outlet } from "react-router-dom";

// CSS
import "./Help.css";

// NAVIGATION TO RETURN BACK IN A NESTED ROUTE
import BreadCrumbs from "../../components/BreadCrumbs/BreadCrumbs";
function Contact() {
  return (
    <div className='help'>
      <h3>
        {/* COMPONENT TO SHOW THE LOCATION OF A PAGE ROUTE */}
        <BreadCrumbs />
      </h3>

      <Link to='Contact'>
        <h4>Contact</h4>
      </Link>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Contact;
