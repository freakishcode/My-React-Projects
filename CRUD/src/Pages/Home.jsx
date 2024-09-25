import { useState, useEffect, createContext } from "react";

import axios from "axios";

// React Router Link (external library)
import { Link } from "react-router-dom";

// Result Component
import SearchBar from "../components/SearchBar/SearchBar";

// useDEBOUNCE CUSTOM HOOK
import useDebounce from "../Hooks/useDebounce";

// Result Component
import TableResult from "../components/DashboardResult/TableResult";

// PAGINATION BUTTONS
// import Page from "../Utilities/MUIPagination";
// import Pagination from "../Utilities/Pagination";

// TODO: DATA BASE JSON
import { BASE_URL } from "../../data/BaseURL";

// provide a Context and export it for consumption
export const Context = createContext(undefined);

function Home() {
  // State to store Fetch json API data
  const [data, setData] = useState([]);

  // state to store input search value to be filtered
  const [InputRecords, setInputRecords] = useState([]);

  // CUSTOM HOOK TO DELAY SEARCH INPUT TYPED
  const DebounceSearchValue = useDebounce(InputRecords, 1000);

  // fetching data from backend dataBase (using json server)
  const FetchMethod = async function () {
    await axios
      .get(BASE_URL)
      .then((res) => {
        setData(res.data);
        setInputRecords(res.data);
      })
      .catch((err) => console.error(` The API Data fetched is : ${err.data}`));
    // console.log(res.data);
  };

  // Insert fetch data into useEffect for sideEffect
  useEffect(() => {
    FetchMethod();
  }, []); // the dependency

  return (
    <>
      <header>
        <h1>C.R.U.D Project</h1>
        <span>Records: {data.length} users</span>
      </header>

      {/* create in C.R.U.D */}
      <div className='add_Link_container'>
        <Link to='/Create' className='add_btn'>
          Create/Add +
        </Link>
      </div>

      {/* Search INPUT FIELD */}
      <Context.Provider value={{ data, setInputRecords }}>
        <SearchBar />
      </Context.Provider>

      {/* Read Result and pass data to be accessed by TableResult*/}
      <Context.Provider value={DebounceSearchValue}>
        <TableResult />
      </Context.Provider>

      {/* PAGINATION BUTTONS */}
      {/* <Page /> */}
      {/* <Pagination data={InputRecords} /> */}
    </>
  );
}

export default Home;
