// Css
import "./NotFound.css";

// REACT ROUTER LINKS
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className='Error-msg'>
      <header>
        <h1>Sorry, Page not Found!</h1>
      </header>

      <p>
        The Component Page you are looking for does not exits or is not found.
        Please reload the page or check if the URL is correct. if issue keep
        persisting please contact our help page for Assistance, our you can call
        our help service Number +2340000000 or Visit our secondary website for
        more help for what to do?
      </p>

      {/* Home PAGE COMPONENT */}
      <footer>
        <p>
          Go back to the <Link to='/'>HomePage</Link>
        </p>
      </footer>
    </div>
  );
}

export default NotFound;
