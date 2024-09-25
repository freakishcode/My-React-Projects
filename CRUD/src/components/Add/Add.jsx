import "./Add.css";

// TODO: Using AXIOS LIBRARY
import axios from "axios";

// TODO: REACT HOOK FORM (external library) for form control
import { useForm } from "react-hook-form"; // npm i react-hook-form

// external library for form validation for REACT HOOK FORM
import * as yup from "yup"; //

// REGEX UTILITIES
// import { passWordRegex, phoneRegExp } from "../../Utilities/utils";

//Medium to connect both yup & REACT HOOK FORM libraries
import { yupResolver } from "@hookform/resolvers/yup";

// TODO: React router (external library)
import { Link, useNavigate } from "react-router-dom";

// TODO: Material UI library
import {
  Box,
  Stack,
  Avatar,
  Button,
  TextField,
  MenuItem,
  InputAdornment,
} from "@mui/material";

// MATERIAL UI ICONS
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import HowToRegIcon from "@mui/icons-material/HowToReg";

// TODO: DATA BASE JSON
import { BASE_URL } from "../../../data/BaseURL";

function Add() {
  // form validation from yup library
  const schema = yup.object().shape({
    full_name: yup.string().required("Full name is required"),
    email: yup.string().email("Invalid email format").required(),
    gender: yup.string().required("Gender is required"),
    phone: yup
      .string()
      .required("Phone No is required")
      .matches(/^\d{11}$/, "Phone No must be 11 digits"),
  });

  const {
    register, // for collecting input data
    handleSubmit, // Responsible for form submission
    formState: { errors }, // error displace
    // setError,
  } = useForm({
    // integrating Zod Into REACT HOOK FORM
    resolver: yupResolver(schema),
  });

  //   TO NAVIGATE BACK TO THE HOME PAGE
  const navigateBack = useNavigate();

  // submitting form
  const SubmitForm = (data) => {
    // const date = new Date();
    // const DateCreated = {
    //   id: date.getTime(),
    //   time: `${date.toLocaleTimeString()} ${date.toLocaleDateString}`,
    // };

    axios
      .post(BASE_URL, data)
      .then((res) => console.log(res), navigateBack("/"))
      .catch((err) => console.error(err));
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(SubmitForm)}>
        <Avatar sx={{ m: "auto", bgcolor: "secondary.main" }}>
          <HowToRegIcon />
        </Avatar>
        <h1>Register User</h1>

        {/* A line drawn */}
        <div className='line'></div>

        <Stack spacing={3} direction='column'>
          {/* MATERIAL UI INPUTS */}
          <Stack spacing={4} direction='column'>
            {/* FULL NAME */}
            <TextField
              label='Full Name'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PersonIcon />
                  </InputAdornment>
                ),
              }}
              {...register("full_name")}
            />
            {/* Display Error */}
            {errors.full_name && <span>{errors.full_name.message}</span>}

            {/* Email */}
            <TextField
              label='Email'
              size='small'
              type='email'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
              {...register("email")}
            />
            {/* Display Error */}
            {errors.email && <span>{errors.email.message}</span>}

            {/* Gender */}
            <Box width='100%'>
              <TextField
                label='Select Gender'
                size='small'
                fullWidth
                select
                {...register("gender")}
              >
                <MenuItem value='Male'>Male</MenuItem>
                <MenuItem value='Female'>Female</MenuItem>
              </TextField>
            </Box>
            {/* Display Error */}
            {errors.gender && <span>{errors.gender.message}</span>}

            {/* Phone Number */}
            <TextField
              label='Phone No'
              size='small'
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <PhoneIcon />
                  </InputAdornment>
                ),
                startAdornment: (
                  <InputAdornment position='start'>+234</InputAdornment>
                ),
              }}
              {...register("phone")}
            />
            {/* Display Error */}
            {errors.phone && <span>{errors.phone.message}</span>}
          </Stack>

          {/* BUTTON TO SUBMIT FORM */}
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
                color='info'
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
              Submit
            </Button>
          </Box>
        </Stack>
      </form>
    </div>
  );
}

export default Add;
