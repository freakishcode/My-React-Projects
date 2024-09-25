import { useState, useEffect } from "react";
import "./Contact.css";

function Contact() {
  // store input value
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    password: "",
  });
  // store form errors
  const [formErrors, setFormErrors] = useState({});
  // storing form if submitted
  const [isSubmit, setIsSubmit] = useState(false);

  // input Handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // submitting form
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, isSubmit, formValues]);

  // FORM VALIDATION
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    // USERNAME VALIDATION
    if (!values.username) {
      errors.username = "Username is required!";
    }

    // EMAIL VALIDATION
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    // PASSWORD VALIDATION
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className='formContainer'>
          {/* USERNAME */}
          <div className='field'>
            <label htmlFor='fullName'>Username</label>
            <input
              type='text'
              id='fullName'
              name='username'
              placeholder='Username'
              value={formValues.username}
              onChange={handleChange}
            />
            {/* Display Error */}
            <span>{formErrors.username}</span>
          </div>

          {/* EMAIL */}
          <div className='field'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              id='email'
              name='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
            {/* Display Error */}
            <span>{formErrors.email}</span>
          </div>

          {/* PASSWORD */}
          <div className='field'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={formValues.password}
              onChange={handleChange}
            />
            {/* Display Error */}
            <span>{formErrors.password}</span>
          </div>
        </div>
        {/* BUTTON TO SUBMIT FORM */}
        <button type='submit' className='btn_aj'>
          Submit
        </button>
      </form>

      {/* DISPLAY FORM DATA*/}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <h2 className='ui message success'>Signed in successfully</h2>
      ) : (
        <div className='display'>
          <h3>Form data</h3>
          {JSON.stringify(formValues, undefined, 2)}
        </div>
      )}
    </div>
  );
}

export default Contact;
