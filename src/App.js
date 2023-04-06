import React from "react";
// Import useFormik from formik library
import {useFormik} from 'formik';

function App() {
  // Add a const called formik assigned to useFormik()
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, 
    onSubmit: values => {
      alert('Login Successful');
    }, 
    validate: values => {
      let errors = {};
      if (!values.email) {
        errors.email = 'Field required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Username should be an email';
      }
      if (!values.password) errors.password = 'Field required';
      return errors;
    }
  });

  return (
    <div class="login-form">
      <form onSubmit={formik.handleSubmit}>
        <label for="emailField">Email</label>
        <input id="emailField" class="form-control" name="email" type="text" onChange={formik.handleChange} value={formik.values.email}/>
        {formik.errors.email ? <div id="emailError" style={{color:'red'}}>{formik.errors.email}</div> : null}
        <label for="pswField">Password</label>
        <input id="pswField" class="form-control" name="password" type="text" onChange={formik.handleChange} value={formik.values.password}/>  
        {formik.errors.password ? <div id="pswError" style={{color:'red'}}>{formik.errors.password}</div> : null}
        <br/>
        <button id="submitBtn" class="btn btn-primary" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
