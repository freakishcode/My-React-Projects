import "./Search.css";

// REACT ICON FOR SEARCH BUTTON
import { FaSearch } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
function SearchBar({ Location, setLocation, SearchLocation }) {
  return (
    <>
      <div className='searchBar'>
        {/* input field */}
        <input
          onKeyUp={SearchLocation}
          type='search'
          value={Location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Search Your Desired Location'
        />

        {/* search button and icon */}
        <button className='searchBtn'>
          <FaSearch className='SearchIcon' />
        </button>
      </div>
    </>
  );
}

export default SearchBar;
