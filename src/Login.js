import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "./firebase";
import "./Login.css";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signin = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Facebook_f_Logo_%28with_gradient%29.svg/1920px-Facebook_f_Logo_%28with_gradient%29.svg.png"
          alt="Logo"
        />

        <img
          src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo-700x394.png"
          alt="facebook"
        />
      </div>
      <Button type="submit" onClick={signin}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
