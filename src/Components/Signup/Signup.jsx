import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import db, { auth } from "../../Firebase-services/firebase-main";
import Logo from "../../Assets/Images/Miriway-small.svg";
import "./Signup.scss";

const Signup = () => {
  const history = useHistory();

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

  var disableButton =
    name === "" ||
    email === "" ||
    password === "" ||
    Area === "" ||
    city === "" ||
    areaState === "" ||
    role === "";

  const authSignup = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        if (user) {
          var shopKeeper;
          if (role.toLowerCase().startsWith("d")) {
            shopKeeper = false;
          } else {
            shopKeeper = true;
          }
          db.collection("users").add({
            name: name,
            email: email,
            area: Area,
            city: city,
            state: areaState,
            shopkeeper: shopKeeper,
            rate: rate,
          });
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup">
      <img src={Logo} alt="" />
      <h2>Sign Up To Miriway</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authSignup();
        }}
      >
        <input
          type="text"
          onChange={inputChange}
          name="name"
          value={name}
          placeholder="Your Name"
        />
        <input
          onChange={inputChange}
          type="email"
          name="Email"
          value={email}
          placeholder="Your E-mail"
        />
        <input
          type="password"
          onChange={inputChange}
          name="password"
          value={password}
          placeholder="Password"
        />
        <input
          onChange={inputChange}
          type="text"
          name="area"
          value={Area}
          placeholder="Enter your Area"
        />
        <input
          type="text"
          onChange={inputChange}
          name="city"
          value={city}
          placeholder="Enter your City"
        />
        <input
          onChange={inputChange}
          type="text"
          name="state"
          value={areaState}
          placeholder="Enter your State"
        />
        <input
          type="text"
          onChange={inputChange}
          name="role"
          value={role}
          placeholder="Driver or Shop"
        />
        {/* <div className="role">
          <input type="radio" name="role" checked={console.log("Driver")} />
          Driver
          <input type="radio" name="role" checked={console.log("Shop")} />
          Shop
        </div> */}
        <input
          onChange={inputChange}
          disabled={role.toLowerCase().startsWith("s")}
          type="text"
          name="rate"
          value={rate}
          placeholder="Driver Price / Km"
        />
        <button type="submit" disabled={disableButton} className="primary__btn">
          Sign Up
        </button>
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
