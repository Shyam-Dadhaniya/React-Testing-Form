import "./App.css";
import { useState } from "react";
import validator from "validator";
function App() {
  const [signupInput, setSignupInput] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    setSignupInput({
      ...signupInput,
      [event.target.name]: event.target.value,
    });
    console.log({ signupInput });
  };

  const handleclick = (event) => {
    event.preventDefault();
    console.log(signupInput);
    if (!validator.isEmail(signupInput.email)) {
      return setError("Invalid email");
    } else if (signupInput.password.length < 5) {
      // console.log();
      return setError("Password must be at least 5 characters");
    } else if (signupInput.password !== signupInput.confirmPassword) {
      return setError("Passwords do not match");
    }
  };
  return (
    <div className="container my-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={signupInput.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={signupInput.password}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            value={signupInput.confirmPassword}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-danger">{error}</p>}
        <button className="btn btn-primary" type="submit" onClick={handleclick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
