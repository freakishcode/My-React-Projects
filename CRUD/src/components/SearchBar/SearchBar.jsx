import { useContext } from "react";
import "./SearchBar.css";

// importing the created context FROM HOME COMPONENT
import { Context } from "../../Pages/Home";

// Material UI library (external library)
import { IconButton } from "@mui/material";

// MATERIAL UI ICONS
import SavedSearchIcon from "@mui/icons-material/SavedSearch";

function SearchBar() {
  const { data, setInputRecords } = useContext(Context);

  //   SEARCH INPUT FIELD Event Handler
  const handleFilter = (event) => {
    setInputRecords(
      data.filter(
        (filterFor) =>
          // filter by users full_names
          filterFor.full_name
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          // OR filter by users phone no
          filterFor.phone
            .toLowerCase()
            .includes(event.target.value.toLowerCase()) ||
          // OR filter by email
          filterFor.email
            .toLowerCase()
            .includes(event.target.value.toLowerCase())
      )
    );
  };

  return (
    <div className='SearchBar'>
      <input
        type='search'
        onChange={handleFilter}
        placeholder='Make Search by first or last name or email '
      />
      {/* SEARCH ICON */}
      <IconButton>
        <SavedSearchIcon />
      </IconButton>
    </div>
  );
}

export default SearchBar;
