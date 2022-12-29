import { useState } from "react";
import { Navigate } from "react-router-dom";
export default function Signin(props) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleClick = () => {
    if (userName && password) {
      props.setUser(userName);
      console.log("login successful");
    } else {
      console.log("login failed");
    }
  };
  if (props.user) {
    return <Navigate to="/" />;
  } else {
    return (
      <div>
        <h3> Signin </h3>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="enter userName"
        />{" "}
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="enter password"
        />{" "}
        <br />
        <button onClick={handleClick}> Submit</button>
      </div>
    );
  }
}
