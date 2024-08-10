import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Cookies from "js-cookies";

import style from "./style.module.css";

const SEOMeta = () => (
      <Helmet>
        <title>Login to explore</title>
        <meta name="description" content="Login to Learning react app" />
      </Helmet>
)

const Login = () => {
  if (Cookies.getItem("token") !== null) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      {/* <SEOMeta /> */}
      <div className={style.loginWrapper}>
        <h1>Login</h1>
      </div>
    </>
  );
};

export default Login;
