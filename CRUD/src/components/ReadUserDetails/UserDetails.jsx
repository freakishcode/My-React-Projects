import "./UserDetails.css";

import { useEffect, useState } from "react";

// TODO: Using AXIOS LIBRARY
import axios from "axios";

// TODO: using REACT ROUTER (External library)
import { Link, useParams } from "react-router-dom";

// TODO: Material UI library
import { Paper, Avatar, Stack, Button } from "@mui/material";

// MATERIAL UI ICONS
import HowToRegIcon from "@mui/icons-material/HowToReg";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";

import { BASE_URL } from "../../../data/BaseURL";

function UserDetails() {
  const [data, setData] = useState([]);

  // state to store error message if data was not fetch successfully
  const [error, setError] = useState("");

  // parameter to target users id
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(BASE_URL + id)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
        console.error(` The API Data fetched is : ${err.data}`);
      });
  }, [id]);

  return (
    <Paper
      sx={{
        margin: "auto",
        marginTop: "4rem",
        padding: "1rem",
        width: "400px",
        height: "400px",
        background: "#eeee",
      }}
      elevation={4}
    >
      <Avatar sx={{ m: "auto", bgcolor: "secondary.main" }}>
        <HowToRegIcon />
      </Avatar>
      <h1>Details</h1>

      {/* A line drawn */}
      <div className='line'></div>

      <div className='user_details'>
        <strong>
          <PersonIcon />
          Full Name:
          {error ? <span>Unable to Fetch Data</span> : data.full_name}
        </strong>

        <strong>
          <EmailIcon />
          Email: {error ? <span>Unable to Fetch Data</span> : data.email}
        </strong>

        <strong>
          <PersonIcon />
          Gender:
          {error ? <span>Unable to Fetch Data</span> : data.gender}
        </strong>

        <strong>
          <PhoneIcon />
          Phone No: {error ? <span>Unable to Fetch Data</span> : data.phone}
        </strong>
      </div>

      <div className='btn_field'>
        <Stack direction='row' spacing={6}>
          {/* Update CRUD */}

          <Link to='/'>
            <Button
              variant='contained'
              color='error'
              size='small'
              endIcon={<KeyboardReturnIcon />}
            >
              Back
            </Button>
          </Link>

          {/* React router Link */}
          <Link to={`/Update/${data.id}`}>
            {/* Material UI button */}
            <Button
              variant='contained'
              color='info'
              size='small'
              endIcon={<CheckCircleOutlineIcon />}
            >
              Edit/ Update
            </Button>
          </Link>
        </Stack>
      </div>
    </Paper>
  );
}

export default UserDetails;
