import React from 'react';
import { useHistory } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import SplashScreen from "src/components/SplashScreen";

const LoginView = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  const history = useHistory();

  React.useEffect(() => {
    async function checkUser() {
      if (isAuthenticated) {
        await history.push("/explore");
      } else {
        loginWithRedirect();
      }
    }

    checkUser();                            // called async checkUser()
  }, [isAuthenticated, loginWithRedirect]); // added loginWithRedirect

  return <SplashScreen />;
}

export default LoginView;
