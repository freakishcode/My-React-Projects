import { useState } from "react";
// Material UI library
import Pagination from "@mui/material/Pagination";

function MUIPagination() {
  // State to store Pagination
  const [ActivePage, setActivePage] = useState(1);

  // Page handler onChange
  const handlePage = (newPage) => {
    // console.log(newPage);
    setActivePage(newPage);
    // window.scroll(0, 0);
  };

  return (
    <div>
      <Pagination
        onChange={(e) => handlePage(e.target.textContent)}
        style={{
          marginTop: ".55rem",
          display: "flex",
          justifyContent: "center",
          color: "white",
          background: "#ffff",
          padding: ".55rem",
        }}
        count={10}
        page={ActivePage}
        color='secondary'
        shape='rounded'
        variant='outlined'
        showFirstButton
        showLastButton
      />
      <span style={{ display: "flex", justifyContent: "center" }}>
        Page: {ActivePage}
      </span>
    </div>
  );
}

export default MUIPagination;
