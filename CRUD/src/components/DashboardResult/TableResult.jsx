import { useContext } from "react";
import "./TableResult.css";

// AXIOS
import axios from "axios";

// importing the created context FROM HOME COMPONENT
import { Context } from "../../Pages/Home";

// React router library
import { Link } from "react-router-dom";

// Material UI library
import { Button, Stack } from "@mui/material";

// MATERIAL UI ICONS
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// TODO: DATA BASE JSON
import { BASE_URL } from "../../../data/BaseURL";

function TableResult() {
  // Array of object table header listing for iteration
  const TableHeader = [
    { id: "id", name: "ID" },
    { id: "name", name: "Full Name" },
    { id: "email", name: "Email" },
    { id: "gender", name: "Gender" },
    { id: "phone", name: "Mobile No" },
  ];

  //  collecting or consuming the data to be use from the context API
  const ContextConsumer = useContext(Context);

  // Condition to check if the data to be used is provide to the parent component
  if (ContextConsumer === undefined) {
    throw new Error(
      "You forgot to wrap your context name in a provider and provide a value"
    );
  }

  // TO DELETE USER BY ID
  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this user");
    if (confirm) {
      await axios
        .delete(BASE_URL + id)
        .then(() => location.reload())
        .catch((err) =>
          console.error(` The ${err.data} was not deleted Successfully  `)
        );
    }
  };

  return (
    <div className='TableContainer'>
      {/* Title */}
      <h2>List of Users</h2>

      <table>
        {/* table header */}
        <thead>
          {/* iterating the table header name than listing each name */}
          <tr>
            {TableHeader.map((column) => (
              <th key={column.id}>{column.name}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>

        {/* table content */}
        <tbody>
          {ContextConsumer.slice(0, 7).map((records, id) => (
            <tr key={id}>
              <td>{records.id}</td>
              <td>{records.full_name}</td>
              <td>{records.email}</td>
              <td>{records.gender}</td>
              <td>{records.phone}</td>

              {/* ACTION TABLE BUTTON */}
              <td className='Action_Btn'>
                <Stack direction='row' spacing={3}>
                  {/* Read: CRUD */}
                  <Link to={`/Read/${records.id}`}>
                    <Button
                      variant='contained'
                      startIcon={<AutoStoriesIcon style={{ color: "white" }} />}
                      className='table_btn'
                    >
                      Read
                    </Button>
                  </Link>

                  {/* Update: CRUD */}
                  <Link to={`/Update/${records.id}`}>
                    <Button
                      variant='contained'
                      color='warning'
                      endIcon={<UpdateIcon style={{ color: "white" }} />}
                      className='table_btn'
                    >
                      Update
                    </Button>
                  </Link>

                  {/* Delete:  CRUD */}
                  <Button
                    variant='contained'
                    color='error'
                    endIcon={<DeleteForeverIcon />}
                    className='table_btn'
                    onClick={() => handleDelete(records.id)}
                  >
                    Delete
                  </Button>
                </Stack>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TableResult;
