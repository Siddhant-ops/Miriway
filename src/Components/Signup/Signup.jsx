import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Images/Miriway-small.svg";
import "./Signup.scss";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Area, setArea] = useState("");
  const [city, setCity] = useState("");
  const [areaState, setAreaState] = useState("");
  const [role, setRole] = useState("");
  const [rate, setRate] = useState("");

  const inputChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "Email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "area":
        setArea(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "state":
        setAreaState(e.target.value);
        break;
      case "role":
        setRole(e.target.value);
        break;
      case "rate":
        setRate(e.target.value);
        break;

      default:
        break;
    }
  };

  return (
    <div className="signup">
      <img src={Logo} alt="" />
      <h2>Sign Up To Miriway</h2>
      <form method="post">
        <input
          type="text"
          onChange={inputChange}
          name="name"
          placeholder="Your Name"
        />
        <input
          onChange={inputChange}
          type="text"
          name="Email"
          placeholder="Your E-mail"
        />
        <input
          type="password"
          onChange={inputChange}
          name="password"
          placeholder="Password"
        />
        <input
          onChange={inputChange}
          type="text"
          name="area"
          placeholder="Enter your Area"
        />
        <input
          type="text"
          onChange={inputChange}
          name="city"
          placeholder="Enter your City"
        />
        <input
          onChange={inputChange}
          type="text"
          name="state"
          placeholder="Enter your State"
        />
        <input
          type="text"
          onChange={inputChange}
          name="role"
          placeholder="Driver or Shop"
        />
        <input
          onChange={inputChange}
          type="text"
          name="rate"
          placeholder="Price/km"
        />
        <button className="primary__btn">Sign Up</button>
      </form>
      <h5>
        Already have an account?{" "}
        <span>
          <Link to="/login">Login</Link>
        </span>
      </h5>
    </div>
  );
};

export default Signup;
