import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = (props) => {

  let Navigate = useNavigate();
  
  const [credentials, setCredentials] = useState({ username: "", password: "", cpassword: "" });
  const [confirmationChecked, setConfirmationChecked] = useState(false);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  };

  const handleConfirmationChecked = () => {
    setConfirmationChecked(!confirmationChecked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Api call
    const { username, password, cpassword } = credentials;

    if (password === cpassword) {

      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password, cpassword })
      });

      const json = await response.json()


      if (json.success) {

        // Saving the auth token in the local storge of the user

        localStorage.setItem('token', json.authtoken);
        props.showAlert("success", "Sucess", " Account Created Successfully");
        setCredentials({ username: "", password: "", cpassword: "" })
        Navigate('/'); 
        window.location.reload(false);


      }
      else {
        props.showAlert("danger", "Oops", " Account is not Created Try Again.");
      }
    }
    else {
      props.showAlert("danger", "Oops", " Passwords are not matching ensure both passwords must be same.");
    }
  }

  return (
    <div className="container ">
      <div className="columns font-fam-roboto mt-6">
        <div className="column mx-auto is-one-third bs-1 border-r-1 mt-2 has-background-light">
          <h1 className="is-size-4 my-4 text-link has-text-centered has-text-weight-bold">Signup to Create your Blogs</h1>

          <form className="mt-2 px-4">
            <div className="field">
              <label className="label">Username</label>
              <div className="control">
                <input
                  className="input"
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                  value={credentials.username}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Password</label>
              <div className="control is-flex is-justify-content-space-between">
                <input
                  className="input"
                  type="password"
                  autoComplete="off"
                  placeholder="Enter your password"
                  name="password"
                  value={credentials.password}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Confirm Password</label>
              <div className="control is-flex is-justify-content-space-between">
                <input
                  className="input"
                  type="password"
                  name="cpassword"
                  autoComplete="off"
                  placeholder="Confirm your password"
                  value={credentials.cpassword}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <p className="is-size-6 my-4 ">Already a Member?<Link to="/login"> Login</Link></p>
            <div className="field">
              <div className="control is-flex is-align-items-center">
                <div className="checkbox-wrapper-31">
                  <input type="checkbox" onChange={handleConfirmationChecked} />
                  <svg viewBox="0 0 35.6 35.6">
                    <circle className="background" cx="17.8" cy="17.8" r="17.8"></circle>
                    <circle className="stroke" cx="17.8" cy="17.8" r="14.37"></circle>
                    <polyline className="check" points="11.78 18.12 15.55 22.23 25.17 12.87"></polyline>
                  </svg>
                </div>
                <span className="ml-3 is-size-6">
                  Agree to our terms and Agreements.
                </span>
              </div>
            </div>
            <div className="field my-4">
              <div className="control">
                <button
                  className="button is-danger font-fam-poppins"
                  type="submit"
                  disabled={!confirmationChecked}
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};




export default Signup;
