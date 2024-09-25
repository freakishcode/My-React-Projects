import { useState, useEffect } from "react";
import "./Edit.css";

// TODO: Using AXIOS LIBRARY
import axios from "axios";

// TODO: using REACT ROUTER (External library)
import { Link, useNavigate, useParams } from "react-router-dom";

// TODO: Material UI library
import {
  Stack,
  Button,
  Avatar,
  TextField,
  InputAdornment,
  Box,
  MenuItem,
} from "@mui/material";

// MATERIAL UI ICONS
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import HowToRegIcon from "@mui/icons-material/HowToReg";

// TODO: DATA BASE JSON
import { BASE_URL } from "../../../data/BaseURL";

function Edit() {
  //   tO GET THE ID OF A DATA
  const { id } = useParams();

  // store input value
  const [Values, setValues] = useState({
    full_name: "",
    email: "",
    gender: "",
    phone: "",
  });

  // state to store errors
  // const [errors, setErrors] = useState();

  // const userData = {
  //   firstName: firstName.current.value,
  //   lastName: lastName.current.value,
  //   email: email.current.value,
  //   phone: phone.current.value,
  // };

  // GET THE DATA TO BE UPDATE AND DISPLAY IN INPUT
  useEffect(() => {
    axios
      .get(BASE_URL + id)
      .then((res) => {
        setValues(res.data);
        if (!res.ok) throw "data not found";
      })
      .catch((err) => console.error(err));
  }, [id]);

  //   TO NAVIGATE BACK TO THE HOME PAGE
  const navigateBack = useNavigate();

  // to update form by id
  const handleUpdate = async (e) => {
    e.preventDefault();

    const confirm = window.confirm(
      "Are you sure you want to update this Details"
    );
    if (confirm) {
      await axios
        .put(BASE_URL + id, Values)
        .then(
          (res) => console.log("Form Updated", res),
          navigateBack("/"),
          location.reload()
        )
        .catch((err) => console.error(err));
    }
  };

  return (
    <div className='update_container'>
      <form onSubmit={handleUpdate}>
        <Avatar sx={{ m: "auto", bgcolor: "secondary.main" }}>
          <HowToRegIcon />
        </Avatar>
        <h1>Edit Details</h1>

        <Stack spacing={3} direction='column'>
          {/* MATERIAL UI INPUTS */}
          <Stack spacing={4} direction='column'>
            {/* FULL NAME */}
            <TextField
              label='Full Name'
              size='small'
              required
              value={Values.full_name}
              onChange={(e) =>
                setValues({ ...Values, full_name: e.target.value })
              }
            />
            {/* Display Error */}

            {/* EMAIL */}
            <TextField
              label='Email'
              type='email'
              size='small'
              required
              value={Values.email}
              onChange={(e) => setValues({ ...Values, email: e.target.value })}
            />
            {/* Display Error */}

            {/* Gender */}
            <Box width='100%'>
              <TextField
                label='Select Gender'
                size='small'
                fullWidth
                select
                value={Values.gender}
                onChange={(e) =>
                  setValues({ ...Values, gender: e.target.value })
                }
              >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </TextField>
            </Box>
            {/* Display Error */}

            {/* PHONE NUMBER */}
            <TextField
              label='Phone No'
              size='small'
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>+234</InputAdornment>
                ),
              }}
              required
              value={Values.phone}
              onChange={(e) => setValues({ ...Values, phone: e.target.value })}
            />
            {/* Display Error */}
          </Stack>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            {/* React router Link */}
            <Link to='/'>
              <Button
                variant='contained'
                size='small'
                endIcon={<KeyboardReturnIcon />}
              >
                Back
              </Button>
            </Link>

            {/* Material UI button */}
            <Button
              type='submit'
              variant='contained'
              color='success'
              size='small'
              endIcon={<CheckCircleOutlineIcon style={{ color: "white" }} />}
            >
              Update
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
}

export default Edit;
