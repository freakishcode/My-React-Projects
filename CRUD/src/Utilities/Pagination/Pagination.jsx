import { useState } from "react";
import "./Pagination.css";

function Pagination(data) {
  const [PageTotal, setPageTotal] = useState(10);
  const [PerPage, setPerPage] = useState(1);
  const [currentPage] = useState(data);

  const TotalPage = Math.ceil(currentPage.length / setPageTotal);
  const Pages = [...Array(TotalPage + 1).keys()].slice(1);

  return (
    <>
      <button onClick={(e) => setPage(e.target.value)}>Previous</button>
      <p>
        {Pages.map((page) => (
          <span key={page}>{`${page} |`}</span>
        ))}
      </p>
      <button onClick={setPerPage((e) => e.target.value)}>Next</button>
    </>
  );
}

export default Pagination;
