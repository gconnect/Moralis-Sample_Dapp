import React, { useEffect } from 'react';
import './App.css';
import { useMoralis } from "react-moralis";

function App() {
  const { authenticate, isAuthenticated, logout } = useMoralis();

  useEffect(() => {
    if (isAuthenticated) {
        // add your logic here
        console.log(isAuthenticated)
    }
}, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate()
          .then(function (user) {
            console.log(user.get("ethAddress"));
            console.log("address")

          })
          .catch(function (error) {
            console.log(error);
            console.log("error")
          });
      }
    }

    const socialLogin = async () => {
      if (!isAuthenticated) {
        await authenticate({
          provider: "web3Auth",
          clientId: "BOQL71_Yr-3EZT-NChUACM22rZdQjGmwM1frb0Qq76uWYIWd42xfIcZktiyGIY3eZO1nkDJn0rr_77ThT5sgzHM",
        })
          .then(function (user) {
            console.log(user.get("ethAddress"));
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    };

    const logOut = async () => {
      await logout();
      console.log("logged out");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Moralis Auths</h1>
       <button onClick={login}>{isAuthenticated ? "Logged In" : "Moralis Metamask Login"}
      </button>
       <button onClick={socialLogin}>{ isAuthenticated ? "Logged in with social aacount" : "Social Login"}</button>
      <button onClick={logOut}>Logout</button>
      </header>
    </div>
  );
}

export default App;
