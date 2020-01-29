import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./firebase";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/Admin");
      } catch (error){
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/Admin" />;
  }

  return (
    <header class="App-header2 fon">
      <div className="rounded"> 
      <form class="box" action="index.html" onSubmit={handleLogin} >
  <h1>Login</h1>
  <input name="email" type="email" placeholder="Email"/>
  <input name="password" type="password" placeholder="Password" />
  <input type="submit" name="" value="Login"/>
</form>
      </div>

    </header>
  );
};

export default withRouter(Login);