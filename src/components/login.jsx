import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "./login.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Registration.css";
const Login = () => {
  const [popupStyle, showPopup] = useState("hide");
  const popup = () => {
    showPopup("login-pop");
    setTimeout(() => showPopup("hide"), 3000);
  };
  return (
    <>
      <div className="cover">
        <h1>Login</h1>

        <label for="email">email</label>
        <input
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label for="password">password</label>
        <input
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <div className="login-btn" onClick={popup}>
          Login
        </div>

        <p className="text">Or login using</p>

        <div className="alt-login">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100px",
              alignItems: "center",
              color: "black",
              backgroundColor: "aliceblue",
            }}
          >
            <FontAwesomeIcon
              icon={faGoogle}
              size="2x"
              style={{ marginRight: "10px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100px",
              alignItems: "center",
              color: "black",
              backgroundColor: "aliceblue",
            }}
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </div>

          <div className={popupStyle}>
            <h3>Login Failed</h3>
          </div>
        </div>
        <Link className="button111" to="/RegistrationPage">
            <button>Registration</button>
</Link>
      </div>
    </>
  );
};
export default Login;
