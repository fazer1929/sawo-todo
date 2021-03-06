import React, { useEffect, useRef } from "react";
import { Redirect, useHistory } from "react-router";
import Sawo from "sawo";
import { useAuth } from "../../AuthContext";
import "./SawoAuth.css";

function SawoAuth() {
  const { currentUser, loggedin } = useAuth();
  const history = useHistory();
  const containerRef = useRef();

  useEffect(() => {
    (async () => {
      console.log(currentUser);
      var config = {
        containerID: containerRef.current.id,
        identifierType: "email",
        apiKey: `${process.env.REACT_APP_SAWO_API}`,
        onSuccess: (payload) => {
          loggedin(payload.user_id);
        },
      };
      let sawo = await new Sawo(config);
      sawo.showForm();
      console.log(currentUser);
      if (currentUser) {
        history.push("/");
      }
    })();
  }, [currentUser]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login To Use The App</h1>
      <div
        id="sawo-container"
        ref={containerRef}
        className="outerContainer"
      ></div>
    </div>
  );
}

export default SawoAuth;
